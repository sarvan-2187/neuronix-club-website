import { pool } from "@/lib/db";
import EventCard from "@/components/events/EventCard";
import Link from "next/link";

type Event = {
    id: number;
    title: string;
    description: string;
    registration_link: string | null;
    banner_url: string;
    prize_money: string | null;
    event_dates: string | null;
};

export const revalidate = 300; // 5 minutes cache

async function getEvents(): Promise<{
    events: Event[];
    networkError: boolean;
}> {
    try {
        const result = await pool.query(`
      SELECT
        id,
        title,
        description,
        registration_link,
        banner_url,
        prize_money,
        event_dates
      FROM events
      ORDER BY created_at DESC
    `);

        return {
            events: result.rows,
            networkError: false,
        };
    } catch (error) {
        console.error("NEON CONNECTION ERROR:", error);

        return {
            events: [],
            networkError: true,
        };
    }
}

export default async function EventsPage() {
    const { events, networkError } = await getEvents();

    return (
        <section className="min-h-screen w-full bg-black px-4 sm:px-6 py-12 sm:py-16 relative overflow-hidden">

            {/* BACKGROUND GLOWS */}
            <div className="absolute inset-0 -z-10 opacity-40 pointer-events-none">
                <div className="absolute top-0 left-10 w-72 h-72 bg-yellow-400/30 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-10 w-80 h-80 bg-amber-500/30 rounded-full blur-3xl" />
            </div>
            {/* BACK TO HOME */}
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
            {/* TITLE */}
            <h1 className="mt-20 text-center text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-500 bg-clip-text text-transparent px-2">
                Neuronix Events
            </h1>

            <p className="text-center text-yellow-300/80 text-base sm:text-lg mt-4 px-4">
                Major technical events from the Neuronix Club
            </p>

            {/* NETWORK ERROR */}
            {networkError && (
                <div className="mt-12 sm:mt-16 mx-auto max-w-xl bg-red-900/30 border border-red-500/30 rounded-2xl px-6 sm:px-8 py-6 text-center">
                    <h2 className="text-xl sm:text-2xl font-semibold text-red-300">
                        Network Restriction Detected
                    </h2>
                    <p className="mt-3 text-sm sm:text-base text-neutral-200">
                        Please switch to mobile data or another Wi-Fi network.
                    </p>
                </div>
            )}

            {/* EMPTY STATE */}
            {!networkError && events.length === 0 && (
                <div className="mt-16 sm:mt-20 mx-auto max-w-xl bg-neutral-900/40 border border-yellow-500/20 rounded-2xl px-8 sm:px-10 py-8 text-center">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-yellow-200">
                        Events Coming Soon
                    </h2>
                </div>
            )}

            {/* GRID */}
            {!networkError && events.length > 0 && (
                <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
                    {events.map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
            )}

            {/* FOOTER */}
            <p className="mt-16 sm:mt-20 text-center text-neutral-500 text-xs sm:text-sm px-4">
                © 2025 Neuronix · AVV Chennai · Powered by Innovation
            </p>
        </section>
    );
}
