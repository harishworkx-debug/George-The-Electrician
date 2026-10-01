import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { CTABanner } from "@/components/CTABanner";
import { blogPosts } from "@/data/blog";
import { Calendar, User, ChevronRight } from "lucide-react";

export function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Generate Article Schema for SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "George The Electrician",
      logo: {
        "@type": "ImageObject",
        url: "https://georgetheelectrician.com/logo.png"
      }
    }
  };

  return (
    <>
      <SEO 
        title={`${post.title} | George The Electrician Blog`}
        description={post.excerpt}
        canonical={`/blog/${post.slug}`}
        schema={[articleSchema]}
      />

      <article className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-yellow-600 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/blog" className="hover:text-yellow-600 transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium truncate">{post.title}</span>
          </nav>

          <header className="mb-12">
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-yellow-500" />
                <span>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-yellow-500" />
                <span>{post.author}</span>
              </div>
            </div>
          </header>

          <div className="prose prose-lg prose-yellow max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-yellow-600 prose-li:text-gray-700">
            {post.content}
          </div>
        </div>
      </article>

      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {blogPosts.filter(p => p.slug !== post.slug).slice(0, 2).map((relatedPost) => (
              <Link 
                key={relatedPost.slug} 
                to={`/blog/${relatedPost.slug}`}
                className="block p-6 bg-white rounded-2xl border border-gray-200 hover:border-yellow-400 hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-gray-900 mb-2">{relatedPost.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{relatedPost.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner 
        title="Need a Licensed Electrician in Glendale?" 
        subtitle="Our local experts are ready to help with your next electrical project."
      />
    </>
  );
}
