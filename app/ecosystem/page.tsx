import type { Metadata } from "next";
import {
    Navbar,
    Footer,
} from "@/components/ui-components";
import {
    EcosystemHero,
    EcosystemArchitecture,
    EcosystemFlow,
    EcosystemStack,
    EcosystemBenefits,
    EcosystemCTA,
} from "@/components/ui-components/ecosystem";

export const metadata: Metadata = {
    title: "Ecosystem",
    description:
        "Connected digital systems architecture. We build ecosystems that scale—from frontend to infrastructure, data to automation.",
};

export default function EcosystemPage() {
    return (
        <>
            <Navbar />
            <main className="relative z-10">
                <EcosystemHero />
                <EcosystemArchitecture />
                <EcosystemFlow />
                <EcosystemStack />
                <EcosystemBenefits />
                <EcosystemCTA />
            </main>
            <Footer />
        </>
    );
}
