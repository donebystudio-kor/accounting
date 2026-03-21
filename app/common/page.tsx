import type { Metadata } from "next";
import StandardPage from "@/components/StandardPage";

export const metadata: Metadata = {
  title: "공통 회계 문제 풀이 | 회계던",
  description: "모든 회계기준에 적용되는 기본 분개, OX 퀴즈, 계산 문제. 회계 기초 학습.",
  openGraph: {
    title: "공통 회계 문제 풀이 | 회계던",
    description: "모든 회계기준에 적용되는 기본 분개, OX 퀴즈, 계산 문제.",
    url: "/common",
  },
  alternates: { canonical: "/common" },
};

export default function CommonPage() {
  return (
    <StandardPage
      standard={{ id: "common", name: "공통", description: "모든 회계기준에 적용되는 기본 문제", emoji: "📚" }}
    />
  );
}
