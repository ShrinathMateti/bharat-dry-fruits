"use client";

import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  buildQuickInquiryLink,
  buildTelLink,
  BUSINESS_PHONE_NUMBER,
} from "@/lib/whatsapp";

const FAQS = [
  {
    q: "What is the minimum order quantity (MOQ)?",
    a: "Retail packs start from 200g–250g with no minimum beyond a single pack. For wholesale and bulk supply, our typical MOQ ranges from 15–25 kg per variety, though this can flex depending on the product — just ask us on WhatsApp.",
  },
  {
    q: "What packaging options are available?",
    a: "We offer resealable stand-up pouches for everyday packs, vacuum-sealed food-grade bags for extended freshness, and rigid wooden or premium gift boxes for festive hampers and corporate gifting — with optional custom branding on bulk corporate orders.",
  },
  {
    q: "What is the shelf life of your products?",
    a: "Shelf life varies by product — most nuts and seeds stay fresh for 6–12 months when stored in a cool, dry place thanks to our vacuum-sealed packaging. Exact shelf life for each item is listed on its product card and specs sheet.",
  },
  {
    q: "Do you deliver across India?",
    a: "Yes, we supply pan-India through a dedicated express logistics network — from individual gift hampers to full wholesale pallets for retailers and distributors.",
  },
  {
    q: "How do I place an order?",
    a: "There's no online checkout — simply tap 'Inquire via WhatsApp' on any product, or fill the Bulk Inquiry form, and our team will confirm pricing, availability and delivery directly with you.",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-muted/40">
      <div className="container grid lg:grid-cols-2 gap-16">
        <div>
          <span className="text-sm font-semibold tracking-[0.2em] text-maroon uppercase">
            Get in Touch
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mt-3">
            Direct Contact &amp; Location
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            No queues, no forms buried in menus — just a direct line to our
            team for pricing, availability and bulk quotes.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={buildTelLink()}
              className="flex items-center gap-4 rounded-2xl bg-white border border-primary/10 p-5 hover:border-accent/40 transition-colors"
            >
              <div className="h-11 w-11 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Click to Call</p>
                <p className="font-serif text-lg font-semibold text-primary">
                  {BUSINESS_PHONE_NUMBER}
                </p>
              </div>
            </a>

            <a
              href={buildQuickInquiryLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl bg-white border border-primary/10 p-5 hover:border-accent/40 transition-colors"
            >
              <div className="h-11 w-11 rounded-full bg-[#25D366]/10 flex items-center justify-center shrink-0">
                <MessageCircle className="h-5 w-5 text-[#25D366]" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Click to WhatsApp</p>
                <p className="font-serif text-lg font-semibold text-primary">
                  Chat with Our Team
                </p>
              </div>
            </a>

            <div className="flex items-start gap-4 rounded-2xl bg-white border border-primary/10 p-5">
              <div className="h-11 w-11 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Warehouse &amp; Store</p>
                <p className="font-medium text-primary leading-snug mt-0.5">
                  1705,Bharat Dry Fruits
                  <br />
                  {/* Updated address to Solapur */}
                  Solapur, Maharashtra 413005, India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-white border border-primary/10 p-5">
              <div className="h-11 w-11 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Business Hours</p>
                <p className="font-medium text-primary mt-0.5">
                  Mon – Sat, 9:30 AM – 8:00 PM IST
                </p>
              </div>
            </div>
          </div>

          <Button variant="whatsapp" size="lg" className="mt-8" asChild>
            <a href={buildQuickInquiryLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4 mr-2" />
              Start a WhatsApp Conversation
            </a>
          </Button>
        </div>

        <div>
          <h3 className="font-serif text-2xl font-semibold text-primary mb-6">
            Frequently Asked Questions
          </h3>
          <Accordion type="single" collapsible className="bg-white rounded-2xl border border-primary/10 px-6">
            {FAQS.map((faq) => (
              <AccordionItem key={faq.q} value={faq.q}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}