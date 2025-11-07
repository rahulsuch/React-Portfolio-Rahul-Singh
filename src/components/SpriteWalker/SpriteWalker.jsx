import React, { useEffect, useRef, useState } from "react";

export default function SpriteWalker() {
  const canvasRef = useRef(null);
  const requestRef = useRef(null);
  const position = useRef({ x: 200, y: 200 });
  const target = useRef({ x: 200, y: 200 });
  const direction = useRef(1);
  const [idle, setIdle] = useState(false);
  const imagesRef = useRef([]);
  const frame = useRef(0);

  const speed = 0.8
  ;
  const totalFrames = 23;
  const scale = 0.08;
  const idleDelay = 400; // ms before idle
  const storageKey = "spriteWalkerPosition";

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

  // ⏱️ Debounced idle detection
  const setIdleDebounced = debounce(() => setIdle(true), idleDelay);

  // 💾 Save position (throttled to avoid frequent writes)
  const savePosition = throttle((pos) => {
    localStorage.setItem(storageKey, JSON.stringify(pos));
  }, 500);

  useEffect(() => {
    // 🧩 Load last position from localStorage
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      const { x, y } = JSON.parse(saved);
      position.current = { x, y };
      target.current = { x, y };
    }

    // 🖼️ Load sprite frames
    const loadImages = async () => {
      const frames = [];
      for (let i = 0; i < totalFrames; i++) {
        const img = new Image();
        img.src = `/assets/sprites/0_Necromancer_of_the_Shadow_Walking_${String(
          i
        ).padStart(3, "0")}.png`;
        await new Promise((res) => (img.onload = res));
        frames.push(img);
      }
      imagesRef.current = frames;
      animate();
    };

    loadImages();

    // 🖱️ Track mouse movement
    const handleMouseMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
      setIdle(false);
      setIdleDebounced(); // restart idle timer
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);
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
    if (!idle && distance > 1) {
      const angle = Math.atan2(dy, dx);
      position.current.x += Math.cos(angle) * speed;
      position.current.y += Math.sin(angle) * speed;
      direction.current = dx > 0 ? 1 : -1;
      frame.current = (frame.current + 1) % totalFrames;
      savePosition(position.current); // 💾 Save occasionally
    }

    const currentImg = imgFrames[Math.floor(frame.current)];
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
      width={window.innerWidth}
      height={window.innerHeight}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 60,
      }}
    />
  );
}
