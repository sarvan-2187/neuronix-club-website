"use client";

import { motion } from "framer-motion";

export default function NeuronixAbout() {
    return (
        <section
            id="about"
            className=" relative w-full py-28 px-6 bg-black text-neutral-100 overflow-hidden"
        >

            {/* Gold glow accents */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
                <div className="absolute top-10 right-20 w-72 h-72 rounded-full bg-[radial-gradient(circle,#facc15_0%,transparent_60%)] blur-3xl" />
                <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-[radial-gradient(circle,#f59e0b_0%,transparent_60%)] blur-3xl" />
            </div>

            {/* Section Header */}
            <div className="relative max-w-5xl mx-auto text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-4xl sm:text-5xl font-semibold"
                >
                    About{" "}
                    <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
                        Neuronix
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto mt-4 text-neutral-300 text-lg leading-relaxed"
                >
                    The only{" "}
                    <span className="text-yellow-400 font-medium">
                        AI-oriented tech club
                    </span>{" "}
                    at <span className="font-semibold text-yellow-300">AVV Chennai</span> —
                    led by{" "}
                    <span className="text-yellow-400 font-semibold">
                        Dr. IR Oviya
                    </span>.
                    A space built for makers, innovators, and students who want to push
                    boundaries with neural systems, automation, and next-gen engineering.
                </motion.p>
            </div>

            {/* Sleek Timeline / Highlight Strip */}
            <div className="relative max-w-4xl mx-auto mt-16">
                <div className="border-l border-yellow-500/40 ml-4 pl-8 space-y-12">

                    {/* Point 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -left-[39px] top-1 w-3.5 h-3.5 rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(250,204,21,0.8)]" />
                        <h3 className="text-xl font-semibold text-neutral-200">
                            Built for Serious Tech Enthusiasts
                        </h3>
                        <p className="text-neutral-400 mt-1 leading-relaxed">
                            Not just another club — a home for AI explorers, system designers,
                            and deep-tech learners who want to create real impact.
                        </p>
                    </motion.div>

                    {/* Point 2 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -left-[39px] top-1 w-3.5 h-3.5 rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(250,204,21,0.8)]" />
                        <h3 className="text-xl font-semibold text-neutral-200">
                            AI-Driven Learning Culture
                        </h3>
                        <p className="text-neutral-400 mt-1 leading-relaxed">
                            Hands-on sessions, research sprints, agent projects, and real-world
                            applications to prepare you for the era of intelligent systems.
                        </p>
                    </motion.div>

                    {/* Point 3 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -left-[39px] top-1 w-3.5 h-3.5 rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(250,204,21,0.8)]" />
                        <h3 className="text-xl font-semibold text-neutral-200">
                            Led by Dr. IR OVIYA — Powered by Students
                        </h3>
                        <p className="text-neutral-400 mt-1 leading-relaxed">
                            The AVV Chennai Management guides the mission, while student leaders
                            drive innovation with passion, skill, and ambition.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
