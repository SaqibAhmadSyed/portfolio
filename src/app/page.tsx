"use client";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from './components/ContactSection';
import { TracingBeam } from './components/TracingBeam';
import { AuroraBackground } from './components/AuroraBackground';
// import EmailSection from "./components/EmailSection";
// import Footer from "./components/Footer";
// import AchievementsSection from "./components/AchievementsSection";


export default function Home() {
  return (
    <AuroraBackground>
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      
      <div className="container mx-auto px-12 py-32">

        <HeroSection />
        <TracingBeam className="pl-10">
        <AboutSection />
        <ProjectSection />        
        </TracingBeam>
        <ContactSection firstName="john"/>

      </div>
  
    </main>
  </AuroraBackground>
  );
}
