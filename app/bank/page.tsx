import type { Metadata } from "next";
import StandardPage from "@/components/StandardPage";

export const metadata: Metadata = {
  title: "은행업회계처리준칙 문제 풀이",
  description: "은행업회계처리준칙 분개 문제, OX 퀴즈. 은행업 회계기준 학습.",
  openGraph: {
    title: "은행업회계처리준칙 문제 풀이 | 회계던",
    description: "은행업회계처리준칙 분개 문제, OX 퀴즈.",
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
