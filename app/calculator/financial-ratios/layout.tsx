import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "재무비율 계산기 | 유동비율·부채비율·ROE·ROA 자동 계산",
  description: "유동자산, 총부채, 매출액, 당기순이익 등을 입력하면 유동비율, 부채비율, 자기자본비율, ROE, ROA 등 9가지 재무비율을 자동 계산합니다.",
  openGraph: {
    title: "재무비율 계산기 | 유동비율·부채비율·ROE·ROA 자동 계산",
    description: "유동자산, 총부채, 매출액, 당기순이익 등을 입력하면 유동비율, 부채비율, 자기자본비율, ROE, ROA 등 9가지 재무비율을 자동 계산합니다.",
    url: "/calculator/financial-ratios",
  },
  alternates: { canonical: "/calculator/financial-ratios" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
