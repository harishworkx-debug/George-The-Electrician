import { SEO } from "@/components/SEO";
import { CTABanner } from "@/components/CTABanner";
import { ChevronDown, Phone } from "lucide-react";
import { useState } from "react";
import { homeFAQs, business } from "@/data/business";
import { buildFAQSchema } from "@/components/SEO";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <SEO
        title="FAQ | George The Electrician — Glendale, CA"
        description="Frequently asked questions about electrical services in Glendale, CA. Pricing, emergency service, warranties, EV chargers, and more. Call (747) 269-3742."
        canonical="/faq"
        schema={[buildFAQSchema(homeFAQs)]}
      />

      <section className="bg-black py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Frequently Asked <span className="text-yellow-400">Questions</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Everything you need to know about our electrical services, pricing, and process.
          </p>
          <a
            href={`tel:${business.phoneRaw}`}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-yellow-400 text-black font-bold text-lg hover:bg-yellow-300 transition-all shadow-xl hover:scale-105"
          >
            <Phone className="w-6 h-6" strokeWidth={2.5} />
            Call {business.phoneDisplay}
          </a>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {homeFAQs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden hover:border-yellow-300 transition-colors">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-gray-900 text-base">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-yellow-500 flex-shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-96" : "max-h-0"}`}>
                  <p className="px-6 py-5 text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
