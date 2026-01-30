import type { Metadata } from "next";
import { Navbar, Footer } from "@/components/ui-components";
import MissionSection from "@/components/ui-components/about/MissionSection";
import TeamSection from "@/components/ui-components/about/TeamSection";
import ExperienceSection from "@/components/ui-components/about/ExperienceSection";
import { PreFooterCTA } from "@/components/ui-components/footer";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Engineering robust systems with deep roots and infinite scale. Learn about our approach to building connected digital ecosystems.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <MissionSection />
        <TeamSection />
        <ExperienceSection />
      </main>
      <Footer />
    </>
  );
}
