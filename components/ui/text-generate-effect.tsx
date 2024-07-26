"use client";
import { useEffect, useRef } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";
import AOS from "aos";
import "aos/dist/aos.css";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  colorClass = "text-black",
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  colorClass?: string;
}) => {
  const [scope, animate] = useAnimate();
  const containerRef = useRef(null);
  let wordsArray = words.split(" ");

  useEffect(() => {
    AOS.init({
      duration: duration * 1000,
    });
  }, [duration]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(
              "span",
              {
                opacity: 1,
                filter: filter ? "blur(0px)" : "none",
              },
              {
                duration: duration ? duration : 1,
                delay: stagger(0.2),
              }
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [scope.current, animate, filter, duration]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={`opacity-0 ${colorClass}`} // Application de la classe Tailwind CSS
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
              data-aos="fade-up" // Attribut AOS pour l'animation
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)} ref={containerRef}>
      <div className="mt-4">
        <div
          className={`text-2xl leading-snug tracking-wide ${colorClass}`} // Application de la classe Tailwind CSS
          data-aos="fade-up" // Attribut AOS pour l'animation
        >
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
