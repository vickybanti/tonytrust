"use client";

import { useEffect, useState } from "react";
import Img from "next/image";

const slides = [
    {
        image:
            "/assets/hero/truck1.jpg",
        title: "Quality Delivery",
        subtitle:
            "Delivering quality products",
    },
    {
        image:
            "/assets/hero/truck2.jpg",
        title: "Top Notch Delivery",
        subtitle:
            "Experience Top notch delivery with quality delivery trucks",
    },
    {
        image:
            "/assets/hero/truck3.jpg",
        title: "Fuel Storage",
        subtitle:
            "Fuel storage and inventory management solutions.",
    },
];

export function HeroCarousel() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const nextSlide = () =>
        setCurrent((prev) => (prev + 1) % slides.length);

    const prevSlide = () =>
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section className="relative h-screen overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                        current === index
                            ? "opacity-100 z-10"
                            : "opacity-0 z-0"
                    }`}
                >
                    {/* Background Image */}
                    <Img
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="absolute inset-0 h-full w-full object-cover"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/50" />

                    {/* Content */}
                    <div className="relative z-20 flex h-full items-center">
                        <div className="container mx-auto px-20">
                            <div className="max-w-xl">
                                <h1 className="mb-6 text-5xl font-bold text-white md:text-7xl">
                                    {slide.title}
                                </h1>

                                <p className="mb-8 text-lg text-gray-200 md:text-xl">
                                    {slide.subtitle}
                                </p>

                                <button className="rounded-lg bg-white px-8 py-4 font-semibold text-black transition hover:bg-gray-200">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Controls */}
            <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur hover:bg-white/40"
            >
                ❮
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur hover:bg-white/40"
            >
                ❯
            </button>

            {/* Indicators */}
            <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`h-3 w-3 rounded-full transition ${
                            current === index ? "bg-white" : "bg-white/40"
                        }`}
                    />
                ))}
            </div>
        </section>
    );
}