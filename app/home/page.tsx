"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { FlipWords } from "@/components/ui/flip-words";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";

const inter = Inter({
  subsets: ["latin"],
});

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
        >
          <div className="flex flex-col gap-[20px]">
            <div className="text-5xl font-bold">
              Start collaborating with your next
              <br />
              <FlipWords
                words={[
                  "full-stack\u00A0developer.",
                  "innovation\u00A0leader.",
                  "tech\u00A0visionary.",
                  "creative\u00A0technologist.",
                ]}
                duration={2000}
                color="text-neutral-200"
              />
            </div>
            <div className="text-2xl font-extralight">
              A full-stack expert crafting creative solutions.
            </div>
          </div>
        </motion.div>
      </AuroraBackground>
    </>
  );
}
