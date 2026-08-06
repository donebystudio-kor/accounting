import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "충당부채 현재가치 계산기 | IAS37 복구충당부채 자동 계산 | 회계던",
  description: "미래지출액과 할인율을 입력하면 IAS37 기준 충당부채 현재가치와 연도별 이자전입 스케줄을 자동 계산합니다.",
  openGraph: {
    title: "충당부채 현재가치 계산기 | IAS37 복구충당부채 자동 계산 | 회계던",
    description: "미래지출액과 할인율을 입력하면 IAS37 기준 충당부채 현재가치와 연도별 이자전입 스케줄을 자동 계산합니다.",
    url: "/calculator/provision-present-value-ias37",
  },
  alternates: { canonical: "/calculator/provision-present-value-ias37" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
