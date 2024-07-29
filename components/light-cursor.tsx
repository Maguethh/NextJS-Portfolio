"use client";
import React, { useEffect, useState } from "react";

const LightCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: position.y - 100,
        left: position.x - 100,
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(255,255,255,0.8) -80%, rgba(255,255,255,0) 60%)",
        pointerEvents: "none",
        mixBlendMode: "overlay",
        transition: "transform 0.1s ease-out",
        zIndex: 1,
      }}
    />
  );
};

export default LightCursor;
