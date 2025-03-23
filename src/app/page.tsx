"use client";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import { AuroraBackground } from './components/AuroraBackground';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <AuroraBackground>
      <Navbar />
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <div className="container mx-auto px-12 py-32">
          <div id="home" className="home">
            <HeroSection />
          </div>
          <div id="about" className="about">
            <AboutSection />
          </div>
          <div id="projects" className="projects">
          <ProjectSection />
          </div>
        </div>
      </main>
      <Footer />
    </AuroraBackground>
  );
}
