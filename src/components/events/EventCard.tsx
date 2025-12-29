"use client";

import { useState } from "react";

type Event = {
    id: number;
    title: string;
    description: string;
    registration_link: string | null;
    banner_url: string;
    prize_money: string | null;
    event_dates: string | null;
};

/* ---------- VALIDATORS ---------- */
const isValidValue = (value?: string | null) =>
    value &&
    value.trim() !== "" &&
    !["N/A", "NA"].includes(value.trim().toUpperCase());

const isValidLink = (link?: string | null) =>
    link &&
    (link.startsWith("http://") || link.startsWith("https://"));

export default function EventCard({ event }: { event: Event }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* CARD */}
            <div
                onClick={() => setOpen(true)}
                className="cursor-pointer bg-neutral-900/60 border border-yellow-500/30 rounded-2xl overflow-hidden
        hover:scale-[1.03] transition-all shadow-[0_0_25px_rgba(255,200,0,0.15)]"
            >
                <img
                    src={event.banner_url}
                    alt={event.title}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                />

                <div className="p-4 sm:p-5">
                    <h3 className="text-lg sm:text-xl font-semibold text-yellow-300">
                        {event.title}
                    </h3>
                </div>
            </div>

            {/* MODAL */}
            {open && (
                <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center px-4 py-6 overflow-y-auto">
                    <div className="relative bg-neutral-900 border border-yellow-500/30 rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-[0_0_30px_rgba(255,200,0,0.25)] my-auto">

                        {/* CLOSE */}
                        <button
                            onClick={() => setOpen(false)}
                            className="cursor-pointer absolute top-3 right-3 sm:top-4 sm:right-4 text-yellow-300 text-2xl sm:text-3xl w-8 h-8 flex items-center justify-center hover:bg-yellow-500/10 rounded-full transition"
                        >
                            ✕
                        </button>

                        {/* IMAGE */}
                        <img
                            src={event.banner_url}
                            alt={event.title}
                            className="rounded-xl w-full max-h-[250px] sm:max-h-[350px] lg:max-h-[400px] object-contain"
                        />

                        {/* CONTENT */}
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-300 mt-5 sm:mt-6 pr-8">
                            {event.title}
                        </h2>

                        <p className="text-neutral-300 mt-3 sm:mt-4 text-base sm:text-lg leading-relaxed">
                            {event.description}
                        </p>

                        {/* META */}
                        <div className="mt-5 sm:mt-6 space-y-2 text-sm sm:text-base text-neutral-300">

                            {isValidValue(event.event_dates) && (
                                <p>
                                    <span className="text-yellow-300 font-semibold">Dates:</span>{" "}
                                    {event.event_dates}
                                </p>
                            )}

                            {isValidValue(event.prize_money) && (
                                <p>
                                    <span className="text-yellow-300 font-semibold">Prize Money:</span>{" "}
                                    {event.prize_money}
                                </p>
                            )}

                        </div>

                        {/* CTA (ONLY IF LINK IS VALID) */}
                        {isValidLink(event.registration_link) && (
                            <div className="mt-6 sm:mt-8 flex justify-center">
                                <a
                                    href={event.registration_link!}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-yellow-500 text-black rounded-xl font-semibold text-center
                  hover:bg-yellow-400 transition shadow-[0_0_15px_rgba(255,200,0,0.3)]"
                                >
                                    Register Now
                                </a>
                            </div>
                        )}

                    </div>
                </div>
            )}
        </>
    );
}
