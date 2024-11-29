import Image from "next/image";
import Kometa from "../public/images/companies/kometa.png";
import MyHotelProject from "../public/images/companies/myhotelproject.png";
import Koesio from "../public/images/companies/koesio.png";
import Wingoz from "../public/images/companies/wingoz.png";
import CarLovers from "../public/images/companies/carlovers.png";

export default function LogoCarousel() {
  const logos = [
    { src: Kometa, alt: "Kometa" },
    { src: MyHotelProject, alt: "My Hotel Project" },
    { src: Koesio, alt: "Koesio" },
    { src: Wingoz, alt: "Wingoz" },
    { src: CarLovers, alt: "Car Lovers" },
    { src: Kometa, alt: "Kometa" },
    { src: MyHotelProject, alt: "My Hotel Project" },
    { src: Koesio, alt: "Koesio" },
    { src: Wingoz, alt: "Wingoz" },
    { src: CarLovers, alt: "Car Lovers" },
  ];

  return (
    <div className="w-[80%] m-auto mb-24 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} />
          </li>
        ))}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} />
          </li>
        ))}
      </ul>
    </div>
  );
}
