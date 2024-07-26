"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Changer cette valeur pour ajuster le seuil de défilement
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: showHeader ? 1 : 0, y: showHeader ? 0 : -50 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        backdropFilter: "blur(10px)",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        padding: "1rem",
        zIndex: 1000,
      }}
    >
      <nav>
        <ul>
          <li>
            <Link href="/">Home </Link>
          </li>
        </ul>
      </nav>
    </motion.div>
  );
};

export default Header;
