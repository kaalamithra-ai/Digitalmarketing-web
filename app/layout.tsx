import type { Metadata } from "next";
import Script from "next/script";
import AnnouncementBar from "@/components/AnnouncementBar";
import FloatingActions from "@/components/FloatingActions";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dm.kaalamithra-ai.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-soft text-ink-900 antialiased">
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
