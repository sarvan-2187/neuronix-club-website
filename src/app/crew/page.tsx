'use client';

import { useState } from "react";
import { Mail, Copy } from "lucide-react";

interface Member {
    name: string;
    role: string;
    email: string;
    linkedin?: string;
    image: string;
    logo?: string;   // ⭐ FIXED – now logo works
}

const teamMembers: Member[] = [
    { name: "Madhumita", role: "President", email: "ch.sc.u4aie23027@ch.students.amrita.edu", linkedin: "https://www.linkedin.com/in/madhumita-k-a13475291/", image: "/madhumita.png", logo: "/logo.png" },
    { name: "Adithya", role: "Vice President", email: "ch.sc.u4aie23001@ch.students.amrita.edu", linkedin: "https://www.linkedin.com/in/adithya-r-63b216291/", image: "/adithya.png", logo: "/logo.png" },

    { name: "Bhanuvilasith", role: "Coordinator", email: "ch.sc.u4aie24008@ch.students.amrita.edu", linkedin: "https://www.linkedin.com/in/bhanu-vilasith-chilka/", image: "/bhanuvilasith.png", logo: "/logo.png" },
    { name: "Divija", role: "Coordinator", email: "ch.sc.u4cse23152@ch.students.amrita.edu", linkedin: "https://www.linkedin.com/in/divija-thupalli-samireddy-712725316", image: "/divija.png", logo: "/logo.png" },
    { name: "Elakkiya", role: "Coordinator", email: "ch.sc.u4cse23216@ch.students.amrita.edu", linkedin: "https://www.linkedin.com/in/elakkiya-sivadevan-b5b909288", image: "/elakkiya.png", logo: "/logo.png" },
    { name: "Gandhimathi", role: "Coordinator", email: "ch.sc.u4aie24001@ch.students.amrita.edu", image: "/gandhimathi.png", logo: "/logo.png" },
    { name: "Himanshu", role: "Coordinator", email: "ch.sc.u4aie23028@ch.students.amrita.edu", linkedin: "https://www.linkedin.com/in/madhunala-himanshu", image: "/himanshu.png", logo: "/logo.png" },
    { name: "Hiroshini", role: "Coordinator", email: "ch.sc.u4aie24026@ch.students.amrita.edu", linkedin: "https://www.linkedin.com/in/k-hiroshini-a15905398", image: "/hiroshini.png", logo: "/logo.png" },
    { name: "Jothikrishna", role: "Coordinator", email: "ch.sc.u4aie23022@ch.students.amrita.edu", linkedin: "https://www.linkedin.com/in/jothi-krishna-3322452b8", image: "/jothikrishna.png", logo: "/logo.png" },
    { name: "Kaarthikeyan", role: "Coordinator", email: "ch.sc.u4aie24030@ch.students.amrita.edu", linkedin: "https://www.linkedin.com/in/kaarthikeyanarunachalam/", image: "/kaarthikeyan.png", logo: "/logo.png" },
    { name: "Kiranesh", role: "Coordinator", email: "ch.sc.u4aie24006@ch.students.amrita.edu", linkedin: "https://www.linkedin.com/in/b-j-kiranesh-56b733323", image: "/kiranesh.png", logo: "/logo.png" },
    { name: "Kishore", role: "Coordinator", email: "ch.sc.u4aie23026@ch.students.amrita.edu", linkedin: "https://www.linkedin.com/in/kishore-n-s-925310305", image: "/kishore.png", logo: "/logo.png" },
    { name: "Lakshya", role: "Coordinator", email: "ch.sc.u4cys24030@ch.students.amrita.edu", linkedin: "https://www.linkedin.com/in/lakshya-sasikumar-7bb659342/", image: "/lakshya.png", logo: "/logo.png" },
    { name: "Logesh", role: "Coordinator", email: "ch.en.u4mee23013@ch.students.amrita.edu", linkedin: "https://www.linkedin.com/in/logeshsankar/", image: "/logesh.png", logo: "/logo.png" },
    { name: "Madhuvanti", role: "Coordinator", email: "ch.sc.u4cse23032@ch.students.amrita.edu", linkedin: "https://www.linkedin.com/in/madhuvanthik/", image: "/madhuvanti.png", logo: "/logo.png" },
    { name: "Mukesh Charan", role: "Coordinator", email: "ch.sc.u4aie23032@ch.students.amrita.edu", linkedin: "https://www.linkedin.com/in/mukesh-charan-m/", image: "/mukeshcharan.png", logo: "/logo.png" },
    { name: "N Sarvan Kumar", role: "Coordinator", email: "ch.sc.u4cse24130@ch.students.amrita.edu", linkedin: "https://www.linkedin.com/in/nagarampalli-sarvan-kumar/", image: "/sarvan.png", logo: "/logo.png" },
    { name: "Nithyashankar", role: "Coordinator", email: "ch.sc.u4aie23048@students.amrita.edu", linkedin: "www.linkedin.com/in/nithyashankars83", image: "/nithyashankar.png", logo: "/logo.png" },
    { name: "Praveena", role: "Coordinator", email: "ch.sc.u4cse23234@ch.students.amrita.edu", linkedin: "https://www.linkedin.com/in/praveena-muniappan", image: "/praveena.png", logo: "/logo.png" },
    { name: "Ridhanyaa", role: "Coordinator", email: "ch.en.u4cce23033@ch.students.amrita.edu", linkedin: "https://www.linkedin.com/in/ridhanyaa-m-s-204b3827a/", image: "/ridhanyaa.png", logo: "/logo.png" },
    { name: "Rohithmugalya", role: "Coordinator", email: "ch.sc.u4aie23047@ch.students.amrita.edu", linkedin: "https://www.linkedin.com/in/rohit-mugalya/", image: "/rohitmugalya.png", logo: "/logo.png" },
    { name: "Sairaman", role: "Coordinator", email: "ch.sc.u4aie23010@ch.students.amrita.edu", linkedin: "https://www.linkedin.com/in/sai-raman-d-0b1917342", image: "/sairaman.png", logo: "/logo.png" },
    { name: "Sanjjey", role: "Coordinator", email: "ch.sc.u4aie23050@ch.students.amrita.edu", linkedin: "https://www.linkedin.com/in/sanjjeyarumugam/", image: "/sanjjey.png", logo: "/logo.png" },
    { name: "Sriharivasan", role: "Coordinator", email: "ch.sc.u4aie23053@ch.students.amrita.edu", linkedin: "https://www.linkedin.com/in/sri-hari-vasan-5bb058285/", image: "/sriharivasan.png", logo: "/logo.png" },
    { name: "Tinku Sriram", role: "Coordinator", email: "ch.sc.u4cys23040@ch.students.amrita.edu", linkedin: "https://www.linkedin.com/in/tinku-sriram-389153290/", image: "/tinku.png", logo: "/logo.png" },
    { name: "Vigneshwarran", role: "Coordinator", email: "ch.sc.u4aie23061@ch.students.amrita.edu", linkedin: "https://www.linkedin.com/in/vigneshwarran-s-82084b287", image: "/vigneshwarran.png", logo: "/logo.png" },
];

