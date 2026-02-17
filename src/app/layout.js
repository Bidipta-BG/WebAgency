import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl = "https://thevibecoderagency.online";
const siteTitle = "AxomITLab | Premium Web & App Development Agency";
const siteDescription = "AxomITLab transforms businesses with expert web design, mobile app development, and AI solutions. Get a detailed project estimate and launch your digital presence today.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | AxomITLab",
  },
  description: siteDescription,
  keywords: ["web development agency", "app development company", "react native developers", "software company india", "AxomITLab", "Axom IT Lab", "custom website design", "AI integration services"],
  authors: [{ name: "AxomITLab" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: "AxomITLab",
    images: [
      {
        url: "/assets/images/mainLogo.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/assets/images/mainLogo.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AxomITLab",
  "alternateName": ["Axom IT Lab", "Axom Tech Lab"],
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
};

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
      >
        {children}
      </body>
    </html>
  );
}
