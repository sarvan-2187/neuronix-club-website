"use client";

import Image from "next/image";

export default function ComingSoonEvents() {
    return (
        <section className="min-h-screen w-full bg-black flex flex-col items-center text-center px-6 py-16 relative overflow-hidden">

            {/* BACKGROUND GOLD GLOWS */}
            <div className="absolute inset-0 -z-10 opacity-40 pointer-events-none">
                <div className="absolute top-0 left-10 w-72 h-72 bg-yellow-400/30 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-10 w-80 h-80 bg-amber-500/30 rounded-full blur-3xl" />
            </div>

            {/* PAGE TITLE */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-wide
                bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-500
                bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,200,0,0.4)]">
                Neuronix Events
            </h1>

            <p className="text-yellow-300/80 text-lg md:text-xl mt-4 tracking-wide">
                Major technical events from the Neuronix Club
            </p>

            {/* EVENT CARD */}
            <div className="mt-16 bg-neutral-900/60 border border-yellow-500/30 rounded-2xl p-8 max-w-3xl w-full
                backdrop-blur-md shadow-[0_0_25px_rgba(255,200,0,0.15)]">

                {/* POSTER */}
                <div className="flex justify-center">
                    <img
                        src="/hackaruckus.jpg"
                        alt="Hack-A-Ruckus Poster"
                        className="rounded-2xl border border-yellow-500/20 w-full max-w-lg shadow-[0_0_20px_rgba(255,215,0,0.15)]"
                    />
                </div>

                {/* EVENT TITLE */}
                <h2 className="text-4xl font-bold text-yellow-300 mt-8 tracking-wide">
                    Hack-A-Ruckus 2.0
                </h2>

                {/* EVENT DESCRIPTION */}
                <p className="text-neutral-300 mt-4 leading-relaxed text-lg">
                    The Neuronix Club announces the second edition of its flagship competitive programming
                    event. Featuring high-pressure challenges designed to test logic, adaptability, and
                    problem-solving under unpredictable constraints.
                </p>

                {/* DETAILS */}
                <div className="text-neutral-200 mt-6 text-left space-y-2 text-lg">
                    <p><span className="font-semibold text-yellow-300">Event 1:</span> FIASCOde 2.0 – reverse logic debugging challenge</p>
                    <p><span className="font-semibold text-yellow-300">Event 2:</span> Random(Compile) 2.0 – compiler-shuffled coding round</p>
                    <p><span className="font-semibold text-yellow-300">Prize Pool:</span> ₹20,000+</p>
                    <p><span className="font-semibold text-yellow-300">Event Dates:</span> 18 and 19 December 2025</p>
                    <p><span className="font-semibold text-yellow-300">Prelims Deadline:</span> 3 December 2025</p>
                    <p><span className="font-semibold text-yellow-300">Registration:</span> Free</p>
                </div>

                {/* BUTTONS */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="https://unstop.com/o/AEJeKSC?lb=gOD6yaho"
                        target="_blank"
                        className="px-6 py-3 bg-yellow-500 text-black rounded-xl font-semibold
                            hover:bg-yellow-400 transition shadow-[0_0_15px_rgba(255,200,0,0.3)]"
                    >
                        Register for FIASCOde
                    </a>

                    <a
                        href="https://unstop.com/o/SJDlc56?lb=gOD6yaho"
                        target="_blank"
                        className="px-6 py-3 bg-yellow-500 text-black rounded-xl font-semibold
                            hover:bg-yellow-400 transition shadow-[0_0_15px_rgba(255,200,0,0.3)]"
                    >
                        Register for Random(Compile)
                    </a>
                </div>
            </div>

            {/* COMING SOON SECTION */}
            <div className="mt-20 bg-neutral-900/40 border border-yellow-500/20
                rounded-2xl px-10 py-8 backdrop-blur-md shadow-[0_0_20px_rgba(255,200,0,0.15)] max-w-xl">

                <h2 className="text-3xl md:text-4xl font-semibold text-yellow-200">
                    More Events Coming Soon
                </h2>

                <p className="mt-4 text-neutral-300 leading-relaxed">
                    Additional Neuronix technical events for the 2025–2026 academic year are under
                    preparation. The schedule will be released shortly.
                </p>

                <p className="mt-3 text-neutral-400 italic">
                    Stay tuned for official announcements.
                </p>
            </div>

            {/* FOOTER */}
            <p className="mt-16 text-neutral-500 text-sm tracking-wide">
                © 2025 Neuronix · AVV Chennai · Powered by Innovation
            </p>
        </section>
    );
}
