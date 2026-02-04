import type { Metadata } from "next";
import { Navbar, Footer } from "@/components/ui-components";
import {
  ServicesHero,
  ServicesShowcase,
  ServicesCTA,
} from "@/components/ui-components/services";

export const metadata: Metadata = {
  title: "Services | Cedar Core",
  description:
    "End-to-end software solutions. From backend systems to mobile applications, we build reliable software that scales with your business.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <ServicesHero />
        <ServicesShowcase />
        <ServicesCTA />
      </main>
      <Footer />
    </>
  );
}
