import type { Metadata } from "next";
import {
    Navbar,
    ContactSection,
    Footer,
} from "@/components/ui-components";

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Get in touch with Cedar Core to discuss your project. We're here to help you build reliable software that scales.",
};

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <main className="relative z-10">
                <ContactSection />
            </main>
            <Footer />
        </>
    );
}
