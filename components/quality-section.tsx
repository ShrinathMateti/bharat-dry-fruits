"use client";

import { motion } from "framer-motion";
import { FlaskConical, PackageCheck, Leaf, Truck } from "lucide-react";

const GUARANTEES = [
  {
    icon: FlaskConical,
    title: "Lab-Tested Quality",
    description:
      "Every batch is screened for aflatoxins, moisture and purity before it leaves our facility.",
  },
  {
    icon: PackageCheck,
    title: "Vacuum-Sealed Freshness",
    description:
      "Nitrogen-flushed, vacuum-sealed packaging locks in flavour and extends shelf life naturally.",
  },
  {
    icon: Leaf,
    title: "100% Natural, Chemical-Free",
    description:
      "No added sulphites, no artificial ripening, no preservatives — exactly as nature intended.",
  },
  {
    icon: Truck,
    title: "Pan-India Express Supply",
    description:
      "A dedicated logistics network gets fresh stock to homes, retailers and corporates nationwide.",
  },
];

export function QualitySection() {
  return (
    <section id="quality" className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 paisley-texture opacity-[0.06]" />
      <div className="container relative">
        <div className="max-w-2xl mb-14">
          <span className="text-sm font-semibold tracking-[0.2em] text-accent uppercase">
            Our Promise
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ivory mt-3">
            Quality &amp; Farm-to-Table Guarantee
          </h2>
          <p className="text-ivory/70 mt-4 leading-relaxed">
            From the orchard to your doorstep, every step is designed to
            protect freshness, purity and nutrition.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GUARANTEES.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl bg-ivory/5 border border-accent/20 p-6 hover:bg-ivory/10 transition-colors"
            >
              <div className="h-12 w-12 rounded-full bg-accent/15 flex items-center justify-center mb-5">
                <item.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-ivory mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-ivory/65 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
