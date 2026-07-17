import { Analytics } from "@vercel/analytics/next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl = "https://axomitlab.com";
const siteTitle = "Axom IT Lab | Premium Web & App Development Agency";
const siteDescription = "Axom IT Lab is an AI-powered web and mobile app development agency. We leverage advanced AI models and modern tech to deliver enterprise-grade solutions faster and at a fraction of the cost.";

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
    "AI software development india",
    "AI web development",
    "fast software development with AI",
    "cost-effective AI development",
    "AI-driven app development",
    "affordable web design for startups",
    "AxomITLab",
    "Axom IT Lab",
    "enterprise software development",
    "reduce development cost with AI"
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
        url: "/assets/images/mainLogo.png",
        width: 1200,
        height: 630,
        alt: "AxomITLab - Premium Web & App Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    creator: "@axomitlab",
    images: ["/assets/images/mainLogo.png"],
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
      "telephone": "+91-9876543210",
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
    "telephone": "+91-9876543210",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sivasagar",
      "addressLocality": "Sivasagar",
      "addressRegion": "AS",
      "postalCode": "785640",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.9826,
      "longitude": 94.6425
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
