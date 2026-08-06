import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "재고자산 계산기 | 선입선출법·가중평균법 매출원가 자동 계산 (IAS2) | 회계던",
  description: "매입내역과 판매수량을 입력하면 선입선출법(FIFO)과 가중평균법 기준 매출원가와 기말재고를 자동 계산합니다.",
  openGraph: {
    title: "재고자산 계산기 | 선입선출법·가중평균법 매출원가 자동 계산 (IAS2) | 회계던",
    description: "매입내역과 판매수량을 입력하면 선입선출법(FIFO)과 가중평균법 기준 매출원가와 기말재고를 자동 계산합니다.",
    url: "/calculator/inventory-cost-ias2",
  },
  alternates: { canonical: "/calculator/inventory-cost-ias2" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
