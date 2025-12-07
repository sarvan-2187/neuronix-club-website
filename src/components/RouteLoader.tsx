"use client";

import { usePathname } from "next/navigation";
import NeuronixLoader from "./NeuronixLoader";

export default function RouteLoader({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    // Routes that should show the loader
    const showLoader =
        pathname === "/join" ||
        pathname === "/crew" ||
        pathname === "/events";

    return (
        <>
            {showLoader && <NeuronixLoader />}
            {children}
        </>
    );
}
