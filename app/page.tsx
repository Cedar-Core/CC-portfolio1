import {
  Navbar,
  EntrySection,
  IdentityStatement,
  CapabilityFlow,
  AboutSection,
  Footer,
} from "@/components/ui-components";

export default function Home() {
  return (
    <>
      {/* Atmospheric background - Deep, layered */}

      <Navbar />
      <main className="relative z-10">
        {/* 1. Entry State - System Awakening */}
        <EntrySection />

        {/* 2. Identity Statement - Core Signal */}
        <IdentityStatement />

        {/* 3. What We Do - Capability Flow */}
        <CapabilityFlow />

        {/* 4. How We Think - Architecture Mindset */}
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
