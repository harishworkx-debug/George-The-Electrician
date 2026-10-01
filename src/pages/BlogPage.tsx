import { SEO } from "@/components/SEO";
import { CTABanner } from "@/components/CTABanner";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";

import { blogPosts } from "@/data/blog";

export function BlogPage() {
  return (
    <>
      <SEO
        title="Electrical Blog & Guides | George The Electrician"
        description="Expert electrical advice, guides, and tips from Glendale's trusted licensed electrician. Learn about panel upgrades, EV chargers, safety, and more."
        canonical="/blog"
      />

      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-2xl shadow-xl shadow-yellow-500/20 mb-6">
            <BookOpen className="w-8 h-8 text-black" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Electrical Guides & Articles
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Practical advice, safety tips, and local electrical guides from the experts at George The Electrician.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all p-8 flex flex-col h-full">
                <div className="flex-grow">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                <div className="pt-8 mt-auto">
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-yellow-600 group-hover:text-yellow-700 transition-colors">
                    Read Guide
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Need a Licensed Electrician Today?"
        subtitle="We provide fast, reliable, and upfront electrical services across Glendale and Los Angeles County."
      />
    </>
  );
}
