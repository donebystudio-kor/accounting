import type { Metadata } from "next";
import StandardPage from "@/components/StandardPage";

export const metadata: Metadata = {
  title: "은행업회계처리준칙 문제 풀이 | 회계던",
  description: "대출금, 예수금, 파생상품, BIS비율 등 은행업 특화 회계 문제 90개+",
  openGraph: {
    title: "은행업회계처리준칙 문제 풀이 | 회계던",
    description: "대출금, 예수금, 파생상품, BIS비율 등 은행업 특화 회계 문제 90개+",
    url: "/bank",
  },
  alternates: { canonical: "/bank" },
};

export default function BankPage() {
  return (
    <StandardPage
      standard={{ id: "bank", name: "은행업", description: "은행업 회계기준", emoji: "🏦" }}
    />
  );
}
