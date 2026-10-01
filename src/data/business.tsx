import React from "react";
import { Link } from "react-router-dom";

export const business = {
  name: "George The Electrician",
  phone: "+1 747-269-3742",
  phoneRaw: "+17472693742",
  phoneDisplay: "(747) 269-3742",
  address: {
    street: "400 W Colorado St Ste 447",
    city: "Glendale",
    state: "CA",
    zip: "91204",
    country: "USA",
    full: "400 W Colorado St Ste 447, Glendale, CA 91204, USA",
  },
  mapsUrl: "https://maps.app.goo.gl/Z5ck5GM3JjHuC3Yq6",
  mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.1571742029755!2d-118.2636694886613!3d34.142320773011264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c16fa9bb6f73%3A0xcb559429e511e40a!2sGeorge%20The%20Electrician!5e0!3m2!1sen!2sin!4v1790058121626!5m2!1sen!2sin",
  email: "info@georgetheelectrician.com",
  hours: [
    { day: "Monday", time: "7:00 AM – 7:00 PM" },
    { day: "Tuesday", time: "7:00 AM – 7:00 PM" },
    { day: "Wednesday", time: "7:00 AM – 7:00 PM" },
    { day: "Thursday", time: "7:00 AM – 7:00 PM" },
    { day: "Friday", time: "7:00 AM – 7:00 PM" },
    { day: "Saturday", time: "8:00 AM – 5:00 PM" },
    { day: "Sunday", time: "Emergency Only" },
  ],
  rating: 4.9,
  reviewCount: 127,
  yearsExperience: 15,
  license: "Licensed & Insured · CSLB #1024873",
  serviceAreaRadius: "25 miles",
};

