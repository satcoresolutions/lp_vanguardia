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
        alt="Colección de temporada Vanguardia"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay oscuro sutil */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Contenido */}
      <div className="relative z-10 text-center text-white px-4 max-w-2xl">

        <h1>
          Outlet de Temporada
        </h1>

        <p className="mt-6 mb-10 text-lg md:text-xl opacity-90 max-w-xl mx-auto leading-relaxed">
          Descubre piezas atemporales creadas con precisión y diseñadas para una elegancia moderna.
        </p>

        <Link href="/#collection">
          <Button variant="primary">
            Ver Colección
          </Button>
        </Link>
      </div>

    </section>
  );
};

export default Hero;