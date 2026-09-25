import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { CTABanner } from "@/components/CTABanner";
import {
  MapPin, ChevronRight, Phone, CheckCircle2, Clock, ShieldCheck,
  Award, Users, Star, Zap, Navigation, Building2, Home as HomeIcon,
} from "lucide-react";
import { locations, services, business, images, testimonials } from "@/data/business";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const stats = [
  { icon: Award, value: "15+", label: "Years Serving Local" },
  { icon: Users, value: "5,000+", label: "Jobs Completed" },
  { icon: Clock, value: "60 min", label: "Avg Emergency Response" },
  { icon: ShieldCheck, value: "100%", label: "Licensed & Insured" },
];

const whyChoose = [
  { icon: MapPin, title: "Based in Glendale", desc: "We know local codes, neighborhoods, and building departments inside and out." },
  { icon: Clock, title: "Same-Day Service", desc: "Standard calls arrive same day. Emergencies in 60–90 minutes across all areas." },
  { icon: ShieldCheck, title: "No Travel Fees", desc: "Same flat-rate pricing whether you are in Glendale, Pasadena, or Burbank." },
  { icon: Zap, title: "24/7 Emergency", desc: "Live dispatcher, licensed electrician, no after-hours surcharge — any time." },
  { icon: HomeIcon, title: "Residential & Commercial", desc: "Full electrical services for homes and businesses in every area we serve." },
  { icon: Award, title: "Lifetime Warranty", desc: "Every job backed by our lifetime workmanship guarantee, no matter your city." },
];

const areaFaqs = [
  {
    question: "What areas does George The Electrician serve?",
    answer:
      "We are based in Glendale, CA and serve Glendale, Pasadena, Burbank, La Cañada Flintridge, and neighboring Los Angeles communities including Atwater Village, Silver Lake, and Eagle Rock. If you are within 25 miles of Glendale, we can help.",
  },
  {
    question: "How fast can you reach my home or business?",
    answer:
      "For standard service calls, we typically arrive the same day. For emergencies, our average response time is 60–90 minutes throughout our service area. Call us and we will give you a live ETA based on your location.",
  },
  {
    question: "Do you charge a travel fee for areas outside Glendale?",
    answer:
      "No. We do not charge travel fees within our standard service area. The same flat-rate pricing applies whether you are in Glendale, Pasadena, Burbank, or La Cañada Flintridge. You only pay for the work performed.",
  },
  {
    question: "Do you serve both residential and commercial customers?",
    answer:
      "Yes. We provide full electrical services to both homes and businesses across all our service areas. From a single outlet repair to a full commercial build-out, we handle it all with the same level of expertise.",
  },
  {
    question: "Do you know the local building codes in each city?",
    answer:
      "Yes. We work in these cities every day and are familiar with each city's permitting process, inspection requirements, and local code variations. We handle all permits and inspections so your project stays on schedule.",
  },
  {
    question: "Can you handle historic homes in Pasadena and Glendale?",
    answer:
      "Absolutely. We have extensive experience with knob-and-tube wiring, aluminum branch wiring, and Federal Pacific panels common in older homes throughout Pasadena's Bungalow Heaven and Glendale's Rossmoyne neighborhoods.",
  },
];

const areaHighlights: Record<string, { responseTime: string; specialties: string[] }> = {
  "glendale-ca": { responseTime: "30–60 min", specialties: ["Historic home rewiring", "Brand Blvd commercial", "ADU electrical"] },
  "pasadena-ca": { responseTime: "30–60 min", specialties: ["Craftsman home rewiring", "Title 24 compliance", "Commercial build-outs"] },
  "burbank-ca": { responseTime: "30–60 min", specialties: ["Studio facilities", "Media District commercial", "Residential panel upgrades"] },
  "los-angeles-ca": { responseTime: "45–90 min", specialties: ["Atwater Village repairs", "Silver Lake renovations", "Highland Park upgrades"] },
  "la-canada-flintridge-ca": { responseTime: "20–45 min", specialties: ["Premium residential", "Landscape lighting", "EV charger installs"] },
};

