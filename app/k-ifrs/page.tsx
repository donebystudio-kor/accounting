import type { Metadata } from "next";
import StandardPage from "@/components/StandardPage";

export const metadata: Metadata = {
  title: "K-IFRS 회계 문제 풀이",
  description: "K-IFRS(한국채택국제회계기준) 분개 문제, OX 퀴즈. 상장사·대기업 회계기준 학습.",
  openGraph: {
    title: "K-IFRS 회계 문제 풀이 | 회계던",
    description: "K-IFRS 분개 문제, OX 퀴즈. 상장사·대기업 회계기준 학습.",
    url: "/k-ifrs",
  },
  alternates: { canonical: "/k-ifrs" },
};

export default function KIfrsPage() {
  return (
    <StandardPage
      standard={{ id: "k-ifrs", name: "K-IFRS", description: "상장사·대기업 회계기준", emoji: "🏢" }}
    />
  );
}
