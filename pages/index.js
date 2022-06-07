import Hero from "../components/Hero";
import ProfileSection from "../components/ProfileSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <ProfileSection />
      <SkillsSection/>
      <ProjectsSection/>
      <ContactSection/>
      <Footer/>
    </>
  );
}
