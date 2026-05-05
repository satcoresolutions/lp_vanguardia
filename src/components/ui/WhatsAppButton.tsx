import Image from "next/image";
import Link from "next/link";
import React from "react";

const WhatsAppButton = () => {
  return (
    <Link
      href="https://wa.me/573201234567?text=Hola%20quiero%20información%20sobre%20Vanguardia"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        w-14 h-14
        rounded-full
        shadow-lg
        hover:scale-110
        transition-transform duration-300
      "
    >
      <Image
        src="/images/social/whatsapp.png"
        alt="WhatsApp"
        fill
        className="object-contain"
      />
    </Link>
  );
};

export default WhatsAppButton;
