import {
  Navbar,
  HeroSection,
  AboutSection,
  ServicesSection,
  ProjectsSection,
  SkillsSection,
  ExperienceTimeline,
  ContactSection,
  Footer,
} from "@/components/ui-components";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceTimeline />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
