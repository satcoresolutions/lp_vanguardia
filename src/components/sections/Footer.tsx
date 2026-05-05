import React from "react";
import Link from "next/link";
import Button from "../ui/Button";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-espresso text-cream" role="contentinfo">

      <div className="container p-16 md:py-20">

        {/* TOP */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-16 mb-12 md:mb-16">

          {/* BRAND */}
          <section className="text-center sm:text-left">

            <h3 className="text-lg font-serif mb-4 tracking-wide">
              Vanguardia
            </h3>

            <p className="text-sm leading-relaxed text-cream/70 max-w-sm mx-auto sm:mx-0 mb-6">
              Moda premium diseñada para la elegancia moderna.
              Piezas atemporales creadas con precisión y detalle.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex justify-center sm:justify-start gap-3 sm:gap-4 items-center">

              {[
                { src: "/images/social/instagram.png", alt: "Instagram", href: "https://instagram.com" },
                { src: "/images/social/facebook.png", alt: "Facebook", href: "https://facebook.com" },
                { src: "/images/social/tiktok.png", alt: "TikTok", href: "https://tiktok.com" },
                { src: "/images/social/youtube.png", alt: "YouTube", href: "https://youtube.com" },
              ].map((item) => (
                <Link
                  key={item.alt}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-70 hover:opacity-100 transition"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={26}
                    height={26}
                    className="sm:w-7.5 sm:h-7.5"
                  />
                </Link>
              ))}

            </div>
          </section>

          {/* NAV */}
          <nav aria-label="Navegación del sitio" className="text-center sm:text-left">

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
                    className="hover:text-cream transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

          </nav>

          {/* NEWSLETTER */}
          <section className="text-center sm:text-left">

            <h3 className="text-sm uppercase tracking-[0.2em] mb-5 text-cream/80">
              Newsletter
            </h3>

            <p className="text-sm text-cream/70 mb-6 leading-relaxed">
              Suscríbete para recibir colecciones y acceso exclusivo.
            </p>

            <form className="flex flex-col gap-3">

              <input
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
                "
              />

              <Button type="submit" variant="primary">
                Suscribirme
              </Button>

            </form>

          </section>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-cream/20 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-xs text-cream/50 text-center md:text-left">

          <span>
            © {new Date().getFullYear()} Vanguardia. Todos los derechos reservados.
          </span>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-8">

            <a href="/privacy-policy" className="hover:text-cream transition">
              Política de privacidad
            </a>

            <a href="/terms" className="hover:text-cream transition">
              Términos
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
