import type { MetadataRoute } from "next";
import { STANDARDS } from "@/constants/standards";
import { CONCEPTS } from "@/constants/concepts";

const TYPES = ["journal", "ox", "calculation"];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://accounting-theta-pink.vercel.app";
  const routes: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  // 기준별 정적 페이지
  STANDARDS.forEach((std) => {
    routes.push({
      url: `${base}/${std.id}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });
  });

  // 공통 + 기준별 퀴즈 경로
  ["common", ...STANDARDS.map((s) => s.id)].forEach((std) => {
    TYPES.forEach((type) => {
      routes.push({
        url: `${base}/quiz/${std}/${type}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
      });
    });
  });

  // 개념 페이지
  CONCEPTS.forEach((c) => {
    routes.push({
      url: `${base}/concept/${c.tag.toLowerCase()}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  });

  return routes;
}
