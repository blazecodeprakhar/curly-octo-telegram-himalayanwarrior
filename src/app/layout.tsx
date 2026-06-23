import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Himalayan Warrior | Trusted & Safest Trekking Organization in Uttarakhand",
  description: "Explore the magical trails of the Garhwal & Kumaon Himalayas with safety and comfort. Offering premium treks like Kedarkantha, Brahmatal, Har Ki Dun, Valley of Flowers, and Bali Pass.",
  keywords: ["trekking", "Uttarakhand", "Himalayas", "Kedarkantha Trek", "Brahmatal Trek", "Valley of Flowers", "Har Ki Dun", "adventure travel", "Dehradun treks"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-full flex flex-col antialiased bg-background text-foreground`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
