import { Link } from "react-router-dom";
import {
  Home, Building2, Wrench, Siren, Zap, BatteryCharging,
  Lightbulb, Plug, Fan, ShieldCheck, ChevronRight,
} from "lucide-react";
import { services } from "@/data/business";

const iconMap: Record<string, React.ComponentType<{ className?: string; strokeWidth?: string | number }>> = {
  Home, Building2, Wrench, Siren, Zap, BatteryCharging, Lightbulb, Plug, Fan, ShieldCheck,
};

export function ServicesGrid() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4 tracking-tight">
            Complete Electrical Services in Glendale
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            From a single outlet repair to a full commercial build-out, our licensed electricians handle every electrical need with precision and care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Zap;
            return (
              <Link
                key={service.slug}
                to={`/${service.urlSlug}`}
                className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-300"
              >
                <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={service.image}
                    alt={`${service.shortTitle} in Glendale, CA — ${service.tagline}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-yellow-400/10 flex items-center justify-center group-hover:bg-yellow-400 transition-colors">
                      <Icon className="w-5 h-5 text-yellow-500 group-hover:text-black transition-colors" strokeWidth={2} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-yellow-600 transition-colors">
                      {service.shortTitle}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-yellow-600 group-hover:text-yellow-700">
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
  );
}
