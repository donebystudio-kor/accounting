import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "회계 용어 사전 | 계상·환입·상각 등 회계 용어 정리",
  description:
    "계상, 환입, 상각, 발생주의 등 회계에서 자주 쓰이는 용어를 쉽게 정리했습니다.",
  alternates: { canonical: "/terms" },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
