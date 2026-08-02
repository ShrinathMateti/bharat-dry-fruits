import { Phone, MessageCircle, MapPin } from "lucide-react";
import { buildQuickInquiryLink, buildTelLink, BUSINESS_PHONE_NUMBER } from "@/lib/whatsapp";

const LINKS = [
  { label: "Products Catalog", href: "#catalog" },
  { label: "Quality Grades", href: "#quality" },
  { label: "Gifting & Bulk", href: "#hampers" },
  { label: "Wholesale", href: "#wholesale" },
  { label: "Contact Us", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-ivory">
      <div className="container py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-2">
          <span className="font-serif text-2xl font-bold">
            Bharat <span className="text-gold-shimmer">Dry Fruits</span>
          </span>
          <p className="text-ivory/65 mt-4 leading-relaxed max-w-sm text-sm">
            For three generations, our family has hand-selected almonds,
            cashews, pistachios and dates from the finest orchards of Kashmir,
            Afghanistan and the Middle East — bringing royal Indian purity to
            every home, celebration and boardroom across the country.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-lg font-semibold mb-4">Explore</h4>
          <ul className="space-y-2.5">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-ivory/65 text-sm hover:text-accent transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg font-semibold mb-4">Reach Us</h4>
          <ul className="space-y-3">
            <li>
              <a
                href={buildTelLink()}
                className="flex items-center gap-2 text-ivory/65 text-sm hover:text-accent transition-colors"
              >
                <Phone className="h-3.5 w-3.5" />
                {BUSINESS_PHONE_NUMBER}
              </a>
            </li>
            <li>
              <a
                href={buildQuickInquiryLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-ivory/65 text-sm hover:text-accent transition-colors"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                WhatsApp Inquiry
              </a>
            </li>
            <li className="flex items-start gap-2 text-ivory/65 text-sm">
              <MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0" />
              Solapur,Maharashtra
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ivory/50">
          <p>&copy; {new Date().getFullYear()} Bharat Dry Fruits. All rights reserved.</p>
          <p>Direct inquiries only — no online checkout or payments processed on this site.</p>
        </div>
      </div>
    </footer>
  );
}
