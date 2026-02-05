import React from 'react';
import { Helmet } from 'react-helmet-async';

const Seo = ({ title, description, keywords, canonicalUrl }) => {
    const siteTitle = "AxomITLab | Premium Web & App Development Agency";
    const siteDescription = "AxomITLab transforms businesses with expert web design, mobile app development, and AI solutions. Get a detailed project estimate and launch your digital presence today.";
    const siteUrl = "https://thevibecoderagency.online";
    const logoUrl = `${siteUrl}/assets/images/mainLogo.png`; // Ensure this path is valid after build, or put logo in public

    // Structured Data for Rich Snippets (Organization)
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "AxomITLab",
        "alternateName": ["Axom IT Lab", "Axom Tech Lab"],
        "url": siteUrl,
        "logo": logoUrl,
        "sameAs": [
            "https://www.linkedin.com/company/axomitlab",
            "https://twitter.com/axomitlab",
            "https://instagram.com/axomitlab"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9876543210", // Replace with real number if available
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": ["en", "hi", "as"]
        },
        "description": siteDescription
    };

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title ? `${title} | AxomITLab` : siteTitle}</title>
            <meta name="description" content={description || siteDescription} />
            <meta name="keywords" content={keywords || "web development agency, app development company, react native developers, software company india, AxomITLab, Axom IT Lab, custom website design, AI integration services"} />
            <meta name="author" content="AxomITLab" />
            <link rel="canonical" href={canonicalUrl || siteUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalUrl || siteUrl} />
            <meta property="og:title" content={title || siteTitle} />
            <meta property="og:description" content={description || siteDescription} />
            <meta property="og:image" content={logoUrl} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={canonicalUrl || siteUrl} />
            <meta property="twitter:title" content={title || siteTitle} />
            <meta property="twitter:description" content={description || siteDescription} />
            <meta property="twitter:image" content={logoUrl} />

            {/* JSON-LD Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(jsonLd)}
            </script>
        </Helmet>
    );
};

export default Seo;
