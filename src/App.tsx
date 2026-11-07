import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DualServices from "./components/DualServices";
import ImpactFramework from "./components/ImpactFramework";
import ContactSection from "./components/ContactSection";
import PolicyModal from "./components/PolicyModal";
import MobileStickyBar from "./components/MobileStickyBar";
import Footer from "./components/Footer";
import type { Audience } from "./types";

const THEME_KEY = "mms-theme";

export default function App() {
  const [audience, setAudience] = useState<Audience>("commercial");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [policySlug, setPolicySlug] = useState<string | null>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = stored === "dark" || (!stored && prefersDark) ? "dark" : "light";
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to main content
      </a>

      <Navbar
        audience={audience}
        onAudienceChange={setAudience}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main id="main" className="pb-24 sm:pb-0">
        <Hero
          audience={audience}
          onAudienceChange={setAudience}
        />
        <DualServices />
        <ImpactFramework
          onOpenPolicy={(slug) => setPolicySlug(slug)}
        />
        <ContactSection
          audience={audience}
          onAudienceChange={setAudience}
          onOpenPolicy={(slug) => setPolicySlug(slug)}
        />
      </main>

      <Footer
        onOpenPolicy={(slug) => setPolicySlug(slug)}
      />

      <MobileStickyBar />

      <PolicyModal
        slug={policySlug}
        onClose={() => setPolicySlug(null)}
      />
    </div>
  );
}
