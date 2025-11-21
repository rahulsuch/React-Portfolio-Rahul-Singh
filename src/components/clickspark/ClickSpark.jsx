import React, { useState } from "react";
import { motion } from "framer-motion";

const ClickSpark = ({
  children,
  className = "",

  // Core config (like react-bits)
  sparkColor,
  sparkSize = 8,
  sparkRadius = 20,
  sparkCount = 8,
  duration = 400,

  // Feature toggles
  multiColor = false,
  glow = false,
  randomBurst = false,
  shape = "circle", // circle | square | triangle

  // Always enabled
  themeAware = true,
}) => {
  const [sparks, setSparks] = useState([]);

  const getThemeColor = () => {
    if (!themeAware && sparkColor) return sparkColor;
    if (sparkColor) return sparkColor;

    // auto mode — reads system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "#fff"
      : "#000";
  };

  const randomColor = () => {
    const colors = [
      "#ff4d4d",
      "#4dff91",
      "#4dd2ff",
      "#ffcc4d",
      "#d64dff",
      "#ffa64d",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const getSparkColor = () =>
    multiColor ? randomColor() : getThemeColor();

  const getShapeStyles = () => {
    switch (shape) {
      case "square":
        return "rounded-none";
      case "triangle":
        // triangles done via CSS borders
        return "w-0 h-0 border-l-4 border-r-4 border-b-8 bg-transparent";
      default:
        return "rounded-full"; // circle
    }
  };

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const count = randomBurst ? sparkCount + Math.floor(Math.random() * 6) : sparkCount;

    const newSparks = Array.from({ length: count }).map((_, i) => ({
      id: Date.now() + "-" + i,
      x,
      y,
      angle: (i * 360) / count,
      distance: sparkRadius + Math.random() * 12,
      color: getSparkColor(),
    }));

    setSparks((prev) => [...prev, ...newSparks]);

    setTimeout(() => {
      setSparks((prev) => prev.slice(newSparks.length));
    }, duration);
  };

  return (
    <div
      className={`relative overflow-visible ${className}`}
      onClick={handleClick}
    >
      {children}

      {sparks.map((spark) => (
        <motion.span
          key={spark.id}
          className={`absolute pointer-events-none ${getShapeStyles()}`}
          style={{
            left: spark.x,
            top: spark.y,
            width: shape === "triangle" ? 0 : sparkSize,
            height: shape === "triangle" ? 0 : sparkSize,
            background: shape === "triangle" ? "transparent" : randomColor,
            borderBottomColor: shape === "triangle" ? spark.color : getSparkColor,
            boxShadow: glow ? `0 0 8px ${spark.color}` : "none",
          }}
          initial={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          animate={{
            opacity: 0,
            scale: 0.4,
            x: Math.cos((spark.angle * Math.PI) / 180) * spark.distance,
            y: Math.sin((spark.angle * Math.PI) / 180) * spark.distance,
          }}
          transition={{ duration: duration / 1000, ease: "easeOut" }}
        />
      ))}
    </div>
  );
};

export default ClickSpark;
