import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const AnimatedBackground = () => {
  const mountRef = useRef(null);
  const animationFrameIdRef = useRef(null); // to store animation ID

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 20;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Create star texture
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");

    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, "rgba(0, 100, 255, 1)");
    gradient.addColorStop(0.6, "rgba(0, 100, 255, 0.3)");
    gradient.addColorStop(1, "rgba(0, 100, 255, 0)");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);

    const starTexture = new THREE.CanvasTexture(canvas);
    const stars = [];
    const starCount = 1300;

    for (let i = 0; i < starCount; i++) {
      const material = new THREE.SpriteMaterial({
        map: starTexture,
        transparent: true,
      });
      const sprite = new THREE.Sprite(material);

      const x = (Math.random() - 0.5) * 100;
      const y = (Math.random() - 0.5) * 100;
      const z = (Math.random() - 0.5) * 40;
      sprite.position.set(x, y, z);

      const baseScale = 0.3 + Math.random() * 0.4;
      sprite.scale.setScalar(baseScale);

      scene.add(sprite);
      stars.push({ sprite, baseScale, depth: z, material });
    }

    const animate = () => {
      const time = Date.now() * 0.001;

      stars.forEach(({ sprite, baseScale, depth }) => {
        const speed = 0.01 + Math.abs(depth) * 0.0005;
        sprite.position.x += speed;
        sprite.position.y += speed * 0.7;

        if (sprite.position.x > 50) sprite.position.x = -50;
        if (sprite.position.y > 50) sprite.position.y = -50;

        const flickerSpeed = 1 + Math.abs(depth) * 0.2;
        const opacity = 0.4 + 0.4 * Math.sin(time * flickerSpeed + depth);
        sprite.material.opacity = THREE.MathUtils.clamp(opacity, 0.1, 0.8);

        const scaleVariation = 0.05 * Math.sin(time * flickerSpeed + depth);
        sprite.scale.setScalar(baseScale + scaleVariation);
      });

      renderer.render(scene, camera);
      animationFrameIdRef.current = requestAnimationFrame(animate);
    };

    animationFrameIdRef.current = requestAnimationFrame(animate);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameIdRef.current);
      window.removeEventListener("resize", handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }

      stars.forEach(({ sprite, material }) => {
        material.dispose();
        scene.remove(sprite);
      });

      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 -z-10 pointer-events-none" />;
};

export default AnimatedBackground;