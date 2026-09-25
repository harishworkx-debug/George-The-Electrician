import { SEO } from "@/components/SEO";
import { Hero } from "@/components/home/Hero";
import { TrustBadges } from "@/components/home/TrustBadges";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { StatsSection } from "@/components/home/StatsSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ProcessSection } from "@/components/home/ProcessSection";
import { CommonProblems } from "@/components/home/CommonProblems";
import { Testimonials } from "@/components/home/Testimonials";
import { ServiceAreas } from "@/components/home/ServiceAreas";
import { HomeFAQ } from "@/components/home/HomeFAQ";
import { AreaQuickLinks } from "@/components/home/AreaQuickLinks";
import { ContactSection } from "@/components/home/ContactSection";
import { CTABanner } from "@/components/CTABanner";
import { buildFAQSchema } from "@/components/SEO";
import { homeFAQs } from "@/data/business";

export default function HomePage() {
  return (
    <>
      <SEO
        title="Electrician Glendale, CA | George The Electrician — Licensed & 24/7"
        description="Glendale's trusted licensed electrician for 15+ years. Residential, commercial, emergency electrical repair, panel upgrades, EV chargers & more. Call (747) 269-3742 for same-day service."
        canonical="/"
        schema={[buildFAQSchema(homeFAQs)]}
      />
      <Hero />
      <TrustBadges />
      <ServicesGrid />
      <StatsSection />
      <WhyChooseUs />
      <ProcessSection />
      <CommonProblems />
      <Testimonials />
      <ServiceAreas />
      <HomeFAQ />
      <AreaQuickLinks />
      <CTABanner />
      <ContactSection />
    </>
  );
}
