import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { PageIntro } from "@/components/ui/page-intro";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Novaaacode Portfolio | Premium Digital Studio",
  description: "A digital product studio crafting premium websites and applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-bg-primary text-text-primary selection:bg-accent selection:text-text-inverse">
        <SmoothScroll>
          <PageIntro />
          <CustomCursor />
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
