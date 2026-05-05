import React from "react";
import SectionLabel from "../ui/SectionLabel";
import ProductCard from "../ui/ProductCard";
import Button from "../ui/Button";

type BadgeVariant = "default" | "premium" | "new" | "sale" | "limited";

interface Product {
  name: string;
  price: string;
  image: string;
  alt: string;
  badge?: BadgeVariant;
}

const products: Product[] = [
  {
    name: "Abrigo clásico de lana",
    price: "$320",
    image: "/images/products/product-1.png",
    alt: "Abrigo clásico de lana color beige estilo elegante Vanguardia",
    badge: "new",
  },
  {
    name: "Chaqueta de cuero minimalista",
    price: "$450",
    image: "/images/products/product-2.png",
    alt: "Chaqueta de cuero negra minimalista estilo premium Vanguardia",
    badge: "premium",
  },
  {
    name: "Blazer beige entallado",
    price: "$280",
    image: "/images/products/product-3.png",
    alt: "Blazer beige elegante corte moderno Vanguardia",
  },
  {
    name: "Camisa negra esencial",
    price: "$120",
    image: "/images/products/product-4.png",
    alt: "Camisa negra minimalista elegante Vanguardia",
  },
  {
    name: "Pantalón corte moderno",
    price: "$190",
    image: "/images/products/product-5.png",
    alt: "Pantalón moderno elegante color neutro Vanguardia",
    badge: "limited",
  },
  {
    name: "Suéter premium tejido",
    price: "$210",
    image: "/images/products/product-6.png",
    alt: "Suéter tejido premium color crema estilo elegante",
    badge: "sale"
  },
];

const ProductCatalog = () => {
  return (
    <section id="collection" className="section">
      <div className="container">

        {/* HEADER */}
        <header className="mb-16 text-center">

          <SectionLabel label="Colección" />

          <h2 className="mt-4">
            Catálogo de la nueva temporada
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-base md:text-lg opacity-80 leading-relaxed">
            Explora nuestra selección de prendas premium diseñadas para elevar tu estilo con elegancia, minimalismo y sofisticación atemporal.
          </p>

        </header>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              price={product.price}
              image={product.image}
              alt={product.alt}
              badge={product.badge}
            />
          ))}

        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col items-center gap-4">

          <Button variant="secondary">
            Explorar catálogo completo
          </Button>

          <p className="text-xs opacity-60">
            Ediciones limitadas disponibles por temporada
          </p>

        </div>

      </div>
    </section>
  );
};

export default ProductCatalog;
