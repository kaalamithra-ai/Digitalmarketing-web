import type { Metadata } from "next";
import Script from "next/script";
import AnnouncementBar from "@/components/AnnouncementBar";
import FloatingActions from "@/components/FloatingActions";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dm.kaalamithra-ai.com"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Kaalamithra",
    url: "https://www.kaalamithra.com",
    logo: "https://www.kaalamithra.com/next.svg",
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Kaalamithra",
    url: "https://www.kaalamithra.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.kaalamithra.com/blog?query={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const businessJsonLd = {
    "@context": "https://schema.org",
    "@type": "MarketingAgency",
    name: "Kaalamithra",
    url: "https://dm.kaalamithra-ai.com",
    logo: "https://dm.kaalamithra-ai.com/logo.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    sameAs: [],
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        {GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { anonymize_ip: true });
              `}
            </Script>
          </>
        ) : null}
      </head>
      <body className="bg-soft text-ink-900 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        <Script id="org-schema" type="application/ld+json">
          {JSON.stringify(organizationJsonLd)}
        </Script>
        <Script id="website-schema" type="application/ld+json">
          {JSON.stringify(websiteJsonLd)}
        </Script>

        <AnnouncementBar />
        <div className="pt-9">
          <Header />
          <div className="relative isolate overflow-x-clip">{children}</div>
          <FloatingActions />
          <Footer />
        </div>
      </body>
    </html>
  );
}
