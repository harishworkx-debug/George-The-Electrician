import { images } from "@/data/business";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "200 Amp Panel Upgrade",
    location: "Glendale, CA",
    image: images.panel,
    link: "/electrical-panel-upgrade-glendale-ca"
  },
  {
    title: "Level 2 EV Charger Install",
    location: "Pasadena, CA",
    image: images.evCharger,
    link: "/ev-charger-installation-glendale-ca"
  },
  {
    title: "Whole-Home Rewiring",
    location: "Burbank, CA",
    image: images.wiring,
    link: "/residential-electrician-glendale-ca"
  },
  {
    title: "Commercial Lighting Retrofit",
    location: "Los Angeles, CA",
    image: images.commercial,
    link: "/commercial-electrician-glendale-ca"
  },
  {
    title: "Chandelier Installation",
    location: "La Cañada Flintridge, CA",
    image: images.chandelier,
    link: "/lighting-installation-glendale-ca"
  },
  {
    title: "Outdoor Security Lighting",
    location: "Glendale, CA",
    image: images.outdoor,
    link: "/lighting-installation-glendale-ca"
  }
];

export function Gallery() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">
              Our Work
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4 tracking-tight">
              Recent Electrical Projects
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We take pride in delivering clean, code-compliant electrical work. Browse some of our recent residential and commercial installations across the area.
            </p>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 font-semibold hover:border-yellow-400 hover:bg-yellow-50 transition-all whitespace-nowrap"
          >
            View All Glendale Electrical Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <Link
              key={i}
              to={project.link}
              className="group rounded-2xl overflow-hidden bg-white border border-gray-200 hover:border-yellow-400 hover:shadow-xl transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={`${project.title} in ${project.location}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-gray-900 group-hover:text-yellow-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{project.location}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
