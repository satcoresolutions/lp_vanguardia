import React from "react";
import clsx from "clsx";
import Image from "next/image";

export type BadgeVariant =
  | "default"
  | "premium"
  | "new"
  | "sale"
  | "limited";

interface BadgeProps {
  children?: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

/** Iconos PNG por variante */
const badgeImages: Record<Exclude<BadgeVariant, "default">, string> = {
  premium: "/images/badges/premium.png",
  new: "/images/badges/new.png",
  sale: "/images/badges/sale.png",
  limited: "/images/badges/limited.png",
};

/** Estilos sólidos (sin transparencia tipo glass) */
const variants: Record<BadgeVariant, string> = {
  default: "bg-[#f5f1ea] text-[#3a2f2a] border border-[#e6ddd2]",
  premium: "bg-[#f3e7d3] text-[#3a2f2a]",
  new: "bg-[#e7f3ea] text-[#1f3a2a]",
  sale: "bg-[#f8d7d7] text-[#4a1f1f]",
  limited: "bg-[#efe3d2] text-[#3a2f2a]",
};

const Badge = ({
  children,
  variant = "default",
  className,
}: BadgeProps) => {
  const baseStyles =
    "inline-flex items-center gap-1 text-[10px] font-medium uppercase tracking-[0.18em] px-2.5 py-1 rounded-full shadow-sm transition-all duration-300 hover:scale-105";

  return (
    <span className={clsx(baseStyles, variants[variant], className)}>
      {variant !== "default" && (
        <Image
          src={badgeImages[variant]}
          alt={variant}
          width={34}
          height={34}
          className="object-contain"
        />
      )}

      {children}
    </span>
  );
};

export default Badge;
