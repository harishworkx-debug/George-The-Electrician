import { useParams, Link, Navigate } from "react-router-dom";
import { Phone, CheckCircle2, ChevronRight, Star, ShieldCheck, Clock, Award, Zap, MapPin } from "lucide-react";
import { SEO, buildServiceSchema, buildFAQSchema } from "@/components/SEO";
import { CTABanner } from "@/components/CTABanner";
import { services, business, locations, testimonials } from "@/data/business";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function ServicePage({ slug: propSlug }: { slug?: string }) {
  const { slug: paramSlug } = useParams();
  const location = window.location.pathname.replace("/", "");
  const activeSlug = propSlug || paramSlug || location;
  const service = services.find((s) => s.urlSlug === activeSlug);

  if (!service) return <Navigate to="/services" replace />;

  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const relatedServices = services.filter((s) => s.slug !== service.slug).slice(0, 4);
  const serviceTestimonials = testimonials.slice(0, 3);

  const benefits = [
    { icon: ShieldCheck, title: "Licensed & Insured", desc: "CSLB certified, bonded, fully insured" },
    { icon: Clock, title: "Same-Day Available", desc: "Call before noon, see us today" },
    { icon: Award, title: "Lifetime Warranty", desc: "Workmanship guaranteed for life" },
    { icon: Zap, title: "Upfront Pricing", desc: "Flat-rate quote before any work" },
  ];

  return (
    <>
      <SEO
        title={`${service.title} | George The Electrician — Call (747) 837-1879`}
        description={service.description}
        canonical={`/${service.urlSlug}`}
        schema={[
          buildServiceSchema(service.title, service.description, `/${service.urlSlug}`, service.faqs),
          buildFAQSchema(service.faqs),
        ]}
      />

      {/* Hero */}
      <section className="bg-black py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={service.image} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-yellow-400">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/services" className="hover:text-yellow-400">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-yellow-400">{service.shortTitle}</span>
          </nav>
          <h1 className="text-3xl lg:text-5xl font-bold text-white tracking-tight mb-4 max-w-3xl">
            {service.title}
          </h1>
          <p className="text-lg lg:text-xl text-gray-300 max-w-2xl mb-8">{service.tagline}</p>
          <a
            href={`tel:${business.phoneRaw}`}
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition-all shadow-xl hover:scale-105"
          >
            <Phone className="w-5 h-5" strokeWidth={2.5} />
            Call Now — {business.phoneDisplay}
          </a>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden shadow-xl mb-10">
                <img
                  src={service.image}
                  alt={`${service.shortTitle} in Glendale, CA`}
                  className="w-full h-[300px] lg:h-[400px] object-cover"
                />
              </div>

              {service.longDescription.map((para, i) => (
                <p key={i} className="text-gray-700 text-lg leading-relaxed mb-6">
                  {para}
                </p>
              ))}

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">
                What's Included
              </h2>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
                {benefits.map((b, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-4 border border-gray-200 text-center">
                    <div className="w-10 h-10 mx-auto rounded-lg bg-yellow-400/10 flex items-center justify-center mb-2">
                      <b.icon className="w-5 h-5 text-yellow-500" strokeWidth={2} />
                    </div>
                    <h3 className="text-sm font-bold text-gray-900">{b.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-gray-900 rounded-2xl p-6 text-center">
                  <h3 className="text-white font-bold text-lg mb-2">Need This Service?</h3>
                  <p className="text-gray-400 text-sm mb-4">Call now for same-day service in Glendale.</p>
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
                  <h3 className="font-bold text-gray-900 mb-4">Other Services</h3>
                  <ul className="space-y-2">
                    {relatedServices.map((s) => (
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
                  </ul>
                  <Link to="/services" className="block text-sm font-semibold text-yellow-600 hover:text-yellow-700 mt-3">
                    View All Services →
                  </Link>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-yellow-500" />
                    Service Areas
                  </h3>
                  <ul className="space-y-2">
                    {locations.map((l) => (
                      <li key={l.slug}>
                        <Link
                          to={`/electrician-${l.slug}`}
                          className="flex items-center justify-between gap-2 text-sm text-gray-600 hover:text-yellow-600 transition-colors py-1.5"
                        >
                          {l.shortName}
                          <ChevronRight className="w-4 h-4" />
                        </Link>
                      </li>
                    ))}
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
            {service.shortTitle} — Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {service.faqs.map((faq, i) => (
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
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {serviceTestimonials.map((t, i) => (
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

      {/* Serving Areas */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Serving These Areas</h2>
          <div className="flex flex-wrap gap-3">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/electrician-${loc.slug}`}
                className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-sm text-gray-700 hover:border-yellow-400 hover:text-yellow-600 transition-colors"
              >
                Electrician in {loc.shortName}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title={`Ready for ${service.shortTitle} in Glendale?`} subtitle="Call now for upfront pricing and same-day availability. Licensed, insured, and guaranteed." />
    </>
  );
}
