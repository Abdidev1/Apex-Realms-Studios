import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Sparkles, ZoomIn } from 'lucide-react';
import { playClick } from '../utils/audio';

export default function PresentationSphereSection() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isExploded, setIsExploded] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const camera = new THREE.PerspectiveCamera(
      45,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x5a1df5, 3.5, 35);
    pointLight.position.set(0, 0, 10);
    scene.add(pointLight);

    // Create Sphere of Realm Cards
    const sphereGroup = new THREE.Group();
    scene.add(sphereGroup);

    const cardGeom = new THREE.PlaneGeometry(1.6, 1.0);
    const colors = [
      0x5a1df5, 0x34f546, 0x00d8ea, 0xff0055, 0xffaa00, 0x9333ea, 0x3b82f6, 0x10b981,
    ];

    const cardData: {
      mesh: THREE.Mesh;
      spherePos: THREE.Vector3;
      explodePos: THREE.Vector3;
      rot: THREE.Euler;
    }[] = [];

    const totalCards = 56;
    const radius = 5.2;

    for (let i = 0; i < totalCards; i++) {
      const phi = Math.acos(-1 + (2 * i) / totalCards);
      const theta = Math.sqrt(totalCards * Math.PI) * phi;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      const color = colors[i % colors.length];
      const mat = new THREE.MeshBasicMaterial({
        color,
        side: THREE.DoubleSide,
      });

      const mesh = new THREE.Mesh(cardGeom, mat);
      mesh.position.set(x, y, z);
      mesh.lookAt(0, 0, 0);

      const rot = mesh.rotation.clone();
      const spherePos = new THREE.Vector3(x, y, z);
      const explodePos = spherePos.clone().multiplyScalar(2.2);

      sphereGroup.add(mesh);
      cardData.push({ mesh, spherePos, explodePos, rot });
    }

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      targetMouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      targetMouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    mount.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      sphereGroup.rotation.y = time * 0.35 + mouseX * 1.5;
      sphereGroup.rotation.x = mouseY * 0.8;

      cardData.forEach((item) => {
        const targetPos = isExploded ? item.explodePos : item.spherePos;
        item.mesh.position.lerp(targetPos, 0.06);
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mount.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      cardGeom.dispose();
      renderer.dispose();
    };
  }, [isExploded]);

  return (
    <section className="relative z-20 py-24 px-6 md:px-12 bg-black text-white select-none overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#34f546] font-mono text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles size={14} />
            <span>Interactive 3D Universe</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-body tracking-tight text-white">
            A Galaxy of Realms Engineered for Millions
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base font-body">
            Drag to orbit the 3D game sphere or toggle exploded view to inspect our live multiplayer instances.
          </p>
        </div>

        {/* 3D WebGL Canvas Container */}
        <div
          ref={mountRef}
          className="relative w-full aspect-[16/9] max-h-[640px] rounded-3xl overflow-hidden cursor-grab active:cursor-grabbing border border-white/10 shadow-2xl"
        >
          {/* Controls overlay */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white z-10 pointer-events-auto">
            <button
              onClick={() => {
                playClick();
                setIsExploded(!isExploded);
              }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-xs sm:text-sm font-bold tracking-tight shadow-lg transition-all cursor-pointer hover:bg-slate-200"
            >
              <ZoomIn size={14} />
              <span>{isExploded ? 'Reassemble 3D Sphere' : 'Explode Realm View'}</span>
            </button>

            <span className="text-xs font-mono text-white/60 bg-black/50 px-3 py-1 rounded-full border border-white/10">
              Real-time WebGL Engine
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
