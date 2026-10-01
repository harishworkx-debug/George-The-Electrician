import { SEO } from "@/components/SEO";
import { CTABanner } from "@/components/CTABanner";
import { business, images } from "@/data/business";
import { ShieldCheck, Award, Zap, HeartHandshake, History, MapPin } from "lucide-react";

export function AboutPage() {
  return (
    <>
      <SEO
        title="About George The Electrician | Master Electrician in Glendale, CA"
        description="Learn about George The Electrician. With over 15 years of experience, we provide licensed, insured, and trusted electrical services to Glendale and Los Angeles County."
        canonical="/about"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-40">
          <img
            src={images.hero}
            alt="George The Electrician Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 text-yellow-400 text-sm font-semibold mb-6 border border-yellow-400/20">
              <Award className="w-4 h-4" />
              15+ Years of Excellence
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Local Expertise. <br />
              <span className="text-yellow-400">Uncompromising Quality.</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl">
              We are a locally owned and operated electrical company based in Glendale, CA. We built our reputation on honesty, transparent pricing, and doing the job right the first time.
            </p>
          </div>
        </div>
      </section>

      {/* Meet George & The Team */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={images.commercial}
                  alt="George - Master Electrician"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 p-6 rounded-2xl shadow-xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="bg-black p-3 rounded-full">
                    <ShieldCheck className="w-8 h-8 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-black font-bold text-lg">Fully Licensed</p>
                    <p className="text-gray-900 text-sm">CSLB #{business.license.match(/#(\d+)/)?.[1] || "1024873"}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Meet George
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                I started my career over 15 years ago with a simple philosophy: treat every home like it's my own. Electricity is the heartbeat of a modern home, and compromised wiring isn't just inconvenient — it's dangerous. That's why I insist on uncompromising quality and strict code compliance for every single job, whether it's replacing a simple dimmer switch or rewiring a 400-amp commercial facility.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Based right here in Glendale, my team and I know the local neighborhoods, from the historic homes of Rossmoyne to the new ADUs popping up across Burbank and Pasadena. We know the local building inspectors, the utility companies (like GWP and BWP), and the unique challenges older California homes present.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div>
                  <h3 className="text-3xl font-bold text-yellow-500 mb-1">15+</h3>
                  <p className="text-sm text-gray-600 font-semibold uppercase tracking-wider">Years Experience</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-yellow-500 mb-1">100%</h3>
                  <p className="text-sm text-gray-600 font-semibold uppercase tracking-wider">Satisfaction Focus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why George The Electrician?
            </h2>
            <p className="text-lg text-gray-600">
              We aren't a massive corporate chain. We are your local neighborhood electricians, providing personalized service, accountability, and unmatched expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-yellow-50 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Licensed & Credentials</h3>
              <p className="text-gray-600 leading-relaxed">
                We are fully licensed by the California State License Board, bonded, and insured with comprehensive liability coverage. Your property is protected.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-yellow-50 rounded-xl flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Deep Local Connection</h3>
              <p className="text-gray-600 leading-relaxed">
                We know Glendale Water & Power (GWP) and LA Department of Building and Safety (LADBS) processes intimately. This means faster permits and no inspection delays.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-yellow-50 rounded-xl flex items-center justify-center mb-6">
                <HeartHandshake className="w-7 h-7 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Service Philosophy</h3>
              <p className="text-gray-600 leading-relaxed">
                Upfront pricing, no hidden fees, and transparent communication. We walk you through the problem and the solution before we ever pick up a tool.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Project Experience */}
      <section className="py-16 lg:py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-black rounded-xl mb-2">
                <History className="w-6 h-6 text-yellow-400" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Real Project Experience
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We don't just fix outlets. Our portfolio spans complex electrical engineering challenges across Southern California. 
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong>Historic Home Rewires:</strong> Replacing dangerous knob-and-tube wiring in Pasadena Craftsman homes without destroying lath and plaster walls.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong>High-Capacity Upgrades:</strong> Upgrading LA properties to 400-amp service to support dual EV chargers, ADUs, and high-efficiency heat pumps simultaneously.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong>Commercial Build-outs:</strong> Three-phase power installations and Title 24 lighting compliance for restaurants and offices in Burbank and Glendale.</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={images.wiring} alt="Knob and tube replacement" className="rounded-2xl h-64 w-full object-cover shadow-lg" />
              <img src={images.panel} alt="400 amp panel upgrade" className="rounded-2xl h-64 w-full object-cover shadow-lg mt-8" />
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Work With Glendale's Most Trusted Electrician?"
        subtitle="Call today for an honest assessment and upfront pricing. We're ready to help."
      />
    </>
  );
}
