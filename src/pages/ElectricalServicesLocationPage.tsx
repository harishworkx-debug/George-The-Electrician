import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { CTABanner } from "@/components/CTABanner";
import { Phone, ChevronRight } from "lucide-react";
import { services, business } from "@/data/business";

export default function ElectricalServicesLocationPage() {
  return (
    <>
      <SEO
        title="Electrical Services in Glendale, CA | George The Electrician"
        description="Complete electrical services in Glendale, CA — residential, commercial, emergency, panel upgrades, EV chargers, lighting, inspections. Licensed electrician. Call (747) 837-1879."
        canonical="/electrical-services-glendale-ca"
      />

      <section className="bg-black py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Electrical Services in <span className="text-yellow-400">Glendale, CA</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Your one-stop licensed electrician for every electrical need in Glendale and nearby communities.
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
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto text-center mb-12">
            George The Electrician provides the full range of electrical services to homes and businesses in Glendale, CA. Whether you need a quick outlet repair, a full panel upgrade, or a 24/7 emergency response, our licensed electricians deliver clean, code-compliant work with upfront pricing.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.slug}
                to={`/${s.urlSlug}`}
                className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-gray-200 hover:border-yellow-400 hover:shadow-xl transition-all"
              >
                <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={s.image}
                    alt={`${s.shortTitle} in Glendale, CA`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h2 className="text-lg font-bold text-gray-900 mb-2">{s.shortTitle}</h2>
                  <p className="text-sm text-gray-600 leading-relaxed flex-1">{s.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-yellow-600 mt-3">
                    {s.shortTitle}
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
