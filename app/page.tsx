import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { CategoryGrid } from "@/components/category-grid";
import { ProductCatalog } from "@/components/product-catalog";
import { WholesaleSection } from "@/components/wholesale-section";
import { QualitySection } from "@/components/quality-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { SitePreloader } from "@/components/SitePreloader";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

export default function Home() {
  return (
    <SitePreloader>
      <main className="min-h-screen">
        <Header />
        <HeroSection />
        <CategoryGrid />
        <ProductCatalog />
        <WholesaleSection />
        <QualitySection />
        <ContactSection />
        <Footer />
        <ScrollToTop /> 
      </main>
    </SitePreloader>
  );
}