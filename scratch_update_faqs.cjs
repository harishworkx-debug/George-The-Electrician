const fs = require('fs');
const path = require('path');

const filePath = path.join('e:', 'React Project', 'George-The-Electrician', 'src', 'data', 'business.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const replacement = `export const homeFAQs: FAQItem[] = [
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
];`;

content = content.replace(/export const homeFAQs: FAQItem\[\] = \[\s*\{[\s\S]*?\];/m, replacement);

fs.writeFileSync(filePath, content);
console.log('Successfully updated FAQs array.');
