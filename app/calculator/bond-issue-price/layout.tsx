import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "사채 발행가액 계산기 | 유효이자율법 상각표 자동 계산",
  description: "액면금액, 액면이자율, 시장이자율, 만기를 입력하면 사채 발행가액과 할인·할증 판정, 발행 분개, 유효이자율법 상각표를 자동 계산합니다.",
  openGraph: {
    title: "사채 발행가액 계산기 | 유효이자율법 상각표 자동 계산",
    description: "액면금액, 액면이자율, 시장이자율, 만기를 입력하면 사채 발행가액과 할인·할증 판정, 발행 분개, 유효이자율법 상각표를 자동 계산합니다.",
    url: "/calculator/bond-issue-price",
  },
  alternates: { canonical: "/calculator/bond-issue-price" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
