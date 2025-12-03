"use client";

import { useState } from "react";

export default function AIClubRegistration() {
    const [result, setResult] = useState("");
    const [resultColor, setResultColor] = useState("");

    const onSubmit = async (event: any) => {
        event.preventDefault();
        setResult("Submitting your application...");
        setResultColor("text-yellow-300");

        const formData = new FormData(event.target);
        formData.append("access_key", "bf1842c7-9fff-4525-94b3-f56e783f658a");
        formData.append("subject", "New AI Club Registration");

        try {
            const response = await fetch("https://api.web3forms.com/v1/submit", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) throw new Error("network_blocked");

            const data = await response.json();

            if (data.success) {
                setResult("Application Submitted Successfully. Check your email for confirmation.");
                setResultColor("text-green-400");
                event.target.reset();
            } else {
                setResult(data.message || "Something went wrong.");
                setResultColor("text-red-400");
            }
        } catch (error: any) {
            if (error.message === "network_blocked") {
                setResult("Your network is blocking the request. Switch to mobile data and try again.");
            } else {
                setResult("Unable to submit. Please check your network and try again.");
            }
            setResultColor("text-red-400");
        }
    };

    return (
        <section
            className="min-h-screen w-full bg-black text-neutral-200 flex justify-center px-5 py-16"
            style={{ fontFamily: "var(--font)" }}
        >
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

                    <p className={`mt-3 font-medium ${resultColor}`}>{result}</p>
                </form>
            </div>
        </section>
    );
}
