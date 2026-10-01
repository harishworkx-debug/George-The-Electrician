import { CheckCircle2, ShieldCheck, FileCheck } from "lucide-react";
import { business, images } from "@/data/business";
import { Link } from "react-router-dom";

export function AboutSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={images.portrait}
                alt="George - Licensed Electrician in Glendale"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-black" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">California State Licensed</div>
                  <div className="text-sm text-gray-600">CSLB #{business.license.split('#')[1]}</div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">
              About George The Electrician
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-6 tracking-tight">
              Honest, Local Electrical Service You Can Rely On
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed mb-8">
              <p>
                We are not a faceless national franchise or a lead-generation company. We are a locally owned and operated electrical contractor based right here in Glendale, California. For over 15 years, our licensed electricians have been wiring homes, upgrading panels, and fixing emergency issues for our neighbors across the LA area.
              </p>
              <p>
                When you call us, you speak to a real person. When we arrive, we show up in a fully stocked truck, ready to diagnose the problem correctly the first time. We believe in providing upfront, flat-rate pricing so you know the exact cost before we start any work — no hidden fees, no hourly surprises.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 mb-8">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-yellow-500" />
                License & Insurance Details
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700"><strong>Valid CSLB License:</strong> We hold a valid C-10 Electrical Contractor License (CSLB #{business.license.split('#')[1]}), ensuring all work meets rigorous state standards.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700"><strong>Fully Insured:</strong> We carry $2,000,000 in general liability insurance to protect your property during any residential or commercial project.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700"><strong>Bonded & Workers' Comp:</strong> Our team is fully bonded and covered by workers' compensation insurance.</span>
                </li>
              </ul>
            </div>
            
            <Link
              to="/service-areas"
              className="inline-flex items-center gap-2 text-yellow-600 font-bold hover:text-yellow-700 transition-colors"
            >
              View Our Service Areas →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
