import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SpareLab | Automotive procurement, connected",
  description:
    "A trusted automotive procurement network connecting vehicle owners, workshops, and verified parts suppliers.",
};

const themeBootstrap = `try {
  const savedTheme = localStorage.getItem("sparelab-theme");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.documentElement.dataset.theme = savedTheme || (systemPrefersDark ? "dark" : "light");
} catch {
  document.documentElement.dataset.theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scheme-light scroll-smooth scroll-pt-[88px]" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body className={`${inter.variable} ${plusJakartaSans.variable} bg-(--mint-bg) font-sans text-(--ink) antialiased transition-[background-color,color] duration-350 ease-[ease] selection:bg-(--green) selection:text-white`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
