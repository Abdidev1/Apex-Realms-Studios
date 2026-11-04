import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeCanvasProps {
  currentSection?: string;
}

export default function ThreeCanvas({ currentSection = 'hero' }: ThreeCanvasProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Create Scene, Camera, Renderer
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      45,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.z = 16;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    mount.appendChild(renderer.domElement);

    // Dynamic Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.5);
    dirLight1.position.set(5, 12, 10);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xa78bfa, 2.0);
    dirLight2.position.set(-8, -4, 6);
    scene.add(dirLight2);

    // Group 1: Floating Shards (Hero & Sections)
    const shardsGroup = new THREE.Group();
    scene.add(shardsGroup);

    // Glass Material with glossy specular reflections
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.15,
      roughness: 0.1,
      transmission: 0.45,
      ior: 1.5,
      reflectivity: 0.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      transparent: true,
      opacity: 0.94,
      side: THREE.DoubleSide,
    });

    // Create 3D triangular pyramids / prisms matching the video exactly
    const geomPyramid = new THREE.ConeGeometry(1.5, 3.6, 3);
    const geomTallPrism = new THREE.CylinderGeometry(0.1, 1.3, 4.2, 3);
    const geomFlatTriangle = new THREE.CylinderGeometry(1.7, 1.7, 0.28, 3);

    const shardMeshes: {
      mesh: THREE.Mesh;
      basePos: THREE.Vector3;
      rotSpeed: THREE.Vector3;
      phase: number;
    }[] = [];

    // Distinct positions matching the video screenshot image_0300f6b0.png
    const shardPositions = [
      { x: -7.5, y: 4.8, z: 1, scale: 1.2, geom: geomPyramid, rot: [0.6, 0.4, -0.3] },
      { x: -4.8, y: 6.2, z: -2, scale: 0.9, geom: geomFlatTriangle, rot: [1.2, -0.5, 0.7] },
      { x: -9.8, y: 1.2, z: 2, scale: 1.4, geom: geomTallPrism, rot: [-0.4, 1.0, 0.2] },
      { x: 7.2, y: 5.5, z: 0, scale: 1.3, geom: geomPyramid, rot: [0.3, -0.8, 0.5] },
      { x: 5.5, y: 3.8, z: 2, scale: 1.5, geom: geomTallPrism, rot: [-0.6, 0.3, -0.4] },
      { x: 10.2, y: 2.2, z: 1, scale: 1.0, geom: geomFlatTriangle, rot: [0.8, 1.2, -0.3] },
      { x: -5.8, y: -3.2, z: 3, scale: 1.6, geom: geomPyramid, rot: [0.9, 0.6, -0.5] },
      { x: 4.2, y: -4.2, z: 2, scale: 1.4, geom: geomFlatTriangle, rot: [-0.5, -0.9, 0.3] },
      { x: 8.8, y: -1.8, z: -1, scale: 1.1, geom: geomTallPrism, rot: [0.7, 0.4, -0.9] },
      { x: -11.0, y: -3.8, z: 3, scale: 1.7, geom: geomTallPrism, rot: [0.5, -0.3, 0.6] },
      { x: 11.5, y: -3.0, z: 2, scale: 1.5, geom: geomPyramid, rot: [-0.7, 0.5, -0.2] },
      { x: 0.0, y: 7.2, z: -3, scale: 1.0, geom: geomFlatTriangle, rot: [1.0, -0.2, 0.4] },
    ];

    shardPositions.forEach((p, idx) => {
      const mesh = new THREE.Mesh(p.geom, glassMaterial);
      mesh.position.set(p.x, p.y, p.z);
      mesh.scale.setScalar(p.scale);
      mesh.rotation.set(p.rot[0], p.rot[1], p.rot[2]);
      shardsGroup.add(mesh);

      shardMeshes.push({
        mesh,
        basePos: new THREE.Vector3(p.x, p.y, p.z),
        rotSpeed: new THREE.Vector3(
          (Math.random() - 0.5) * 0.006,
          (Math.random() - 0.5) * 0.009,
          (Math.random() - 0.5) * 0.006
        ),
        phase: idx * 0.5,
      });
    });

    // Mouse Tracking Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      targetMouseX = (e.clientX / innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Scroll tracking
    let scrollY = window.scrollY;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Resize Handler
    const handleResize = () => {
      if (!mount) return;
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      camera.position.x = mouseX * 1.5;
      camera.position.y = -mouseY * 1.2;
      camera.lookAt(0, 0, 0);

      // Rotate shards
      shardMeshes.forEach((item) => {
        item.mesh.rotation.x += item.rotSpeed.x;
        item.mesh.rotation.y += item.rotSpeed.y;
        item.mesh.rotation.z += item.rotSpeed.z;

        const floatOffset = Math.sin(elapsedTime * 0.9 + item.phase) * 0.35;
        item.mesh.position.y = item.basePos.y + floatOffset;
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      geomPyramid.dispose();
      geomTallPrism.dispose();
      geomFlatTriangle.dispose();
      glassMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="pointer-events-none fixed inset-0 z-10 h-full w-full overflow-hidden"
      aria-hidden="true"
    />
  );
}
