import { pool } from "@/lib/db";

type Event = {
    id: number;
    title: string;
    description: string;
    registration_link: string;
    banner_url: string;
};

export const revalidate = 300; // 5 minutes cache

async function getEvents(): Promise<{
    events: Event[];
    networkError: boolean;
}> {
    try {
        const result = await pool.query(`
      SELECT id, title, description, registration_link, banner_url
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
        <section className="min-h-screen w-full bg-black flex flex-col items-center text-center px-6 py-16 relative overflow-hidden">

            {/* BACKGROUND GOLD GLOWS */}
            <div className="absolute inset-0 -z-10 opacity-40 pointer-events-none">
                <div className="absolute top-0 left-10 w-72 h-72 bg-yellow-400/30 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-10 w-80 h-80 bg-amber-500/30 rounded-full blur-3xl" />
            </div>

            {/* PAGE TITLE */}
            <h1
                className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-wide
        bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-500
        bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,200,0,0.4)]"
            >
                Neuronix Events
            </h1>

            <p className="text-yellow-300/80 text-lg md:text-xl mt-4 tracking-wide">
                Major technical events from the Neuronix Club
            </p>

            {/* NETWORK ERROR MESSAGE */}
            {networkError && (
                <div
                    className="mt-12 bg-red-900/30 border border-red-500/30
          rounded-2xl px-8 py-6 backdrop-blur-md
          shadow-[0_0_20px_rgba(255,80,80,0.15)] max-w-xl"
                >
                    <h2 className="text-2xl font-semibold text-red-300">
                        Network Restriction Detected
                    </h2>

                    <p className="mt-3 text-neutral-200 leading-relaxed">
                        Your current network appears to be blocking access to our event servers.
                    </p>

                    <p className="mt-2 text-neutral-300">
                        Please switch to{" "}
                        <span className="text-red-300 font-medium">mobile data</span> or connect
                        to a different Wi-Fi network, then refresh the page.
                    </p>
                </div>
            )}

            {/* EVENTS / FALLBACK */}
            {!networkError && events.length === 0 && (
                <div
                    className="mt-20 bg-neutral-900/40 border border-yellow-500/20
          rounded-2xl px-10 py-8 backdrop-blur-md
          shadow-[0_0_20px_rgba(255,200,0,0.15)] max-w-xl"
                >
                    <h2 className="text-3xl md:text-4xl font-semibold text-yellow-200">
                        Events are Coming Soon
                    </h2>

                    <p className="mt-4 text-neutral-300 leading-relaxed">
                        Please stay tuned.
                    </p>
                </div>
            )}

            {/* EVENT CARDS */}
            {!networkError &&
                events.map((event) => (
                    <div
                        key={event.id}
                        className="mt-16 bg-neutral-900/60 border border-yellow-500/30
            rounded-2xl p-8 max-w-3xl w-full backdrop-blur-md
            shadow-[0_0_25px_rgba(255,200,0,0.15)]"
                    >
                        {/* POSTER */}
                        <div className="flex justify-center">
                            <img
                                src={event.banner_url}
                                alt={event.title}
                                className="rounded-2xl border border-yellow-500/20
                w-full max-w-lg shadow-[0_0_20px_rgba(255,215,0,0.15)]"
                            />
                        </div>

                        {/* TITLE */}
                        <h2 className="text-4xl font-bold text-yellow-300 mt-8 tracking-wide">
                            {event.title}
                        </h2>

                        {/* DESCRIPTION */}
                        <p className="text-neutral-300 mt-4 leading-relaxed text-lg">
                            {event.description}
                        </p>

                        {/* CTA */}
                        <div className="mt-8 flex justify-center">
                            <a
                                href={event.registration_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-yellow-500 text-black
                rounded-xl font-semibold hover:bg-yellow-400
                transition shadow-[0_0_15px_rgba(255,200,0,0.3)]"
                            >
                                Register Now
                            </a>
                        </div>
                    </div>
                ))}

            {/* FOOTER */}
            <p className="mt-16 text-neutral-500 text-sm tracking-wide">
                © 2025 Neuronix · AVV Chennai · Powered by Innovation
            </p>
        </section>
    );
}
