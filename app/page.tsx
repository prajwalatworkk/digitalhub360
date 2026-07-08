import fs from "fs";
import path from "path";
import { CaseStudyCarousel } from "@/components/home/case-study-carousel";
import { ClientLogoMarquee } from "@/components/home/client-logo-marquee";
import { ContactSection } from "@/components/home/contact-section";
import { CreativesShowcase } from "@/components/home/creatives-showcase";
import { Hero } from "@/components/home/hero";
import { QuickPulse } from "@/components/home/quick-pulse";
import { ScrollProgressBar } from "@/components/home/scroll-progress-bar";
import { SectionNav } from "@/components/home/section-nav";
import { ServicesGrid } from "@/components/home/services-grid";
import { TestimonialCarousel } from "@/components/home/testimonial-carousel";
import { VideoAdShowcase } from "@/components/home/video-ad-showcase";

const IMAGE_EXTENSIONS = /\.(png|jpe?g|webp|avif|gif)$/i;

function getCreatives(): string[] {
  try {
    return fs
      .readdirSync(path.join(process.cwd(), "public", "creatives"))
      .filter((file) => IMAGE_EXTENSIONS.test(file))
      .sort();
  } catch {
    return [];
  }
}

export default function Home() {
  const creatives = getCreatives();

  return (
    <div className="relative">
      <ScrollProgressBar />
      <Hero />
      <QuickPulse />
      <ServicesGrid />
      <ClientLogoMarquee />
      <VideoAdShowcase />
      <CreativesShowcase images={creatives} />
      <CaseStudyCarousel />
      <TestimonialCarousel />
      <ContactSection />
      <SectionNav />
    </div>
  );
}
