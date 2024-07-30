import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import {
  SiTypescript,
  SiPython,
  SiReact,
  SiDjango,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiAmazonaws,
  SiPhp,
} from "react-icons/si";
import "./tilt-style.css";

interface GridItem {
  name: string;
  icon: JSX.Element;
}

const TiltStack: React.FC = () => {
  const [tooltipText, setTooltipText] = useState<string>("");

  const gridItems: GridItem[] = [
    { name: "NodeJS", icon: <SiNodedotjs /> },
    { name: "Python", icon: <SiPython /> },
    { name: "React", icon: <SiReact /> },
    { name: "ExpressJS", icon: <SiExpress /> },
    { name: "Typescript", icon: <SiTypescript /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "AWS", icon: <SiAmazonaws /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
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
            <motion.div
              key={index}
              className="grid-item grid-icon"
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
              whileHover={{ scale: 1.05, rotate: 5, z: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item.icon}
            </motion.div>
          ))}
        </div>
        {tooltipText && <div className="grid-tooltip">{tooltipText}</div>}
      </div>
    </Tilt>
  );
};

export default TiltStack;
