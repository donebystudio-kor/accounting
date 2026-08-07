import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "손익분기점 계산기 | BEP 판매량·매출액 자동 계산",
  description: "고정비, 판매가격, 변동비를 입력하면 손익분기점(BEP) 판매량·매출액과 목표이익 판매량, 안전한계율을 자동 계산합니다.",
  openGraph: {
    title: "손익분기점 계산기 | BEP 판매량·매출액 자동 계산",
    description: "고정비, 판매가격, 변동비를 입력하면 손익분기점(BEP) 판매량·매출액과 목표이익 판매량, 안전한계율을 자동 계산합니다.",
    url: "/calculator/break-even-point",
  },
  alternates: { canonical: "/calculator/break-even-point" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
