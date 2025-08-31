import React, { useRef, useEffect } from "react";

const AnimatedBackground = () => {
  const mountRef = useRef(null);
  const animationFrameIdRef = useRef(null);

  useEffect(() => {
    let THREE;
    let renderer, scene, camera;
    let stars = [];
    let lastTime = 0;
    let isAnimating = true;

    const init = async () => {
      THREE = await import("three"); // ✅ load three only when needed

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 20;

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);

      if (mountRef.current) {
        mountRef.current.appendChild(renderer.domElement);
      }

      // 🌟 Create star texture
      const canvas = document.createElement("canvas");
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext("2d");

      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, "rgba(68, 0, 255, 1)");
      gradient.addColorStop(0.6, "rgba(239, 247, 252, 0.73)");
      gradient.addColorStop(1, "rgba(255, 51, 0, 0)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);

      const starTexture = new THREE.CanvasTexture(canvas);

      const starCount = 800; // ⚡ reduced from 1300
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

      const updateStars = (time) => {
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
      };

      const animate = (time) => {
        if (!isAnimating) return;

        const delta = (time - lastTime) / 1000; // seconds since last frame
        if (delta >= 1 / 30) { // ⚡ cap at 30fps
          lastTime = time;
          updateStars(time * 0.001);
          renderer.render(scene, camera);
        }

        animationFrameIdRef.current = requestAnimationFrame(animate);
      };

      animationFrameIdRef.current = requestAnimationFrame(animate);

      // 📏 Handle resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener("resize", handleResize);

      // 💤 Pause when tab is hidden
      const handleVisibilityChange = () => {
        if (document.hidden) {
          isAnimating = false;
          cancelAnimationFrame(animationFrameIdRef.current);
        } else {
          isAnimating = true;
          lastTime = performance.now();
          animationFrameIdRef.current = requestAnimationFrame(animate);
        }
      };
      document.addEventListener("visibilitychange", handleVisibilityChange);

      // 🧹 Cleanup
      return () => {
        isAnimating = false;
        cancelAnimationFrame(animationFrameIdRef.current);
        window.removeEventListener("resize", handleResize);
        document.removeEventListener("visibilitychange", handleVisibilityChange);

        if (mountRef.current && renderer.domElement) {
          mountRef.current.removeChild(renderer.domElement);
        }

        stars.forEach(({ sprite, material }) => {
          material.dispose();
          scene.remove(sprite);
        });

        renderer.dispose();
      };
    };

    init();

    return () => {
      cancelAnimationFrame(animationFrameIdRef.current);
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 -z-10 pointer-events-none" />;
};

export default AnimatedBackground;