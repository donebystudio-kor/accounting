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
  {
    slug: "inventory-cost-ias2",
    title: "재고자산 평가 계산기",
    standard: "IAS 2",
    description: "선입선출법·가중평균법으로 기말재고와 매출원가 자동 계산",
    href: "/calculator/inventory-cost-ias2",
    relatedConceptTag: "IAS2",
  },
  {
    slug: "income-tax-ias12",
    title: "법인세 계산기",
    standard: "IAS 12",
    description: "당기법인세·이연법인세 자산·부채 자동 계산",
    href: "/calculator/income-tax-ias12",
    relatedConceptTag: "IAS12",
  },
  {
    slug: "provision-present-value-ias37",
    title: "충당부채 현재가치 계산기",
    standard: "IAS 37",
    description: "복구충당부채 등 미래 지출의 현재가치와 이자전입액 자동 계산",
    href: "/calculator/provision-present-value-ias37",
    relatedConceptTag: "IAS37",
  },
  {
    slug: "impairment-test-ias36",
    title: "손상차손 계산기",
    standard: "IAS 36",
    description: "장부금액·회수가능액 비교로 손상차손 인식 여부 자동 판정",
    href: "/calculator/impairment-test-ias36",
    relatedConceptTag: "IAS36",
  },
  {
    slug: "revenue-recognition-ifrs15",
    title: "수익인식 계산기",
    standard: "IFRS 15",
    description: "진행률 기준 당기 인식 수익과 계약자산·부채 자동 계산",
    href: "/calculator/revenue-recognition-ifrs15",
    relatedConceptTag: "IFRS15",
  },
  {
    slug: "pension-present-value-ias19",
    title: "퇴직급여 계산기",
    standard: "IAS 19",
    description: "확정급여채무 현재가치와 연도별 이자비용·근무원가 자동 계산",
    href: "/calculator/pension-present-value-ias19",
    relatedConceptTag: "IAS19",
  },
];
