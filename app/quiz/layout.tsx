import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "오답노트·북마크 퀴즈 | 회계던",
  description: "틀린 문제 다시 풀기, 북마크한 문제 모아 풀기, 태그별 맞춤 퀴즈를 제공합니다.",
  openGraph: {
    title: "오답노트·북마크 퀴즈 | 회계던",
    description: "틀린 문제 다시 풀기, 북마크한 문제 모아 풀기, 태그별 맞춤 퀴즈를 제공합니다.",
    url: "/quiz",
  },
  alternates: { canonical: "/quiz" },
};

export default function QuizLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
