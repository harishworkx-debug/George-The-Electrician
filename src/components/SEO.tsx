import { Helmet } from "react-helmet-async";
import { business, images } from "@/data/business";

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  schema?: object[];
}

export function SEO({ title, description, canonical, schema = [] }: SEOProps) {
  const baseUrl = "https://georgetheelectrician.com";
  const fullCanonical = `${baseUrl}${canonical}`;

  const defaultSchema: object = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    name: business.name,
    telephone: business.phone,
    email: business.email,
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    image: [
      `${baseUrl}/og-image.jpg`,
      images.hero
    ],
    sameAs: [
      business.mapsUrl
    ],
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 34.1425,
      longitude: -118.2551,
    },
    areaServed: [
      "Glendale, CA",
      "Pasadena, CA",
      "Burbank, CA",
      "La Cañada Flintridge, CA",
      "Los Angeles, CA",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "17:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.rating,
      reviewCount: business.reviewCount,
    },
  };

  const allSchema = [defaultSchema, ...schema];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={`${baseUrl}/og-image.jpg`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}/og-image.jpg`} />
      {allSchema.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}

export function buildServiceSchema(serviceName: string, description: string, url: string, faqs: { question: string; answer: string }[]) {
  const baseUrl = "https://georgetheelectrician.com";
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Electrical",
    provider: {
      "@type": "Electrician",
      name: business.name,
      telephone: business.phone,
      url: baseUrl,
      logo: `${baseUrl}/logo.png`,
      image: images.hero,
      sameAs: [business.mapsUrl],
      address: {
        "@type": "PostalAddress",
        streetAddress: business.address.street,
        addressLocality: business.address.city,
        addressRegion: business.address.state,
        postalCode: business.address.zip,
        addressCountry: "US",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Glendale, CA",
    },
    name: serviceName,
    description: description,
    url: `${baseUrl}${url}`,
  };
}

export function buildFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}
