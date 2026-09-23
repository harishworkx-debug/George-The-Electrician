import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { CTABanner } from "@/components/CTABanner";
import {
  Home, Building2, Wrench, Siren, Zap, BatteryCharging,
  Lightbulb, Plug, Fan, ShieldCheck, ChevronRight, Phone,
  CheckCircle2, Clock, Award, Users, Star, AlertTriangle,
  ClipboardCheck, BadgeCheck, ThumbsUp, DollarSign,
} from "lucide-react";
import { services, business, images, homeFAQs, testimonials } from "@/data/business";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string; strokeWidth?: string | number }>> = {
  Home, Building2, Wrench, Siren, Zap, BatteryCharging, Lightbulb, Plug, Fan, ShieldCheck,
};

const stats = [
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Users, value: "5,000+", label: "Jobs Completed" },
  { icon: Star, value: "4.9★", label: "Customer Rating" },
  { icon: Clock, value: "24/7", label: "Emergency Service" },
];

const whyChoose = [
  { icon: BadgeCheck, title: "Licensed & Insured", desc: "CSLB certified, bonded, and fully insured for every project size." },
  { icon: DollarSign, title: "Upfront Pricing", desc: "Flat-rate quotes before any work begins. No hourly billing, no surprises." },
  { icon: Clock, title: "Same-Day Service", desc: "Call before noon and we will have an electrician at your door today." },
  { icon: ShieldCheck, title: "Lifetime Warranty", desc: "Every repair and installation backed by our lifetime workmanship guarantee." },
  { icon: ThumbsUp, title: "Clean Workmanship", desc: "We protect your floors, clean up after ourselves, and respect your home." },
  { icon: Award, title: "15+ Years Local", desc: "Trusted by Glendale homeowners and businesses since 2010." },
];

const process = [
  { step: "1", title: "Call & Describe", desc: "Tell us what is happening. We schedule a same-day visit and give you a time window — no call centers." },
  { step: "2", title: "Diagnose & Quote", desc: "Our licensed electrician finds the root cause and gives you a flat-rate price before any work starts." },
  { step: "3", title: "Clean Repair", desc: "We fix it right the first time with code-compliant materials and spotless workmanship." },
  { step: "4", title: "Warranty & Follow-Up", desc: "Every job is backed by our lifetime warranty. We follow up to make sure everything is perfect." },
];

const warningSigns = [
  { title: "Breakers Tripping Repeatedly", desc: "Overloaded circuits or a failing breaker — a fire risk that needs immediate professional diagnosis." },
  { title: "Flickering or Dimming Lights", desc: "Loose neutral wire, overloaded circuit, or degraded wiring behind your walls." },
  { title: "Dead or Sparking Outlets", desc: "Failed receptacle or broken wire. A sparking outlet is an emergency — call now." },
  { title: "Burning Smell from Panel", desc: "Overheating components. Turn off your main breaker and call us immediately — 24/7." },
  { title: "Warm or Tingling Switches", desc: "A switch that feels warm or gives a tiny shock indicates a serious wiring fault." },
  { title: "Panel Over 25 Years Old", desc: "Federal Pacific and Zinsco panels are linked to electrical fires. Get an inspection." },
];

