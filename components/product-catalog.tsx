"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ProductCard } from "@/components/product-card";
import { categories, getProductsByCategory } from "@/data/products";

export function ProductCatalog() {
  return (
    <section id="catalog" className="py-24 bg-muted/40">
      <div className="container">
        <div className="max-w-2xl mb-12">
          <span className="text-sm font-semibold tracking-[0.2em] text-maroon uppercase">
            The Full Catalog
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mt-3">
            Browse Our Product Catalog
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Every listing shows grade, origin, available pack sizes and key
            nutrition highlights. No cart, no checkout — simply enquire and
            our team will confirm pricing and availability on WhatsApp.
          </p>
        </div>

        <Tabs defaultValue={categories[0].id}>
          <div className="overflow-x-auto pb-2 -mx-6 px-6 sm:mx-0 sm:px-0">
            <TabsList>
              {categories.map((cat) => (
                <TabsTrigger key={cat.id} value={cat.id}>
                  {cat.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((cat) => (
            <TabsContent key={cat.id} value={cat.id} id={cat.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {getProductsByCategory(cat.id).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
