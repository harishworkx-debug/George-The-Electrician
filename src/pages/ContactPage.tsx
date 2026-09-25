import { SEO } from "@/components/SEO";
import { ContactSection } from "@/components/home/ContactSection";

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact George The Electrician | Glendale, CA — Call (747) 269-3742"
        description="Contact George The Electrician in Glendale, CA. Call (747) 269-3742 for same-day electrical service. Licensed, insured, 24/7 emergency available."
        canonical="/contact"
      />
      <ContactSection />
    </>
  );
}
