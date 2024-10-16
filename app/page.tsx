"use client";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { FlipWords } from "@/components/ui/flip-words";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import EmblaCarousel from "@/components/embla-carousel";
import { presentation, slides } from "@/data/data";
import TiltStack from "@/components/tilt-stack";
import Link from "next/link";
import AOS from "aos";
import {
  SiGithub,
  SiLinkedin,
  SiTwitter,
  SiDiscord,
  SiSpotify,
} from "react-icons/si";
import "./style.css";
import IconLink from "@/components/icon-link";

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
        <div className="home-about-section-content-1" data-aos="fade-up">
          <div className="home-about-section-text">
            <TextGenerateEffect
              words={presentation}
              colorClass="text-neutral-200"
            />
            <div className="contact-list-container">
              <IconLink
                href="https://github.com/Maguethh"
                icon={SiGithub}
                tooltip="GitHub"
              />
              <IconLink
                href="https://x.com/NMagueth"
                icon={SiTwitter}
                tooltip="Twitter"
              />
              <IconLink
                href="https://discord.com/users/224217349782241280"
                icon={SiDiscord}
                tooltip="Discord"
              />
              <IconLink
                href="https://open.spotify.com/user/30ei7ldg4nhkbqy1c6dyek7q5?si=344bcbe0170c4022"
                icon={SiSpotify}
                tooltip="Spotify"
              />
            </div>
          </div>
          <div className="home-tilt-container">
            <TiltStack />
          </div>
          <div className="hhome-about-section-stack"></div>
        </div>
        <div className="h-full">
          <div className="home-carousel-container" data-aos="fade-up">
            <EmblaCarousel slides={slides} />
          </div>
        </div>
      </div>
    </>
  );
}
