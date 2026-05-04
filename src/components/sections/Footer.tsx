import React from "react";
import Link from "next/link";
import Button from "../ui/Button";

const Footer = () => {
  return (
    <footer className="bg-espresso text-cream" role="contentinfo">
      <div className="container py-20">

        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">

          {/* BRAND */}
          <section>
            <h3 className="text-lg font-serif mb-5 tracking-wide">
              Vanguardia
            </h3>

            <p className="text-sm leading-relaxed text-cream/70 max-w-sm">
              Moda premium diseñada para la elegancia moderna.
              Piezas atemporales creadas con precisión y detalle.
            </p>
          </section>

          {/* NAV */}
          <nav aria-label="Navegación del sitio">
            <h3 className="text-sm uppercase tracking-[0.2em] mb-5 text-cream/80">
              Navegación
            </h3>

            <ul className="flex flex-col gap-3 text-sm text-cream/70">
              {[
                { href: "/#collection", label: "Colección" },
                { href: "/#men", label: "Hombre" },
                { href: "/#women", label: "Mujer" },
                { href: "/#contact", label: "Contacto" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-cream transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* NEWSLETTER */}
          <section>
            <h3 className="text-sm uppercase tracking-[0.2em] mb-5 text-cream/80">
              Newsletter
            </h3>

            <p className="text-sm text-cream/70 mb-6 leading-relaxed">
              Suscríbete para recibir colecciones y acceso exclusivo.
            </p>

            <form className="flex flex-col gap-3" action="#" method="POST">

              <label htmlFor="email" className="sr-only">
                Correo electrónico
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Tu correo electrónico"
                className="
                  px-4 py-3 text-sm
                  bg-transparent
                  border border-cream/30
                  rounded-sm
                  placeholder:text-cream/40
                  focus:outline-none
                  focus:border-cream/60
                  transition
                "
              />

              <Button type="submit" variant="primary">
                Suscribirme
              </Button>

            </form>
          </section>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-cream/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-cream/50">

          <span>
            © {new Date().getFullYear()} Vanguardia. Todos los derechos reservados.
          </span>

          <div className="flex gap-8">
            <a
              href="/privacy-policy"
              className="hover:text-cream transition"
            >
              Política de privacidad
            </a>

            <a
              href="/terms"
              className="hover:text-cream transition"
            >
              Términos
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
