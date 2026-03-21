import type { Metadata } from "next";
import StandardPage from "@/components/StandardPage";

export const metadata: Metadata = {
  title: "일반기업회계기준 문제 풀이 | 회계던",
  description: "중소기업 회계기준 분개, 매도가능증권, 퇴직급여충당부채 등 실전 문제 95개+",
  openGraph: {
    title: "일반기업회계기준 문제 풀이 | 회계던",
    description: "중소기업 회계기준 분개, 매도가능증권, 퇴직급여충당부채 등 실전 문제 95개+",
    url: "/general",
  },
  alternates: { canonical: "/general" },
};

export default function GeneralPage() {
  return (
    <StandardPage
      standard={{ id: "general", name: "일반기업", description: "중소기업 회계기준", emoji: "🏪" }}
    />
  );
}
