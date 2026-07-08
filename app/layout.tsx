import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk, Unbounded } from "next/font/google";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { AmbientBackground } from "@/components/layout/ambient-background";
import { LeadModalProvider } from "@/components/layout/lead-modal";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

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
  metadataBase: new URL("https://digitalhub360.in"),
  title: {
    default: "DigitalHub360 — Best Digital Marketing Agency in Bangalore",
    template: "%s — DigitalHub360"
  },
  description:
    "DigitalHub360 is a Bangalore digital marketing agency for SEO, performance ads, websites, social media, and AI video — 360° growth systems engineered to convert."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${unbounded.variable} ${space.variable} font-body bg-background text-foreground antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          <LeadModalProvider>
            <AmbientBackground />
            <SiteHeader />
            <div className="pt-20">{children}</div>
            <SiteFooter />
          </LeadModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
