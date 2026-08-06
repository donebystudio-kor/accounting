import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "손상차손 계산기 | IAS36 회수가능액·손상차손 자동 계산 | 회계던",
  description: "장부금액, 순공정가치, 사용가치를 입력하면 IAS36 기준 회수가능액과 손상차손을 자동 계산합니다.",
  openGraph: {
    title: "손상차손 계산기 | IAS36 회수가능액·손상차손 자동 계산 | 회계던",
    description: "장부금액, 순공정가치, 사용가치를 입력하면 IAS36 기준 회수가능액과 손상차손을 자동 계산합니다.",
    url: "/calculator/impairment-test-ias36",
  },
  alternates: { canonical: "/calculator/impairment-test-ias36" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
