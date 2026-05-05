import React from "react";
import Link from "next/link";
import Button from "../ui/Button";

const Cta = () => {
    return (
        <section className="section flex justify-center">

            <div className="w-[90%]">

                <div className="relative overflow-hidden rounded-md h-[60vh] min-h-105">

                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-center bg-cover"
                        style={{
                            backgroundImage: "url('/images/hero/cta.png')",
                        }}
                    />

                    {/* Overlay elegante */}
                    <div className="absolute inset-0 bg-black/50" />

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-cream px-6">

                        {/* Label */}
                        <span className="text-[10px] uppercase tracking-[0.2em] opacity-80">
                            Vanguardia Experience
                        </span>

                        {/* Title */}
                        <h2 className="mt-4 max-w-2xl">
                            Discover your next signature piece
                        </h2>

                        {/* Description */}
                        <p className="mt-6 max-w-xl text-sm opacity-80">
                            Explore our curated collection of timeless fashion designed for modern elegance and lasting impact.
                        </p>

                        {/* Buttons */}
                        <div className="mt-10 flex flex-col sm:flex-row gap-4">

                            <Link href="/#collection">
                                <Button variant="primary">
                                    Shop Collection
                                </Button>
                            </Link>

                            <a
                                href="https://wa.me/573000000000"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button variant="secondary">
                                    Contact Us
                                </Button>
                            </a>

                        </div>

                    </div>
                </div>

            </div>

        </section>
    );
};

export default Cta;