export default function ServiceAreasPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <SEO
        title="Service Areas | George The Electrician — Glendale, Pasadena, Burbank & More"
        description="George The Electrician serves Glendale, Pasadena, Burbank, La Cañada Flintridge, and Los Angeles neighborhoods. Licensed electrician, 24/7 emergency, no travel fees. Call (747) 269-3742."
        canonical="/service-areas"
      />

      {/* Hero */}
      <section className="bg-black py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={images.glendale} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/30 mb-6">
            <Navigation className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 text-sm font-semibold">
              5 Cities · 25-Mile Radius · No Travel Fees
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Our <span className="text-yellow-400">Service Areas</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Based in Glendale, CA — we proudly serve homes and businesses across the greater Los Angeles area. Wherever you are, we are ready to help with fast, reliable, licensed electrical service.
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

      {/* Intro */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">
              Where We Work
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-6 tracking-tight">
              Serving the Greater Glendale Area
            </h2>
          </div>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              George The Electrician is based in Glendale, California, and we have been serving the surrounding communities for over 15 years. From the tree-lined streets of Verdugo Woodlands to the busy commercial corridors of downtown Burbank, our licensed electricians know these neighborhoods inside and out.
            </p>
            <p>
              We do not charge travel fees within our service area, and our response times are fast — typically same-day for standard calls and 60–90 minutes for emergencies. When you call, you speak with a live dispatcher who knows the area and can give you an accurate ETA based on your exact location.
            </p>
            <p>
              Being local means we know your building department, your permitting process, and the unique electrical challenges that come with your neighborhood — whether that is a 1920s Craftsman in Pasadena's Bungalow Heaven or a modern commercial space in Burbank's Media District. We are not a national chain — we are your neighbors, and we treat every job like it is in our own home.
            </p>
            <p>
              Each city we serve has its own dedicated page with neighborhood details, ZIP codes, response times, and local information. Find your city below to learn more, or call now to schedule a visit.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 mx-auto rounded-xl bg-yellow-400/10 flex items-center justify-center mb-2">
                  <s.icon className="w-6 h-6 text-yellow-400" strokeWidth={2} />
                </div>
                <div className="text-3xl font-bold text-white">{s.value}</div>
                <div className="text-sm text-gray-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location cards with highlights */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">
              Cities We Serve
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4 tracking-tight">
              Find Your City
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Click your city for local electrician information, neighborhoods, ZIP codes, and area-specific details.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {locations.map((loc) => {
              const highlights = areaHighlights[loc.slug];
              return (
                <div key={loc.slug} className="group rounded-2xl overflow-hidden bg-white border border-gray-200 hover:border-yellow-400 hover:shadow-xl transition-all">
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-2/5 aspect-[3/2] sm:aspect-auto overflow-hidden bg-gray-100">
                      <img
                        src={loc.slug === "glendale-ca" ? images.glendale : images.glendaleStreet}
                        alt={`Electrician serving ${loc.name}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="sm:w-3/5 p-6 flex flex-col">
                      <div className="flex items-center gap-2 text-yellow-500 mb-1">
                        <MapPin className="w-4 h-4" />
                        <span className="text-xs font-semibold uppercase tracking-wide">Electrician in</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{loc.name}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-3">{loc.description}</p>
                      {highlights && (
                        <div className="mb-3">
                          <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                            <Clock className="w-3.5 h-3.5 text-yellow-500" />
                            <span className="font-semibold">Response: {highlights.responseTime}</span>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {highlights.specialties.map((sp) => (
                              <span key={sp} className="px-2 py-0.5 rounded-md bg-yellow-50 border border-yellow-200 text-xs text-yellow-700">{sp}</span>
                            ))}
                          </div>
                        </div>
                      )}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {loc.neighborhoods.slice(0, 4).map((n) => (
                          <span key={n} className="px-2 py-0.5 rounded-md bg-gray-100 text-xs text-gray-600">{n}</span>
                        ))}
                        {loc.neighborhoods.length > 4 && (
                          <span className="px-2 py-0.5 rounded-md bg-gray-100 text-xs text-gray-500">+{loc.neighborhoods.length - 4}</span>
                        )}
                      </div>
                      <div className="flex flex-col gap-2 mt-auto">
                        <Link
                          to={`/electrician-${loc.slug}`}
                          className="inline-flex items-center gap-1 text-sm font-semibold text-yellow-600 hover:text-yellow-700"
                        >
                          Electrician in {loc.shortName}
                          <ChevronRight className="w-4 h-4" />
                        </Link>
                        <Link
                          to={`/electrical-services-${loc.slug}`}
                          className="inline-flex items-center gap-1 text-sm font-semibold text-yellow-600 hover:text-yellow-700"
                        >
                          Electrical Services in {loc.shortName}
                          <ChevronRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">
              Local & Reliable
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4 tracking-tight">
              Your Neighborhood Electrician
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Being local means we know your neighborhood, your building department, and your electrical challenges. We are not a national chain — we are your neighbors.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-yellow-300 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-yellow-500" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Area-specific content */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">
              Area Spotlights
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4 tracking-tight">
              Electrical Service by City
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn about the specific electrical challenges and services we provide in each community.
            </p>
          </div>
          <div className="space-y-6">
            {locations.map((loc) => (
              <div key={loc.slug} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all">
                <div className="grid lg:grid-cols-3 gap-0">
                  <div className="lg:col-span-1 aspect-[16/10] lg:aspect-auto overflow-hidden bg-gray-100">
                    <img
                      src={loc.slug === "glendale-ca" ? images.glendale : images.glendaleStreet}
                      alt={`Electrician in ${loc.name}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="lg:col-span-2 p-6 lg:p-8">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-5 h-5 text-yellow-500" />
                      <h3 className="text-xl font-bold text-gray-900">{loc.name}</h3>
                    </div>
                    {loc.longDescription.map((para, i) => (
                      <p key={i} className="text-sm text-gray-600 leading-relaxed mb-3">{para}</p>
                    ))}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {loc.neighborhoods.map((n) => (
                        <span key={n} className="px-2.5 py-1 rounded-md bg-gray-100 text-xs text-gray-600">{n}</span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Link
                        to={`/electrician-${loc.slug}`}
                        className="inline-flex items-center gap-1 px-4 py-2 rounded-lg bg-yellow-400 text-black text-sm font-semibold hover:bg-yellow-300 transition-colors"
                      >
                        Electrician in {loc.shortName}
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                      <Link
                        to={`/electrical-services-${loc.slug}`}
                        className="inline-flex items-center gap-1 px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm font-semibold hover:bg-gray-200 transition-colors"
                      >
                        Electrical Services in {loc.shortName}
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services available */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl bg-gray-50 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Services Available in All Areas</h2>
            <p className="text-gray-600 mb-6">
              No matter which city you are in, we offer the full range of electrical services. Click any service to learn more.
            </p>
            <div className="flex flex-wrap gap-3">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  to={`/${s.urlSlug}`}
                  className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-sm text-gray-700 hover:border-yellow-400 hover:text-yellow-600 transition-colors"
                >
                  {s.shortTitle}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">
              Reviews From Our Service Areas
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 tracking-tight">
              What Customers Across Our Area Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(0, 6).map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">"{t.text}"</p>
                <div className="text-sm font-semibold text-gray-900">{t.name}</div>
                <div className="text-xs text-gray-500">{t.location} · {t.service}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
            Service Area FAQs
          </h2>
          <div className="space-y-3">
            {areaFaqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-100 transition-colors"
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

      <CTABanner />
    </>
  );
}
