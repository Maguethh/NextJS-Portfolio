"use client";
import { useEffect, useRef, useState, MutableRefObject } from "react";
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
import Tag3d from "@/components/3dtag";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import LogoCarousel from "@/components/companies";

function useIntersectionObserver(
  ref: MutableRefObject<Element | null>,
  options: IntersectionObserverInit
) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.disconnect();
        }
      });
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isIntersecting;
}

const testimonials = [
  {
    comment: "An outstanding experience.",
    quote:
      "Magueth was incredibly responsive and autonomous. He built our real estate platform under tight deadlines with great efficiency. A pleasure to work with.",
    name: "Arthur",
    title: "CEO of My Hotel Project",
  },
  {
    comment: "Highly recommended !",
    quote:
      "He delivers exceptional quality and understands user needs perfectly. His work exceeded our expectations, and I highly recommend his services.",
    name: "Riann",
    title: "Co-Owner of My Hotel Project",
  },
  {
    comment: "A truly exceptional developer.",
    quote:
      "Magueth is a highly skilled developer with great technical expertise. He consistently delivers high-quality work and is a reliable part of any team.",
    name: "Stéphane",
    title: "CTO at Koesio",
  },
  {
    comment: "Highly satisfied with the results.",
    quote:
      "I regularly rely on Magueth for my e-commerce platforms. His speed, quality of work, and responsiveness are outstanding. I highly recommend him !",
    name: "Thomas",
    title: "E-commerce Entrepreneur",
  },
  {
    comment: "A great discovery !",
    quote:
      "His versatility and ability to adapt to different projects have been impressive. His wide range of skills and professionalism made working with him a very pleasant experience.",
    name: "Nicolas",
    title: "Director at Kometa Web Agency",
  },
];

export default function Home() {
  const aboutSectionRef = useRef<HTMLDivElement | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const testimonialsRef = useRef<HTMLDivElement | null>(null);

  const showAboutSection = useIntersectionObserver(aboutSectionRef, {
    threshold: 0.1,
  });
  const showCarousel = useIntersectionObserver(carouselRef, { threshold: 0.1 });
  const showTestimonials = useIntersectionObserver(testimonialsRef, {
    threshold: 0.1,
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: true,
    });

    AOS.refresh();
  }, []);

  return (
    <>
      <div className="tag3d-absolute-container" id="home">
        <div className="tag3d-container">
          <Tag3d />
        </div>
      </div>
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
        <div ref={aboutSectionRef}>
          {showAboutSection && (
            <div
              className="home-about-section-content-1"
              data-aos="fade-up"
              id="stack"
            >
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
                  <IconLink
                    href="https://www.linkedin.com/in/magueth-pastor-b40851284/"
                    icon={SiLinkedin}
                    tooltip="LinkedIn"
                  />
                </div>
              </div>

              <div className="home-tilt-container">
                <TiltStack />
              </div>
              <div className="hhome-about-section-stack"></div>
            </div>
          )}
        </div>
        <div
          ref={testimonialsRef}
          className=" rounded-md flex flex-col antialiased bg-[#18181b] dark:bg-[#18181b] items-center justify-center relative overflow-hidden"
        >
          {showTestimonials && (
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          )}
        </div>
        <div className="h-full" id="projects">
          <div ref={carouselRef}>
            {showCarousel && (
              <div className="home-carousel-container" data-aos="fade-up">
                <EmblaCarousel slides={slides} />
              </div>
            )}
          </div>
        </div>
        <LogoCarousel />
      </div>
    </>
  );
}
