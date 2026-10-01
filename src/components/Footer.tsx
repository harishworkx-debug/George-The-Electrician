import { Link } from "react-router-dom";
import { Phone, MapPin, Mail, Zap, Clock, ShieldCheck } from "lucide-react";
import { business, services, locations } from "@/data/business";

export function Footer() {
  return (
    <footer className="bg-black text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center">
                <Zap className="w-6 h-6 text-black" strokeWidth={2.5} />
              </div>
              <span className="text-white font-bold text-lg">George The Electrician</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Glendale's trusted licensed electrician for over 15 years. Residential, commercial, and emergency electrical services.
            </p>
            <div className="flex items-center gap-2 text-sm text-yellow-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              {business.license}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/${s.urlSlug}`}
                    className="text-sm hover:text-yellow-400 transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-sm text-yellow-400 hover:text-yellow-300 font-medium">
                  View All Electrical Services →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Service Areas</h3>
            <ul className="space-y-2.5">
              {locations.map((l) => (
                <li key={l.slug}>
                  <Link
                    to={`/electrician-${l.slug}`}
                    className="text-sm hover:text-yellow-400 transition-colors"
                  >
                    Electrician in {l.shortName}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/service-areas" className="text-sm text-yellow-400 hover:text-yellow-300 font-medium">
                  View All Service Areas →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${business.phoneRaw}`}
                  className="flex items-center gap-2.5 text-sm hover:text-yellow-400 transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  {business.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                {business.address.full}
              </li>
              <li>
                <a
                  href={`mailto:${business.email}`}
                  className="flex items-center gap-2.5 text-sm hover:text-yellow-400 transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  {business.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm">
                <Clock className="w-4 h-4 flex-shrink-0 mt-0.5" />
                Mon–Fri: 7AM–7PM<br />Sat: 8AM–5PM<br />Sun: Emergency Only
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="text-xs text-gray-500 hover:text-yellow-400 transition-colors">About</Link>
            <Link to="/blog" className="text-xs text-gray-500 hover:text-yellow-400 transition-colors">Blog</Link>
            <Link to="/contact" className="text-xs text-gray-500 hover:text-yellow-400 transition-colors">Contact</Link>
            <Link to="/faq" className="text-xs text-gray-500 hover:text-yellow-400 transition-colors">FAQ</Link>
            <Link to="/services" className="text-xs text-gray-500 hover:text-yellow-400 transition-colors">Services</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
