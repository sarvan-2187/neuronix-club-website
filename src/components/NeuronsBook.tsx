"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function NeuronsBook() {
    const pages = [
        "/carousel0.png",
        "/carousel1.png",
        "/carousel2.png",
        "/carousel3.png",
        "/carousel4.png",
        "/carousel5.png",
    ];

    const [index, setIndex] = useState(0);

    const prev = () => setIndex((prev) => (prev > 0 ? prev - 1 : pages.length - 1));
    const next = () => setIndex((prev) => (prev < pages.length - 1 ? prev + 1 : 0));

    return (
        <section id="crew" className="w-full pb-20 bg-black flex flex-col items-center px-4 mt-10">

            {/* MAIN CONTAINER - Now scaled on desktop */}
            <div
                className="
                    relative 
                    w-full 
                    max-w-[500px] 
                    md:max-w-[650px] 
                    lg:max-w-[750px]
                    xl:max-w-[900px]
                    overflow-hidden 
                    rounded-xl 
                    shadow-[0_0_25px_rgba(255,200,0,0.4)]
                    transition-all 
                    duration-500
                "
            >
                {/* WRAPPER */}
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {pages.map((src, i) => (
                        <div
                            key={i}
                            className="
                                min-w-full 
                                h-[450px] 
                                md:h-[500px] 
                                lg:h-[600px] 
                                xl:h-[650px]
                                flex items-center justify-center bg-black
                            "
                        >
                            <img
                                src={src}
                                alt={`Neuron Page ${i + 1}`}
                                className="object-contain w-full h-full rounded-xl"
                            />
                        </div>
                    ))}
                </div>

                {/* LEFT BUTTON */}
                <button
                    onClick={prev}
                    className="absolute top-1/2 -translate-y-1/2 left-3 p-2 rounded-full 
                    bg-black/40 border border-yellow-500/40 text-yellow-300 
                    hover:bg-yellow-500/20 transition"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>

                {/* RIGHT BUTTON */}
                <button
                    onClick={next}
                    className="absolute top-1/2 -translate-y-1/2 right-3 p-2 rounded-full 
                    bg-black/40 border border-yellow-500/40 text-yellow-300 
                    hover:bg-yellow-500/20 transition"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            <p className="mt-4 text-yellow-400 tracking-wide text-sm">
                Page {index + 1} / {pages.length}
            </p>
        </section>
    );
}
