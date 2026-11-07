import { useEffect, useState } from "react";
import { Toaster } from "sonner";
import {
  ArrowUpRight,
  EnvelopeSimple,
  MapPin,
  Phone,
  WhatsappLogo,
} from "@phosphor-icons/react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DualServices from "@/components/DualServices";
import ImpactFramework from "@/components/ImpactFramework";
import ContactSection, { PolicyDialog } from "@/components/ContactSection";
import { BRAND, POLICIES } from "@/data/content";
import type { Audience } from "@/types";

const THEME_KEY = "mms-theme";

export default function App() {
  const [audience, setAudience] = useState<Audience>("commercial");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [policy, setPolicy] = useState<string | null>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(stored === "dark" || (!stored && prefersDark) ? "dark" : "light");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

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
        onToggleTheme={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
      />

      <main id="main" className="pb-24 sm:pb-0">
        <Hero audience={audience} onAudienceChange={setAudience} />
        <DualServices />
        <ImpactFramework onOpenPolicy={setPolicy} />
        <ContactSection
          audience={audience}
          onAudienceChange={setAudience}
          onOpenPolicy={setPolicy}
        />
      </main>

      <footer className="border-t border-border bg-background">
        <div className="container-shell grid gap-10 py-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-primary text-sm font-semibold text-primary-foreground">
                M
              </span>
              <span className="font-display text-[15px] font-semibold tracking-tight">
                {BRAND.name}
              </span>
            </div>
            <p className="mt-4 max-w-[38ch] text-sm leading-relaxed text-muted-foreground">
              A Nairobi-based agency matching commercial growth budgets with audited
              NGO programmes across East Africa, then proving both sides of the story.
            </p>
            <p className="mt-4 flex items-start gap-2 text-xs text-muted-foreground">
              <MapPin size={14} weight="fill" className="mt-0.5 shrink-0 text-primary" />
              {BRAND.address}
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-3">
            <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Explore
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                { label: "Our approach", href: "#approach" },
                { label: "Services", href: "#services" },
                { label: "Governance and impact", href: "#impact" },
                { label: "Start a brief", href: "#contact" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                    <ArrowUpRight size={12} weight="bold" className="text-muted-foreground" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Policies
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {POLICIES.map((policy) => (
                <li key={policy.slug}>
                  <button
                    type="button"
                    onClick={() => setPolicy(policy.slug)}
                    className="text-left text-foreground transition-colors hover:text-primary"
                  >
                    {policy.title}
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={`mailto:${BRAND.email}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs text-foreground"
              >
                <EnvelopeSimple size={13} weight="bold" />
                Email
              </a>
              <a
                href={`https://wa.me/${BRAND.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs text-foreground"
              >
                <WhatsappLogo size={13} weight="fill" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border">
          <div className="container-shell flex flex-col gap-2 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {BRAND.name}. Registered in Kenya.
            </p>
            <p>{BRAND.hours}</p>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur sm:hidden">
        <div className="flex items-stretch gap-2 px-3 py-2.5">
          <a
            href={`https://wa.me/${BRAND.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-border py-2.5 text-xs font-medium text-foreground"
          >
            <WhatsappLogo size={15} weight="fill" />
            WhatsApp
          </a>
          <a
            href={`tel:${BRAND.phoneHref}`}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-border py-2.5 text-xs font-medium text-foreground"
          >
            <Phone size={15} weight="bold" />
            Call
          </a>
          <a
            href="#contact"
            className="flex flex-[1.2] items-center justify-center gap-1.5 rounded-full bg-primary py-2.5 text-xs font-medium text-primary-foreground"
          >
            Book a pilot
          </a>
        </div>
      </div>

      <PolicyDialog slug={policy} onOpenChange={setPolicy} />
      <Toaster richColors position="top-right" closeButton />
    </div>
  );
}