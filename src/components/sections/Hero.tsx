import Image from "next/image";
import React from "react";
import Link from "next/link";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <section className="relative w-full h-[90vh] min-h-150 flex items-center justify-center overflow-hidden">

      {/* Imagen de fondo */}
      <Image
        src="/images/hero/hero-main.png"
        alt="Vanguardia Seasonal Collection"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay oscuro sutil */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Contenido */}
      <div className="relative z-10 text-center text-white px-4 max-w-2xl">

        <h1>
          Seasonal Outlet
        </h1>

        <p className="mt-6 mb-10 text-lg md:text-xl opacity-90 max-w-xl mx-auto leading-relaxed">
          Discover timeless pieces crafted with precision and designed for modern elegance.
        </p>

        <Link href="/#collection">
          <Button variant="primary">
            Shop Collection
          </Button>
        </Link>
      </div>


    </section>
  );
};

export default Hero;
