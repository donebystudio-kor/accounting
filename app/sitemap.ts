import type { MetadataRoute } from "next";
import { STANDARDS } from "@/constants/standards";
import { CONCEPTS } from "@/constants/concepts";

const TYPES = ["journal", "ox", "calculation"];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://hoegyedon.com";
  const routes: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  // 추가 정적 페이지 (메인 메뉴)
  const staticPages = [
    { path: "quiz", priority: 0.9 },
    { path: "concepts", priority: 0.9 },
    { path: "terms", priority: 0.9 },
    { path: "calculator", priority: 0.8 },
    { path: "diagrams", priority: 0.8 },
    { path: "accounts", priority: 0.8 },
    { path: "bank", priority: 0.7 },
    { path: "general", priority: 0.7 },
    { path: "common", priority: 0.7 },
    { path: "k-ifrs", priority: 0.7 },
    { path: "result", priority: 0.5 },
  ];
  staticPages.forEach((p) => {
    routes.push({
      url: `${base}/${p.path}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: p.priority,
    });
  });

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
