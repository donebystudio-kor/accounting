import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "계정과목 사전 | K-IFRS·은행·공공기관 회계 계정과목 비교",
  description:
    "실무에서 자주 쓰는 회계 계정과목 정의 및 분개 정리",
  alternates: { canonical: "/accounts" },
};

export default function AccountsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
