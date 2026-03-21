import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "계정과목 사전 | K-IFRS·은행·공공기관 회계 계정과목 비교",
  description:
    "K-IFRS, 일반기업, 은행업, 보험업, 공공기관, 정부회계 기준별 계정과목 명칭과 정의를 한눈에 비교합니다.",
  alternates: { canonical: "/accounts" },
};

export default function AccountsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
