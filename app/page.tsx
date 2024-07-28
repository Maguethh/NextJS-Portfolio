"use client";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { FlipWords } from "@/components/ui/flip-words";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import EmblaCarousel from "@/components/embla-carousel";
import "./style.css";
const presentation = `I'm a full-stack developer with a passion for creating innovative solutions. I specialize in crafting creative solutions that are both user-friendly and visually appealing. I have experience working with a variety of technologies, including React, Node.js, and MongoDB. I'm always looking for new challenges and opportunities to learn and grow. Let's work together to bring your ideas to life'
`;
const slides = [
  { index: 0, title: "You can do more with AI", subtitle: "Personnal Project" },
  {
    index: 1,
    title: "My Hotel Project Platform",
    subtitle: "Professional Project",
    thumbnail: "https://via.placeholder.com/800x400.png?text=Thumbnail",
    images: [
      "https://via.placeholder.com/100x100.png?text=Image+1",
      "https://via.placeholder.com/100x100.png?text=Image+2",
      "https://via.placeholder.com/100x100.png?text=Image+3",
    ],
  },
  {
    index: 2,
    title: "Comments Analyzer API",
    subtitle: "Personal Project",
    thumbnail: "url('https://source.unsplash.com/random')",
  },
  { index: 3, title: "Slide 4", subtitle: "Subtitle 4" },
  { index: 4, title: "Slide 5", subtitle: "Subtitle 5" },
];
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
