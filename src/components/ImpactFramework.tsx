import { FileText, Globe, MapPin, ShieldCheck } from "lucide-react";
import { FRAMEWORKS, ROADMAP, SDGS } from "../data/content";

const CITIES = [
  "Nairobi",
  "Mombasa",
  "Kisumu",
  "Kampala",
  "Dar es Salaam",
  "Kigali",
];

interface ImpactProps {
  onOpenPolicy: (slug: string) => void;
}

export default function ImpactFramework({ onOpenPolicy }: ImpactProps) {
  const policySlugs = ["kdpa", "ai-ethics", "cross-sector", "privacy"];

  return (
    <section id="impact" className="scroll-mt-24 py-16 md:py-24">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <h2 className="max-w-md text-3xl font-semibold tracking-tight sm:text-4xl font-display text-foreground">
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
                  <MapPin size={12} className="text-primary" />
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
            {ROADMAP.map((stage) => (
              <li
                key={stage.title}
                className="relative border-l border-border pl-6 pb-9 last:pb-0"
              >
                <div
                  aria-hidden="true"
                  className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full border-2 border-background bg-primary"
                />
                <div className="flex items-center gap-3 text-xs">
                  <span className="font-display font-medium text-muted-foreground">
                    {stage.stage}
                  </span>
                  <span className="text-muted-foreground">/</span>
                  <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                    {stage.duration}
                  </span>
                </div>
                <h3 className="mt-1 text-lg font-semibold tracking-tight font-display text-foreground">
                  {stage.title}
                </h3>
                <p className="mt-2 max-w-[54ch] text-sm leading-relaxed text-muted-foreground">
                  {stage.detail}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {stage.outputs.map((output) => (
                    <span
                      key={output}
                      className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                    >
                      <FileText size={12} className="text-primary" />
                      {output}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Frameworks List */}
        <div className="mt-20 border-t border-border pt-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl font-display text-foreground">
              Governance and compliance set.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Four verified standards underpinning our commercial media buying and development operations.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FRAMEWORKS.map((fw, index) => {
              const slug = policySlugs[index] || "kdpa";
              return (
                <div
                  key={fw.name}
                  className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6"
                >
                  <div>
                    <span className="inline-block rounded-full bg-surface-tint px-2.5 py-1 text-[11px] font-medium text-foreground">
                      {fw.status}
                    </span>
                    <h3 className="mt-4 text-base font-semibold tracking-tight font-display text-foreground">
                      {fw.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">{fw.reference}</p>
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                      {fw.body}
                    </p>
                    <ul className="mt-4 space-y-1.5 text-xs text-muted-foreground">
                      {fw.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-1.5">
                          <span className="text-primary">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenPolicy(slug)}
                    className="mt-6 text-left text-xs font-medium text-primary hover:underline"
                  >
                    Read full policy document →
                  </button>
                </div>
              );
            })}
          </div>

          {/* SDG Alignment */}
          <div className="mt-12 rounded-2xl border border-border bg-card p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-4">
              <Globe size={18} className="text-primary" />
              <h3 className="font-display text-base sm:text-lg font-semibold tracking-tight text-foreground">
                SDG alignment register
              </h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {SDGS.map((sdg) => (
                <div
                  key={sdg.goal}
                  className="rounded-xl border border-border bg-secondary/50 p-3.5"
                >
                  <span className="text-xs font-semibold text-primary">
                    Goal {sdg.goal}
                  </span>
                  <h4 className="text-xs font-semibold text-foreground mt-0.5">
                    {sdg.title}
                  </h4>
                  <p className="mt-1 text-[11px] leading-snug text-muted-foreground">
                    {sdg.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
