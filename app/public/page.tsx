import type { Metadata } from "next";
import StandardPage from "@/components/StandardPage";

export const metadata: Metadata = {
  title: "공기업·준정부기관 회계기준 문제 풀이",
  description: "공기업·준정부기관 회계기준 분개 문제, OX 퀴즈. 공공기관 회계 학습.",
  openGraph: {
    title: "공기업·준정부기관 회계기준 문제 풀이 | 회계던",
    description: "공기업·준정부기관 회계기준 분개 문제, OX 퀴즈.",
    url: "/public",
  },
  alternates: { canonical: "/public" },
};

export default function PublicPage() {
  return (
    <StandardPage
      standard={{ id: "public", name: "공공기관", description: "공기업·준정부기관 회계기준", emoji: "🏛️" }}
    />
  );
}
