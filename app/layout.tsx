import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

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

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <>{/* Global custom cursor for all pages */}
            {children}
            {/* Add global cursor at the end of body */}
            {/* If you want to conditionally render GlobalCursor on client side, use dynamic import from 'next/dynamic' */}
            {/* Example: */}
            {/* const GlobalCursor = dynamic(() => import('./GlobalCursor'), { ssr: false }); */}
            {/* <GlobalCursor /> */}
          </>
        </ThemeProvider>
      </body>
    </html>
  );
}
