import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: "Ayush's Portfolio",
  description: "Expert in web development, backend, and DSA.",
  keywords: ["web development", "backend", "DSA", "Ayush", "portfolio"],
  icons: {
    icon: "/ayush.ico",
    apple: "/ayush.jpg",
  },
  openGraph: {
    title: "Ayush's Portfolio",
    description: "Expert in web development, backend, and DSA.",
    images: [
      {
        url: "/ayush.jpg",
        width: 800,
        height: 600,
        alt: "Ayush's Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-[#FAFAFA] text-[#111111] antialiased min-h-screen selection:bg-[#111111] selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
