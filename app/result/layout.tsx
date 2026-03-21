import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "퀴즈 결과",
  description: "회계던 퀴즈 채점 결과. 정답, 오답, 해설을 확인하세요.",
  openGraph: {
    title: "퀴즈 결과 — 회계던",
    description: "회계던 퀴즈 채점 결과.",
    url: "/result",
  },
  alternates: { canonical: "/result" },
  robots: { index: false },
};

export default function ResultLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
