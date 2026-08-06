import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "법인세 계산기 | 당기법인세·이연법인세 자동 계산 (IAS12) | 회계던",
  description: "세전회계이익과 세무조정 항목을 입력하면 당기법인세, 이연법인세자산/부채, 법인세비용을 자동 계산합니다.",
  openGraph: {
    title: "법인세 계산기 | 당기법인세·이연법인세 자동 계산 (IAS12) | 회계던",
    description: "세전회계이익과 세무조정 항목을 입력하면 당기법인세, 이연법인세자산/부채, 법인세비용을 자동 계산합니다.",
    url: "/calculator/income-tax-ias12",
  },
  alternates: { canonical: "/calculator/income-tax-ias12" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
