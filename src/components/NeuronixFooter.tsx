export default function NeuronixFooter() {
    return (
        <footer className="w-full bg-black py-10 flex flex-col items-center text-center border-t border-yellow-500/20">

            {/* TITLE */}
            <h3 className="text-xl font-semibold tracking-wide 
      bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-500 bg-clip-text text-transparent">
                Stay Connected
            </h3>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-6 mt-5">

                {/* INSTAGRAM */}
                <a
                    href="https://www.instagram.com/neuro.nixai25?igsh=Y2VydGRoOGt1ZG1u"
                    target="_blank"
                    className="px-2 py-1.5 rounded-sm border border-yellow-500/40 text-yellow-300 
          hover:bg-yellow-400/10 hover:border-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.3)] 
          hover:shadow-[0_0_15px_rgba(250,204,21,0.5)] transition"
                >
                    <i className="bi bi-instagram text-2xl"></i>
                </a>

                {/* LINKEDIN */}
                <a
                    href="https://www.linkedin.com/in/neuronix-ai-avv-07b35b381/"
                    target="_blank"
                    className="px-2 py-1.5 rounded-sm border border-yellow-500/40 text-yellow-300 
          hover:bg-yellow-400/10 hover:border-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.3)] 
          hover:shadow-[0_0_15px_rgba(250,204,21,0.5)] transition"
                >
                    <i className="bi bi-linkedin text-2xl"></i>
                </a>

                {/* EMAIL */}
                <a
                    href="mailto:Neuronix@ch.amrita.edu"
                    className="px-2 py-1.5 rounded-sm border border-yellow-500/40 text-yellow-300 
          hover:bg-yellow-400/10 hover:border-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.3)] 
          hover:shadow-[0_0_15px_rgba(250,204,21,0.5)] transition"
                >
                    <i className="bi bi-envelope text-2xl"></i>
                </a>

            </div>

            {/* COPYRIGHT */}
            <p className="text-neutral-500 text-sm mt-6">
                © 2025 Neuronix · AVV Chennai
            </p>

            {/* LOAD BOOTSTRAP ICONS (if not loaded globally) */}
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
            />
        </footer>
    );
}
