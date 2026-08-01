"use client";

import { useState } from "react";
import { MessageCircle, Info, MapPin } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import type { Product } from "@/data/products";
import { buildProductInquiryLink } from "@/lib/whatsapp";

export function ProductCard({ product }: { product: Product }) {
  const [open, setOpen] = useState(false);
  const [selectedPack, setSelectedPack] = useState(product.packSizes[0]);

  const inquiryLink = buildProductInquiryLink({
    productName: product.name,
    grade: product.grade,
    origin: product.origin,
    packSize: selectedPack,
  });

  return (
    <>
      <Card className="group overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 flex flex-col">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <Badge variant="gold">{product.grade}</Badge>
          </div>
          <div className="absolute top-3 right-3">
            <Badge variant="outline" className="bg-ivory/90 backdrop-blur-sm border-none">
              <MapPin className="h-3 w-3 mr-1" />
              {product.origin.replace("Origin: ", "")}
            </Badge>
          </div>
        </div>

        <CardContent className="pt-5 flex flex-col flex-1">
          <h3 className="font-serif text-lg font-semibold text-primary">{product.name}</h3>

          <div className="flex flex-wrap gap-1.5 mt-3">
            {product.highlights.map((h) => (
              <span
                key={h}
                className="text-[11px] font-medium text-primary/80 bg-primary/5 rounded-full px-2.5 py-1"
              >
                {h}
              </span>
            ))}
          </div>

          <div className="mt-4">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">
              Pack Sizes
            </p>
            <div className="flex flex-wrap gap-1.5">
              {product.packSizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedPack(size)}
                  className={`text-xs rounded-full px-3 py-1 border transition-colors ${
                    selectedPack === size
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-primary/20 text-charcoal/70 hover:border-primary/50"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-2 pt-4 border-t border-primary/10 mt-auto">
            <Button variant="whatsapp" size="sm" asChild>
              <a href={inquiryLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4 mr-1.5" />
                Inquire via WhatsApp
              </a>
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setOpen(true)}>
              <Info className="h-4 w-4 mr-1.5" />
              Quick Specs / Details
            </Button>
          </div>
        </CardContent>
      </Card>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{product.name}</DialogTitle>
            <DialogDescription>{product.origin}</DialogDescription>
          </DialogHeader>

          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-xl"
          />

          <p className="text-sm text-charcoal/80 leading-relaxed">{product.description}</p>

          <div className="grid grid-cols-2 gap-3 pt-2">
            {product.specs.map((spec) => (
              <div key={spec.label} className="rounded-xl bg-primary/5 p-3">
                <p className="text-[11px] uppercase tracking-wide text-muted-foreground">
                  {spec.label}
                </p>
                <p className="text-sm font-medium text-primary mt-0.5">{spec.value}</p>
              </div>
            ))}
          </div>

          <Button variant="whatsapp" className="w-full mt-2" asChild>
            <a href={inquiryLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4 mr-1.5" />
              Inquire via WhatsApp
            </a>
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
