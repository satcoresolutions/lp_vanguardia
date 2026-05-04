import React from "react";
import SectionLabel from "../ui/SectionLabel";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Exceptional quality and timeless design. Vanguardia has completely elevated my wardrobe.",
    name: "Sofia Ramirez",
  },
  {
    quote:
      "Minimalist, elegant, and incredibly well-crafted pieces. Worth every detail.",
    name: "Daniel Torres",
  },
  {
    quote:
      "You can feel the attention to detail in every garment. Truly premium experience.",
    name: "Valentina Cruz",
  },
];

const Testimonials = () => {
  return (
    <section className="section bg-cream">
      <div className="container">

        {/* Header */}
        <div className="mb-16">
          <SectionLabel label="Testimonials" />
          <h2 className="mt-4 text-3xl md:text-5xl font-serif leading-tight text-espresso">
            What our clients say
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
