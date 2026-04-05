import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk, Unbounded } from "next/font/google";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-unbounded"
});

const space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space"
});

export const metadata: Metadata = {
  title: "DigitalHub360 — Out-of-the-Box Growth Studio",
  description: "DigitalHub360 builds 360° growth systems: brand, web, SEO, performance, and automation engineered to convert."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${unbounded.variable} ${space.variable} font-body bg-nocturne text-slate-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
