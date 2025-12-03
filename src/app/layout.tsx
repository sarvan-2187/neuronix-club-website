import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import RouteLoader from "@/components/RouteLoader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // full smooth range
});

export const metadata: Metadata = {
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.ico",
    },

  title: "Neuronix Club",
  description: "Official website of Neuronix Tech Club",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <RouteLoader>
          {children}
      </RouteLoader>
       
      </body>
    </html>
  );
}
