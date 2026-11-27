import CategoriesSection from "@/components/CategoriesSection";
import BackToTop from "@/components/BackToTop";
import ConversionFooter from "@/components/ConversionFooter";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import OEPromiseSection from "@/components/OEPromiseSection";
import ProductsSection from "@/components/ProductsSection";
import ScrollTransitions from "@/components/ScrollTransitions";
import SearchSection from "@/components/SearchSection";
import StatsBrandsSection from "@/components/StatsBrandsSection";
import TelemetrySection from "@/components/TelemetrySection";
import TrustSection from "@/components/TrustSection";
import WorkflowSection from "@/components/WorkflowSection";

export default function SpareLabLandingPage() {
  return (
    <>
      <ScrollTransitions />
      <div className="page-backdrop" aria-hidden="true" />
      <main id="top" className="relative z-[1]">
        <Header />
        <HeroSection />
        <StatsBrandsSection />
        <TrustSection />
        <SearchSection />
        <ProductsSection />
        <OEPromiseSection />
        <WorkflowSection />
        <TelemetrySection />
        <CategoriesSection />
        <ConversionFooter />
      </main>
      <BackToTop />
    </>
  );
}
