export interface CalculatorDef {
  slug: string;
  title: string;
  standard: string;
  description: string;
  href: string;
  relatedConceptTag: string;
}

export const CALCULATORS: CalculatorDef[] = [
  {
    slug: "lease-liability-ifrs16",
    title: "IFRS16 리스부채 계산기",
    standard: "IFRS 16",
    description: "리스료, 할인율을 입력하면 리스부채 현재가치와 상환 스케줄을 자동 계산합니다.",
    href: "/calculator/lease-liability-ifrs16",
    relatedConceptTag: "IFRS16",
  },
  {
    slug: "depreciation-ias16",
    title: "감가상각 계산기",
    standard: "IAS 16",
    description: "취득원가, 내용연수를 입력하면 정액법·정률법 감가상각비와 연도별 스케줄을 자동 계산합니다.",
    href: "/calculator/depreciation-ias16",
    relatedConceptTag: "IAS16",
  },
  {
    slug: "ecl-ifrs9",
    title: "대손충당금 계산기",
    standard: "IFRS 9",
    description: "채권 연령별 잔액과 손실률을 입력하면 IFRS9 기준 대손충당금(ECL)을 자동 계산합니다.",
    href: "/calculator/ecl-ifrs9",
    relatedConceptTag: "IFRS9",
  },
];
