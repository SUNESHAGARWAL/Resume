import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GeometricBackground from "@/components/GeometricBackground";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <GeometricBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Achievements />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
