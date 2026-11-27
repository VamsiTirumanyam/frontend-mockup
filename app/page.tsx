import CategoriesSection from "@/components/CategoriesSection";
import ConversionFooter from "@/components/ConversionFooter";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
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
      <main id="top">
        <Header />
        <HeroSection />
        <StatsBrandsSection />
        <TrustSection />
        <SearchSection />
        <ProductsSection />
        <WorkflowSection />
        <TelemetrySection />
        <CategoriesSection />
        <ConversionFooter />
      </main>
    </>
  );
}
