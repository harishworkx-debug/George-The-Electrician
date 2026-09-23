import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Phone } from "lucide-react";
import { business } from "@/data/business";

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page Not Found | George The Electrician — Glendale, CA"
        description="The page you are looking for could not be found. Call George The Electrician at (747) 252-1457 for electrical services in Glendale, CA."
        canonical="/404"
      />
      <section className="bg-black py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-7xl lg:text-9xl font-bold text-yellow-400 mb-4">404</div>
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">Page Not Found</h1>
          <p className="text-lg text-gray-400 mb-8">
            The page you are looking for may have moved or no longer exists. Let us help you find what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="px-7 py-3.5 rounded-xl bg-white text-black font-bold hover:bg-gray-100 transition-colors"
            >
              Back to Home
            </Link>
            <a
              href={`tel:${business.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition-colors"
            >
              <Phone className="w-5 h-5" strokeWidth={2.5} />
              Call {business.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
