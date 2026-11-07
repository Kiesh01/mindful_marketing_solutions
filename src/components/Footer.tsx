import { ArrowUpRight, Mail, MapPin, MessageCircle } from "lucide-react";
import { BRAND, POLICIES } from "../data/content";

interface FooterProps {
  onOpenPolicy: (slug: string) => void;
}

export default function Footer({ onOpenPolicy }: FooterProps) {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-primary text-sm font-semibold text-primary-foreground">
              M
            </span>
            <span className="font-display text-[15px] font-semibold tracking-tight text-foreground">
              {BRAND.name}
            </span>
          </div>
          <p className="mt-4 max-w-[38ch] text-sm leading-relaxed text-muted-foreground">
            A Nairobi-based agency matching commercial growth budgets with audited
            NGO programmes across East Africa, then proving both sides of the story.
          </p>
          <p className="mt-4 flex items-start gap-2 text-xs text-muted-foreground">
            <MapPin size={14} className="mt-0.5 shrink-0 text-primary" />
            <span>{BRAND.address}</span>
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
                  <span>{item.label}</span>
                  <ArrowUpRight size={12} className="text-muted-foreground" />
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
                  onClick={() => onOpenPolicy(policy.slug)}
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
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs text-foreground hover:border-primary/40 transition-colors"
            >
              <Mail size={13} />
              <span>Email</span>
            </a>
            <a
              href={`https://wa.me/${BRAND.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs text-foreground hover:border-primary/40 transition-colors"
            >
              <MessageCircle size={13} />
              <span>WhatsApp</span>
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
  );
}
