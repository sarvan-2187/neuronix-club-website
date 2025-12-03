"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import NeuronixLogoCore from "./NeuronixLogoCore";

export default function NeuronixHero() {
    return (
        <section id='hero' className="relative min-h-screen w-full overflow-hidden bg-black text-neutral-100">

            {/* Golden glow background */}
            <div className="pointer-events-none absolute inset-0 opacity-50">
                <div className="absolute -top-40 -left-40 h-72 w-72 rounded-full bg-[radial-gradient(circle,#facc15_0%,transparent_60%)] blur-3xl" />
            </div>

            {/* Top line */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-500/70 to-transparent" />

            {/* LAYOUT */}
            <div
                className="
                relative mx-auto max-w-6xl 
                px-4 pb-24 pt-32 
                flex flex-col-reverse md:flex-row
                items-center md:items-start
                gap-12 md:gap-20
            "
            >

                {/* LEFT (text) */}
                <div className="flex-1 space-y-6 text-center md:text-left">

                    {/* Tagline */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/40 bg-yellow-500/10 px-3 py-1 text-xs font-medium tracking-wide text-yellow-400 mx-auto md:mx-0">
                        <span className="h-1 w-1 rounded-full bg-yellow-400" />
                        AVV CHENNAI • TECH CLUB
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
                        <span className="block">Where neurons</span>
                        <span className="block mt-1 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent">
                            meet next-gen code.
                        </span>
                    </h1>

                    {/* Subtext */}
                    <p className="max-w-xl mx-auto md:mx-0 text-sm sm:text-base text-neutral-300 leading-relaxed">
                        Neuronix is the hub for curious minds who love systems, AI, and clean code.
                        Learn, build, and ship projects that actually make your resume — and your
                        seniors — take notice.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 pt-2">
                        <Button
                            className="rounded-full border border-yellow-500/60 bg-yellow-500 text-black px-6 py-2 text-sm font-semibold shadow-[0_0_25px_rgba(250,204,21,0.5)] hover:bg-yellow-400 hover:shadow-[0_0_35px_rgba(250,204,21,0.75)] transition"
                            asChild
                        >
                            <a href="/join">
                                Join Neuronix
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                        <Button
                            className="rounded-full border border-yellow-400/40 bg-black/20 
    text-yellow-300 px-6 py-2 text-sm font-semibold 
    hover:bg-yellow-400/10 hover:border-yellow-400/80
    shadow-[0_0_10px_rgba(250,204,21,0.25)]
    hover:shadow-[0_0_20px_rgba(250,204,21,0.45)]
    transition flex items-center"
                            asChild
                        >
                            <a href="/events">
                                View Events
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                        </Button>

                    </div>

                    {/* Details */}
                    <div className="flex justify-center md:justify-start items-center gap-2 text-xs text-neutral-400 pt-2">
                        <span className="h-px w-8 bg-gradient-to-r from-yellow-500 to-transparent" />
                        Weekly sessions • Project teams • Hackathons
                    </div>
                </div>

                {/* RIGHT (animation) */}
                <div
                    className="
                    flex-1 flex justify-center md:justify-end
                    mb-8 md:mb-0
                    mt-4 md:mt-16     /* <-- pushes animation DOWN on desktop */
                "
                >
                    <NeuronixLogoCore size="responsive" />
                </div>

            </div>

            {/* Bottom line */}
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent" />
        </section>
    );
}
