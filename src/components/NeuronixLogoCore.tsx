"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), {
    ssr: false,
});

export default function NeuronixLogoCore({
  small,
  size,
}: {
  small?: boolean;
  size?: string;
}) {

    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [animationData, setAnimationData] = useState<any>(null);
    const [useLottie, setUseLottie] = useState(true);
    const [loading, setLoading] = useState(true);
    const logoRef = useRef<HTMLDivElement>(null);

    // Mouse tracking
    useEffect(() => {
        const move = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, []);

    // Load Lottie file
    useEffect(() => {
        const loadAnim = async () => {
            try {
                const res = await fetch("/robo.json");
                const text = await res.text();
                setAnimationData(JSON.parse(text));
            } catch (_) {
                setUseLottie(false);
            }
            setLoading(false);
        };
        loadAnim();
    }, []);

    return (
        <div className="relative flex justify-center">
            <div
                ref={logoRef}
                className={`
                    relative 
                    ${small
                        ? "w-[130px] h-[130px] sm:w-[170px] sm:h-[170px]"
                        : "w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[300px] md:h-[300px]"
                    }
                `}
            >
                {/* Cursor-follow gold glow */}
                {/* <motion.div
                    className="pointer-events-none absolute inset-0 z-0"
                    animate={{
                        background: `
                            radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px,
                            rgba(255,215,0,0.18),
                            transparent 40%)
                        `,
                    }}
                    transition={{ duration: 0.15, ease: "linear" }}
                /> */}

                {/* Outer gold aura */}
                <motion.div
                    className="absolute inset-0 rounded-full blur-2xl bg-yellow-500/20"
                    animate={{ opacity: [0.15, 0.35, 0.15], scale: [1, 1.15, 1] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                />

                {/* Inner pulse ring */}
                <motion.div
                    className="absolute inset-0 rounded-full bg-yellow-400/15"
                    animate={{ scale: [1, 1.12, 1], opacity: [0.25, 0.45, 0.25] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                />

                {/* Lottie or Logo fallback */}
                <div className="absolute inset-0 flex items-center justify-center">
                    {useLottie && animationData ? (
                        <Lottie animationData={animationData} loop autoplay />
                    ) : (
                        <Image
                            src="/logo.png"
                            alt="Neuronix Logo"
                            fill
                            className="object-contain drop-shadow-[0_0_30px_rgba(255,215,0,0.55)]"
                        />
                    )}
                </div>

                {/* Toggle Button */}
                <button
                    onClick={() => setUseLottie((v) => !v)}
                    className={`
                        absolute left-1/2 -translate-x-1/2
                        ${small ? "-bottom-10" : "-bottom-12"}
                        px-3 py-1 text-xs bg-yellow-600 text-black rounded-full
                        shadow-md hover:bg-yellow-500 transition opacity-60 hover:opacity-100
                        scale-90 sm:scale-100
                    `}
                >
                    {useLottie ? "Logo" : "Animation"}
                </button>
            </div>
        </div>
    );
}


