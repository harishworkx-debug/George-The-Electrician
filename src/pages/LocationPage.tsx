import { useParams, Link, Navigate } from "react-router-dom";
import { Phone, MapPin, ChevronRight, CheckCircle2, Star, Clock, ShieldCheck, Zap, Home as HomeIcon, Building2 } from "lucide-react";
import { SEO, buildFAQSchema } from "@/components/SEO";
import { CTABanner } from "@/components/CTABanner";
import { locations, services, business, testimonials, images } from "@/data/business";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function LocationPage({ slug: propSlug }: { slug?: string }) {
  const { slug: paramSlug } = useParams();
  const locationPath = window.location.pathname.replace("/", "");
  const slug = propSlug || paramSlug || locationPath;

  // Determine if this is an "electrician-" or "electrical-services-" page
  const isElectrician = slug?.startsWith("electrician-");
  const isElectricalServices = slug?.startsWith("electrical-services-");

  const locationSlug = isElectrician
    ? slug!.replace("electrician-", "")
    : isElectricalServices
    ? slug!.replace("electrical-services-", "")
    : slug;

  const location = locations.find((l) => l.slug === locationSlug);

  if (!location) return <Navigate to="/service-areas" replace />;

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const pageTitle = isElectrician
    ? `Electrician in ${location.name} | George The Electrician — Call (747) 269-3742`
    : `Electrical Services in ${location.name} | George The Electrician`;

  const pageDesc = isElectrician
    ? `Licensed electrician serving ${location.name}. Residential, commercial, emergency repair, panel upgrades, EV chargers & more. Same-day service. Call (747) 269-3742.`
    : `Complete electrical services in ${location.name} — residential, commercial, emergency, panel upgrades, EV chargers, lighting, inspections. Licensed electrician. Call (747) 269-3742.`;

  const canonicalPath = isElectrician
    ? `/electrician-${location.slug}`
    : `/electrical-services-${location.slug}`;

  const h1 = isElectrician
    ? `Electrician in ${location.name}`
    : `Electrical Services in ${location.name}`;

  const locationFaqs = isElectrician
    ? [
        {
          question: `Do you provide electrical service in ${location.shortName}, CA?`,
          answer: `Yes. George The Electrician serves ${location.shortName} and the surrounding communities. We are based in Glendale and respond to service calls throughout the area, typically within 60–90 minutes for emergencies.`,
        },
        {
          question: `How fast can an electrician get to ${location.shortName}?`,
          answer: `For standard service calls, we can usually have a licensed electrician at your ${location.shortName} property the same day. Emergency calls receive priority dispatch with an average response time of 60–90 minutes.`,
        },
        {
          question: `Are you licensed to work in ${location.shortName}?`,
          answer: `Yes. We are fully licensed by the California State License Board, bonded, and insured. We handle all permitting and inspections required by ${location.shortName} and Los Angeles County.`,
        },
        {
          question: `Do you charge a travel fee to come to ${location.shortName}?`,
          answer: `No. We do not charge travel fees within our standard service area. The same flat-rate pricing applies whether you are in Glendale, Pasadena, Burbank, or La Cañada Flintridge.`,
        },
      ]
    : [
        {
          question: `What electrical services do you offer in ${location.shortName}?`,
          answer: `We offer the complete range of electrical services in ${location.shortName} — residential wiring, commercial electrical, emergency repair, panel upgrades, EV charger installation, lighting, outlet and switch repair, ceiling fan installation, and electrical inspections.`,
        },
        {
          question: `How quickly can you provide electrical service in ${location.shortName}?`,
          answer: `For standard service calls, we can usually have a licensed electrician at your ${location.shortName} property the same day. Emergency calls receive priority dispatch with an average response time of 60–90 minutes.`,
        },
        {
          question: `Do you handle commercial electrical services in ${location.shortName}?`,
          answer: `Yes. We provide full commercial electrical services in ${location.shortName} including tenant improvements, build-outs, three-phase power, Title 24 lighting compliance, data cabling, and preventive maintenance contracts.`,
        },
        {
          question: `Are you licensed for electrical work in ${location.shortName}?`,
          answer: `Yes. We are fully licensed by the California State License Board, bonded, and insured. We handle all permitting and inspections required by ${location.shortName} and Los Angeles County.`,
        },
      ];

  const otherLocations = locations.filter((l) => l.slug !== location.slug);
  const locationImage = location.slug === "glendale-ca" ? images.glendale : images.glendaleStreet;

  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDesc}
        canonical={canonicalPath}
        schema={[buildFAQSchema(locationFaqs)]}
      />

      {/* Hero */}
      <section className="bg-black py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={locationImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-yellow-400">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/service-areas" className="hover:text-yellow-400">Service Areas</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-yellow-400">{location.shortName}</span>
          </nav>
          <h1 className="text-3xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            {isElectrician ? (
              <>Electrician in <span className="text-yellow-400">{location.name}</span></>
            ) : (
              <>Electrical Services in <span className="text-yellow-400">{location.name}</span></>
            )}
          </h1>
          <p className="text-lg lg:text-xl text-gray-300 max-w-2xl mb-8">{location.description}</p>
          <a
            href={`tel:${business.phoneRaw}`}
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition-all shadow-xl hover:scale-105"
          >
            <Phone className="w-5 h-5" strokeWidth={2.5} />
            Call Now — {business.phoneDisplay}
          </a>
        </div>
      </section>

      {/* Main content with image */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden shadow-xl mb-10">
                <img
                  src={locationImage}
                  alt={`Electrician serving ${location.name}`}
                  className="w-full h-[300px] lg:h-[400px] object-cover"
                />
              </div>

              {location.longDescription.map((para, i) => (
                <p key={i} className="text-gray-700 text-lg leading-relaxed mb-6">{para}</p>
              ))}

              {isElectricalServices && (
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 my-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Why Choose George The Electrician in {location.shortName}?
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2">
                      <ShieldCheck className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">Licensed, bonded & insured</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">Same-day service available</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">24/7 emergency response</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">Lifetime workmanship warranty</span>
                    </div>
                  </div>
                </div>
              )}

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">
                {isElectrician
                  ? `Electrical Services in ${location.shortName}`
                  : `Services Available in ${location.shortName}`}
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/${s.urlSlug}`}
                    className="flex items-center gap-2 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-yellow-400 hover:bg-yellow-50 transition-all"
                  >
                    <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-800">{s.shortTitle}</span>
                  </Link>
                ))}
              </div>

              {location.neighborhoods.length > 0 && (
                <div className="mt-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Neighborhoods We Serve in {location.shortName}</h2>
                  <div className="flex flex-wrap gap-2">
                    {location.neighborhoods.map((n) => (
                      <span key={n} className="px-4 py-2 rounded-lg bg-gray-100 text-sm text-gray-700">
                        {n}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {location.zipCodes.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">ZIP Codes We Serve</h3>
                  <div className="flex flex-wrap gap-2">
                    {location.zipCodes.map((z) => (
                      <span key={z} className="px-3 py-1.5 rounded-lg bg-gray-100 text-sm text-gray-600 font-mono">{z}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* Cross-link to the other page type */}
              <div className="mt-10 p-6 rounded-2xl bg-yellow-50 border border-yellow-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {isElectrician
                    ? `Looking for full electrical services in ${location.shortName}?`
                    : `Need an electrician in ${location.shortName}?`}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {isElectrician
                    ? `See all the electrical services we offer in ${location.shortName} — from residential wiring to commercial build-outs.`
                    : `Learn more about our electrician services in ${location.shortName}, including neighborhoods, ZIP codes, and response times.`}
                </p>
                <Link
                  to={isElectrician ? `/electrical-services-${location.slug}` : `/electrician-${location.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-yellow-400 text-black text-sm font-bold hover:bg-yellow-300 transition-colors"
                >
                  {isElectrician
                    ? `Electrical Services in ${location.shortName}`
                    : `Electrician in ${location.shortName}`}
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <aside>
              <div className="sticky top-24 space-y-6">
                <div className="bg-gray-900 rounded-2xl p-6 text-center">
                  <h3 className="text-white font-bold text-lg mb-2">
                    {isElectrician ? `Electrician in ${location.shortName}?` : `Electrical Services in ${location.shortName}?`}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">Call now for fast, reliable service.</p>
                  <a
                    href={`tel:${business.phoneRaw}`}
                    className="flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-xl bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition-colors"
                  >
                    <Phone className="w-5 h-5" strokeWidth={2.5} />
                    {business.phoneDisplay}
                  </a>
                  <div className="flex items-center justify-center gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                    <span className="text-gray-400 text-xs ml-1">{business.rating} · {business.reviewCount} reviews</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-yellow-500" />
                    Also Serving
                  </h3>
                  <ul className="space-y-2">
                    {otherLocations.map((l) => (
                      <li key={l.slug}>
                        <Link
                          to={isElectrician ? `/electrician-${l.slug}` : `/electrical-services-${l.slug}`}
                          className="flex items-center justify-between gap-2 text-sm text-gray-600 hover:text-yellow-600 transition-colors py-1.5"
                        >
                          {isElectrician ? `Electrician in ${l.shortName}` : `Electrical Services in ${l.shortName}`}
                          <ChevronRight className="w-4 h-4" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <HomeIcon className="w-5 h-5 text-yellow-500" />
                    Our Services
                  </h3>
                  <ul className="space-y-2">
                    {services.slice(0, 5).map((s) => (
                      <li key={s.slug}>
                        <Link
                          to={`/${s.urlSlug}`}
                          className="flex items-center justify-between gap-2 text-sm text-gray-600 hover:text-yellow-600 transition-colors py-1.5"
                        >
                          {s.shortTitle}
                          <ChevronRight className="w-4 h-4" />
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link to="/services" className="text-sm font-semibold text-yellow-600 hover:text-yellow-700">
                        View All →
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
            {isElectrician
              ? `${location.shortName} Electrician — FAQ`
              : `${location.shortName} Electrical Services — FAQ`}
          </h2>
          <div className="space-y-3">
            {locationFaqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-yellow-500 flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-96" : "max-h-0"}`}>
                  <p className="px-6 py-5 text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
            Reviews from {location.shortName} Customers
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">"{t.text}"</p>
                <div className="text-sm font-semibold text-gray-900">{t.name}</div>
                <div className="text-xs text-gray-500">{t.location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title={isElectrician ? `Need an Electrician in ${location.shortName} Today?` : `Electrical Services in ${location.shortName} — Call Now`}
        subtitle="Call now for same-day service and upfront pricing. Licensed, insured, and ready to help."
      />
    </>
  );
}
