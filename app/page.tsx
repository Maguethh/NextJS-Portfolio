"use client";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { FlipWords } from "@/components/ui/flip-words";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import EmblaCarousel from "@/components/embla-carousel";
import "./style.css";
import { presentation, slides } from "@/data/data";

export default function Home() {
  return (
    <>
      <AuroraBackground backgroundColor="#18181b">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="home-hero-motion-div"
        >
          <div className="home-hero-text-container">
            <div className="home-hero-text">
              <span className="home-hero-text-1">
                Start collaborating with your next
              </span>
              <FlipWords
                words={[
                  "full-stack\u00A0developer.",
                  "innovation\u00A0leader.",
                  "tech\u00A0visionary.",
                  "creative\u00A0technologist.",
                ]}
                duration={3000}
                color="text-neutral-200"
              />
            </div>
            <div className="home-hero-text-2">
              A full-stack expert crafting creative solutions.
            </div>
          </div>
        </motion.div>
      </AuroraBackground>
      <div className="home-about-section">
        <div className="w-[60vw] ml-[10vw]">
          <TextGenerateEffect
            words={presentation}
            colorClass="text-neutral-200"
          />
        </div>
        <div className="h-full">
          <div className="w-[80%] mx-auto">
            <EmblaCarousel slides={slides} />
          </div>
        </div>
      </div>
    </>
  );
}
