import { useTheme } from "./hooks/useTheme";
import Background from "./components/Background";
import ScrollProgress from "./components/ScrollProgress";
import CustomCursor from "./components/CustomCursor";
import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import Education from "./sections/Education";
import Certifications from "./sections/Certifications";
import ResumeCta from "./sections/ResumeCta";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <Background />
      <ScrollProgress />
      <CustomCursor />
      <Nav theme={theme} onToggleTheme={toggleTheme} />

      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Education />
        <Certifications />
        <ResumeCta />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
