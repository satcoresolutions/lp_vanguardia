import React from "react";
import SectionLabel from "../ui/SectionLabel";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Calidad excepcional y diseño atemporal. Vanguardia ha elevado completamente mi guardarropa.",
    name: "Sofía Ramírez",
  },
  {
    quote:
      "Piezas minimalistas, elegantes y con un nivel de detalle increíble. Vale cada detalle.",
    name: "Daniel Torres",
  },
  {
    quote:
      "Se nota el cuidado en cada prenda. Una experiencia verdaderamente premium.",
    name: "Valentina Cruz",
  },
];

const Testimonials = () => {
  return (
    <section className="section bg-cream">
      <div className="container">

        {/* Header */}
        <div className="mb-16">
          <SectionLabel label="Testimonios" />
          <h2 className="mt-4 text-3xl md:text-5xl font-serif leading-tight text-espresso">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                relative p-8 md:p-10
                bg-white/60
                border border-soft-grey
                rounded-xl
                shadow-sm
                hover:shadow-card
                transition-all duration-300
              "
            >

              {/* Quote icon */}
              <Quote className="w-6 h-6 text-espresso mb-6 opacity-40" />

              {/* Quote text */}
              <p className="text-lg md:text-xl font-serif leading-relaxed text-espresso mb-10">
                “{item.quote}”
              </p>

              {/* Name */}
              <span className="text-xs tracking-[0.2em] uppercase text-espresso/60">
                {item.name}
              </span>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
