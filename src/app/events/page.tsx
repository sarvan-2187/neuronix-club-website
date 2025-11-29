"use client";

export default function ComingSoonEvents() {
    return (
        <section className="min-h-screen w-full bg-black flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">

            {/* GOLDEN BG GLOWS */}
            <div className="absolute inset-0 -z-10 opacity-40 pointer-events-none">
                <div className="absolute top-0 left-10 w-72 h-72 bg-yellow-400/30 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-10 w-80 h-80 bg-amber-500/30 rounded-full blur-3xl" />
            </div>

            {/* TITLE */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-wide 
      bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-500 
      bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,200,0,0.4)]">
                Neuronix Events
            </h1>

            {/* SUBTITLE */}
            <p className="text-yellow-300/80 text-lg md:text-xl mt-4 tracking-wide">
                Something spectacular is brewing…
            </p>

            {/* MAIN COMING SOON BLOCK */}
            <div className="mt-12 bg-neutral-900/40 border border-yellow-500/20 
      rounded-2xl px-10 py-8 backdrop-blur-md shadow-[0_0_20px_rgba(255,200,0,0.15)] max-w-xl">

                <h2 className="text-3xl md:text-4xl font-semibold text-yellow-200">
                    Coming Soon
                </h2>

                <p className="mt-4 text-neutral-300 leading-relaxed">
                    We’re working on a lineup of high-energy, AI-powered,
                    innovation-driven events for the <span className="text-yellow-300 font-medium">
                        2025–2026 academic year
                    </span>.
                </p>

                <p className="mt-3 text-neutral-400 italic">
                    Stay tuned — the neurons are firing!
                </p>
            </div>

            {/* COUNTDOWN STYLE PLACEHOLDER */}
            <div className="mt-10 flex gap-6 text-yellow-200">
                <div className="flex flex-col items-center">
                    <span className="text-4xl font-bold">59</span>
                    <span className="text-sm opacity-70">Days</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-4xl font-bold">59</span>
                    <span className="text-sm opacity-70">Hours</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-4xl font-bold">59</span>
                    <span className="text-sm opacity-70">Minutes</span>
                </div>
            </div>

            {/* FOOTER TEXT */}
            <p className="mt-14 text-neutral-500 text-sm tracking-wide">
                © 2025 Neuronix · AVV Chennai · Powered by Innovation
            </p>
        </section>
    );
}
