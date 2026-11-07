import { MessageCircle, Phone } from "lucide-react";
import { BRAND } from "../data/content";

export default function MobileStickyBar() {
  return (
    <aside aria-label="Mobile quick actions" className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur sm:hidden">
      <div className="flex items-stretch gap-2 px-3 py-2.5">
        <a
          href={`https://wa.me/${BRAND.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-border py-2.5 text-xs font-medium text-foreground"
        >
          <MessageCircle size={15} className="text-primary" />
          <span>WhatsApp</span>
        </a>
        <a
          href={`tel:${BRAND.phoneHref}`}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-border py-2.5 text-xs font-medium text-foreground"
        >
          <Phone size={15} />
          <span>Call</span>
        </a>
        <a
          href="#contact"
          className="flex flex-[1.2] items-center justify-center gap-1.5 rounded-full bg-primary py-2.5 text-xs font-medium text-primary-foreground"
        >
          <span>Book a pilot</span>
        </a>
      </div>
    </aside>
  );
}
