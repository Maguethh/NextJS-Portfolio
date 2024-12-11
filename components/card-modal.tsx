import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./card-modal-style.css";
import { X } from "lucide-react";
import EmblaModalCarousel from "@/components/embla-modal-carousel";
import IconLink from "@/components/icon-link";

type SlideTypeCardModal = {
  index: number;
  title: string;
  subtitle: string;
  images: string[];
  thumbnail: string;
  textTitle: string;
  textParagraphs: string[];
  stack: {
    href: string;
    icon: React.ElementType;
    tooltip: string;
  }[];
};

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  slide: SlideTypeCardModal | null;
};

const CardModal: React.FC<ModalProps> = ({ isOpen, onClose, slide }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  if (!isOpen || !slide) return null;

  return ReactDOM.createPortal(
    <div className="card-modal-overlay" onClick={onClose}>
      <div className="card-modal" onClick={(e) => e.stopPropagation()}>
        <div className="card-modal-informations">
          <h3 className="card-modal-subtitle">{slide.subtitle}</h3>
          <h2 className="card-modal-title">{slide.title}</h2>
        </div>
        <div className="card-modal-content">
          <div className="card-modal-close" onClick={onClose}>
            <X color="rgb(41, 41, 41)" className="card-modal-close-icon" />
          </div>
          <div className="card-modal-container">
            <EmblaModalCarousel slides={slide.images} />
          </div>
          <h4 className="card-modal-text-title">{slide.textTitle}</h4>
          {slide.textParagraphs.map((paragraph, index) => (
            <p key={index} className="card-modal-text-paragraph">
              {paragraph}
            </p>
          ))}
          <div className="card-modal-stack-line"></div>
          <div className="card-modal-stack">
            {slide.stack.map((item, index) => (
              <IconLink
                key={index}
                href={item.href}
                icon={item.icon}
                tooltip={item.tooltip}
              />
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};



export default CardModal;
