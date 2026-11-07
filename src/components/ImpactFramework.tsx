import { motion, useReducedMotion } from "framer-motion";
import { Globe, MapPin, SealCheck, ShieldCheck, FileText } from "@phosphor-icons/react";
import { FRAMEWORKS, ROADMAP, SDGS } from "@/data/content";

const CITIES = [
  "Nairobi",
  "Mombasa",
  "Kisumu",
  "Kampala",
  "Dar es Salaam",
  "Kigali",
];

const EASE = [0.16, 1, 0.3, 1] as const;

interface ImpactProps {
  onOpenPolicy: (slug: string) => void;
}

export default function ImpactFramework({ onOpenPolicy }: ImpactProps) {
  const reduce = useReducedMotion();

  return (
    <section id="impact" className="scroll-mt-24 py-16 md:py-24">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <h2 className="max-w-md text-3xl font-semibold tracking-tight sm:text-4xl">
              A four-stage protocol you can audit.
            </h2>
            <p className="mt-4 max-w-[46ch] text-base leading-relaxed text-muted-foreground">
              Instead of a logo wall, here is the process every pilot runs through,
              with the documents produced at each gate.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {CITIES.map((city) => (
                <span
                  key={city}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground"
                >
                  <MapPin size={12} weight="fill" className="text-primary" />
                  {city}
                </span>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              In-country teams in Kenya, Tanzania, Uganda and Rwanda, plus remote
              delivery across the wider region.
            </p>
          </div>

          <ol className="lg:col-span-7">
            {ROADMAP.map((stage, index) => (
              <motion.li
                key={stage.title}
                initial={reduce ? undefined : { opacity: 0, x: -12 }}
                whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.45, delay: index * 0.07, ease: EASE }}
                className="relative border-l border-border pl-6 pb-9 last:pb-0"
              >
                <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-background bg-primary" />
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-lg font-semibold tracking-tight">{stage.title}</h3>
                  <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                    {stage.stage} / {stage.duration}
                  </span>
                </div>
                <p className="mt-2 max-w-[54ch] text-sm leading-relaxed text-muted-foreground">
                  {stage.detail}
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {stage.outputs.map((output) => (
                    <li
                      key={output}
                      className="rounded-md bg-secondary px-2.5 py-1 text-[11px] text-secondary-foreground"
                    >
                      {output}
                    </li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </ol>
        </div>

        <div className="mt-16 border-t border-border pt-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h3 className="text-2xl font-semibold tracking-tight">
              Governance that travels with the money
            </h3>
            <button
              type="button"
              onClick={() => onOpenPolicy("cross-sector")}
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              <FileText size={15} weight="bold" />
              Read the full policy set
            </button>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {FRAMEWORKS.map((framework, index) => (
              <motion.article
                key={framework.name}
                initial={reduce ? undefined : { opacity: 0, y: 16 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: index * 0.05, ease: EASE }}
                className={`rounded-2xl border border-border p-5 sm:p-6 ${
                  index === 0 ? "bg-surface-tint" : "bg-card"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck size={20} weight="duotone" className="text-primary" />
                    <h4 className="text-base font-semibold tracking-tight">
                      {framework.name}
                    </h4>
                  </div>
                  <span className="shrink-0 rounded-full bg-background px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                    {framework.reference}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {framework.body}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {framework.points.map((point) => (
                    <li key={point} className="flex gap-2 text-xs text-muted-foreground">
                      <SealCheck size={14} weight="fill" className="mt-0.5 shrink-0 text-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-card p-6 sm:p-8">
          <div className="flex items-center gap-2.5">
            <Globe size={20} weight="duotone" className="text-primary" />
            <h3 className="text-lg font-semibold tracking-tight">SDG alignment register</h3>
          </div>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {SDGS.map((sdg) => (
              <li key={sdg.goal} className="rounded-xl border border-border bg-background p-3.5">
                <span className="font-display text-lg font-semibold text-primary">
                  {sdg.goal}
                </span>
                <p className="mt-1 text-sm font-medium text-foreground">{sdg.title}</p>
                <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
                  {sdg.note}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}