import type { Metadata } from "next";
import StandardPage from "@/components/StandardPage";

export const metadata: Metadata = {
  title: "K-IFRS 회계 문제 풀이 | 회계던",
  description: "IFRS 16 리스, IFRS 9 금융상품, IFRS 15 수익인식 등 K-IFRS 분개·OX·계산 문제 160개+",
  openGraph: {
    title: "K-IFRS 회계 문제 풀이 | 회계던",
    description: "IFRS 16 리스, IFRS 9 금융상품, IFRS 15 수익인식 등 K-IFRS 분개·OX·계산 문제 160개+",
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
