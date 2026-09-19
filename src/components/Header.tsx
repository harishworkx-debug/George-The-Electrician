import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Phone, Menu, X, Zap, ChevronDown } from "lucide-react";
import { business, services, locations } from "@/data/business";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [areasDropdown, setAreasDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const location = useLocation();
  const servicesRef = useRef<HTMLDivElement>(null);
  const areasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesDropdown(false);
    setAreasDropdown(false);
  }, [location.pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) setServicesDropdown(false);
      if (areasRef.current && !areasRef.current.contains(e.target as Node)) setAreasDropdown(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const isActive = (path: string) => {
    if (path === "/services") return location.pathname === "/services" || services.some((s) => location.pathname === `/${s.urlSlug}`);
    if (path === "/service-areas") return location.pathname === "/service-areas" || locations.some((l) => location.pathname === `/electrician-${l.slug}` || location.pathname === `/electrical-services-${l.slug}`);
    return location.pathname === path;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/95 backdrop-blur-md shadow-lg shadow-black/30"
            : "bg-black/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-lg shadow-yellow-500/20 group-hover:shadow-yellow-500/40 transition-shadow">
                <Zap className="w-6 h-6 text-black" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-lg lg:text-xl tracking-tight">
                  George The Electrician
                </span>
                <span className="text-yellow-400 text-xs font-medium tracking-wide">
                  Licensed · Insured · Glendale, CA
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              <Link
                to="/"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive("/") ? "text-yellow-400 bg-yellow-400/10" : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div ref={servicesRef} className="relative">
                <button
                  onClick={() => { setServicesDropdown(!servicesDropdown); setAreasDropdown(false); }}
                  className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive("/services") ? "text-yellow-400 bg-yellow-400/10" : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesDropdown ? "rotate-180" : ""}`} />
                </button>
                {servicesDropdown && (
                  <div className="absolute top-full left-0 mt-1 w-72 bg-black backdrop-blur-md rounded-xl border border-white/10 shadow-2xl py-2 max-h-[70vh] overflow-y-auto">
                    <Link
                      to="/services"
                      className="flex items-center justify-between px-4 py-2.5 text-sm text-gray-300 hover:text-yellow-400 hover:bg-white/5 transition-colors"
                    >
                      All Services
                      <ChevronDown className="w-4 h-4 -rotate-90" />
                    </Link>
                    <div className="h-px bg-white/10 my-1" />
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/${s.urlSlug}`}
                        className="block px-4 py-2.5 text-sm text-gray-300 hover:text-yellow-400 hover:bg-white/5 transition-colors"
                      >
                        {s.shortTitle}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Service Areas Dropdown */}
              <div ref={areasRef} className="relative">
                <button
                  onClick={() => { setAreasDropdown(!areasDropdown); setServicesDropdown(false); }}
                  className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive("/service-areas") ? "text-yellow-400 bg-yellow-400/10" : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  Service Areas
                  <ChevronDown className={`w-4 h-4 transition-transform ${areasDropdown ? "rotate-180" : ""}`} />
                </button>
                {areasDropdown && (
                  <div className="absolute top-full left-0 mt-1 w-72 bg-black backdrop-blur-md rounded-xl border border-white/10 shadow-2xl py-2">
                    <Link
                      to="/service-areas"
                      className="flex items-center justify-between px-4 py-2.5 text-sm text-gray-300 hover:text-yellow-400 hover:bg-white/5 transition-colors"
                    >
                      All Service Areas
                      <ChevronDown className="w-4 h-4 -rotate-90" />
                    </Link>
                    <div className="h-px bg-white/10 my-1" />
                    {locations.map((l) => (
                      <Link
                        key={l.slug}
                        to={`/electrician-${l.slug}`}
                        className="block px-4 py-2.5 text-sm text-gray-300 hover:text-yellow-400 hover:bg-white/5 transition-colors"
                      >
                        Electrician in {l.shortName}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/reviews"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive("/reviews") ? "text-yellow-400 bg-yellow-400/10" : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                Reviews
              </Link>
              <Link
                to="/faq"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive("/faq") ? "text-yellow-400 bg-yellow-400/10" : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                FAQ
              </Link>
              <Link
                to="/contact"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive("/contact") ? "text-yellow-400 bg-yellow-400/10" : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                Contact
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={`tel:${business.phoneRaw}`}
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-sm transition-all shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/40 hover:scale-105"
              >
                <Phone className="w-4 h-4" strokeWidth={2.5} />
                Call Now
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden text-white p-2"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-black backdrop-blur-md border-t border-white/10 max-h-[80vh] overflow-y-auto">
            <nav className="px-4 py-4 flex flex-col gap-1">
              <Link
                to="/"
                className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive("/") ? "text-yellow-400 bg-yellow-400/10" : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                Home
              </Link>

              {/* Mobile Services Dropdown */}
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive("/services") ? "text-yellow-400 bg-yellow-400/10" : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                Services
                <ChevronDown className={`w-5 h-5 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 flex flex-col gap-0.5">
                  <Link to="/services" className="px-4 py-2.5 rounded-lg text-sm text-gray-400 hover:text-yellow-400 hover:bg-white/5 transition-colors">
                    All Services
                  </Link>
                  {services.map((s) => (
                    <Link key={s.slug} to={`/${s.urlSlug}`} className="px-4 py-2.5 rounded-lg text-sm text-gray-400 hover:text-yellow-400 hover:bg-white/5 transition-colors">
                      {s.shortTitle}
                    </Link>
                  ))}
                </div>
              )}

              {/* Mobile Service Areas Dropdown */}
              <button
                onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
                className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive("/service-areas") ? "text-yellow-400 bg-yellow-400/10" : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                Service Areas
                <ChevronDown className={`w-5 h-5 transition-transform ${mobileAreasOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileAreasOpen && (
                <div className="pl-4 flex flex-col gap-0.5">
                  <Link to="/service-areas" className="px-4 py-2.5 rounded-lg text-sm text-gray-400 hover:text-yellow-400 hover:bg-white/5 transition-colors">
                    All Service Areas
                  </Link>
                  {locations.map((l) => (
                    <Link key={l.slug} to={`/electrician-${l.slug}`} className="px-4 py-2.5 rounded-lg text-sm text-gray-400 hover:text-yellow-400 hover:bg-white/5 transition-colors">
                      Electrician in {l.shortName}
                    </Link>
                  ))}
                </div>
              )}

              <Link
                to="/reviews"
                className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive("/reviews") ? "text-yellow-400 bg-yellow-400/10" : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                Reviews
              </Link>
              <Link
                to="/faq"
                className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive("/faq") ? "text-yellow-400 bg-yellow-400/10" : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                FAQ
              </Link>
              <Link
                to="/contact"
                className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive("/contact") ? "text-yellow-400 bg-yellow-400/10" : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                Contact
              </Link>
              <a
                href={`tel:${business.phoneRaw}`}
                className="flex items-center justify-center gap-2 mt-2 px-5 py-3.5 rounded-lg bg-yellow-400 text-black font-bold text-base"
              >
                <Phone className="w-5 h-5" strokeWidth={2.5} />
                Call {business.phoneDisplay}
              </a>
            </nav>
          </div>
        )}
      </header>
      <div className="h-16 lg:h-20" />
    </>
  );
}
