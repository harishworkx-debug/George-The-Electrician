import { Link } from "react-router-dom";
import { Phone, Star, ShieldCheck, Clock, Award, ChevronRight } from "lucide-react";
import { business, images } from "@/data/business";
import { CTABanner } from "@/components/CTABanner";

export function Hero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[680px] flex items-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        <img
          src={images.hero}
          alt="Licensed electrician working on an electrical panel in Glendale, CA"
          className="w-full h-full object-cover opacity-40"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/30 mb-6">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-yellow-400 text-sm font-semibold">
              {business.rating} Stars · {business.reviewCount} Reviews · {business.yearsExperience} Years in Glendale
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
            Welcome to{" "}
            <span className="text-yellow-400">George The Electrician</span>
          </h1>

          <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-8 max-w-xl">
            Licensed, insured, and available 24/7. From <Link to="/electrical-panel-upgrade-glendale-ca" className="text-yellow-400 hover:underline">panel upgrades</Link> to <Link to="/emergency-electrician-glendale-ca" className="text-yellow-400 hover:underline">emergency repairs</Link> — we deliver clean, code-compliant electrical work with upfront pricing and a lifetime warranty.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${business.phoneRaw}`}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-yellow-400 text-black font-bold text-lg hover:bg-yellow-300 transition-all shadow-xl shadow-yellow-500/20 hover:scale-105"
            >
              <Phone className="w-6 h-6" strokeWidth={2.5} />
              Call Now — {business.phoneDisplay}
            </a>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm text-white font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all"
            >
              Explore Services
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-10">
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <ShieldCheck className="w-5 h-5 text-yellow-400" />
              Licensed & Insured
            </div>
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <Clock className="w-5 h-5 text-yellow-400" />
              24/7 Emergency Service
            </div>
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <Award className="w-5 h-5 text-yellow-400" />
              Lifetime Workmanship Warranty
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
