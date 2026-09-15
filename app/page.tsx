import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Achievements } from "@/components/Achievements";
import { ProjectSection } from "@/components/ProjectSection";
import { CTFSection } from "@/components/CTFSection";
import { Certifications } from "@/components/Certifications";
import { Timeline } from "@/components/Timeline";
import { Terminal } from "@/components/Terminal";
import { WriteupsSection } from "@/components/WriteupsSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <CTFSection />
        <ProjectSection />
        <Achievements />
        <Certifications />
        <Timeline />
        <WriteupsSection />
        <Terminal />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
