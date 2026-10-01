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
import { Gallery } from "@/components/home/Gallery";
import { AboutSection } from "@/components/home/AboutSection";

export default function HomePage() {
  return (
    <>
      <SEO
        title="Glendale Electrician | George The Electrician"
        description="George The Electrician is a trusted, licensed electrical contractor serving Glendale and surrounding areas for over 15 years. Contact us for all your electrical needs."
        canonical="/"
        schema={[buildFAQSchema(homeFAQs)]}
      />
      <Hero />
      <TrustBadges />
      <ServicesGrid />
      <Gallery />
      <AboutSection />
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
