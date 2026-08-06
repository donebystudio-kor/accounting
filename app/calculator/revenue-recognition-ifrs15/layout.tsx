import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "수익인식 계산기 | IFRS15 진행률·인식수익 자동 계산 | 회계던",
  description: "계약총액, 진행률을 입력하면 IFRS15 기준 누적인식수익, 당기인식수익, 계약자산/부채를 자동 계산합니다.",
  openGraph: {
    title: "수익인식 계산기 | IFRS15 진행률·인식수익 자동 계산 | 회계던",
    description: "계약총액, 진행률을 입력하면 IFRS15 기준 누적인식수익, 당기인식수익, 계약자산/부채를 자동 계산합니다.",
    url: "/calculator/revenue-recognition-ifrs15",
  },
  alternates: { canonical: "/calculator/revenue-recognition-ifrs15" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
