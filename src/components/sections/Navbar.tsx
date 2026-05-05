import Link from "next/link";

const NAV_LINKS = [
  { label: "Inicio", href: "#" },
  { label: "Negocio", href: "#" },
  { label: "Ropa", href: "#" },
  { label: "Productos", href: "#" },
  { label: "Blog", href: "#" },
  {
    label: "Contacto",
    href: "https://wa.me/573201234567?text=Hola%20quiero%20información%20sobre%20Vanguardia",
  },
];

const Navbar = () => {
  return (
    <header className="w-full bg-cream sticky top-0 z-50 border-b border-soft-grey">

      {/* LOGO */}
      <div className="flex justify-center py-4">
        <Link href="/" className="group">
          <span
            className="font-serif text-espresso block"
            style={{
              fontSize: "clamp(1.6rem, 4vw, 2.8rem)",
              letterSpacing: "0.18em",
              fontWeight: 400,
              textTransform: "uppercase",
            }}
          >
            Vanguardia
          </span>
        </Link>
      </div>

      {/* NAV */}
      <nav className="
        flex flex-wrap justify-center
        gap-x-6 gap-y-3
        px-4 pb-4
        md:gap-8
      ">
        {NAV_LINKS.map((link) => {
          const isExternal = link.href.startsWith("http");

          return (
            <Link
              key={link.label}
              href={link.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="
                caption text-espresso
                hover:opacity-60
                transition-opacity duration-200
                text-xs sm:text-sm md:text-base
              "
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

    </header>
  );
};

export default Navbar;
