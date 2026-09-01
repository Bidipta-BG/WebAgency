import { Analytics } from "@vercel/analytics/next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl = "https://axomitlab.com";
const siteTitle = "XOM Digital | Take Your Business Online — Brand, Website & Marketing";
const siteDescription = "XOM Digital helps local and offline businesses go online and grow into a brand. We create your logo, build your website, manage your social media, and bring you real customers — all in one place.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | XOM Digital",
  },
  description: siteDescription,
  keywords: [
    "take offline business online",
    "local business website India",
    "business to brand agency",
    "get my shop online",
    "small business digital presence",
    "website for small business India",
    "business branding agency India",
    "local business digital marketing",
    "how to get customers online",
    "affordable website design India",
    "social media management for business",
    "logo design India",
    "digital marketing agency india",
    "AI web development",
    "XOM Digital",
    "lead generation services",
    "e-commerce website India"
  ],
  authors: [{ name: "XOM Digital", url: siteUrl }],
  creator: "XOM Digital",
  publisher: "XOM Digital",
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
    siteName: "XOM Digital",
    images: [
      {
        url: "/assets/images/axomITLab.jpg",
        width: 1200,
        height: 630,
        alt: "XOM Digital - Premium Web, App & Digital Marketing Agency",
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
    "name": "XOM Digital",
    "alternateName": ["XOMDigital", "XOM Digital Agency"],
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
    "name": "XOM Digital",
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
