const fs = require('fs');
const path = require('path');

const filePath = path.join('e:', 'React Project', 'George-The-Electrician', 'src', 'data', 'business.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Update LocationData interface
content = content.replace(
  '  zipCodes: string[];\n}',
  '  zipCodes: string[];\n  electricianFaqs: { question: string; answer: string }[];\n  electricalServicesFaqs: { question: string; answer: string }[];\n}'
);

// 2. Replace the locations array completely
const newLocations = `export const locations: LocationData[] = [
  {
    slug: "glendale-ca",
    name: "Glendale, CA",
    shortName: "Glendale",
    description: "George The Electrician is proud to serve our home city of Glendale, California with licensed electrical services for homes and businesses.",
    longDescription: [
      "Glendale is our home base. For over 15 years, George The Electrician has been serving the Glendale community, from the historic hillside homes of Verdugo Woodlands to the busy retail spaces on Brand Boulevard. We are deeply familiar with Glendale Water & Power (GWP) requirements and local municipal codes.",
      <>Whether you need a <Link to="/electrical-panel-upgrade-glendale-ca" className="text-yellow-600 hover:text-yellow-700 underline underline-offset-2">panel upgrade</Link> in a 1920s Rossmoyne home, <Link to="/ev-charger-installation-glendale-ca" className="text-yellow-600 hover:text-yellow-700 underline underline-offset-2">EV charger installation</Link> for a downtown condo, or <Link to="/emergency-electrician-glendale-ca" className="text-yellow-600 hover:text-yellow-700 underline underline-offset-2">emergency repair</Link> at a local restaurant, our local electricians arrive fast with the right parts and expertise.</>,
      "Many Glendale homes still have outdated Federal Pacific panels or ungrounded two-prong outlets. We specialize in bringing these properties up to modern safety standards while respecting their original architecture."
    ],
    neighborhoods: ["Verdugo Woodlands", "Rossmoyne", "Adams Hill", "Brockmont", "Pacific-Edison", "City Center", "Mariposa", "Riverside Rancho"],
    zipCodes: ["91201", "91202", "91203", "91204", "91205", "91206", "91207", "91208", "91209", "91210"],
    electricianFaqs: [
      { question: "How fast can an electrician get to my Glendale home?", answer: "Because we are locally based, we offer same-day service for most calls in Glendale. For emergencies like sparking outlets or burning smells, our average response time is under 45 minutes." },
      { question: "Do you handle GWP meter spot approvals?", answer: "Yes, when performing a panel upgrade in Glendale, we coordinate directly with Glendale Water & Power for the meter spot approval, disconnect/reconnect, and final city inspections." }
    ],
    electricalServicesFaqs: [
      { question: "What are common electrical issues in older Glendale homes?", answer: "Homes in neighborhoods like Rossmoyne often suffer from overloaded circuits, ungrounded wiring, and outdated panels. We frequently install dedicated circuits for modern appliances and replace dangerous Zinsco or FPE panels." },
      { question: "Do you provide electrical services for Brand Blvd businesses?", answer: "Yes, we handle commercial electrical needs including Title 24 lighting retrofits, dedicated equipment circuits, and emergency troubleshooting for retail and restaurant spaces in downtown Glendale." }
    ]
  },
  {
    slug: "pasadena-ca",
    name: "Pasadena, CA",
    shortName: "Pasadena",
    description: "Expert electrician serving Pasadena, CA. Specializing in historic Craftsman home rewiring, knob-and-tube replacements, and modern lighting upgrades.",
    longDescription: [
      <>Pasadena is famous for its beautiful historic architecture, particularly the Craftsman homes in Bungalow Heaven and Old Pasadena. However, these century-old homes often conceal outdated electrical systems like knob-and-tube or aluminum wiring that pose significant fire risks. George The Electrician specializes in safely rewiring Pasadena's historic homes while preserving their architectural integrity.</>,
      <>In addition to historic upgrades, we handle modern electrical demands. From installing <Link to="/ev-charger-installation-glendale-ca" className="text-yellow-600 hover:text-yellow-700 underline underline-offset-2">EV chargers</Link> for residents commuting down the 110, to <Link to="/electrical-panel-upgrade-glendale-ca" className="text-yellow-600 hover:text-yellow-700 underline underline-offset-2">panel upgrades</Link> required to support high-efficiency HVAC systems during hot San Gabriel Valley summers, our licensed team does it all.</>,
      "We strictly adhere to Pasadena's local building codes and work closely with the Permit Center on North Garfield Ave to ensure all projects, from residential repairs to commercial Title 24 compliance, pass inspection seamlessly."
    ],
    neighborhoods: ["Old Pasadena", "Bungalow Heaven", "Linda Vista", "San Rafael", "Hastings Ranch", "Madison Heights"],
    zipCodes: ["91101", "91103", "91104", "91105", "91106", "91107"],
    electricianFaqs: [
      { question: "Do you replace knob-and-tube wiring in Pasadena homes?", answer: "Yes. Many older homes in Pasadena, especially in Bungalow Heaven, still have active knob-and-tube wiring. We specialize in safely removing this outdated wiring and replacing it with modern, grounded Romex without damaging your historic walls." },
      { question: "Are you familiar with the Pasadena Permit Center process?", answer: "Absolutely. We pull permits regularly with the City of Pasadena for panel upgrades, rewires, and commercial tenant improvements. We handle all documentation and inspection scheduling." }
    ],
    electricalServicesFaqs: [
      { question: "What commercial electrical services do you offer in Old Pasadena?", answer: "We provide complete commercial services including retail lighting retrofits, dedicated circuits for restaurant equipment, and Title 24 compliance upgrades for businesses throughout Old Pas and the Playhouse Village." },
      { question: "How quickly can you fix a power outage in my Pasadena home?", answer: "If your breaker keeps tripping or you've lost power to a circuit, our emergency electricians typically arrive at Pasadena properties within 60 minutes. We carry parts to fix most residential faults on the spot." }
    ]
  },
  {
    slug: "burbank-ca",
    name: "Burbank, CA",
    shortName: "Burbank",
    description: "Licensed electrician in Burbank, CA. Providing fast residential repairs, ADU electrical setups, and commercial services for the Media District.",
    longDescription: [
      <>Burbank, the Media Capital of the World, demands highly reliable electrical systems. Whether you own a post-war home in Magnolia Park needing a <Link to="/electrical-panel-upgrade-glendale-ca" className="text-yellow-600 hover:text-yellow-700 underline underline-offset-2">panel upgrade</Link> or run a production facility in the Media District requiring <Link to="/commercial-electrician-glendale-ca" className="text-yellow-600 hover:text-yellow-700 underline underline-offset-2">commercial electrical services</Link>, George The Electrician is your local expert.</>,
      <>Burbank has seen a massive surge in Accessory Dwelling Units (ADUs). We specialize in running new subpanels, trenching for underground conduit, and ensuring your ADU passes Burbank Water and Power (BWP) inspections. We also handle high-demand <Link to="/ev-charger-installation-glendale-ca" className="text-yellow-600 hover:text-yellow-700 underline underline-offset-2">EV charger installations</Link> for residents.</>,
      "We understand BWP's specific metering and service entrance requirements, saving you time and preventing costly inspection failures on your residential or commercial projects."
    ],
    neighborhoods: ["Magnolia Park", "Media District", "Downtown Burbank", "Riverside", "Hillside", "Toluca Woods"],
    zipCodes: ["91501", "91502", "91504", "91505", "91506"],
    electricianFaqs: [
      { question: "Do you handle BWP panel upgrade requirements?", answer: "Yes. Burbank Water and Power has specific regulations regarding meter spotting and overhead vs. underground service drops. We handle the entire coordination process with BWP for your panel upgrade." },
      { question: "Can you wire a new ADU in my Burbank backyard?", answer: "Yes. We provide complete electrical rough-in and finish work for ADUs in Burbank. We calculate load requirements to determine if your main house panel needs an upgrade or if a subpanel is sufficient." }
    ],
    electricalServicesFaqs: [
      { question: "Do you provide electrical maintenance for Burbank studios?", answer: "Yes. We offer commercial electrical services including heavy-duty circuit installations, specialized lighting setups, and preventive maintenance for production offices and studios in the Media District." },
      { question: "Why do my lights flicker when the AC turns on?", answer: "In many older Burbank homes, flickering lights indicate that the electrical panel is overloaded or the AC lacks a hard start kit. We can diagnose the issue and upgrade your circuits to handle the load safely." }
    ]
  },
  {
    slug: "los-angeles-ca",
    name: "Los Angeles, CA",
    shortName: "Los Angeles",
    description: "Licensed electrician serving Los Angeles neighborhoods near Glendale — specialized in Atwater Village, Silver Lake, and Eagle Rock residential electrical.",
    longDescription: [
      "As a Glendale-based electrician, George The Electrician actively serves neighboring Los Angeles communities including Atwater Village, Silver Lake, Echo Park, and Eagle Rock. We bring the fast response and honest pricing that local homeowners expect.",
      <>Los Angeles properties in these hillside and historic neighborhoods often deal with specific challenges, like ungrounded wiring or lack of capacity for modern appliances. We regularly perform <Link to="/electrical-repair-glendale-ca" className="text-yellow-600 hover:text-yellow-700 underline underline-offset-2">residential wiring repairs</Link> and install <Link to="/ev-charger-installation-glendale-ca" className="text-yellow-600 hover:text-yellow-700 underline underline-offset-2">EV chargers</Link> for residents making the switch to electric.</>,
      <>Whether you need a <Link to="/commercial-electrician-glendale-ca" className="text-yellow-600 hover:text-yellow-700 underline underline-offset-2">commercial tenant improvement</Link> for a new Silver Lake boutique, or an <Link to="/emergency-electrician-glendale-ca" className="text-yellow-600 hover:text-yellow-700 underline underline-offset-2">emergency electrician</Link> in the middle of the night, we navigate LA Department of Building and Safety (LADBS) codes to ensure compliance.</>
    ],
    neighborhoods: ["Atwater Village", "Silver Lake", "Echo Park", "Highland Park", "Glassell Park", "Eagle Rock", "Los Feliz"],
    zipCodes: ["90026", "90027", "90031", "90039", "90041", "90042", "90065"],
    electricianFaqs: [
      { question: "Do you pull LADBS permits for Los Angeles projects?", answer: "Yes. We are a fully licensed C-10 contractor and regularly pull permits with the Los Angeles Department of Building and Safety (LADBS) for panel upgrades, rewires, and major installations in LA neighborhoods." },
      { question: "Can you fix hillside home electrical issues in Silver Lake?", answer: "Yes. Hillside homes in Silver Lake and Echo Park often have unique grounding challenges and aging panels. We have extensive experience upgrading these specific types of properties safely." }
    ],
    electricalServicesFaqs: [
      { question: "Do you install outdoor lighting for Los Angeles homes?", answer: "Yes, we design and install outdoor security lighting, pathway lighting, and patio string lights for homes in Atwater Village, Eagle Rock, and surrounding areas." },
      { question: "How long does a panel upgrade take in Los Angeles?", answer: "The physical panel replacement usually takes one full day, meaning your power is only off for 6 to 8 hours. However, coordinating with LADBS and LADWP for inspections and meter unlocks adds to the timeline." }
    ]
  },
  {
    slug: "la-canada-flintridge-ca",
    name: "La Cañada Flintridge, CA",
    shortName: "La Cañada",
    description: "Premium electrical services for La Cañada Flintridge homes. Specializing in high-capacity panel upgrades, landscape lighting, and EV chargers.",
    longDescription: [
      <>La Cañada Flintridge features large, beautiful estates that demand an electrical system capable of supporting high-end amenities. George The Electrician provides premium residential services tailored for these properties, including 400-amp <Link to="/electrical-panel-upgrade-glendale-ca" className="text-yellow-600 hover:text-yellow-700 underline underline-offset-2">panel upgrades</Link> to handle heavy HVAC loads, pool equipment, and dual <Link to="/ev-charger-installation-glendale-ca" className="text-yellow-600 hover:text-yellow-700 underline underline-offset-2">EV chargers</Link>.</>,
      <>We also specialize in custom <Link to="/lighting-installation-glendale-ca" className="text-yellow-600 hover:text-yellow-700 underline underline-offset-2">indoor and landscape lighting</Link> to highlight the unique architectural and natural beauty of La Cañada properties. Our installations are designed to be elegant, energy-efficient, and fully automated via smart home systems.</>,
      "We understand the high expectations of La Cañada homeowners. Our team guarantees clean workmanship, discrete service, and lasting results, ensuring your home is treated with the utmost care."
    ],
    neighborhoods: ["Flintridge", "La Cañada", "Descanso Gardens Area", "Alta Canyada"],
    zipCodes: ["91011", "91012"],
    electricianFaqs: [
      { question: "Do you install whole-home surge protection in La Cañada?", answer: "Yes. Given the high value of smart appliances, home theaters, and HVAC systems in La Cañada homes, we highly recommend and install whole-home surge protectors directly at the electrical panel." },
      { question: "Can you install multiple EV chargers in my garage?", answer: "Absolutely. We can calculate your home's total electrical load to ensure your panel can safely support two or more Level 2 EV chargers, and perform a panel or subpanel upgrade if necessary." }
    ],
    electricalServicesFaqs: [
      { question: "Do you handle specialized landscape lighting in La Cañada?", answer: "Yes. We install low-voltage LED landscape lighting, pathway lights, and architectural uplighting to enhance the security and aesthetics of large properties." },
      { question: "Can you troubleshoot my smart home lighting system?", answer: "Yes. We troubleshoot, repair, and install smart lighting control systems like Lutron Caséta, ensuring seamless integration and reliable performance across your estate." }
    ]
  }
];`;

content = content.replace(/export const locations: LocationData\[\] = \[\s*\{[\s\S]*?\}\s*\];/m, newLocations);

fs.writeFileSync(filePath, content);
console.log('Successfully updated business.tsx with localized content and FAQs.');
