import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "퇴직급여 계산기 | IAS19 확정급여채무 현재가치 자동 계산 | 회계던",
  description: "미래퇴직급여, 할인율, 잔여근무기간을 입력하면 IAS19 기준 확정급여채무 현재가치와 연도별 스케줄을 자동 계산합니다.",
  openGraph: {
    title: "퇴직급여 계산기 | IAS19 확정급여채무 현재가치 자동 계산 | 회계던",
    description: "미래퇴직급여, 할인율, 잔여근무기간을 입력하면 IAS19 기준 확정급여채무 현재가치와 연도별 스케줄을 자동 계산합니다.",
    url: "/calculator/pension-present-value-ias19",
  },
  alternates: { canonical: "/calculator/pension-present-value-ias19" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
