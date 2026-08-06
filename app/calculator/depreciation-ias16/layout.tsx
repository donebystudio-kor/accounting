import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "감가상각 계산기 | IAS16 정액법·정률법 자동 계산 | 회계던",
  description: "취득원가, 잔존가치, 내용연수를 입력하면 IAS16 기준 정액법·정률법 감가상각비를 자동 계산합니다.",
  openGraph: {
    title: "감가상각 계산기 | IAS16 정액법·정률법 자동 계산 | 회계던",
    description: "취득원가, 잔존가치, 내용연수를 입력하면 IAS16 기준 정액법·정률법 감가상각비를 자동 계산합니다.",
    url: "/calculator/depreciation-ias16",
  },
  alternates: { canonical: "/calculator/depreciation-ias16" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
