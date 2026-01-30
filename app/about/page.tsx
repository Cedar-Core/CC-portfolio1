import type { Metadata } from "next";
import { Navbar, Footer } from "@/components/ui-components";
import AboutHero from "@/components/ui-components/about/AboutHero";
import OriginSection from "@/components/ui-components/about/OriginSection";
import JourneyTimeline from "@/components/ui-components/about/JourneyTimeline";
import TeamScrollSection from "@/components/ui-components/about/TeamScrollSection";

export const metadata: Metadata = {
  title: "About Us | Cedar Core",
  description:
    "We build the systems that other software depends on. Backend-first architecture built for decades, not deadlines.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <AboutHero />
        <TeamScrollSection />
        <JourneyTimeline />
        <OriginSection />
      </main>
      <Footer />
    </>
  );
}
