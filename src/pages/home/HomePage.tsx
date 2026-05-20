import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import SiteLayout from "../../components/layout/SiteLayout";
import SkillsSection from "./components/SkillsSection";

function HomePage() {
  return (
    <SiteLayout>
      <main className="site-main">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </SiteLayout>
  );
}

export default HomePage;
