import Image from "next/image";
import React from "react";
import SectionLabel from "../ui/SectionLabel";

const logos = [
  { src: "/images/logos/vogue.webp", alt: "Vogue" },
  { src: "/images/logos/forbes.webp", alt: "Forbes" },
  { src: "/images/logos/gq.webp", alt: "GQ" },
  { src: "/images/logos/bazaar.webp", alt: "Harper's Bazaar" },
  { src: "/images/logos/elle.webp", alt: "Elle" },
];

const SocialProof = () => {
  return (
    <section className="section">
      <div className="container text-center">
        
        {/* Label */}
        <SectionLabel label="As seen in" className="justify-center" />

        {/* Logos */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center mt-10 opacity-70">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={40}
                className="object-contain grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SocialProof;
