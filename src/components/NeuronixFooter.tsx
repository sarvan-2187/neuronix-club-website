import Link from "next/link";

export default function NeuronixFooter() {
    return (
        <footer className="w-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-neutral-800 via-black to-black py-10 flex flex-col items-center text-center border-t border-yellow-500/20 relative overflow-hidden group">

            {/* Animated Glowing Orb */}
            <div className="absolute -top-24 left-[50%] -translate-x-1/2 w-[320px] h-[320px] bg-yellow-500/10 rounded-full blur-2xl pointer-events-none opacity-60 group-hover:opacity-80 transition-opacity duration-700" />

            {/* TITLE */}
            <h3 className="text-2xl md:text-3xl font-bold tracking-wide mb-2
      bg-gradient-to-r from-yellow-300 via-yellow-100 to-white bg-clip-text text-transparent drop-shadow-lg animate-gradient-x">
                Stay Connected
            </h3>

            {/* PAGE LINKS */}
            <nav className="flex gap-7 mt-3 mb-7 font-medium text-yellow-300/90 transition-all">
                <Link href="/events" className="hover:text-yellow-400/80 underline decoration-yellow-300/50 underline-offset-4 hover:scale-105 transition">
                    Events
                </Link>
                <Link href="/crew" className="hover:text-yellow-400/80 underline decoration-yellow-300/50 underline-offset-4 hover:scale-105 transition">
                    Crew
                </Link>
                <Link href="/join" className="hover:text-yellow-400/80 underline decoration-yellow-300/50 underline-offset-4 hover:scale-105 transition">
                    Join
                </Link>
            </nav>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-7 mt-2">

                {/* INSTAGRAM */}
                <a
                    href="https://www.instagram.com/neuro.nixai25?igsh=Y2VydGRoOGt1ZG1u"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-lg border border-yellow-500/40 text-yellow-300 
          hover:bg-yellow-400/20 hover:border-yellow-400 shadow-[0_0_16px_rgba(250,204,21,0.25)] 
          hover:shadow-[0_0_24px_rgba(250,204,21,0.5)] transition transform hover:-translate-y-1 hover:scale-105 backdrop-blur-md"
                >
                    <i className="bi bi-instagram text-2xl"></i>
                </a>

                {/* LINKEDIN */}
                <a
                    href="https://www.linkedin.com/in/neuronix-ai-avv-07b35b381/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-lg border border-yellow-500/40 text-yellow-300 
          hover:bg-yellow-400/20 hover:border-yellow-400 shadow-[0_0_16px_rgba(250,204,21,0.25)] 
          hover:shadow-[0_0_24px_rgba(250,204,21,0.5)] transition transform hover:-translate-y-1 hover:scale-105 backdrop-blur-md"
                >
                    <i className="bi bi-linkedin text-2xl"></i>
                </a>

                {/* EMAIL */}
                <a
                    href="mailto:Neuronix@ch.amrita.edu"
                    className="px-3 py-2 rounded-lg border border-yellow-500/40 text-yellow-300 
          hover:bg-yellow-400/20 hover:border-yellow-400 shadow-[0_0_16px_rgba(250,204,21,0.25)] 
          hover:shadow-[0_0_24px_rgba(250,204,21,0.5)] transition transform hover:-translate-y-1 hover:scale-105 backdrop-blur-md"
                >
                    <i className="bi bi-envelope text-2xl"></i>
                </a>
            </div>

            {/* COPYRIGHT */}
            <p className="text-neutral-500 text-xs mt-8 font-mono select-none tracking-wider">
                © 2025 Neuronix · AVV Chennai
            </p>

            {/* BootStrap Icons CDN, if not loaded globally */}
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
            />

            {/* Footer subtle animated underline */}
            <span className="block w-1/3 mx-auto mt-3 h-1 bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-400 rounded-lg animate-pulse opacity-40" />
        </footer>
    );
}