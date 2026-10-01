const fs = require('fs');
const path = require('path');

const filePath = path.join('e:', 'React Project', 'George-The-Electrician', 'src', 'data', 'business.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const newPanelContent = `    slug: "electrical-panel-upgrade",
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
    ],`;

content = content.replace(
  /slug: "electrical-panel-upgrade",[\s\S]*?icon: "Zap",/m,
  newPanelContent + '\n    icon: "Zap",'
);

fs.writeFileSync(filePath, content);
console.log('Successfully updated electrical panel upgrade content.');
