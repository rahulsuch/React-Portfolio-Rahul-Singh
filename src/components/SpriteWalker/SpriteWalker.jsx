import React, { useEffect, useRef, useState } from "react";

export default function SpriteWalker() {
  const canvasRef = useRef(null);
  const requestRef = useRef(null);
  const position = useRef({ x: 200, y: 200 });
  const target = useRef({ x: 200, y: 200 });
  const direction = useRef(1);
  const idleRef = useRef(false);
  const [idle, setIdle] = useState(false);
  const imagesRef = useRef([]);
  const frame = useRef(0);

  const speed = 0.8;
  const totalFrames = 23;
  const scale = 0.08;
  const idleDelay = 400; // ms before idle
  const storageKey = "spriteWalkerPosition";

  const assetPrefix = (import.meta.env.VITE_IMAGE_SRC || "/assets/").endsWith("/")
    ? (import.meta.env.VITE_IMAGE_SRC || "/assets/")
    : (import.meta.env.VITE_IMAGE_SRC || "/assets/") + "/";

  // 🧠 Debounce helper
  const debounce = (fn, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn(...args), delay);
    };
  };

  // 🧠 Throttle helper (for localStorage writes)
  const throttle = (fn, limit) => {
    let inThrottle;
    return (...args) => {
      if (!inThrottle) {
        fn(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  };

  const updateIdle = (isIdle) => {
    idleRef.current = isIdle;
    setIdle(isIdle);
  };

  // ⏱️ Debounced idle detection
  const setIdleDebounced = debounce(() => updateIdle(true), idleDelay);

  // 💾 Save position (throttled to avoid frequent writes)
  const savePosition = throttle((pos) => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(pos));
    } catch {
      // Ignore quota/access errors
    }
  }, 500);

  useEffect(() => {
    // 🧩 Load last position from localStorage
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const { x, y } = JSON.parse(saved);
        if (typeof x === "number" && typeof y === "number") {
          position.current = { x, y };
          target.current = { x, y };
        }
      }
    } catch {
      // Ignore parse errors
    }

    let isMounted = true;

    // 🖼️ Load sprite frames in parallel
    const loadImages = async () => {
      const loadPromises = Array.from({ length: totalFrames }, (_, i) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = `${assetPrefix}sprites/0_Necromancer_of_the_Shadow_Walking_${String(
            i
          ).padStart(3, "0")}.png`;
          img.onload = () => resolve(img);
          img.onerror = () => resolve(null);
        });
      });

      const loadedFrames = (await Promise.all(loadPromises)).filter(Boolean);
      if (isMounted) {
        imagesRef.current = loadedFrames;
        animate();
      }
    };

    loadImages();

    // 🖱️ Track mouse movement
    const handleMouseMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
      updateIdle(false);
      setIdleDebounced();
    };

    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      isMounted = false;
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const imgFrames = imagesRef.current;
    if (imgFrames.length === 0) {
      requestRef.current = requestAnimationFrame(animate);
      return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const dx = target.current.x - position.current.x;
    const dy = target.current.y - position.current.y;
    const distance = Math.hypot(dx, dy);

    // 🏃 Move towards cursor if not idle
    if (!idleRef.current && distance > 1) {
      const angle = Math.atan2(dy, dx);
      position.current.x += Math.cos(angle) * speed;
      position.current.y += Math.sin(angle) * speed;
      direction.current = dx > 0 ? 1 : -1;
      frame.current = (frame.current + 1) % imgFrames.length;
      savePosition(position.current);
    }

    const currentImg = imgFrames[Math.floor(frame.current) % imgFrames.length];
    if (currentImg) {
      ctx.save();
      ctx.translate(position.current.x, position.current.y);
      ctx.scale(direction.current * scale, scale);
      ctx.drawImage(
        currentImg,
        -currentImg.width / 2,
        -currentImg.height / 2,
        currentImg.width,
        currentImg.height
      );
      ctx.restore();
    }

    requestRef.current = requestAnimationFrame(animate);
  };

  return (
    <canvas
      ref={canvasRef}
      width={typeof window !== "undefined" ? window.innerWidth : 800}
      height={typeof window !== "undefined" ? window.innerHeight : 600}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 60,
      }}
    />
  );
}
