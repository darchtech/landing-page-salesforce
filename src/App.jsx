import { useDarkMode } from "./hooks";

// Layout
import { Navbar, Footer, StickyBar, ScrollToTop } from "./components/layout";

// Sections
import {
  HeroSection,
  CountdownSection,
  ValueSection,
  CertificateSection,
  MentorSection,
  AboutSection,
  CoursesSection,
  AudienceSection,
  FinalCTASection,
} from "./components/sections";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  const { dark, toggleDark } = useDarkMode();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Global layout */}
      <BrowserRouter>
        <Navbar dark={dark} toggleDark={toggleDark} />

        {/* Page sections */}
        <main>
          <HeroSection />
          <MentorSection />
          <CountdownSection />
          <ValueSection />
          <CertificateSection />
          <AboutSection />
          <CoursesSection />
          <AudienceSection />
          <FinalCTASection />
        </main>

        <Footer />

        {/* Persistent UI overlays */}
        <StickyBar />
        <ScrollToTop />
      </BrowserRouter>
    </div>
  );
}
