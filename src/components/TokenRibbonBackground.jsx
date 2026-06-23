import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function TokenRibbonBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    // Don't initialize Three.js if the container is hidden or not present
    if (!container || window.innerWidth < 768) return;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 6);

    // 2. Renderer Setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 3. Cinematic Cyberpunk Lights
    const ambientLight = new THREE.AmbientLight(0xf8f9ff, 2.5);
    scene.add(ambientLight);

    const purpleLight = new THREE.DirectionalLight(0x7c3aed, 3.5);
    purpleLight.position.set(5, 3, 2);
    scene.add(purpleLight);

    const cyanLight = new THREE.DirectionalLight(0x3b82f6, 2.0);
    cyanLight.position.set(-5, -3, 2);
    scene.add(cyanLight);

    // 4. Constructing the Infinite Token Ribbon
    const geometry = new THREE.TorusKnotGeometry(1.6, 0.45, 120, 16, 2, 3);

    const material = new THREE.MeshStandardMaterial({
      color: 0xede9fe,
      emissive: 0x7c3aed,
      metalness: 0.85,
      roughness: 0.25,
      wireframe: true,
      transparent: true,
      opacity: 0.30,
    });

    const ribbonMesh = new THREE.Mesh(geometry, material);
    ribbonMesh.position.set(1.2, 0, 0);
    scene.add(ribbonMesh);

    // 5. Scroll Interaction Path Mapping
    let targetScrollPercent = 0;
    let targetX = 1.2;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      targetScrollPercent = maxScroll > 0 ? scrollY / maxScroll : 0;
      targetX = 1.2 - targetScrollPercent * 2.6;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // 6. Kinetic Frame Animation Loop
    const clock = new THREE.Clock();
    let currentScrollPercent = 0;
    let animationFrameId;

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      currentScrollPercent += (targetScrollPercent - currentScrollPercent) * 0.04;
      ribbonMesh.position.x += (targetX - ribbonMesh.position.x) * 0.04;

      ribbonMesh.rotation.y = elapsed * 0.15 + (currentScrollPercent * Math.PI);
      ribbonMesh.rotation.x = elapsed * 0.08 + (currentScrollPercent * 0.5);
      ribbonMesh.rotation.z = elapsed * 0.05;

      material.opacity = 0.35 + Math.sin(elapsed * 2.0) * 0.1;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <>
      {/* Dynamic media query to hide the element on mobile screens (< 768px) */}
      <style>{`
        @media (max-width: 767px) {
          .token-ribbon-container {
            display: none !important;
          }
        }
      `}</style>
      
      <div
        ref={containerRef}
        className="token-ribbon-container"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
    </>
  );
}