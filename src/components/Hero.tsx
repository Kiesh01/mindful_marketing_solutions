import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MapPin, SealCheck, WhatsappLogo } from "@phosphor-icons/react";
import { BRAND, LENSES, MEDIA_IMAGE, RETAIL_IMAGE, STATS } from "@/data/content";
import type { Audience } from "@/types";

interface HeroProps {
  audience: Audience;
  onAudienceChange: (audience: Audience) => void;
}

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero({ audience, onAudienceChange }: HeroProps) {
  const reduce = useReducedMotion();
  const lens = LENSES[audience];
  const image = audience === "commercial" ? RETAIL_IMAGE : MEDIA_IMAGE;

  const waHref = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
    `Hello Mindful Marketing, I would like to discuss a ${audience === "commercial" ? "commercial brand" : "NGO"} pilot across East Africa.`,
  )}`;

  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-40 h-[420px] w-[420px] rounded-full bg-surface-tint blur-3xl"
      />
      <div className="container-shell relative pt-14 pb-16 md:pt-24 md:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <div
              role="group"
              aria-label="Choose your perspective"
              className="inline-flex items-center gap-1 rounded-full border border-border bg-card/80 p-1 text-xs shadow-sm"
            >
              {(["commercial", "ngo"] as Audience[]).map((id) => (
                <button
                  key={id}
                  type="button"
                  aria-pressed={audience === id}
                  onClick={() => onAudienceChange(id)}
                  className={`rounded-full px-3.5 py-1.5 font-medium transition-colors ${
                    audience === id
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {LENSES[id].tab}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={audience}
                initial={reduce ? undefined : { opacity: 0, y: 14 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                <h1 className="mt-6 max-w-[19ch] text-[2.6rem] font-semibold leading-[1.02] tracking-tight sm:text-5xl md:text-6xl">
                  {lens.headline}
                </h1>
                <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {lens.subline}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-px active:scale-[0.98]"
              >
                {lens.primaryCta}
                <ArrowRight size={16} weight="bold" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                {lens.secondaryCta}
              </a>
              <a
                href={waHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-2 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <WhatsappLogo size={17} weight="fill" />
                WhatsApp the Nairobi desk
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <img
                  src={image}
                  alt={
                    audience === "commercial"
                      ? "Retail team arranging FMCG products on an East African supermarket shelf"
                      : "Community health worker briefing women under a mango tree in rural East Africa"
                  }
                  className="aspect-[4/5] w-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-5 -left-4 w-[240px] rounded-xl border border-border bg-card p-4 shadow-lg sm:left-6">
                <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                  <SealCheck size={15} weight="fill" className="text-primary" />
                  Evidence first
                </div>
                <p className="mt-2 text-sm leading-snug text-foreground">
                  {lens.focus[0].value}
                </p>
                <p className="mt-2 flex items-center gap-1.5 text-[11px] text-muted-foreground">
                  <MapPin size={12} weight="fill" /> {BRAND.address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-y border-border bg-card/60">
        <dl className="container-shell grid grid-cols-2 gap-y-8 py-8 md:grid-cols-4 md:py-10">
          {STATS.map((stat) => (
            <div key={stat.label} className="px-1">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-display text-3xl font-semibold tracking-tight text-foreground">
                  {stat.value}
                </span>
                <span className="mt-1 block max-w-[22ch] text-xs leading-relaxed text-muted-foreground">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}