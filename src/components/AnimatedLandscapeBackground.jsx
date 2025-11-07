import React, { useEffect, useState } from "react";

const AnimatedLandscapeBackground = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  console.log("animated background done");

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / innerWidth;
      const y = (e.clientY - innerHeight / 2) / innerHeight;
      setOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden w-full h-full"
      style={{ overflowX: "hidden" }}
    >
      <div
        className="absolute inset-0 w-full h-full transition-transform duration-150 ease-out"
        style={{
          transform: `translate(${offset.x * 8}px, ${offset.y * 4}px)`,
        }}
      >
        {/* LIGHT MODE */}
        {/* LIGHT MODE */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="block w-full h-full object-cover dark:hidden"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1440 800"
        >
          <defs>
            <linearGradient id="dayGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#faf3e0" />
              <stop offset="100%" stopColor="#dcefe3" />
            </linearGradient>
          </defs>

          <rect width="1440" height="800" fill="url(#dayGradient)" />
          <circle cx="800" cy="120" r="60" fill="#fbd46d" />
          <path
            d="M0 600 Q 360 550 720 600 T 1440 600 L1440 800 L0 800Z"
            fill="#a8d8a5"
          />
          <path
            d="M0 660 Q 360 610 720 660 T 1440 660 L1440 800 L0 800Z"
            fill="#7cc47f"
          />
          <path
            d="M0 720 Q 360 670 720 720 T 1440 720 L1440 800 L0 800Z"
            fill="#5fa469"
          />
        </svg>

        {/* DARK MODE */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="hidden dark:block w-full h-full object-cover"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1440 800"
        >
          <rect width="1440" height="800" fill="#090909" />
          <circle cx="800" cy="120" r="50" fill="#f7e7b5" />
          <path
            d="M0 600 Q 360 550 720 600 T 1440 600 L1440 800 L0 800Z"
            fill="#0f0f0f"
          />
          <path
            d="M0 660 Q 360 610 720 660 T 1440 660 L1440 800 L0 800Z"
            fill="#141414"
          />
          <path
            d="M0 720 Q 360 670 720 720 T 1440 720 L1440 800 L0 800Z"
            fill="#1a1a1a"
          />
          <circle cx="200" cy="100" r="2" fill="white" opacity="0.8" />
          <circle cx="400" cy="150" r="1.5" fill="white" opacity="0.7" />
          <circle cx="800" cy="80" r="1.8" fill="white" opacity="0.8" />
          <circle cx="1000" cy="200" r="1.2" fill="white" opacity="0.6" />
          <circle cx="1200" cy="50" r="1.4" fill="white" opacity="0.75" />
        </svg>
      </div>
    </div>
  );
};

export default AnimatedLandscapeBackground;
