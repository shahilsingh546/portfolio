import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sahil Singh — Software Engineer & Systems Builder",
  description:
    "Personal portfolio of Sahil Singh — Software Engineer at MediaTek building scalable Python & TypeScript backends, AI automation platforms, and full-stack products. Chess player & after-office sports enthusiast.",
  keywords: [
    "Sahil Singh",
    "Software Engineer",
    "MediaTek",
    "Next.js",
    "TypeScript",
    "Python",
    "Backend Engineer",
    "Full-Stack Developer",
    "PaisaFlow",
    "WriteFlow",
  ],
  openGraph: {
    title: "Sahil Singh — Software Engineer & Systems Builder",
    description:
      "Building resilient backends, AI/LLM automation, and full-stack products from zero to one.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-accent/30 selection:text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
