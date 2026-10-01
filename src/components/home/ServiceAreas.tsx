import { Link } from "react-router-dom";
import { MapPin, ChevronRight } from "lucide-react";
import { locations, images } from "@/data/business";

export function ServiceAreas() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">
            Where We Work
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4 tracking-tight">
            Serving Glendale & Surrounding Communities
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Based in Glendale, we proudly serve homes and businesses across the greater Los Angeles area.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc) => (
            <Link
              key={loc.slug}
              to={`/electrician-${loc.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-black hover:shadow-2xl transition-all"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={loc.slug === "glendale-ca" ? images.glendale : images.glendaleStreet}
                  alt={`Electrician serving ${loc.name}`}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-50 group-hover:scale-105 transition-all duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="flex items-center gap-2 text-yellow-400 mb-1">
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wide">Electrician in</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{loc.shortName}</h3>
                <span className="inline-flex items-center gap-1 text-sm text-yellow-400 font-medium">
                  Electrician in {loc.shortName}
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/service-areas"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-black text-white font-semibold hover:bg-gray-900 transition-all"
          >
            View All Los Angeles County Service Areas
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
