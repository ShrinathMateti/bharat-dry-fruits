"use client";

import { motion } from "framer-motion";
import { Building2, Gift, Users } from "lucide-react";

import { InquiryModal } from "@/components/inquiry-modal";
import { Button } from "@/components/ui/button";

const AUDIENCES = [
  {
    icon: Users,
    title: "Retail & Family Packs",
    description: "Everyday freshness for your kitchen, from 250g to 5kg boxes.",
  },
  {
    icon: Gift,
    title: "Wedding & Festive Gifting",
    description: "Customised hampers dressed for Diwali, weddings and celebrations.",
  },
  {
    icon: Building2,
    title: "Corporate & Wholesale",
    description: "Branded gift boxes and bulk supply for offices, retailers and distributors.",
  },
];

export function WholesaleSection() {
  return (
    <section id="wholesale" className="py-24 bg-ivory">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-semibold tracking-[0.2em] text-maroon uppercase">
              Gifting &amp; Bulk
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mt-3">
              Wholesale Rates &amp; Custom Gift Hampers
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed max-w-lg">
              Whether you need a single festive hamper or a container-load of
              wholesale supply, our team tailors pricing, packaging and
              delivery to your requirement — with no online checkout involved.
              Every order is confirmed personally over WhatsApp or a call.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <InquiryModal />
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Speak to Our Team</a>
              </Button>
            </div>
          </div>

          <div className="grid gap-5">
            {AUDIENCES.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4 rounded-2xl border border-primary/10 p-5 hover:border-accent/40 hover:shadow-md hover:shadow-primary/5 transition-all"
              >
                <div className="h-11 w-11 shrink-0 rounded-full bg-primary/5 flex items-center justify-center">
                  <a.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-primary">
                    {a.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{a.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
