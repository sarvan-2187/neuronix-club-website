"use client";

import EventCarousel from "@/components/EventCarousel";

const EVENTS = [
    {
        title: "Hack-a-ruckus v2.0",
        description: "The Second intense chapter of Hack-a-ruckus with fresh ideas and fierce competition.",
        folder: "Hack-a-ruckus",
        imageCount: 6,
    },
    {
        title: "Hack-a-ruckus v1.0",
        description: "The First intense chapter of Hack-a-ruckus with fresh ideas and fierce competition.",
        folder: "Hack-a-ruckus-1",
        imageCount: 5,
    },
];

export default function PastEventsPage() {
    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12 sm:space-y-20 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* PAGE TITLE */}
            <div className="relative z-10">
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
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 text-center mb-4 animate-fade-in px-4">
                    Past Events
                </h1>
                <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"></div>
            </div>

            {EVENTS.map((event, idx) => (
                <EventCarousel
                    key={idx}
                    title={event.title}
                    description={event.description}
                    folder={event.folder}
                    imageCount={event.imageCount}
                />
            ))}

            <style jsx global>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(-20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 1s ease-out;
                }
            `}</style>
        </section>
    );

}
