"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { buildQuickInquiryLink } from "@/lib/whatsapp";

export function HeroSection() {
  return (
    <section
      id="top"
      // Kept bg-black here as a fallback, but the image will now sit ON TOP of it
      className="relative overflow-hidden bg-black min-h-[92vh] flex items-center"
    >
      {/* 
        FIXED: Removed -z-10 so the image doesn't hide behind the section's bg-black.
        It now relies on natural HTML stacking order.
      */}
      <img
        src="https://t3.ftcdn.net/jpg/16/73/84/22/360_F_1673842243_YDMsJJqvlCSMryZVQYCjsFFvMVFBOJNL.jpg"
        alt="Premium Dry Fruits Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Subtle texture & DARK overlay to make sure the white text is easy to read */}
      <div className="absolute inset-0 paisley-texture opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 pointer-events-none" />

      {/* The relative z-10 here ensures the text stays on top of both the image and the overlay */}
      <div className="container relative z-10 py-24 lg:py-0">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-ivory/10 border border-accent/40 px-4 py-1.5 text-xs font-medium text-honey mb-6 backdrop-blur-sm"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Export-Grade &middot; Lab-Tested &middot; Pan-India Supply
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-ivory leading-[1.1]"
          >
            Pure Quality,{" "}
            <span className="text-gold-shimmer">Premium Grade</span> —
            Handpicked Dry Fruits
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-6 text-lg text-ivory/80 max-w-xl leading-relaxed"
          >
            Discover export-quality nuts, organic seeds, and sun-dried dates
            sourced directly from nature — trusted by families and gifted at
            every celebration across India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Button variant="gold" size="lg" asChild>
              <a href="#catalog">
                Browse Catalog
                <ArrowRight className="h-4 w-4 ml-2" />
              </a>
            </Button>
            <Button variant="whatsapp" size="lg" asChild>
              <a
                href={buildQuickInquiryLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Inquire on WhatsApp
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex items-center gap-2 text-ivory/70 text-sm"
          >
            <ShieldCheck className="h-4 w-4 text-accent" />
            100% Natural &middot; Zero Preservatives &middot; Vacuum-Sealed
            Freshness
          </motion.div>
        </div>
      </div>
    </section>
  );
}