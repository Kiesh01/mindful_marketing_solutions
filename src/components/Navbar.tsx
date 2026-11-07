import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, List, Moon, Phone, Sun, X } from "@phosphor-icons/react";
import { BRAND } from "@/data/content";
import type { Audience } from "@/types";

const LINKS = [
  { label: "Approach", href: "#approach" },
  { label: "Services", href: "#services" },
  { label: "Impact", href: "#impact" },
  { label: "Contact", href: "#contact" },
];

interface NavbarProps {
  audience: Audience;
  onAudienceChange: (audience: Audience) => void;
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

export default function Navbar({
  audience,
  onAudienceChange,
  theme,
  onToggleTheme,
}: NavbarProps) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  const switcher = (size: "sm" | "md") => (
    <div
      role="group"
      aria-label="Choose your perspective"
      className={`flex items-center gap-1 rounded-full border border-border bg-secondary/70 p-1 ${
        size === "sm" ? "text-[11px]" : "text-xs"
      }`}
    >
      {(["commercial", "ngo"] as Audience[]).map((id) => (
        <button
          key={id}
          type="button"
          aria-pressed={audience === id}
          onClick={() => onAudienceChange(id)}
          className={`rounded-full px-3 py-1.5 font-medium transition-colors ${
            audience === id
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {id === "commercial" ? "Commercial" : "NGO and donors"}
        </button>
      ))}
    </div>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-primary text-sm font-semibold text-primary-foreground">
            M
          </span>
          <span className="leading-tight">
            <span className="block font-display text-[15px] font-semibold tracking-tight">
              Mindful Marketing
            </span>
            <span className="hidden text-[11px] text-muted-foreground sm:block">
              Nairobi, East Africa
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">{switcher("md")}</div>
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a
            href="#contact"
            className="hidden items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform active:scale-[0.98] sm:inline-flex"
          >
            Start a brief
            <ArrowUpRight size={15} weight="bold" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground lg:hidden"
          >
            {open ? <X size={17} /> : <List size={17} />}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={reduce ? undefined : { height: 0, opacity: 0 }}
            animate={reduce ? undefined : { height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] as const }}
            className="overflow-hidden border-t border-border/70 bg-background lg:hidden"
          >
            <div className="mx-auto max-w-6xl px-5 py-4 sm:px-8">
              {switcher("md")}
              <nav aria-label="Mobile" className="mt-4 grid gap-1">
                {LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-2 py-2.5 text-sm text-foreground transition-colors hover:bg-secondary"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <a
                href={`tel:${BRAND.phoneHref}`}
                onClick={() => setOpen(false)}
                className="mt-3 flex items-center gap-2 rounded-lg bg-secondary px-3 py-2.5 text-sm font-medium text-secondary-foreground"
              >
                <Phone size={15} weight="bold" />
                {BRAND.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}