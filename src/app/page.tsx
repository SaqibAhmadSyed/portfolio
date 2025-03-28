"use client";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { AuroraBackground } from "./components/AuroraBackground";

export default function Home() {
  return (
    <div className="bg-[#171717]">
      <Navbar />
        <main className="relative flex flex-col min-h-screen">
          <AuroraBackground>
          <div className="container mx-auto px-12 py-28 relative z-10">
          
            <div id="home" className="home">
              <HeroSection />
            </div>
            <div id="about" className="about">
              <AboutSection />
            </div>
            <div id="projects" className="projects">
              <ProjectSection />
            </div>
            <div id="contact" className="contact">
              <ContactSection />
            </div>
          </div>
          </AuroraBackground>
        </main>
        <Footer />
    </div>
  );
}
