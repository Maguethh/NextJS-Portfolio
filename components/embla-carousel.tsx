import React, { useEffect, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "@/components/embla-dot-button";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "@/components/embla-carousel-arrow-button";
import useEmblaCarousel from "embla-carousel-react";
import "@/components/embla-style.css";

type SlideType = {
  index: number;
  title: string;
  subtitle: string;
  thumbnail: string;
  images: string[];
};

type PropType = {
  slides: SlideType[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [slidesToScroll, setSlidesToScroll] = useState(4);

  useEffect(() => {
    const updateSlidesToScroll = () => {
      if (window.innerWidth <= 768) {
        setSlidesToScroll(1);
      } else if (window.innerWidth <= 1024) {
        setSlidesToScroll(2);
      } else if (window.innerWidth <= 1536) {
        setSlidesToScroll(3);
      } else {
        setSlidesToScroll(4);
      }
    };

    window.addEventListener("resize", updateSlidesToScroll);
    updateSlidesToScroll(); // Initial call

    return () => window.removeEventListener("resize", updateSlidesToScroll);
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...options,
    slidesToScroll,
    containScroll: "trimSnaps",
  });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide) => (
            <div className="embla__slide" key={slide.index}>
              <div
                className="slidebackground"
                style={{ backgroundImage: `url(${slide.thumbnail})` }}
              >
                <div className="embla__slide__content">
                  <div className="embla__slide__title">{slide.title}</div>
                  <div className="embla__slide__subtitle">{slide.subtitle}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
