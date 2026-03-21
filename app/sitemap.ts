import type { MetadataRoute } from "next";
import { CATEGORIES } from "@/constants/categories";
import { STANDARDS } from "@/constants/standards";

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
      priority: 0.9,
    });
  });

  // 공통 카테고리 퀴즈 경로
  const commonCats = CATEGORIES.filter((c) => c.standard === "common");
  commonCats.forEach((cat) => {
    routes.push({
      url: `${base}/quiz/common/${cat.id}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });
  });

  // 기준별 카테고리 퀴즈 경로 (전용 + 공통)
  STANDARDS.forEach((std) => {
    const stdCats = CATEGORIES.filter((c) => c.standard === std.id);
    [...stdCats, ...commonCats].forEach((cat) => {
      routes.push({
        url: `${base}/quiz/${std.id}/${cat.id}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
      });
    });
  });

  return routes;
}
