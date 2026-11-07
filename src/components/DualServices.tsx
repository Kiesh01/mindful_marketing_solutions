import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Broadcast,
  Check,
  Handshake,
  Megaphone,
  TrendUp,
} from "@phosphor-icons/react";
import { TRACKS, USPS } from "@/data/content";
import type { Audience } from "@/types";
import type { Icon } from "@phosphor-icons/react";

const ICONS: Record<string, Icon> = {
  matchmaking: Handshake,
  storytelling: Megaphone,
  media: Broadcast,
  ai: Brain,
};

const EASE = [0.16, 1, 0.3, 1] as const;

export default function DualServices() {
  const [active, setActive] = useState<Audience>("commercial");
  const reduce = useReducedMotion();
  const track = TRACKS.find((item) => item.id === active) ?? TRACKS[0];

  return (
    <>
      <section id="approach" className="container-shell py-16 md:py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            One agency, two sets of books.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Commercial money and development programmes usually sit in separate
            rooms. We work in both, and we are accountable to both audiences at once.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {USPS.map((usp, index) => {
            const Icon = ICONS[usp.key] ?? Handshake;
            const featured = index === 0;
            const wide = index === 3;
            return (
              <motion.article
                key={usp.key}
                initial={reduce ? undefined : { opacity: 0, y: 18 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: EASE }}
                className={`group flex flex-col justify-between rounded-2xl border p-6 sm:p-7 ${
                  wide ? "md:col-span-2" : ""
                } ${
                  featured
                    ? "border-primary/20 bg-primary text-primary-foreground"
                    : index === 2
                      ? "border-primary/15 bg-surface-tint text-foreground"
                      : "border-border bg-card text-foreground"
                }`}
              >
                <div>
                  <div
                    className={`grid h-10 w-10 place-items-center rounded-xl ${
                      featured
                        ? "bg-primary-foreground/15 text-primary-foreground"
                        : "bg-secondary text-primary"
                    }`}
                  >
                    <Icon size={20} weight="duotone" />
                  </div>
                  <h3
                    className={`mt-5 text-lg font-semibold tracking-tight ${
                      featured ? "text-primary-foreground" : ""
                    }`}
                  >
                    {usp.title}
                  </h3>
                  <p
                    className={`mt-2 max-w-[46ch] text-sm leading-relaxed ${
                      featured ? "text-primary-foreground/80" : "text-muted-foreground"
                    }`}
                  >
                    {usp.body}
                  </p>
                </div>
                <p
                  className={`mt-6 text-[11px] font-medium uppercase tracking-wider ${
                    featured ? "text-primary-foreground/70" : "text-muted-foreground"
                  }`}
                >
                  {usp.detail}
                </p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section
        id="services"
        className="scroll-mt-24 border-y border-border bg-card/50 py-16 md:py-24"
      >
        <div className="container-shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Services, mapped to the outcome you are judged on.
            </h2>
            <div
              role="tablist"
              aria-label="Service tracks"
              className="flex gap-1 rounded-full border border-border bg-background p-1 text-xs"
            >
              {TRACKS.map((item) => (
                <button
                  key={item.id}
                  role="tab"
                  id={`tab-${item.id}`}
                  aria-selected={active === item.id}
                  aria-controls={`panel-${item.id}`}
                  onClick={() => setActive(item.id)}
                  className={`rounded-full px-3.5 py-2 font-medium transition-colors ${
                    active === item.id
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={track.id}
              id={`panel-${track.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${track.id}`}
              initial={reduce ? undefined : { opacity: 0, y: 12 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="mt-10 grid gap-8 lg:grid-cols-12"
            >
              <div className="lg:col-span-5">
                <div className="sticky top-24">
                  <div className="overflow-hidden rounded-2xl border border-border bg-background">
                    <img
                      src={track.image}
                      alt={track.imageAlt}
                      className="aspect-[5/4] w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <p className="mt-5 max-w-[40ch] text-sm leading-relaxed text-muted-foreground">
                    {track.blurb}
                  </p>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    Scope this track
                    <ArrowRight size={15} weight="bold" />
                  </a>
                </div>
              </div>

              <ul className="lg:col-span-7">
                {track.services.map((service) => (
                  <li
                    key={service.title}
                    className="border-t border-border py-7 first:border-t-0 first:pt-0"
                  >
                    <h3 className="text-xl font-semibold tracking-tight">
                      {service.title}
                    </h3>
                    <p className="mt-2 max-w-[58ch] text-sm leading-relaxed text-muted-foreground">
                      {service.summary}
                    </p>
                    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                      {service.deliverables.map((deliverable) => (
                        <li key={deliverable} className="flex gap-2 text-sm text-foreground">
                          <Check
                            size={15}
                            weight="bold"
                            className="mt-0.5 shrink-0 text-primary"
                          />
                          <span className="text-muted-foreground">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5 text-[11px] font-medium text-secondary-foreground">
                      <TrendUp size={13} weight="bold" />
                      {service.outcome}
                    </p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}