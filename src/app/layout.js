import { Analytics } from "@vercel/analytics/next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl = "https://axomitlab.com";
const siteTitle = "Axom IT Lab | Premium Web, App & Digital Marketing Agency";
const siteDescription = "Axom IT Lab is an AI-powered software development and digital marketing agency. We leverage advanced AI models to deliver enterprise-grade solutions and data-driven marketing campaigns faster and at a fraction of the cost.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | AxomITLab",
  },
  description: siteDescription,
  keywords: [
    "AI-powered development agency",
    "mobile app development company",
    "digital marketing agency india",
    "AI web development",
    "fast software development with AI",
    "AI-driven marketing campaigns",
    "cost-effective AI development",
    "AI-driven app development",
    "affordable web design for startups",
    "AxomITLab",
    "Axom IT Lab",
    "enterprise software development",
    "lead generation services"
  ],
  authors: [{ name: "AxomITLab", url: siteUrl }],
  creator: "AxomITLab",
  publisher: "AxomITLab",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: "AxomITLab",
    images: [
      {
        url: "/assets/images/axomITLab.jpg",
        width: 1200,
        height: 630,
        alt: "AxomITLab - Premium Web, App & Digital Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    creator: "@axomitlab",
    images: ["/assets/images/axomITLab.jpg"],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Axom IT Lab",
    "alternateName": ["AxomITLab", "Axom Tech Lab"],
    "url": siteUrl,
    "logo": `${siteUrl}/assets/images/mainLogo.png`,
    "sameAs": [
      "https://www.linkedin.com/company/axomitlab",
      "https://twitter.com/axomitlab",
      "https://instagram.com/axomitlab"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9606914772",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi", "as"]
    },
    "description": siteDescription
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Axom IT Lab",
    "image": `${siteUrl}/assets/images/mainLogo.png`,
    "@id": siteUrl,
    "url": siteUrl,
    "telephone": "+91-9606914772",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "BTM Layout",
      "addressLocality": "Bengaluru",
      "addressRegion": "KA",
      "postalCode": "560068",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.9165,
      "longitude": 77.6101
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "21:00"
    },
    "priceRange": "$$"
  }
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
