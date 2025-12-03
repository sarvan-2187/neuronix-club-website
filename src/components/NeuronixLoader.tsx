"use client";

import { useState, useEffect } from "react";

export default function NeuronixLoader() {
    const [progress, setProgress] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((p) => {
                if (p >= 100) {
                    clearInterval(timer);
                    setTimeout(() => setFadeOut(true), 400);
                    return 100;
                }
                return p + 2;
            });
        }, 35);

        return () => clearInterval(timer);
    }, []);

    return (
        <div
            className={`fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999] transition-opacity duration-700 ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
            style={{ fontFamily: "var(--font)" }}
        >
            {/* BACKGROUND BLINKING DOTS */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* You can add/remove dots as needed */}

                <div className="bg-dot absolute w-6 h-6 rounded-full left-[15%] top-[20%]"></div>
                <div className="bg-dot absolute w-4 h-4 rounded-full left-[70%] top-[35%]"></div>
                <div className="bg-dot absolute w-5 h-5 rounded-full left-[30%] top-[60%]"></div>
                <div className="bg-dot absolute w-3 h-3 rounded-full left-[80%] top-[75%]"></div>
                <div className="bg-dot absolute w-4 h-4 rounded-full left-[50%] top-[85%]"></div>
            </div>

            {/* LOGO TILE */}
            <div className="w-40 h-20 rounded-2xl bg-neutral-900 flex items-center justify-center border border-neutral-800 shadow-[0_0_40px_rgba(255,200,0,0.08)] mb-8 relative z-10">
                <img src="/logo.png" className="h-10 opacity-90 scale-120" />
            </div>

            {/* PROGRESS BAR */}
            <div className="w-64 h-2 bg-neutral-800 rounded-full overflow-hidden shadow-inner relative z-10">
                <div
                    className="h-full bg-gradient-to-r from-yellow-500 to-yellow-300 transition-all duration-150 ease-out"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>

            <p className="text-neutral-500 mt-3 text-sm tracking-wide relative z-10">
                Loading {progress}%
            </p>
        </div>
    );
}
