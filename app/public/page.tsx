import type { Metadata } from "next";
import StandardPage from "@/components/StandardPage";

export const metadata: Metadata = {
  title: "공기업·준정부기관 회계기준 문제 풀이 | 회계던",
  description: "정부보조금, 복구충당부채, 공채 등 공기업 회계 문제 65개+",
  openGraph: {
    title: "공기업·준정부기관 회계기준 문제 풀이 | 회계던",
    description: "정부보조금, 복구충당부채, 공채 등 공기업 회계 문제 65개+",
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
