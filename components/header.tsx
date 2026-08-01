"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  buildQuickInquiryLink,
  buildTelLink,
  BUSINESS_PHONE_NUMBER,
} from "@/lib/whatsapp";

const NAV_LINKS = [
  { label: "Quality Grades", href: "#quality" },
  { label: "Gifting & Bulk", href: "#wholesale" },
  { label: "Wholesale", href: "#wholesale" },
  { label: "Contact Us", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50 w-full">
      {/* Main header */}
      <header
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-ivory/95 backdrop-blur-md shadow-md shadow-primary/5"
            : "bg-ivory/80 backdrop-blur-sm"
        } border-b border-primary/10`}
      >
        <div className="container flex items-center justify-between h-20">
          <Link href="#top" className="flex items-center gap-2 shrink-0">
            <div className="relative">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-primary">
                Bharat
              </span>
              <span className="font-serif text-2xl sm:text-3xl font-bold text-gold-shimmer ml-2">
                Dry Fruits
              </span>
              <div className="h-0.5 w-full bg-gradient-to-r from-accent via-honey to-transparent mt-0.5" />
            </div>
          </Link>

          {/* Desktop nav */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {NAV_LINKS.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink href={link.href}>
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="whatsapp" size="sm" asChild>
              <a
                href={buildQuickInquiryLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4 mr-1.5" />
                WhatsApp Inquiry
              </a>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-primary focus-ring rounded-lg"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden border-t border-primary/10 bg-ivory"
            >
              <div className="container py-4 flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-charcoal/80 font-medium py-1"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="flex flex-col gap-3 pt-2">
                  <Button variant="whatsapp" size="sm" asChild>
                    <a
                      href={buildQuickInquiryLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4 mr-1.5" />
                      Quick WhatsApp Inquiry
                    </a>
                  </Button>
                  <a
                    href={buildTelLink()}
                    className="text-sm text-center text-muted-foreground"
                  >
                    Or call us: {BUSINESS_PHONE_NUMBER}
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}