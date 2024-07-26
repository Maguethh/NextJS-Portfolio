"use client";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { FlipWords } from "@/components/ui/flip-words";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
const inter = Inter({
  subsets: ["latin"],
});
const presentation = `I'm a full-stack developer with a passion for creating innovative solutions. I specialize in crafting creative solutions that are both user-friendly and visually appealing. I have experience working with a variety of technologies, including React, Node.js, and MongoDB. I'm always looking for new challenges and opportunities to learn and grow. Let's work together to bring your ideas to life'
`;
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
          className="absolute left-[10vw]"
        >
          <div className="flex flex-col 2xl:gap-[40px]">
            <div className="font-bold 2xl:text-5xl">
              <span className="mb-3 block">
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
            <div className="font-extralight 2xl:text-2xl">
              A full-stack expert crafting creative solutions.
            </div>
          </div>
        </motion.div>
      </AuroraBackground>
      <div className="h-screen">
        <div className="w-50pc absolute left-[10vw]">
          <TextGenerateEffect
            words={presentation}
            colorClass="text-neutral-200"
          />
        </div>
      </div>
    </>
  );
}
