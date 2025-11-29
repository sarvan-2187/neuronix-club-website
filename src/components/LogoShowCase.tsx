"use client";

import Image from "next/image";
import { useState } from "react";

export default function LogoShowcase() {
    const [pos, setPos] = useState({ x: 150, y: 150 });

    return (
        <div
            className="relative h-80 w-full max-w-md rounded-3xl overflow-hidden border border-yellow-500/20 bg-black/40 backdrop-blur-xl shadow-[0_0_40px_rgba(250,204,21,0.15)] transition-all duration-500"
            onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setPos({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                });
            }}
        >
            {/* Soft circular pulse */}
            <div
                className="pointer-events-none absolute w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,#facc1544_0%,transparent_70%)] blur-3xl transition-all duration-500"
                style={{
                    left: pos.x - 250,
                    top: pos.y - 250,
                }}
            />

            {/* Subtle Inner Glow Frame */}
            <div className="absolute inset-0 rounded-3xl shadow-[0_0_40px_rgba(250,204,21,0.1)_inset]"></div>

            {/* Floating Logo */}
            <div className="h-full flex items-center justify-center relative">
                <div className="p-6 rounded-2x backdrop-blur-xl border border-yellow-500/20 shadow-[0_0_25px_rgba(250,204,21,0.3)] animate-float">
                    <Image
                        src="/logo.png"
                        width={160}
                        height={160}
                        alt="Neuronix Logo"
                        className="drop-shadow-[0_0_25px_rgba(250,204,21,0.5)]"
                    />
                </div>
            </div>

            {/* Bottom Caption */}
            <div className="absolute bottom-4 w-full text-center text-[11px] tracking-[0.25em] text-yellow-400/80 mono">
                N E U R O N I X    C O R E
            </div>

            {/* FLOAT ANIMATION */}
            <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
        </div>
    );
}
