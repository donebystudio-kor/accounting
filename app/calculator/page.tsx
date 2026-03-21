import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "회계 계산기 모음 | IFRS IAS 자동 계산",
  description:
    "IFRS16 리스부채, IAS16 감가상각, IFRS9 대손충당금(ECL) 자동 계산기. 상환스케줄, 감가상각표, 충당금 산출을 한 번에.",
  openGraph: {
    title: "회계 계산기 모음 | IFRS IAS 자동 계산",
    description:
      "IFRS16 리스부채, IAS16 감가상각, IFRS9 대손충당금(ECL) 자동 계산기.",
    url: "/calculator",
  },
  alternates: { canonical: "/calculator" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "회계 계산기 모음",
  description: "IFRS/IAS 기준 회계 자동 계산기 모음",
  inLanguage: "ko",
};

const CALCULATORS = [
  {
    href: "/calculator/lease-liability-ifrs16",
    title: "리스부채 계산기",
    standard: "IFRS 16",
    description: "리스료의 현재가치와 상환스케줄을 자동으로 계산합니다.",
  },
  {
    href: "/calculator/depreciation-ias16",
    title: "감가상각 계산기",
    standard: "IAS 16",
    description: "정액법, 정률법 감가상각비와 연도별 장부가액을 계산합니다.",
  },
  {
    href: "/calculator/ecl-ifrs9",
    title: "대손충당금 계산기",
    standard: "IFRS 9",
    description: "Aging 분석 기반 기대신용손실(ECL)과 추가 설정액을 계산합니다.",
  },
];

export default function CalculatorListPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="text-center py-8 mb-8">
        <h1 className="text-3xl font-extrabold text-primary mb-1">
          회계 계산기
        </h1>
        <p className="text-text-sub text-sm">
          IFRS / IAS 기준 자동 계산 도구 모음
        </p>
      </section>

      <div className="grid gap-4 sm:grid-cols-2">
        {CALCULATORS.map((calc) => (
          <Link
            key={calc.href}
            href={calc.href}
            className="block p-5 bg-surface border border-border rounded-lg hover:border-primary transition-colors"
          >
            <span className="inline-block text-xs font-semibold text-primary bg-primary-bg px-2 py-0.5 rounded mb-2">
              {calc.standard}
            </span>
            <h2 className="font-bold text-text text-lg mb-1">{calc.title}</h2>
            <p className="text-sm text-text-sub">{calc.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
