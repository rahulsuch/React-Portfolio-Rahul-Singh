import React, { useState } from "react";
import { motion } from "framer-motion";

const ClickSpark = ({ children, className = "" }) => {
  const [sparks, setSparks] = useState([]);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // create 8 evenly spaced sparks (45° apart)
    const newSparks = Array.from({ length: 8 }).map((_, i) => ({
      id: Date.now() + "-" + i,
      x,
      y,
      angle: (i * 360) / 8, // evenly spaced around circle
      distance: 35 + Math.random() * 20,
    }));

    setSparks((prev) => [...prev, ...newSparks]);

    // cleanup after animation
    setTimeout(() => {
      setSparks((prev) => prev.slice(newSparks.length));
    }, 600);
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
          className="absolute w-2 h-2 bg-black rounded-full pointer-events-none"
          style={{ left: spark.x, top: spark.y }}
          initial={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          animate={{
            opacity: 0,
            scale: 0.5,
            x: Math.cos((spark.angle * Math.PI) / 180) * spark.distance,
            y: Math.sin((spark.angle * Math.PI) / 180) * spark.distance,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      ))}
    </div>
  );
};

export default ClickSpark;