export const images = {
  hero: "https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&w=1600",
  heroSecondary: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1200",
  panel: "https://images.pexels.com/photos/32497160/pexels-photo-32497160.jpeg?auto=compress&cs=tinysrgb&w=1200",
  wiring: "https://images.pexels.com/photos/7937305/pexels-photo-7937305.jpeg?auto=compress&cs=tinysrgb&w=1200",
  commercial: "https://images.pexels.com/photos/14319099/pexels-photo-14319099.jpeg?auto=compress&cs=tinysrgb&w=1200",
  residential: "https://images.pexels.com/photos/4981793/pexels-photo-4981793.jpeg?auto=compress&cs=tinysrgb&w=1200",
  repair: "https://images.pexels.com/photos/17842832/pexels-photo-17842832.jpeg?auto=compress&cs=tinysrgb&w=1200",
  emergency: "https://images.pexels.com/photos/17842703/pexels-photo-17842703.jpeg?auto=compress&cs=tinysrgb&w=1200",
  evCharger: "https://images.pexels.com/photos/4678065/pexels-photo-4678065.jpeg?auto=compress&cs=tinysrgb&w=1200",
  lighting: "https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&w=1200",
  outlet: "https://images.pexels.com/photos/36738243/pexels-photo-36738243.jpeg?auto=compress&cs=tinysrgb&w=1200",
  ceilingFan: "https://images.pexels.com/photos/3990590/pexels-photo-3990590.jpeg?auto=compress&cs=tinysrgb&w=1200",
  inspection: "https://images.pexels.com/photos/10871929/pexels-photo-10871929.jpeg?auto=compress&cs=tinysrgb&w=1200",
  portrait: "https://images.pexels.com/photos/20500461/pexels-photo-20500461.jpeg?auto=compress&cs=tinysrgb&w=1200",
  glendale: "https://images.pexels.com/photos/8783585/pexels-photo-8783585.jpeg?auto=compress&cs=tinysrgb&w=1200",
  glendaleStreet: "https://images.pexels.com/photos/23533430/pexels-photo-23533430.jpeg?auto=compress&cs=tinysrgb&w=1200",
  interiorLight: "https://images.pexels.com/photos/14495880/pexels-photo-14495880.jpeg?auto=compress&cs=tinysrgb&w=1200",
  chandelier: "https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&w=1200",
  wiring2: "https://images.pexels.com/photos/4981794/pexels-photo-4981794.jpeg?auto=compress&cs=tinysrgb&w=1200",
  solar: "https://images.pexels.com/photos/36085816/pexels-photo-36085816.jpeg?auto=compress&cs=tinysrgb&w=1200",
  outdoor: "https://images.pexels.com/photos/17924298/pexels-photo-17924298.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

export type ServiceSlug =
  | "residential-electrician"
  | "commercial-electrician"
  | "electrical-repair"
  | "emergency-electrician"
  | "electrical-panel-upgrade"
  | "ev-charger-installation"
  | "lighting-installation"
  | "outlet-switch-repair"
  | "ceiling-fan-installation"
  | "electrical-inspection";

export interface ServiceData {
  slug: string;
  urlSlug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  longDescription: (string | React.ReactNode)[];
  icon: string;
  image: string;
  features: string[];
  faqs: { question: string; answer: string }[];
}

export const services: ServiceData[] = [
  {
    slug: "residential-electrician",
    urlSlug: "residential-electrician-glendale-ca",
    title: "Residential Electrician in Glendale, CA",
    shortTitle: "Residential Electrician",
    tagline: "Safe, reliable wiring for your home",
    description:
      "From whole-home rewiring to new fixture installs, our residential electricians keep Glendale homes safe, up to code, and powered for modern life.",
    longDescription: [
      "Your home's electrical system is its lifeline — every light, outlet, and appliance depends on wiring that meets today's safety standards. George The Electrician has served Glendale homeowners for over 15 years, delivering residential electrical work that is clean, code-compliant, and built to last.",
      "Whether you live in a historic Verduga Woodlands home needing a panel upgrade or a new construction in Adams Hill that requires full wiring, our licensed electricians handle projects of every size. We arrive on time, protect your floors, and leave the workspace spotless.",
      "Every residential job includes a free safety inspection of the work area, transparent upfront pricing, and a lifetime workmanship warranty. Call us before small issues become expensive emergencies.",
    ],
    icon: "Home",
    image: "https://images.pexels.com/photos/4981793/pexels-photo-4981793.jpeg?auto=compress&cs=tinysrgb&w=1200",
    features: [
      "Whole-home rewiring & new construction",
      "Knob-and-tube and aluminum wiring replacement",
      "Smoke and carbon monoxide detector installation",
      "Attic and crawl space lighting",
      "Garage and outdoor circuit installation",
      "Pool and spa electrical hookups",
    ],
    faqs: [
      {
        question: "How much does a residential electrician cost in Glendale?",
        answer:
          "Most residential service calls start at $89 for a diagnostic visit, with repair costs quoted upfront before any work begins. Whole-home rewiring projects are priced per square foot and include a detailed written estimate.",
      },
      {
        question: "Do you offer same-day residential electrical service?",
        answer:
          "Yes. We reserve same-day appointment slots every weekday for Glendale residents. Call before noon and we will do everything possible to get a licensed electrician to your home the same day.",
      },
      {
        question: "Are your electricians licensed and insured in California?",
        answer:
          "Every electrician on our team holds a valid California State License Board certification and carries full liability and workers' compensation insurance. We are bonded and provide proof of coverage on request.",
      },
    ],
  },
  {
    slug: "commercial-electrician",
    urlSlug: "commercial-electrician-glendale-ca",
    title: "Commercial Electrician in Glendale, CA",
    shortTitle: "Commercial Electrician",
    tagline: "Keeping your business powered and compliant",
    description:
      "Minimize downtime with commercial electrical services designed for Glendale's retail, office, and industrial spaces — from tenant improvements to full build-outs.",
    longDescription: [
      "When your business loses power, every minute costs money. George The Electrician provides commercial electrical services across Glendale and the greater Los Angeles area, keeping restaurants, retail stores, medical offices, and warehouses running without interruption.",
      "Our commercial team understands local permitting, Title 24 energy requirements, and ADA compliance. We coordinate with general contractors, architects, and property managers to deliver projects on schedule and within budget.",
      "From three-phase power distribution to data cabling and emergency lighting, we are the single electrical partner your business can rely on for maintenance, upgrades, and new construction.",
    ],
    icon: "Building2",
    image: "https://images.pexels.com/photos/14319099/pexels-photo-14319099.jpeg?auto=compress&cs=tinysrgb&w=1200",
    features: [
      "Tenant improvements & build-outs",
      "Three-phase power distribution",
      "Title 24 lighting compliance",
      "Emergency and exit lighting systems",
      "Data and low-voltage cabling",
      "Preventive maintenance contracts",
    ],
    faqs: [
      {
        question: "Do you work after business hours to avoid downtime?",
        answer:
          "Absolutely. We schedule commercial service calls, maintenance, and installations during nights and weekends so your business stays operational. Emergency response is available 24/7 for critical failures.",
      },
      {
        question: "Can you handle large commercial build-outs in Glendale?",
        answer:
          "Yes. We have completed commercial build-outs ranging from 500 sq ft retail suites to 40,000 sq ft industrial facilities. Our project manager handles permitting, inspections, and coordination with other trades.",
      },
      {
        question: "Do you offer ongoing commercial maintenance contracts?",
        answer:
          "We offer customizable maintenance agreements that include quarterly inspections, priority emergency response, and discounted repair rates. These contracts help prevent costly outages and extend the life of your electrical system.",
      },
    ],
  },
  {
    slug: "electrical-repair",
    urlSlug: "electrical-repair-glendale-ca",
    title: "Electrical Repair in Glendale, CA",
    shortTitle: "Electrical Repair",
    tagline: "Fast fixes for flickering, tripping, and dead circuits",
    description:
      "Flickering lights, tripping breakers, or dead outlets? Our electrical repair team diagnoses and fixes the problem fast — with upfront pricing and a lifetime workmanship warranty.",
    longDescription: [
      "Electrical problems rarely fix themselves, and ignoring them can lead to fire hazards and expensive damage. George The Electrician has built a reputation in Glendale for honest, fast, and thorough electrical repair — no upselling, no surprises.",
      "Our diagnostic process uses thermal imaging and circuit tracing to find the root cause, not just the symptom. Whether it is a loose neutral wire causing lights to dim or a breaker that trips every time you run the microwave, we explain the problem in plain language and fix it right the first time.",
      "Every repair is backed by our lifetime workmanship warranty. If the issue we fixed returns, we come back free of charge.",
    ],
    icon: "Wrench",
    image: "https://images.pexels.com/photos/17842832/pexels-photo-17842832.jpeg?auto=compress&cs=tinysrgb&w=1200",
    features: [
      "Circuit breaker tripping diagnosis and repair",
      "Flickering and dimming light troubleshooting",
      "Dead or sparking outlet repair",
      "Loose neutral and open ground correction",
      "Short circuit location and repair",
      "Aluminum wiring remediation",
    ],
    faqs: [
      {
        question: "How quickly can you respond to an electrical repair in Glendale?",
        answer:
          "For most repair calls, we can have an electrician at your Glendale home or business the same day. Emergency repairs — sparking, burning smells, or total power loss — receive priority dispatch within 60–90 minutes.",
      },
      {
        question: "What does an electrical repair service call cost?",
        answer:
          "Our diagnostic service call is $89, which is credited toward any repair you approve. You will receive a flat-rate price for the repair before any work begins — no hourly billing surprises.",
      },
      {
        question: "Is a tripping breaker dangerous?",
        answer:
          "A tripping breaker is a safety device doing its job, but it signals an overloaded circuit or a fault that needs professional attention. Repeated tripping can indicate a serious wiring issue that should be inspected by a licensed electrician promptly.",
      },
    ],
  },
  {
    slug: "emergency-electrician",
    urlSlug: "emergency-electrician-glendale-ca",
    title: "Emergency Electrician in Glendale, CA",
    shortTitle: "Emergency Electrician",
    tagline: "24/7 rapid response when you need it most",
    description:
      "Sparking outlets, burning smells, or no power at all? Our 24/7 emergency electricians are standing by to protect your Glendale home or business — call now.",
    longDescription: [
      "Electrical emergencies do not wait for business hours, and neither do we. George The Electrician offers true 24/7 emergency electrical service throughout Glendale and nearby communities, with a live dispatcher ready to send a licensed electrician to your door any time of day or night.",
      "If you smell burning plastic from an outlet, see sparks, or have lost power to part of your home, turn off the main breaker if it is safe to do so and call us immediately. Our emergency response team arrives with the parts and expertise to make your property safe, stabilize the situation, and plan a permanent repair.",
      "We do not charge premium emergency surcharges. You pay the same fair, upfront rates at 2 AM as you do at 2 PM — because safety should never come with a penalty price.",
    ],
    icon: "Siren",
    image: "https://images.pexels.com/photos/17842703/pexels-photo-17842703.jpeg?auto=compress&cs=tinysrgb&w=1200",
    features: [
      "24/7 live phone dispatch",
      "60–90 minute response time in Glendale",
      "Sparking and arcing repair",
      "Burning smell and overheating diagnosis",
      "Total power loss restoration",
      "Storm and flood electrical damage repair",
    ],
    faqs: [
      {
        question: "What counts as an electrical emergency?",
        answer:
          "Any situation that poses an immediate safety risk: sparking outlets, burning smells, smoke from switches or panels, standing water near electrical systems, or a total loss of power. If you are unsure, call us and we will help you decide whether to dispatch immediately.",
      },
      {
        question: "How fast can an emergency electrician get to Glendale?",
        answer:
          "Our average emergency response time in Glendale is 60–90 minutes, 24 hours a day. We dispatch the closest available licensed electrician and provide a live ETA when you call.",
      },
      {
        question: "Do you charge extra for after-hours emergency calls?",
        answer:
          "No. We believe safety should be affordable at any hour. Our emergency rates are the same as our standard rates. You only pay for the work performed, with upfront pricing provided before we begin.",
      },
    ],
  },
  {
        slug: "electrical-panel-upgrade",
    urlSlug: "electrical-panel-upgrade-glendale-ca",
    title: "Electrical Panel Upgrade in Glendale, CA",
    shortTitle: "Panel Upgrade",
    tagline: "More power and safety for your modern home",
    description:
      "Is your electrical panel outdated, buzzing, or tripping? We upgrade 100-amp to 200-amp panels in Glendale to support new appliances, EV chargers, and HVAC systems.",
    longDescription: [
      <div key="intro" className="space-y-4">
        <p>The electrical panel is the heart of your home's power system. Older panels, especially those installed before 1990, were simply not designed to handle the electrical load of modern living — from central HVAC systems and induction stoves to Level 2 EV chargers.</p>
      </div>,
      <div key="signs" className="mt-8 mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Signs You Need a Panel Upgrade</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Breakers trip frequently when using multiple appliances.</li>
          <li>Lights flicker or dim when the AC or microwave turns on.</li>
          <li>The panel makes a buzzing or crackling sound.</li>
          <li>You hear a buzzing sound from your breaker box.</li>
          <li>You have an outdated brand with known fire risks (Zinsco, Federal Pacific Electric).</li>
          <li>You are adding a pool, spa, ADU, or EV charger.</li>
        </ul>
      </div>,
      <div key="100v200" className="mt-8 mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">100-Amp vs 200-Amp Service</h3>
        <p className="text-gray-700 mb-2">Most older Glendale homes were built with 60-amp or 100-amp service. Today, the minimum recommended capacity for a modern home is 200 amps. Upgrading to a 200-amp panel ensures you have the capacity to safely run all your appliances simultaneously without risking an overload.</p>
      </div>,
      <div key="repair-replace" className="mt-8 mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Panel Replacement vs. Repair</h3>
        <p className="text-gray-700 mb-2">If you have a single bad breaker, we can often just replace that breaker. However, if your bus bar is burnt, the panel is heavily rusted, or it is an obsolete brand, a full replacement is the only code-compliant and safe solution.</p>
      </div>,
      <div key="safety" className="mt-8 mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Safety Considerations & Breaker Issues</h3>
        <p className="text-gray-700 mb-2">Modern electrical panels utilize Arc Fault Circuit Interrupters (AFCI) and Ground Fault Circuit Interrupters (GFCI) at the breaker level. This provides whole-home protection against electrical fires and shock hazards, far exceeding the safety standards of older breaker boxes.</p>
      </div>,
      <div key="process" className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200 mt-8 mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Our Glendale Panel Upgrade Process</h3>
        <ol className="list-decimal pl-5 space-y-3 text-gray-800">
          <li><strong>Load Calculation & Meter Spot:</strong> We assess your home's total electrical load and coordinate with Glendale Water & Power (GWP) for meter spot approval.</li>
          <li><strong>Permitting:</strong> We pull all necessary permits from the City of Glendale Building & Safety department.</li>
          <li><strong>Installation:</strong> We disconnect the power, remove the old equipment, and install your new 200-amp panel, grounding system, and new breakers. Power is usually restored the same day.</li>
          <li><strong>Inspection:</strong> We coordinate the final city inspection to ensure everything meets the National Electrical Code (NEC) and local amendments.</li>
        </ol>
      </div>,
      <div key="trust" className="mt-8 mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Why Glendale Homeowners Choose George</h3>
        <p className="text-gray-700 mb-2">With over 15 years serving the Glendale area, we know exactly what local inspectors are looking for and how GWP operates. This prevents delays and ensures your power is turned back on as quickly as possible. We use premium Square D or Eaton panels backed by our lifetime workmanship warranty.</p>
      </div>,
      <div key="areas" className="mt-8 mb-2">
        <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-2">Local Service Areas</p>
        <p className="text-sm text-gray-600">While based in Glendale, we provide panel upgrades across <Link to="/electrician-pasadena-ca" className="text-yellow-600 hover:underline">Pasadena</Link>, <Link to="/electrician-burbank-ca" className="text-yellow-600 hover:underline">Burbank</Link>, <Link to="/electrician-la-canada-flintridge-ca" className="text-yellow-600 hover:underline">La Cañada Flintridge</Link>, and <Link to="/electrician-los-angeles-ca" className="text-yellow-600 hover:underline">Los Angeles</Link> neighborhoods like Atwater Village and Silver Lake.</p>
      </div>
    ],
    icon: "Zap",
    image: "https://images.pexels.com/photos/32497160/pexels-photo-32497160.jpeg?auto=compress&cs=tinysrgb&w=1200",
    features: [
      "100 to 400 amp panel upgrades",
      "Federal Pacific and Zinsco panel replacement",
      "Sub-panel installation for ADUs and additions",
      "Whole-house surge protection",
      "Grounding and bonding upgrades",
      "Smart panel and monitoring system installation",
    ],
    faqs: [
      {
        question: "How much does an electrical panel upgrade cost in Glendale?",
        answer:
          "Panel upgrades in Glendale typically range from $1,800 to $4,500 depending on amperage, whether the meter main needs replacement, and grounding requirements. We provide a free on-site estimate with a fixed written price.",
      },
      {
        question: "How long does a panel upgrade take?",
        answer:
          "Most residential panel upgrades are completed in a single day. We coordinate the city permit and inspection so your power is restored and signed off within 24–48 hours.",
      },
      {
        question: "Do I need a panel upgrade for an EV charger?",
        answer:
          "It depends on your panel's available capacity. Many homes can accommodate a 40-amp EV circuit without an upgrade, but older 100-amp panels often need upgrading to 200 amps. We will assess your panel at no charge and recommend the most cost-effective solution.",
      },
    ],
  },
  {
    slug: "ev-charger-installation",
    urlSlug: "ev-charger-installation-glendale-ca",
    title: "EV Charger Installation in Glendale, CA",
    shortTitle: "EV Charger Installation",
    tagline: "Charge at home with a certified Level 2 station",
    description:
      "Drive electric with confidence. Our certified EV charger installers handle Level 2 home charging stations for every EV brand, with clean installs and panel assessment included.",
    longDescription: [
      "Glendale has one of the highest EV adoption rates in Los Angeles County, and home charging is the key to electric vehicle ownership. George The Electrician is certified to install Level 2 EV charging stations for Tesla, Rivian, Ford, Chevrolet, BMW, and every major EV brand.",
      "We start with a free assessment of your electrical panel's capacity to determine whether a dedicated 40-amp or 50-amp circuit can be added, or if a panel upgrade is needed first. We then install a UL-listed, Energy Star-certified charging station exactly where you want it — garage, driveway, or carport.",
      "Every installation is permitted, inspected, and backed by our lifetime workmanship warranty. We also install Tesla Wall Connectors, ChargePoint Home Flex, and universal J1772 stations.",
    ],
    icon: "BatteryCharging",
    image: "https://images.pexels.com/photos/4678065/pexels-photo-4678065.jpeg?auto=compress&cs=tinysrgb&w=1200",
    features: [
      "Tesla Wall Connector installation",
      "ChargePoint Home Flex and universal J1772",
      "Dedicated 40-amp and 50-amp circuits",
      "Outdoor-rated NEMA 4 installations",
      "Panel capacity assessment included",
      "Rebates and incentive guidance",
    ],
    faqs: [
      {
        question: "How much does EV charger installation cost in Glendale?",
        answer:
          "A standard Level 2 home charger installation ranges from $500 to $1,500, depending on the distance from the panel, whether trenching is needed, and if a panel upgrade is required. We provide a free on-site estimate.",
      },
      {
        question: "Which EV charger should I buy?",
        answer:
          "We install all major brands and help you choose based on your vehicle, charging speed needs, and budget. For Tesla owners we recommend the Tesla Wall Connector; for other EVs, the ChargePoint Home Flex is a versatile choice. We supply and install or install a charger you purchase.",
      },
      {
        question: "Are there rebates for EV charger installation in Glendale?",
        answer:
          "Yes. Glendale Water and Power offers rebates for Level 2 home charger installations, and federal tax credits may apply. We provide all documentation needed to claim your rebate and walk you through the application process.",
      },
    ],
  },
  {
    slug: "lighting-installation",
    urlSlug: "lighting-installation-glendale-ca",
    title: "Lighting Installation in Glendale, CA",
    shortTitle: "Lighting Installation",
    tagline: "Beautiful, energy-efficient lighting for every space",
    description:
      "From recessed LED retrofit to chandelier installation, our lighting experts transform Glendale homes and businesses with energy-saving, code-compliant fixtures.",
    longDescription: [
      "The right lighting transforms a space — improving mood, safety, and energy bills at the same time. George The Electrician installs indoor and outdoor lighting for Glendale homes and businesses, from a single ceiling fixture to a full-property LED retrofit.",
      "We specialize in recessed LED lighting, under-cabinet kitchen lighting, landscape and pathway lighting, security and motion-sensor lighting, and decorative chandelier installation. Every fixture is installed to code with proper junction boxes, dimmer compatibility, and Title 24 compliance where applicable.",
      "Switching to LED can cut your lighting energy use by up to 80%. We help you choose fixtures and plan layouts that maximize both beauty and efficiency, with smart-home and dimmable options available.",
    ],
    icon: "Lightbulb",
    image: "https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&w=1200",
    features: [
      "Recessed LED retrofit and new installation",
      "Chandelier and decorative fixture installation",
      "Under-cabinet and accent lighting",
      "Outdoor landscape and security lighting",
      "Dimmer and smart lighting controls",
      "Title 24 compliant commercial lighting",
    ],
    faqs: [
      {
        question: "How much does lighting installation cost in Glendale?",
        answer:
          "Pricing depends on the fixture type, number of fixtures, and wiring accessibility. A simple ceiling fixture replacement starts at $125, while a full-home recessed LED retrofit is quoted per fixture. We provide free estimates for all lighting projects.",
      },
      {
        question: "Can you install a chandelier I already purchased?",
        answer:
          "Yes. We install customer-supplied fixtures, including chandeliers, ceiling fans, and pendant lights. We verify the junction box is rated for the fixture weight and that the circuit can handle the load before installation.",
      },
      {
        question: "Will LED lighting really save on my electric bill?",
        answer:
          "LEDs use up to 80% less energy than incandescent bulbs and last 25 times longer. A typical Glendale home that switches all lighting to LED saves $150–$300 per year on electricity. We can calculate your projected savings during a free estimate.",
      },
    ],
  },
  {
    slug: "outlet-switch-repair",
    urlSlug: "outlet-switch-repair-glendale-ca",
    title: "Outlet & Switch Repair in Glendale, CA",
    shortTitle: "Outlet & Switch Repair",
    tagline: "Safe, code-compliant outlets and switches",
    description:
      "Dead outlets, loose switches, or two-prong receptacles? We repair and replace outlets and switches throughout Glendale with GFCI, AFCI, and USB options for modern convenience.",
    longDescription: [
      "Outlets and switches are the most-used parts of your electrical system, and also the most common source of problems. A loose outlet, a switch that feels warm to the touch, or a dead receptacle can all indicate wiring issues that need professional attention.",
      "George The Electrician repairs and replaces outlets and switches throughout Glendale, including GFCI outlets for kitchens and bathrooms, AFCI-protected receptacles for bedrooms, tamper-resistant outlets for child safety, and USB charging outlets for modern convenience.",
      "If your home still has two-prong ungrounded outlets, we can upgrade them to grounded three-prong outlets or GFCI-protected receptacles that meet code — increasing safety and enabling you to use modern appliances without adapters.",
    ],
    icon: "Plug",
    image: "https://images.pexels.com/photos/36738243/pexels-photo-36738243.jpeg?auto=compress&cs=tinysrgb&w=1200",
    features: [
      "GFCI outlet installation for kitchens and baths",
      "AFCI-protected receptacle installation",
      "Tamper-resistant and child-safe outlets",
      "USB and smart outlet installation",
      "Two-prong to three-prong upgrades",
      "Dimmer and smart switch installation",
    ],
    faqs: [
      {
        question: "Why is my outlet not working but the breaker is not tripped?",
        answer:
          "Common causes include a loose wire connection, a failed GFCI outlet that has tripped internally, or a back-stabbed wire that has come loose. This requires a professional diagnosis to locate and repair the connection safely.",
      },
      {
        question: "Do I need GFCI outlets in my kitchen?",
        answer:
          "Yes. Current electrical code requires GFCI protection on all kitchen countertop outlets, as well as bathrooms, garages, outdoors, and within six feet of any sink. We install and test GFCI outlets to keep your home code-compliant and safe.",
      },
      {
        question: "Can you replace a two-prong outlet with a three-prong?",
        answer:
          "Yes. If your home has grounded wiring, we install standard three-prong outlets. If the wiring is ungrounded, we install GFCI-protected receptacles, which provide personnel safety and meet code for most applications without rewiring.",
      },
    ],
  },
  {
    slug: "ceiling-fan-installation",
    urlSlug: "ceiling-fan-installation-glendale-ca",
    title: "Ceiling Fan Installation in Glendale, CA",
    shortTitle: "Ceiling Fan Installation",
    tagline: "Stay cool and cut your energy bill",
    description:
      "Proper ceiling fan installation keeps Glendale homes comfortable year-round. We install and replace ceiling fans with rated junction boxes, balanced mounting, and remote control options.",
    longDescription: [
      "A ceiling fan can lower your summer cooling costs by up to 40% and circulate warm air in winter — but only if it is installed correctly. George The Electrician installs ceiling fans throughout Glendale with proper rated junction boxes, balanced mounting, and wiring that meets code.",
      "We install fans in any location: bedrooms, living rooms, patios, and vaulted ceilings. If your existing fan wobbles, hums, or has a failing remote, we repair or replace it. We also install smart fans with Wi-Fi controls and light kits.",
      "Every installation includes verification that the ceiling box is fan-rated — a critical safety step many homeowners skip. Standard plastic boxes are not designed to support a spinning fan and can pull loose over time. We upgrade to a rated metal box if needed.",
    ],
    icon: "Fan",
    image: "https://images.pexels.com/photos/3990590/pexels-photo-3990590.jpeg?auto=compress&cs=tinysrgb&w=1200",
    features: [
      "New ceiling fan installation",
      "Fan-rated junction box installation",
      "Existing fan replacement and repair",
      "Remote control and smart fan setup",
      "Light kit wiring and installation",
      "Vaulted and angled ceiling mounting",
    ],
    faqs: [
      {
        question: "How much does ceiling fan installation cost in Glendale?",
        answer:
          "Standard ceiling fan installation starts at $150 if a fan-rated box is already present. If we need to install a new rated box and run wiring, the cost ranges from $250 to $400. We provide a free estimate before any work begins.",
      },
      {
        question: "Can you install a ceiling fan where there is no existing fixture?",
        answer:
          "Yes. We run new wiring from the nearest circuit, install a fan-rated junction box, and mount the fan securely. For rooms with attic access above, this is straightforward; for vaulted ceilings, we discuss routing options during the estimate.",
      },
      {
        question: "Why does my ceiling fan wobble?",
        answer:
          "Wobbling is usually caused by unbalanced blades, a loose mounting, or an undersized junction box. We can balance the blades, tighten the mounting, and if necessary, replace the box with a fan-rated model to eliminate the wobble permanently.",
      },
    ],
  },
  {
    slug: "electrical-inspection",
    urlSlug: "electrical-inspection-glendale-ca",
    title: "Electrical Inspection in Glendale, CA",
    shortTitle: "Electrical Inspection",
    tagline: "Know your system is safe and up to code",
    description:
      "Buying a home or just want peace of mind? Our thorough electrical inspections identify safety hazards, code violations, and upgrade needs before they become emergencies.",
    longDescription: [
      "An electrical inspection is the smartest investment a Glendale homeowner can make — especially before purchasing a property, after a major renovation, or if your home is over 30 years old. George The Electrician provides comprehensive electrical inspections that go far beyond a visual check.",
      "Our inspection includes thermal imaging of every breaker and connection to detect hidden overheating, testing of all GFCI and AFCI devices, grounding and bonding verification, panel condition assessment, and a full report with photos and prioritized recommendations.",
      "We inspect to current National Electrical Code standards and flag any recalled or hazardous components, such as Federal Pacific panels or aluminum branch wiring. The detailed report gives you the information to make informed decisions and negotiate repairs.",
    ],
    icon: "ShieldCheck",
    image: "https://images.pexels.com/photos/10871929/pexels-photo-10871929.jpeg?auto=compress&cs=tinysrgb&w=1200",
    features: [
      "Whole-home electrical safety inspection",
      "Thermal imaging of panels and connections",
      "GFCI and AFCI device testing",
      "Grounding and bonding verification",
      "Pre-purchase and real estate inspections",
      "Detailed report with photos and recommendations",
    ],
    faqs: [
      {
        question: "How much does an electrical inspection cost in Glendale?",
        answer:
          "A comprehensive whole-home electrical inspection is $199 and includes thermal imaging, device testing, and a full written report. The fee is credited toward any recommended repairs you authorize us to perform.",
      },
      {
        question: "How long does an electrical inspection take?",
        answer:
          "A thorough inspection of a typical Glendale home takes 1.5 to 2.5 hours depending on the size and age of the property. You receive the written report within 24 hours of the inspection.",
      },
      {
        question: "Should I get an inspection before buying a home?",
        answer:
          "Absolutely. A pre-purchase electrical inspection can reveal thousands of dollars in needed repairs — outdated panels, aluminum wiring, ungrounded circuits — and give you leverage to negotiate. Many of our clients have saved far more than the inspection cost.",
      },
    ],
  },
];

export interface LocationData {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  longDescription: (string | React.ReactNode)[];
  neighborhoods: string[];
  zipCodes: string[];
}

export const locations: LocationData[] = [
  {
    slug: "glendale-ca",
    name: "Glendale, CA",
    shortName: "Glendale",
    description:
      "George The Electrician is proud to serve our home city of Glendale, California with licensed electrical services for homes and businesses.",
    longDescription: [
      "Glendale is our home. George The Electrician has been serving the Glendale community for over 15 years, from the tree-lined streets of Verdugo Woodlands to the bustling commercial corridors of Brand Boulevard. We know the city's building codes, its historic housing stock, and the unique electrical challenges that come with both.",
      <>Whether you need a <Link to="/electrical-panel-upgrade-glendale-ca" className="text-yellow-600 hover:text-yellow-700 underline underline-offset-2">panel upgrade</Link> in a 1920s Rossmoyne home, <Link to="/ev-charger-installation-glendale-ca" className="text-yellow-600 hover:text-yellow-700 underline underline-offset-2">EV charger installation</Link> for a downtown condo, or <Link to="/emergency-electrician-glendale-ca" className="text-yellow-600 hover:text-yellow-700 underline underline-offset-2">emergency repair</Link> at a Brand Boulevard restaurant, our local electricians arrive fast with the right parts and the right expertise.</>,
    ],
    neighborhoods: [
      "Verdugo Woodlands",
      "Rossmoyne",
      "Adams Hill",
      "Brockmont",
      "Pacific-Edison",
      "City Center",
      "Mariposa",
      "Riverside Rancho",
    ],
    zipCodes: ["91201", "91202", "91203", "91204", "91205", "91206", "91207", "91208", "91209", "91210"],
  },
  {
    slug: "pasadena-ca",
    name: "Pasadena, CA",
    shortName: "Pasadena",
    description:
      "Licensed electrician serving Pasadena, CA — from historic Craftsman homes to modern commercial build-outs, just minutes from Glendale.",
    longDescription: [
      <>Pasadena's mix of historic Craftsman homes and modern commercial spaces demands an electrician who understands both old-world wiring and cutting-edge technology. George The Electrician serves Pasadena with <Link to="/electrical-panel-upgrade-glendale-ca" className="text-yellow-600 hover:text-yellow-700 underline underline-offset-2">panel upgrades</Link>, <Link to="/ev-charger-installation-glendale-ca" className="text-yellow-600 hover:text-yellow-700 underline underline-offset-2">EV charger installation</Link>, <Link to="/lighting-installation-glendale-ca" className="text-yellow-600 hover:text-yellow-700 underline underline-offset-2">lighting retrofits</Link>, and 24/7 <Link to="/emergency-electrician-glendale-ca" className="text-yellow-600 hover:text-yellow-700 underline underline-offset-2">emergency repair</Link>.</>,
      "We are familiar with Pasadena's permitting process and Title 24 requirements, and we coordinate inspections with the city's building department to keep your project on schedule.",
    ],
    neighborhoods: ["Old Pasadena", "Bungalow Heaven", "Linda Vista", "San Rafael", " Hastings Ranch"],
    zipCodes: ["91101", "91103", "91104", "91105", "91106", "91107"],
  },
  {
    slug: "burbank-ca",
    name: "Burbank, CA",
    shortName: "Burbank",
    description:
      "Trusted electrician serving Burbank, CA — home to major studios and thriving neighborhoods, we keep your power running reliably.",
    longDescription: [
      <>Burbank's entertainment industry and residential neighborhoods rely on dependable electrical systems. George The Electrician serves Burbank with <Link to="/commercial-electrician-glendale-ca" className="text-yellow-600 hover:text-yellow-700 underline underline-offset-2">commercial electrical services</Link> for studio facilities and production offices, plus <Link to="/electrical-repair-glendale-ca" className="text-yellow-600 hover:text-yellow-700 underline underline-offset-2">residential repairs</Link>, <Link to="/electrical-panel-upgrade-glendale-ca" className="text-yellow-600 hover:text-yellow-700 underline underline-offset-2">panel upgrades</Link>, and <Link to="/ev-charger-installation-glendale-ca" className="text-yellow-600 hover:text-yellow-700 underline underline-offset-2">EV charger installation</Link> for local homeowners.</>,
      "From Magnolia Park to the Media District, we deliver fast, professional electrical service that keeps Burbank's homes and businesses powered.",
    ],
    neighborhoods: ["Magnolia Park", "Media District", "Downtown Burbank", "Riverside", "Hillside"],
    zipCodes: ["91501", "91502", "91504", "91505", "91506"],
  },
  {
    slug: "los-angeles-ca",
    name: "Los Angeles, CA",
    shortName: "Los Angeles",
    description:
      "Licensed electrician serving Los Angeles neighborhoods near Glendale — from Atwater Village to Silver Lake and beyond.",
    longDescription: [
      "As a Glendale-based electrician, George The Electrician serves neighboring Los Angeles communities including Atwater Village, Silver Lake, Echo Park, and Highland Park. We bring the same fast response and honest pricing that Glendale residents have trusted for over 15 years.",
      <>Whether you need a <Link to="/electrical-repair-glendale-ca" className="text-yellow-600 hover:text-yellow-700 underline underline-offset-2">residential repair</Link>, a <Link to="/commercial-electrician-glendale-ca" className="text-yellow-600 hover:text-yellow-700 underline underline-offset-2">commercial tenant improvement</Link>, or an <Link to="/emergency-electrician-glendale-ca" className="text-yellow-600 hover:text-yellow-700 underline underline-offset-2">emergency electrician</Link> in the middle of the night, our team is ready to serve your Los Angeles neighborhood.</>,
    ],
    neighborhoods: ["Atwater Village", "Silver Lake", "Echo Park", "Highland Park", "Glassell Park", "Eagle Rock"],
    zipCodes: ["90026", "90031", "90039", "90041", "90042", "90065"],
  },
  {
    slug: "la-canada-flintridge-ca",
    name: "La Cañada Flintridge, CA",
    shortName: "La Cañada Flintridge",
    description:
      "Premium electrical services for La Cañada Flintridge homes — panel upgrades, EV chargers, lighting, and more, minutes from Glendale.",
    longDescription: [
      <>La Cañada Flintridge's upscale homes deserve an electrician who matches their quality. George The Electrician serves La Cañada with premium residential electrical services, from whole-home rewiring and <Link to="/electrical-panel-upgrade-glendale-ca" className="text-yellow-600 hover:text-yellow-700 underline underline-offset-2">panel upgrades</Link> to <Link to="/lighting-installation-glendale-ca" className="text-yellow-600 hover:text-yellow-700 underline underline-offset-2">landscape lighting</Link> and <Link to="/ev-charger-installation-glendale-ca" className="text-yellow-600 hover:text-yellow-700 underline underline-offset-2">EV charger installation</Link>.</>,
      "We understand the expectations of La Cañada homeowners — clean workmanship, respectful service, and lasting results. Our team treats your home with the care it deserves.",
    ],
    neighborhoods: ["Flintridge", "La Cañada", "Descanso Gardens"],
    zipCodes: ["91011", "91012"],
  },
];

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Frances Clark",
    location: "Glendale, CA",
    rating: 5,
    text: "Exceptional assistance and dependable service. The specialist arrived on time and worked carefully to install outlets in many rooms. Excellent dialogue for the whole consultation.",
    service: "Outlet Installation",
  },
  {
    name: "Crystal Santos",
    location: "Glendale, CA",
    rating: 5,
    text: "A very skilled crew that made setting up our home EV charger very easy. They told us the exact date they would be there, showed up on time, and did the job without any extra charges. The charger works perfectly, and the whole thing looks very stylish.",
    service: "EV Charger Installation",
  },
  {
    name: "Heather Xiong",
    location: "Glendale, CA",
    rating: 5,
    text: "Outstanding professionalism and dedication to satisfying customers. If I needed electrical work done again, I would absolutely use them.",
    service: "Electrical Service",
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const homeFAQs: FAQItem[] = [
  {
    question: "How much does an electrician cost in Glendale CA?",
    answer: "Our standard diagnostic service call is $89, which is credited toward any repair you approve. We provide flat-rate, upfront pricing before any work begins — no hourly billing and no surprise fees so you know exactly how much the service will cost."
  },
  {
    question: "Do you provide 24 hour emergency electrical service?",
    answer: "Yes. We offer 24/7 emergency electrical service. Call us any time — day or night — and a live dispatcher will send a licensed electrician to your home or business, typically within 60–90 minutes in Glendale, with no after-hours surcharges."
  },
  {
    question: "Do you install EV chargers?",
    answer: "Absolutely. We install Level 2 EV chargers for every major EV brand (Tesla, Rivian, Ford, etc.), assess your panel's capacity, and guide you through available rebates from Glendale Water and Power and federal tax credits."
  },
  {
    question: "Can you upgrade a 100 amp panel to 200 amp?",
    answer: "Yes, 200-amp panel upgrades are one of our specialties. We handle the entire process, including load calculations, city permits with Glendale or LADBS, and coordinating the power disconnect/reconnect with your local utility company."
  },
  {
    question: "How quickly can an electrician come out?",
    answer: "For emergencies, we dispatch immediately and arrive within 60-90 minutes. For standard service calls and estimates, we offer same-day or next-day appointments. Our dispatcher will give you a specific time window and call when the electrician is on the way."
  },
  {
    question: "Do you service older homes?",
    answer: "Yes. We have extensive experience with historic homes in Glendale, Pasadena, and Los Angeles. We regularly replace dangerous knob-and-tube wiring, upgrade ungrounded two-prong outlets, and bring older electrical systems up to modern code safely without destroying lath and plaster walls."
  },
  {
    question: "Do you provide electrical inspections?",
    answer: "Yes. We provide comprehensive electrical safety inspections for home buyers, sellers, and landlords. Our detailed reports identify code violations, safety hazards, and panel issues, helping you negotiate repairs during escrow or ensure tenant safety."
  },
  {
    question: "Do you serve Pasadena and Burbank?",
    answer: "Yes. While we are based in Glendale, we provide full electrical services to Pasadena, Burbank, La Cañada Flintridge, and nearby Los Angeles neighborhoods like Atwater Village and Silver Lake. If you're within 25 miles of Glendale, we can help."
  }
];