const pricingInfo = [
  { service: "Diagnostic Service Call", price: "$89", note: "Credited toward any approved repair" },
  { service: "Outlet / Switch Replacement", price: "From $125", note: "Per outlet, includes GFCI if needed" },
  { service: "Ceiling Fan Installation", price: "From $150", note: "With existing fan-rated box" },
  { service: "Lighting Fixture Install", price: "From $125", note: "Per fixture, basic replacement" },
  { service: "Panel Upgrade (200 amp)", price: "$1,800–$4,500", note: "Includes permit and inspection" },
  { service: "EV Charger Installation", price: "$500–$1,500", note: "Level 2, labor only" },
  { service: "Whole-Home Inspection", price: "$199", note: "Includes thermal imaging report" },
  { service: "Emergency Service Call", price: "$89", note: "Same rate, no after-hours surcharge" },
];

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <SEO
        title="Electrical Services in Glendale, CA | George The Electrician — 10+ Services"
        description="Complete electrical services in Glendale, CA — residential, commercial, emergency repair, panel upgrades, EV chargers, lighting, outlets, ceiling fans, inspections. Licensed electrician. Upfront pricing. Call (747) 252-1457."
        canonical="/services"
      />

      {/* Hero */}
      <section className="bg-black py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={images.heroSecondary} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/30 mb-6">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-yellow-400 text-sm font-semibold">
              {business.rating} Stars · {business.reviewCount} Reviews · {business.yearsExperience} Years in Glendale
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Electrical Services in <span className="text-yellow-400">Glendale, CA</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            From emergency repairs to full commercial build-outs — we are your complete electrical solution. 10+ services, one licensed team, upfront pricing every time.
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
              Complete Electrical Solutions
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-6 tracking-tight">
              One Electrician for Every Need
            </h2>
          </div>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              George The Electrician offers the full spectrum of electrical services to homes and businesses throughout Glendale, CA and surrounding communities. Whether you need a quick outlet repair, a whole-home panel upgrade, or a 24/7 emergency response, our licensed electricians deliver clean, code-compliant work with upfront pricing.
            </p>
            <p>
              We have built our reputation over 15+ years by showing up on time, explaining the problem in plain language, and standing behind every job with a lifetime workmanship warranty. No upselling, no surprise fees, no cutting corners — just honest, reliable electrical service from a team that lives in your community.
            </p>
            <p>
              Every service call starts with a thorough diagnostic by a licensed electrician — not a salesperson. We find the root cause, explain your options, and give you a flat-rate price before any work begins. You approve, we fix it, and we back it with our lifetime warranty. That is the George The Electrician difference.
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

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">
              What We Do
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4 tracking-tight">
              Browse All Electrical Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Click any service below to see pricing, features, FAQs, and detailed information.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Zap;
              return (
                <Link
                  key={service.slug}
                  to={`/${service.urlSlug}`}
                  className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-yellow-400 hover:shadow-xl transition-all"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                    <img
                      src={service.image}
                      alt={`${service.shortTitle} in Glendale, CA`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-yellow-400/10 flex items-center justify-center group-hover:bg-yellow-400 transition-colors">
                        <Icon className="w-5 h-5 text-yellow-500 group-hover:text-black transition-colors" strokeWidth={2} />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">{service.shortTitle}</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{service.description}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-yellow-600">
                      {service.shortTitle}
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
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
              Why Choose George
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4 tracking-tight">
              The Glendale Electrician You Can Trust
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We have earned our reputation one job at a time. Every service comes with the same promise: honest advice, clean workmanship, and fair pricing.
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

      {/* Process */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">
              How It Works
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4 tracking-tight">
              Simple, Transparent Process
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              From your first call to the final follow-up, we make electrical service effortless and stress-free.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {process.map((p, i) => (
              <div key={i} className="relative">
                <div className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-200 hover:border-yellow-300 hover:shadow-lg transition-all h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center">
                      <ClipboardCheck className="w-6 h-6 text-yellow-500" strokeWidth={2} />
                    </div>
                    <span className="text-4xl font-bold text-gray-200">{p.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{p.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
                </div>
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">
              Don't Ignore These Signs
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4 tracking-tight">
              Warning Signs You Need an Electrician
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              If you notice any of these warning signs, call a licensed electrician right away. Small problems become expensive — and dangerous — fast.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {warningSigns.map((w, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-yellow-300 hover:shadow-lg transition-all">
                <div className="flex items-start gap-3 mb-3">
                  <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <h3 className="text-lg font-bold text-gray-900">{w.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href={`tel:${business.phoneRaw}`}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-yellow-400 text-black font-bold text-lg hover:bg-yellow-300 transition-all shadow-xl hover:scale-105"
            >
              <Phone className="w-6 h-6" strokeWidth={2.5} />
              Call Now — {business.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">
              Transparent Pricing
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4 tracking-tight">
              Service Pricing in Glendale, CA
            </h2>
            <p className="text-lg text-gray-600">
              Flat-rate, upfront pricing on every job. No hourly billing, no surprise fees. Your diagnostic fee is credited toward any approved repair.
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg">
            <div className="grid grid-cols-3 gap-4 px-6 py-4 bg-black text-white text-sm font-semibold uppercase tracking-wide">
              <div>Service</div>
              <div>Starting Price</div>
              <div className="hidden sm:block">Notes</div>
            </div>
            {pricingInfo.map((item, i) => (
              <div key={i} className={`grid grid-cols-3 gap-4 px-6 py-4 ${i % 2 === 0 ? "bg-gray-50" : "bg-white"} text-sm`}>
                <div className="font-medium text-gray-900">{item.service}</div>
                <div className="font-bold text-yellow-600">{item.price}</div>
                <div className="hidden sm:block text-gray-500">{item.note}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            * Prices are starting estimates. Final pricing is provided after a free on-site assessment. Call for a quote.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">
              Customer Reviews
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4 tracking-tight">
              What Glendale Says About Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all">
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
          <div className="text-center mt-8">
            <Link to="/reviews" className="text-sm font-semibold text-yellow-600 hover:text-yellow-700">
              Read All Reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
            Service FAQs
          </h2>
          <div className="space-y-3">
            {homeFAQs.slice(0, 6).map((faq, i) => (
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
          <div className="text-center mt-6">
            <Link to="/faq" className="text-sm font-semibold text-yellow-600 hover:text-yellow-700">
              View All FAQs →
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
