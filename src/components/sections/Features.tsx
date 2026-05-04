import React from "react";
import SectionLabel from "../ui/SectionLabel";

const features = [
  {
    title: "Envíos rápidos",
    description: "Recibe tus prendas en tiempo récord con logística optimizada.",
  },
  {
    title: "Calidad premium",
    description: "Materiales seleccionados para máxima durabilidad y elegancia.",
  },
  {
    title: "Diseño exclusivo",
    description: "Piezas únicas pensadas para destacar tu estilo.",
  },
];

const Features = () => {
  return (
    <section id="features" className="section">
      <div className="container">

        {/* Header */}
        <header className="mb-16 text-center">
          <SectionLabel label="Beneficios" />

          <h2 className="mt-4">
            Más que moda, una experiencia premium
          </h2>

          <p className="mt-4 max-w-xl mx-auto text-base md:text-lg opacity-80 leading-relaxed">
            Cada detalle está pensado para ofrecerte calidad, estilo y confianza en cada compra.
          </p>
        </header>

        {/* Features */}
        <div className="grid md:grid-cols-3">

          {features.map((feature, index) => (
            <div
              key={index}
              className={`
                relative px-8 py-10 text-center
                ${index !== features.length - 1 ? "md:border-r border-soft-grey" : ""}
              `}
            >
              {/* Línea decorativa */}
              <div className="w-12 h-px bg-espresso mx-auto mb-6 opacity-40" />

              {/* Title MÁS GRANDE */}
              <h3 className="mb-4 text-xl md:text-2xl font-serif">
                {feature.title}
              </h3>

              {/* Description MÁS LEGIBLE */}
              <p className="text-sm md:text-base opacity-75 max-w-xs mx-auto leading-relaxed">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Features;
