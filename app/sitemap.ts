import type { MetadataRoute } from "next";

const baseUrl = "https://dm.kaalamithra-ai.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/about",
    "/services",
    "/contact",
    "/services/seo",
    "/services/social-media-marketing",
    "/services/performance-marketing",
    "/services/email-marketing",
    "/services/marketing-automation",
    "/services/content-marketing",
    "/services/remarketing-retargeting",
    "/blog",
    "/case-studies",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "/" ? 1 : 0.7,
  }));
}
