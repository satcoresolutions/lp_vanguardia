import Image from "next/image";
import React from "react";
import Badge from "./Badge";
import type { BadgeVariant } from "./Badge";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  alt?: string;
  badge?: BadgeVariant;
  badgeText?: string;
}

const ProductCard = ({
  name,
  price,
  image,
  alt = name,
  badge,
  badgeText,
}: ProductCardProps) => {
  return (
    <article className="group relative overflow-hidden rounded-md cursor-pointer">

      <div className="relative w-full h-105 overflow-hidden">

        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

        {badge && (
          <div className="absolute top-3 left-3 z-10">
            <Badge variant={badge}>
              {badgeText || badge}
            </Badge>
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">

          <h3 className="text-lg md:text-xl font-serif leading-snug">
            {name}
          </h3>

          <p className="text-sm md:text-base opacity-80 mt-1">
            {price}
          </p>

        </div>

      </div>

    </article>
  );
};

export default ProductCard;