// Generate ID
const generateNXID = () =>
    `NX-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

export default function TeamPage() {
    const [copied, setCopied] = useState<string | null>(null);

    const copyEmail = async (email: string) => {
        await navigator.clipboard.writeText(email);
        setCopied(email);
        setTimeout(() => setCopied(null), 1500);
    };

    return (
        <section className="min-h-screen w-full bg-[linear-gradient(135deg,#0f0f0f_25%,#151515_25%,#151515_50%,#0f0f0f_50%,#0f0f0f_75%,#151515_75%,#151515_100%)] bg-[length:20px_20px] text-neutral-200 flex justify-center px-5 py-16">
            <div className="max-w-6xl w-full">

                {/* HEADER */}
                <div className="text-center mb-16">
                    <img src="/logo.png" className="h-20 mx-auto opacity-90" />
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-200 text-transparent bg-clip-text mt-4">
                        Crew 2025
                    </h1>
                    <p className="text-neutral-500 mt-2">Meet the people who make it happen</p>
                </div>

                {/* LEADERSHIP */}
                <h2 className="text-2xl font-bold text-yellow-400 mb-6 text-center">
                    Leadership
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
                    {teamMembers.slice(0, 2).map((m) => (
                        <div
                            key={m.name}
                            className="relative bg-neutral-900/80 border border-yellow-400/60 rounded-2xl p-8 
                       shadow-[0_0_40px_rgba(255,220,100,0.25)]
                       transition-all duration-300 cursor-pointer"
                            onMouseMove={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const x = e.clientX - rect.left;
                                const y = e.clientY - rect.top;
                                const rotateX = (y - rect.height / 2) / 30;
                                const rotateY = (rect.width / 2 - x) / 30;
                                e.currentTarget.style.transform =
                                    `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform =
                                    "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
                            }}
                        >

                            {/* TOP ROW */}
                            <div className="flex justify-between items-center mb-4">
                                <p className="text-[11px] tracking-wider text-yellow-300 font-semibold">
                                    NEURONIX LEADERSHIP ID
                                </p>
                                <img src="/chip.svg" className="w-7 opacity-90" />
                            </div>

                            {/* MAIN CONTENT */}
                            <div className="flex justify-between items-start">
                                {/* LEFT */}
                                <div className="text-sm leading-6 w-2/3">
                                    <p className="text-neutral-400">Name:</p>
                                    <p className="text-yellow-200 font-semibold text-lg flex items-center gap-2">
                                        {m.name}

                                        {m.linkedin && (
                                            <a href={m.linkedin} target="_blank">
                                                <img src="/linkedin.svg" className="h-5 opacity-90 hover:opacity-100 transition" />
                                            </a>
                                        )}
                                    </p>

                                    <p className="text-neutral-400 mt-3">Role:</p>
                                    <p className="text-yellow-300 font-medium">{m.role}</p>

                                    <p className="text-neutral-400 mt-3">Email:</p>
                                    <div className="flex items-center gap-2 text-neutral-300">
                                        <span className="text-[11px] whitespace-nowrap overflow-hidden text-ellipsis max-w-[210px]">
                                            {m.email}
                                        </span>

                                        <Copy
                                            size={14}
                                            className="cursor-pointer hover:text-yellow-400 flex-shrink-0"
                                            onClick={() => copyEmail(m.email)}
                                        />
                                    </div>



                                    {copied === m.email && (
                                        <p className="text-green-400 text-[10px] mt-1">Copied!</p>
                                    )}
                                </div>

                                {/* RIGHT */}
                                <div className="flex flex-col items-center">
                                    <img
                                        src={m.image}
                                        className="w-24 h-24 rounded-md border border-yellow-500 object-cover shadow-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                {/* COORDINATORS */}
                <h2 className="text-2xl font-bold text-yellow-300 mb-6 text-center">
                    Coordinators
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
                    {teamMembers.slice(2).map((m) => (
                        <div
                            key={m.name}
                            className="relative bg-neutral-900/70 border border-yellow-500/40 rounded-2xl p-8 
                       shadow-[0_0_30px_rgba(250,204,21,0.15)]
                       transition-all duration-300 cursor-pointer"
                            onMouseMove={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const x = e.clientX - rect.left;
                                const y = e.clientY - rect.top;
                                const rotateX = (y - rect.height / 2) / 30;
                                const rotateY = (rect.width / 2 - x) / 30;
                                e.currentTarget.style.transform =
                                    `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform =
                                    "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
                            }}
                        >

                            {/* TOP ROW */}
                            <div className="flex justify-between items-center mb-4">
                                <p className="text-[11px] tracking-wider text-yellow-300">
                                    NEURONIX COORDINATOR ID
                                </p>
                                <img src="/chip.svg" className="w-7 opacity-80" />
                            </div>

                            {/* MAIN CONTENT */}
                            <div className="flex justify-between items-start">

                                {/* LEFT SIDE */}
                                <div className="text-sm leading-6 w-2/3">
                                    <p className="text-neutral-400">Name:</p>
                                    <p className="text-yellow-200 font-semibold text-lg flex items-center gap-2">
                                        {m.name}

                                        {m.linkedin && (
                                            <a href={m.linkedin} target="_blank">
                                                <img src="/linkedin.svg" className="h-5 opacity-90 hover:opacity-100 transition" />
                                            </a>
                                        )}
                                    </p>


                                    <p className="text-neutral-400 mt-3">Role:</p>
                                    <p className="text-yellow-300">{m.role}</p>

                                    <p className="text-neutral-400 mt-3">Email:</p>
                                    <div className="flex items-center gap-2 text-neutral-300">
                                        <span className="text-[11px] whitespace-nowrap overflow-hidden text-ellipsis max-w-[210px]">
                                            {m.email}
                                        </span>

                                        <Copy
                                            size={14}
                                            className="cursor-pointer hover:text-yellow-400 flex-shrink-0"
                                            onClick={() => copyEmail(m.email)}
                                        />
                                    </div>


                                    {copied === m.email && (
                                        <p className="text-green-400 text-[10px] mt-1">Copied!</p>
                                    )}
                                </div>

                                {/* RIGHT SIDE */}
                                <div className="flex flex-col items-center">
                                    <img
                                        src={m.image}
                                        className="w-24 h-24 rounded-md border border-yellow-400 object-cover shadow-md"
                                    />
                                </div>
                            </div>

                        </div>
                    ))}
                </div>


                {/* FOOTER */}
                <div className="text-center mt-16">
                    <p className="text-neutral-400">
                        Together we build • Together we learn • Together we are{" "}
                        <span className="text-yellow-400 font-bold">Neuronix</span>
                    </p>
                </div>

            </div>
        </section>
    );
}
