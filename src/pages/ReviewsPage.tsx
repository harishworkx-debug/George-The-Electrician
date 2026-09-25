import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { CTABanner } from "@/components/CTABanner";
import { Star, Quote } from "lucide-react";
import { testimonials, business } from "@/data/business";
import { Phone } from "lucide-react";

export default function ReviewsPage() {
  return (
    <>
      <SEO
        title="Reviews & Testimonials | George The Electrician — Glendale, CA"
        description="Read real customer reviews for George The Electrician. 4.9-star rating from 127+ verified Glendale customers. Licensed electrician you can trust. Call (747) 269-3742."
        canonical="/reviews"
      />

      <section className="bg-black py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            {business.rating} Stars from {business.reviewCount}+ Customers
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            We have earned every star by showing up on time, doing clean work, and treating every customer like a neighbor.
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 lg:p-8 border border-gray-200 hover:shadow-lg hover:border-yellow-300 transition-all">
                <Quote className="w-10 h-10 text-yellow-400/30 mb-4" />
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm lg:text-base leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <div className="w-10 h-10 rounded-full bg-yellow-400/20 flex items-center justify-center text-yellow-600 font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.location} · {t.service}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Join Our Satisfied Customers" subtitle="Experience the honest, reliable electrical service that Glendale has trusted for 15+ years." />
    </>
  );
}
