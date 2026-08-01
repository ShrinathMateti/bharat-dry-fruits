"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { categories, getProductsByCategory } from "@/data/products";

export function CategoryGrid() {
  return (
    <section className="py-24 bg-ivory" id="varieties">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <span className="text-sm font-semibold tracking-[0.2em] text-maroon uppercase">
            Our Varieties
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mt-3">
            Six Categories, One Standard of Purity
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Every variety in our house is graded, tested, and packed for
            freshness before it reaches you — whether it's a small family pack
            or a bulk wholesale order.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => {
            // Dynamically fetch the products for this category
            const categoryProducts = getProductsByCategory(cat.id);
            
            // Use the first product's image as the category cover, 
            // with a fallback just in case a category is empty
            const coverImage = categoryProducts[0]?.image || "https://placehold.co/800x1000?text=Image+Coming+Soon";

            return (
              <motion.a
                key={cat.id}
                href={`#${cat.id}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group relative overflow-hidden rounded-2xl aspect-[4/5] block"
              >
                <img
                  src={coverImage}
                  alt={cat.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/800x1000?text=Image+Not+Found";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
                <div className="absolute inset-0 border border-accent/0 group-hover:border-accent/60 rounded-2xl transition-colors duration-300" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-ivory">
                        {cat.name}
                      </h3>
                      <p className="text-ivory/70 text-sm mt-1">{cat.tagline}</p>
                    </div>
                    <div className="h-9 w-9 shrink-0 rounded-full bg-accent/90 flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                      <ArrowUpRight className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}