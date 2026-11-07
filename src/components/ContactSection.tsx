import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import {
  ArrowRight,
  Check,
  EnvelopeSimple,
  FileText,
  MapPin,
  Phone,
  SealCheck,
  WhatsappLogo,
} from "@phosphor-icons/react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { BRAND, OBJECTIVES, POLICIES, REGIONS, TIMELINES } from "@/data/content";
import type { Audience, InquiryErrors, InquiryForm } from "@/types";

const DRAFT_KEY = "mms-brief-draft-v1";

const EMPTY: InquiryForm = {
  audience: "commercial",
  name: "",
  organisation: "",
  email: "",
  objective: OBJECTIVES[0],
  timeline: TIMELINES[0],
  regions: ["Kenya"],
  message: "",
};

const fieldClass =
  "w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70";

interface ContactProps {
  audience: Audience;
  onAudienceChange: (audience: Audience) => void;
  onOpenPolicy: (slug: string) => void;
}

export function PolicyDialog({
  slug,
  onOpenChange,
}: {
  slug: string | null;
  onOpenChange: (slug: string | null) => void;
}) {
  const doc = POLICIES.find((item) => item.slug === slug);
  return (
    <Dialog open={Boolean(doc)} onOpenChange={(open) => !open && onOpenChange(null)}>
      <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">{doc?.title}</DialogTitle>
          <DialogDescription>
            {doc?.updated}. Written for partners who need to attach this to a contract.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-2 space-y-5">
          {doc?.sections.map((section) => (
            <section key={section.heading}>
              <h4 className="text-sm font-semibold text-foreground">{section.heading}</h4>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {section.body}
              </p>
            </section>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-3 border-t border-border pt-4 text-xs text-muted-foreground">
          <button
            type="button"
            onClick={() => onOpenChange(null)}
            className="rounded-full bg-secondary px-3.5 py-2 font-medium text-secondary-foreground"
          >
            Close
          </button>
          <a
            href={`mailto:${BRAND.email}?subject=${encodeURIComponent("Policy pack request")}`}
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-2 font-medium text-foreground"
          >
            <EnvelopeSimple size={14} weight="bold" />
            Request the signed pack
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function ContactSection({
  audience,
  onAudienceChange,
  onOpenPolicy,
}: ContactProps) {
  const [form, setForm] = useState<InquiryForm>(EMPTY);
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [sent, setSent] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(DRAFT_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as InquiryForm;
        setForm({ ...EMPTY, ...parsed });
      }
    } catch {
      /* a corrupt draft should never block the page */
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(DRAFT_KEY, JSON.stringify(form));
    } catch {
      /* storage may be unavailable in private mode */
    }
  }, [form]);

  const update = <K extends keyof InquiryForm>(key: K, value: InquiryForm[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const toggleRegion = (region: string) => {
    setForm((prev) => ({
      ...prev,
      regions: prev.regions.includes(region)
        ? prev.regions.filter((item) => item !== region)
        : [...prev.regions, region],
    }));
    setErrors((prev) => ({ ...prev, regions: undefined }));
  };

  const summary = useMemo(
    () =>
      [
        `Pilot brief: ${form.audience === "commercial" ? "commercial brand" : "NGO / donor"}`,
        `Name: ${form.name}`,
        `Organisation: ${form.organisation}`,
        `Email: ${form.email}`,
        `Objective: ${form.objective}`,
        `Timeline: ${form.timeline}`,
        `Regions: ${form.regions.join(", ") || "not specified"}`,
        `Notes: ${form.message || "none"}`,
      ].filter(Boolean).join(String.fromCharCode(10)),
    [form],
  );

  const waHref = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(summary)}`;
  const mailHref = `mailto:${BRAND.email}?subject=${encodeURIComponent(
    `Pilot brief from ${form.organisation || form.name || "a new partner"}`,
  )}&body=${encodeURIComponent(summary)}`;

  const validate = () => {
    const next: InquiryErrors = {};
    if (form.name.trim().length < 2) next.name = "Please tell us who we are speaking with.";
    if (form.organisation.trim().length < 2)
      next.organisation = "Add your organisation or funder name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email))
      next.email = "Enter an email address we can reply to.";
    if (form.regions.length === 0) next.regions = "Select at least one target market.";
    if (form.message.trim().length < 12)
      next.message = "A sentence or two helps us match the right partner.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) {
      toast.error("Check the highlighted fields before sending.");
      return;
    }
    setSent(true);
    onAudienceChange(form.audience);
    toast.success("Brief saved in this browser and ready to send.");
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-border bg-card/50 py-16 md:py-24"
    >
      <div className="container-shell grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-7">
          <h2 className="max-w-lg text-3xl font-semibold tracking-tight sm:text-4xl">
            Start with a pilot, not a pitch deck.
          </h2>
          <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-muted-foreground">
            Three fields and an objective is enough for us to come back with a matched
            partner, a media outline and a compliance checklist.
          </p>

          <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
            <fieldset>
              <legend className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                I am enquiring as
              </legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {(["commercial", "ngo"] as Audience[]).map((id) => (
                  <button
                    key={id}
                    type="button"
                    aria-pressed={form.audience === id}
                    onClick={() => {
                      update("audience", id);
                      onAudienceChange(id);
                    }}
                    className={`rounded-full border px-3.5 py-2 text-xs font-medium transition-colors ${
                      form.audience === id
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {id === "commercial" ? "Commercial CMO / brand lead" : "NGO / donor lead"}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-xs font-medium text-foreground">
                  Your name
                </label>
                <input
                  id="name"
                  value={form.name}
                  onChange={(event) => update("name", event.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={`mt-1.5 ${fieldClass}`}
                  placeholder="Amina Okello"
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-xs text-destructive">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="organisation" className="text-xs font-medium text-foreground">
                  Organisation
                </label>
                <input
                  id="organisation"
                  value={form.organisation}
                  onChange={(event) => update("organisation", event.target.value)}
                  aria-invalid={Boolean(errors.organisation)}
                  aria-describedby={errors.organisation ? "organisation-error" : undefined}
                  className={`mt-1.5 ${fieldClass}`}
                  placeholder="Sunrise Foods East Africa"
                />
                {errors.organisation && (
                  <p id="organisation-error" className="mt-1.5 text-xs text-destructive">
                    {errors.organisation}
                  </p>
                )}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="text-xs font-medium text-foreground">
                  Work email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(event) => update("email", event.target.value)}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={`mt-1.5 ${fieldClass}`}
                  placeholder="you@company.com"
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-xs text-destructive">
                    {errors.email}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="objective" className="text-xs font-medium text-foreground">
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
                      {selected && <Check size={12} weight="bold" className="text-primary" />}
                      {region}
                    </button>
                  );
                })}
              </div>
              {errors.regions && (
                <p className="mt-1.5 text-xs text-destructive">{errors.regions}</p>
              )}
            </fieldset>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="timeline" className="text-xs font-medium text-foreground">
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
              <div className="sm:col-span-1">
                <label htmlFor="message" className="text-xs font-medium text-foreground">
                  What are you trying to shift?
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={form.message}
                  onChange={(event) => update("message", event.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={`mt-1.5 resize-none ${fieldClass}`}
                  placeholder="We need shelf-level trust in Kenya and a CSR story our board can defend."
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-xs text-destructive">
                    {errors.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-px active:scale-[0.98]"
              >
                {sent ? "Brief ready" : "Build my pilot brief"}
                <ArrowRight size={16} weight="bold" />
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
                  <SealCheck size={16} weight="fill" className="text-primary" />
                  Your brief is ready to send
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
                    <WhatsappLogo size={14} weight="fill" />
                    Send on WhatsApp
                  </a>
                  <a
                    href={mailHref}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-2 text-xs font-medium text-foreground"
                  >
                    <EnvelopeSimple size={14} weight="bold" />
                    Send by email
                  </a>
                </div>
              </div>
            )}
          </form>
        </div>

        <aside className="lg:col-span-5">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-base font-semibold tracking-tight">Direct lines</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={`https://wa.me/${BRAND.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 text-foreground hover:text-primary"
                >
                  <WhatsappLogo size={17} weight="fill" className="text-primary" />
                  WhatsApp {BRAND.phone}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${BRAND.phoneHref}`}
                  className="flex items-center gap-2.5 text-foreground hover:text-primary"
                >
                  <Phone size={17} weight="bold" className="text-primary" />
                  {BRAND.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-center gap-2.5 break-all text-foreground hover:text-primary"
                >
                  <EnvelopeSimple size={17} weight="bold" className="text-primary" />
                  {BRAND.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-muted-foreground">
                <MapPin size={17} weight="fill" className="mt-0.5 shrink-0 text-primary" />
                <span>
                  {BRAND.address}
                  <br />
                  {BRAND.hours}
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-4 rounded-2xl border border-border bg-background p-6">
            <h3 className="flex items-center gap-2 text-base font-semibold tracking-tight">
              <FileText size={17} weight="duotone" className="text-primary" />
              Compliance set
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
                    {policy.title}
                    <ArrowRight size={14} weight="bold" className="shrink-0 text-muted-foreground" />
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