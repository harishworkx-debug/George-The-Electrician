import { CheckCircle2, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { business, images } from "@/data/business";

const reasons = [
  "Licensed, bonded, and fully insured in California",
  "Upfront flat-rate pricing — no hourly billing, no surprises",
  "Same-day appointments available throughout Glendale",
  "24/7 emergency service with no after-hours surcharge",
  "Lifetime workmanship warranty on every repair and install",
  "Clean, respectful technicians who protect your home",
  "15+ years serving the Glendale community",
  "Free safety inspection with every service call",
];

export function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={images.portrait}
                alt="Professional licensed electrician from George The Electrician serving Glendale, CA"
                className="w-full h-[400px] lg:h-[500px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 lg:-right-6 bg-black rounded-2xl p-6 shadow-xl max-w-[240px]">
              <div className="text-yellow-400 text-4xl font-bold">{business.yearsExperience}+</div>
              <div className="text-white text-sm font-medium mt-1">Years serving <Link to="/electrician-glendale-ca" className="text-yellow-400 hover:underline">Glendale</Link> with honest, reliable electrical work</div>
            </div>
          </div>

          <div>
            <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">
              Why Glendale Chooses Us
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-6 tracking-tight">
              More Than an Electrician — Your Trusted Local Expert
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We have built our reputation one <Link to="/electrician-glendale-ca" className="text-yellow-600 hover:underline">Glendale</Link> home and business at a time. When you call George The Electrician, you get honest advice, clean workmanship, and fair pricing — every single time.
            </p>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4 mb-8">
              {reasons.map((reason) => (
                <div key={reason} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 leading-snug">{reason}</span>
                </div>
              ))}
            </div>
            <a
              href={`tel:${business.phoneRaw}`}
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-black text-white font-bold hover:bg-gray-900 transition-all shadow-lg hover:scale-105"
            >
              <Phone className="w-5 h-5 text-yellow-400" strokeWidth={2.5} />
              Call {business.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
