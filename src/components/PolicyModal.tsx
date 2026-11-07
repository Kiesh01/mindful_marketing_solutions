import { useEffect } from "react";
import { ShieldCheck, X } from "lucide-react";
import { POLICIES } from "../data/content";

interface PolicyModalProps {
  slug: string | null;
  onClose: () => void;
}

export default function PolicyModal({ slug, onClose }: PolicyModalProps) {
  const doc = POLICIES.find((p) => p.slug === slug);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (doc) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [doc, onClose]);

  if (!doc) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-hidden rounded-2xl border border-border bg-card shadow-2xl flex flex-col z-10">
        <div className="flex items-start justify-between border-b border-border p-5 sm:p-6 bg-card">
          <div className="flex items-start gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-surface-tint text-primary shrink-0">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display text-lg sm:text-xl font-semibold tracking-tight text-foreground">
                {doc.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                {doc.updated} · Written for partners who need to attach this to a contract
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close policy dialog"
            className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground hover:bg-secondary"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="overflow-y-auto p-5 sm:p-6 space-y-6 text-sm text-muted-foreground leading-relaxed">
          {doc.sections.map((section) => (
            <div key={section.heading} className="space-y-1.5">
              <h4 className="font-display text-sm font-semibold text-foreground">
                {section.heading}
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {section.body}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-border p-4 sm:p-5 bg-background">
          <span className="text-xs text-muted-foreground">
            Registered under Kenyan Data Protection Commissioner (ODPC)
          </span>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-primary px-5 py-2 text-xs font-medium text-primary-foreground hover:opacity-95"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
}
