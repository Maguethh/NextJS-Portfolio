import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiNodedotjs,
  SiHtml5,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";
import "./tilt-style.css";

interface GridItem {
  name: string;
  icon: JSX.Element;
}

const TiltStack: React.FC = () => {
  const [tooltipText, setTooltipText] = useState<string>("");

  const gridItems: GridItem[] = [
    { name: "React", icon: <SiReact /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Python", icon: <SiPython /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "TailwindCSS", icon: <SiTailwindcss /> },
  ];

  const handleMouseEnter = (text: string) => {
    setTooltipText(text);
  };

  const handleMouseLeave = () => {
    setTooltipText("");
  };

  return (
    <Tilt
      className="tilt"
      perspective={1000}
      glareEnable={false}
      glareMaxOpacity={0.45}
      scale={1.05}
    >
      <div className="tilt-container">
        <div className="grid">
          {gridItems.slice(0, 9).map((item, index) => (
            <div
              key={index}
              className="grid-item grid-icon"
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              {item.icon}
            </div>
          ))}
        </div>
        {tooltipText && <div className="grid-tooltip">{tooltipText}</div>}
      </div>
    </Tilt>
  );
};

export default TiltStack;
