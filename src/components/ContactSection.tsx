import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Check,
  FileText,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { BRAND, OBJECTIVES, POLICIES, REGIONS, TIMELINES } from "../data/content";
import type { Audience, InquiryForm } from "../types";

const DRAFT_KEY = "mms-brief-draft-v2";

const EMPTY: InquiryForm = {
  audience: "commercial",
  name: "",
  organisation: "",
  email: "",
  objective: OBJECTIVES[0],
  timeline: TIMELINES[0],
  regions: ["Kenya"],
  budget: "USD $10k - $25k",
  message: "",
};

const fieldClass =
  "w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary";

interface ContactProps {
  audience: Audience;
  onAudienceChange: (audience: Audience) => void;
  onOpenPolicy: (slug: string) => void;
}

export default function ContactSection({
  audience,
  onAudienceChange,
  onOpenPolicy,
}: ContactProps) {
  const [form, setForm] = useState<InquiryForm>(() => {
    try {
      const stored = window.localStorage.getItem(DRAFT_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        return { ...EMPTY, ...parsed, audience };
      }
    } catch {
      // Fallback
    }
    return { ...EMPTY, audience };
  });

  const [sent, setSent] = useState(false);

  useEffect(() => {
    setForm((prev) => (prev.audience === audience ? prev : { ...prev, audience }));
  }, [audience]);

  useEffect(() => {
    try {
      window.localStorage.setItem(DRAFT_KEY, JSON.stringify(form));
    } catch {
      // Ignore
    }
  }, [form]);

  const update = (field: keyof InquiryForm, value: unknown) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const toggleRegion = (region: string) => {
    setForm((prev) => {
      const exists = prev.regions.includes(region);
      const next = exists
        ? prev.regions.filter((item) => item !== region)
        : [...prev.regions, region];
      return { ...prev, regions: next.length ? next : ["Kenya"] };
    });
  };

  const briefText = useMemo(() => {
    return [
      `Mindful Marketing Solutions Pilot Brief`,
      `Audience: ${form.audience === "commercial" ? "Commercial brand" : "NGO"}`,
      `Name: ${form.name || "Not provided"}`,
      `Organisation: ${form.organisation || "Not provided"}`,
      `Email: ${form.email || "Not provided"}`,
      `Objective: ${form.objective}`,
      `Regions: ${form.regions.join(", ")}`,
      `Timeline: ${form.timeline}`,
      form.message ? `Notes: ${form.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");
  }, [form]);

  const waHref = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(briefText)}`;
  const mailHref = `mailto:${BRAND.email}?subject=${encodeURIComponent(
    `Pilot brief: ${form.organisation || form.name || "Inquiry"}`,
  )}&body=${encodeURIComponent(briefText)}`;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="container-shell scroll-mt-24 py-16 md:py-24">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-7">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl font-display text-foreground">
            Start a pilot brief.
          </h2>
          <p className="mt-4 max-w-[54ch] text-base leading-relaxed text-muted-foreground">
            Tell us what you need to move. We will run the data protection check,
            shortlist verified NGO partners, and reply with an indicative budget in
            two working days.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <div
              role="radiogroup"
              aria-label="Perspective"
              className="inline-flex items-center gap-1 rounded-full border border-border bg-secondary/70 p-1 text-xs"
            >
              {(["commercial", "ngo"] as Audience[]).map((id) => (
                <button
                  key={id}
                  type="button"
                  role="radio"
                  aria-checked={form.audience === id}
                  onClick={() => {
                    update("audience", id);
                    onAudienceChange(id);
                  }}
                  className={`rounded-full px-3.5 py-1.5 font-medium transition-colors ${
                    form.audience === id
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {id === "commercial" ? "Commercial brand" : "NGO or donor"}
                </button>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-xs font-medium text-foreground block">
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(event) => update("name", event.target.value)}
                  placeholder="Amina Odhiambo"
                  className={`mt-1.5 ${fieldClass}`}
                />
              </div>

              <div>
                <label htmlFor="org" className="text-xs font-medium text-foreground block">
                  Organisation or brand
                </label>
                <input
                  id="org"
                  type="text"
                  required
                  value={form.organisation}
                  onChange={(event) => update("organisation", event.target.value)}
                  placeholder="Koko Networks / GiveDirectly"
                  className={`mt-1.5 ${fieldClass}`}
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="text-xs font-medium text-foreground block">
                  Work email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(event) => update("email", event.target.value)}
                  placeholder="amina@partner.org"
                  className={`mt-1.5 ${fieldClass}`}
                />
              </div>

              <div>
                <label htmlFor="objective" className="text-xs font-medium text-foreground block">
                  Primary objective
                </label>
                <select
                  id="objective"
                  value={form.objective}
                  onChange={(event) => update("objective", event.target.value)}
                  className={`mt-1.5 ${fieldClass}`}
                >
                  {OBJECTIVES.map((objective) => (
                    <option key={objective} value={objective}>
                      {objective}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <fieldset>
              <legend className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Target markets
              </legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {REGIONS.map((region) => {
                  const selected = form.regions.includes(region);
                  return (
                    <button
                      key={region}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => toggleRegion(region)}
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs transition-colors ${
                        selected
                          ? "border-primary/30 bg-surface-tint text-foreground"
                          : "border-border bg-background text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {selected && <Check size={12} className="text-primary font-bold" />}
                      {region}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="timeline" className="text-xs font-medium text-foreground block">
                  Timeline
                </label>
                <select
                  id="timeline"
                  value={form.timeline}
                  onChange={(event) => update("timeline", event.target.value)}
                  className={`mt-1.5 ${fieldClass}`}
                >
                  {TIMELINES.map((timeline) => (
                    <option key={timeline} value={timeline}>
                      {timeline}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="text-xs font-medium text-foreground block">
                  What are you trying to shift?
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={form.message}
                  onChange={(event) => update("message", event.target.value)}
                  className={`mt-1.5 resize-none ${fieldClass}`}
                  placeholder="We need shelf-level trust in Kenya and a CSR story our board can defend."
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-px active:scale-[0.98]"
              >
                <span>{sent ? "Brief ready" : "Build my pilot brief"}</span>
                <ArrowRight size={16} />
              </button>
              <p className="text-xs text-muted-foreground">
                Drafts stay in your browser until you send them.
              </p>
            </div>

            {sent && (
              <div
                role="status"
                className="rounded-2xl border border-primary/25 bg-surface-tint p-4"
              >
                <p className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <ShieldCheck size={16} className="text-primary" />
                  <span>Your brief is ready to send</span>
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  Choose a channel and we will reply with a matched partner shortlist
                  within two working days.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-3.5 py-2 text-xs font-medium text-primary-foreground"
                  >
                    <MessageCircle size={14} />
                    <span>Send on WhatsApp</span>
                  </a>
                  <a
                    href={mailHref}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-2 text-xs font-medium text-foreground"
                  >
                    <Mail size={14} />
                    <span>Send by email</span>
                  </a>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Right Aside */}
        <aside className="lg:col-span-5">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-base font-semibold tracking-tight font-display text-foreground">
              Direct lines
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={`https://wa.me/${BRAND.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 text-foreground hover:text-primary"
                >
                  <MessageCircle size={17} className="text-primary" />
                  <span>WhatsApp {BRAND.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${BRAND.phoneHref}`}
                  className="flex items-center gap-2.5 text-foreground hover:text-primary"
                >
                  <Phone size={17} className="text-primary" />
                  <span>{BRAND.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-center gap-2.5 break-all text-foreground hover:text-primary"
                >
                  <Mail size={17} className="text-primary" />
                  <span>{BRAND.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-muted-foreground">
                <MapPin size={17} className="mt-0.5 shrink-0 text-primary" />
                <span>
                  {BRAND.address}
                  <br />
                  {BRAND.hours}
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-4 rounded-2xl border border-border bg-background p-6">
            <h3 className="flex items-center gap-2 text-base font-semibold tracking-tight font-display text-foreground">
              <FileText size={17} className="text-primary" />
              <span>Compliance set</span>
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Four documents you can attach to a procurement pack.
            </p>
            <ul className="mt-4 divide-y divide-border">
              {POLICIES.map((policy) => (
                <li key={policy.slug}>
                  <button
                    type="button"
                    onClick={() => onOpenPolicy(policy.slug)}
                    className="flex w-full items-center justify-between gap-3 py-2.5 text-left text-sm text-foreground transition-colors hover:text-primary"
                  >
                    <span>{policy.title}</span>
                    <ArrowRight size={14} className="shrink-0 text-muted-foreground" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
