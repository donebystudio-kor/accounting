import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "리스부채 계산기 | IFRS16 현재가치 자동 계산 | 회계던",
  description: "월 리스료와 연 할인율을 입력하면 IFRS16 기준 리스부채 현재가치와 월별 상환 스케줄을 자동 계산합니다.",
  openGraph: {
    title: "리스부채 계산기 | IFRS16 현재가치 자동 계산 | 회계던",
    description: "월 리스료와 연 할인율을 입력하면 IFRS16 기준 리스부채 현재가치와 월별 상환 스케줄을 자동 계산합니다.",
    url: "/calculator/lease-liability-ifrs16",
  },
  alternates: { canonical: "/calculator/lease-liability-ifrs16" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
