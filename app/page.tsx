import Navbar from "@/src/components/sections/Navbar";
import Hero from "@/src/components/sections/Hero";
import Features from "@/src/components/sections/Features";
import SocialProof from "@/src/components/sections/SocialProof";
import ProductCatalog from "@/src/components/sections/ProductCatalog";
import Testimonials from "@/src/components/sections/Testimonials";
import Cta from "@/src/components/sections/Cta";
import Footer from "@/src/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        {/* Validación social */}
        <SocialProof />

        {/* Beneficios (confianza) */}
        <Features />

        {/* Productos */}
        <ProductCatalog />

        {/* Prueba social profunda */}
        <Testimonials />

        {/*CTA*/}
        <Cta />
      </main>

      <Footer />
    </>
  );
}
