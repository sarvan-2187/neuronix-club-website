"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

/* ---------- VALIDATORS ---------- */
const isValidLink = (value: string | null) => {
    if (!value) return false;
    const v = value.trim();
    if (v === "" || ["N/A", "NA"].includes(v.toUpperCase())) return false;
    return v.startsWith("http://") || v.startsWith("https://");
};

export default function AIClubRegistration() {
    const [result, setResult] = useState("");
    const [resultColor, setResultColor] = useState("");

    const onSubmit = async (event: any) => {
        event.preventDefault();

        const form = new FormData(event.target);

        /* ---------- LINK VALIDATION ---------- */
        const github = form.get("github") as string;
        const linkedin = form.get("linkedin") as string;
        const resume = form.get("resume_link") as string | null;

        if (!isValidLink(github)) {
            setResult("Please enter a valid GitHub profile link.");
            setResultColor("text-red-400");
            return;
        }

        if (!isValidLink(linkedin)) {
            setResult("Please enter a valid LinkedIn profile link.");
            setResultColor("text-red-400");
            return;
        }

        if (resume && resume.trim() !== "" && !isValidLink(resume)) {
            setResult("Resume link must be a valid Google Drive URL.");
            setResultColor("text-red-400");
            return;
        }

        setResult("Submitting your application...");
        setResultColor("text-yellow-300");

        const payload = {
            name: form.get("name"),
            roll_number: form.get("roll_number"),
            email: form.get("email"),
            phone: form.get("phone"),
            year: form.get("year"),
            knowledge_level: form.get("knowledge_level"),
            languages: form.getAll("languages"),
            github,
            linkedin,
            resume_link: resume,
            interests: form.getAll("interests"),
            motivation: form.get("motivation"),
        };

        try {
            const res = await fetch("/api/ai-club-register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                if (res.status === 0) {
                    throw new Error("network_blocked");
                }
                throw new Error("server_error");
            }

            setResult("Application submitted successfully! 🎉");
            setResultColor("text-green-400");
            event.target.reset();
        } catch (error: any) {
            if (!navigator.onLine || error.message === "network_blocked") {
                setResult(
                    "Your network seems to be blocking the request. Please switch to mobile data or try a different Wi-Fi."
                );
            } else {
                setResult(
                    "Unable to submit right now. Please try again after some time."
                );
            }
            setResultColor("text-red-400");
        }
    };


    return (
        <section
            className="min-h-screen w-full bg-black text-neutral-200 flex justify-center px-5 py-16"
            style={{ fontFamily: "var(--font)" }}
        >
            <Link
                href="/"
                className="fixed top-6 left-4 sm:left-6 z-20
                bg-neutral-900/70 border border-yellow-500/30
                text-yellow-300 px-4 py-2 rounded-xl text-sm sm:text-base
                hover:bg-yellow-500 hover:text-black
                transition shadow-[0_0_15px_rgba(255,200,0,0.25)]"
            >
                ← Back to Home
            </Link>
            <div className="max-w-2xl w-full bg-neutral-900/60 border border-yellow-500/20 rounded-2xl p-10 shadow-[0_0_35px_rgba(255,200,0,0.15)] backdrop-blur">
                
                {/* LOGO */}
                <div className="flex justify-center mb-6">
                    <img
                        src="/logo.png"
                        alt="Neuronix Logo"
                        className="h-20 w-auto opacity-90"
                    />
                </div>

                {/* TITLE */}
                <h1 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-yellow-400 to-yellow-200 text-transparent bg-clip-text">
                    Become a Neuron
                </h1>
                <p className="text-neutral-400 mt-2 text-center">
                    Join the community of builders. No prior experience required.
                </p>

                <form onSubmit={onSubmit} className="mt-10 space-y-10">

                    {/* SECTION 1 */}
                    <div>
                        <h2 className="section-title">1. Personal Details</h2>

                        <div className="space-y-5">
                            <div>
                                <label className="gold-label">Full Name</label>
                                <input name="name" required className="gold-input" placeholder="Your Name" />
                            </div>

                            <div>
                                <label className="gold-label">Roll Number / University ID</label>
                                <input name="roll_number" required className="gold-input" placeholder="CH.SC.U4CSE..." />
                            </div>

                            <div>
                                <label className="gold-label">Official Email</label>
                                <input type="email" name="email" required className="gold-input" placeholder="you@university.edu" />
                            </div>

                            <div>
                                <label className="gold-label">WhatsApp Number</label>
                                <input name="phone" required className="gold-input" placeholder="+91 98765 43210" />
                            </div>

                            <div>
                                <label className="gold-label">Year of Study</label>
                                <select name="year" required className="gold-input">
                                    <option value="">Select your year</option>
                                    <option>1st Year</option>
                                    <option>2nd Year</option>
                                    <option>3rd Year</option>
                                    <option>4th Year</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* SECTION 2 */}
                    <div>
                        <h2 className="section-title">2. Technical Skills</h2>

                        <div>
                            <label className="gold-label">AI/ML Knowledge Level</label>
                            <select name="knowledge_level" required className="gold-input">
                                <option value="">Select one</option>
                                <option>Beginner</option>
                                <option>Enthusiast</option>
                                <option>Intermediate</option>
                                <option>Advanced</option>
                            </select>
                        </div>

                        <div className="mt-5">
                            <label className="gold-label">Programming Languages</label>
                            <div className="grid grid-cols-2 gap-3 pt-1 text-neutral-300">
                                <label><input type="checkbox" name="languages" value="Python" required /> Python</label>
                                <label><input type="checkbox" name="languages" value="C/C++" /> C/C++</label>
                                <label><input type="checkbox" name="languages" value="Java" /> Java</label>
                                <label><input type="checkbox" name="languages" value="JavaScript" /> JavaScript</label>
                            </div>
                        </div>
                    </div>

                    {/* Socials */}
                    <div>
                        <h2 className="section-title">3. Social Profiles</h2>

                        <div className="space-y-5">
                            <div>
                                <label className="gold-label">GitHub Profile *</label>
                                <input
                                    name="github"
                                    required
                                    placeholder="https://github.com/username"
                                    className="gold-input"
                                />
                            </div>

                            <div>
                                <label className="gold-label">LinkedIn Profile *</label>
                                <input
                                    name="linkedin"
                                    required
                                    placeholder="https://linkedin.com/in/username"
                                    className="gold-input"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Resume Link (Optional) */}
                    <div>
                        <h2 className="section-title">4. Resume</h2>

                        <div>
                            <label className="gold-label">Resume Google Drive URL (Optional)</label>
                            <input
                                name="resume_link"
                                placeholder="https://drive.google.com/..."
                                className="gold-input"
                            />
                        </div>
                    </div>

                    {/* SECTION 4 */}
                    <div>
                        <h2 className="section-title">5. Areas of Interest</h2>

                        <div className="grid grid-cols-2 gap-3 text-neutral-300">
                            <label><input type="checkbox" name="interests" value="Generative AI" required /> Generative AI</label>
                            <label><input type="checkbox" name="interests" value="Computer Vision" /> Computer Vision</label>
                            <label><input type="checkbox" name="interests" value="NLP" /> NLP</label>
                            <label><input type="checkbox" name="interests" value="Data Science" /> Data Science</label>
                        </div>

                        <div className="mt-5">
                            <label className="gold-label">Why do you want to join?</label>
                            <textarea name="motivation" required className="gold-input h-28"></textarea>
                        </div>
                    </div>

                    {/* SUBMIT */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-gradient-to-r from-yellow-500 to-yellow-300 text-black font-semibold rounded-xl shadow-lg hover:opacity-90 transition"
                    >
                        Submit Registration
                    </button>

                    {/* APPLE-STYLE ANIMATED RESULT */}
                    <AnimatePresence mode="wait">
                        {result && (
                            <motion.p
                                key={result}
                                initial={{ opacity: 0, scale: 0.92, y: 10 }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.45,
                                        ease: [0.16, 1, 0.3, 1], // Apple-style spring ease
                                    },
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.97,
                                    y: 6,
                                    transition: { duration: 0.25 },
                                }}
                                className={`mt-3 text-center font-medium ${resultColor}`}
                            >
                                {result}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </form>
            </div>
        </section>
    );
}
