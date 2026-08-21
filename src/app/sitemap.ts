import type { MetadataRoute } from "next";

const siteUrl = "https://www.solvixlabs.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/about", "/contact"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
