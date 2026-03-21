import type { MetadataRoute } from "next";
import { CATEGORIES } from "@/constants/categories";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://accounting-done.vercel.app";
  const routes: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
  CATEGORIES.forEach((cat) => {
    routes.push({
      url: `${base}/quiz/${cat.standard}/${cat.id}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });
  });
  return routes;
}
