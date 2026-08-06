import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "대손충당금 계산기 | IFRS9 기대신용손실(ECL) 자동 계산 | 회계던",
  description: "구간별 채권 잔액과 손실률을 입력하면 IFRS9 기준 기대신용손실(ECL)과 대손충당금을 자동 계산합니다.",
  openGraph: {
    title: "대손충당금 계산기 | IFRS9 기대신용손실(ECL) 자동 계산 | 회계던",
    description: "구간별 채권 잔액과 손실률을 입력하면 IFRS9 기준 기대신용손실(ECL)과 대손충당금을 자동 계산합니다.",
    url: "/calculator/ecl-ifrs9",
  },
  alternates: { canonical: "/calculator/ecl-ifrs9" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
