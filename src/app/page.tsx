import { Hero } from "@/components/hero";
import { ProjectsSection } from "@/components/projects";
import { SkillsSection } from "@/components/skills";
import { AcademicsSection } from "@/components/academics";
import { ContactSection } from "@/components/contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <ProjectsSection />
      <SkillsSection />
      <AcademicsSection />
      <ContactSection />
    </div>
  );
}
