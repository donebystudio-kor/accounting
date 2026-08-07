import { CALCULATORS } from "@/constants/calculators";
import { PROBLEMS } from "@/constants/problems";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "회계 계산기 모음 | 손익분기점·재무비율·사채발행가액·IFRS 자동 계산 | 회계던",
  description: "손익분기점(BEP), 재무비율, 사채 발행가액 같은 기초·범용 계산기부터 IFRS16 리스부채, IAS16 감가상각까지 무료 자동 계산.",
  openGraph: {
    title: "회계 계산기 모음 | 손익분기점·재무비율·사채발행가액·IFRS 자동 계산 | 회계던",
    description: "손익분기점(BEP), 재무비율, 사채 발행가액 같은 기초·범용 계산기부터 IFRS16 리스부채, IAS16 감가상각까지 무료 자동 계산.",
    url: "/calculator",
  },
  alternates: { canonical: "/calculator" },
};

const BASIC_CALCULATORS = [
  {
    slug: "break-even-point",
    title: "손익분기점(BEP) 계산기",
    description: "고정비, 판매가격, 변동비로 손익분기점 판매량·매출액 자동 계산",
    href: "/calculator/break-even-point",
  },
  {
    slug: "financial-ratios",
    title: "재무비율 계산기",
    description: "유동비율, 부채비율, ROE, ROA 등 9가지 재무비율 자동 계산",
    href: "/calculator/financial-ratios",
  },
  {
    slug: "bond-issue-price",
    title: "사채 발행가액 계산기",
    description: "액면·시장이자율로 발행가액과 유효이자율법 상각표 자동 계산",
    href: "/calculator/bond-issue-price",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "회계 계산기 모음",
  description: "회계 기초·범용 계산기와 IFRS/IAS 기준서별 회계 계산기",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [...BASIC_CALCULATORS, ...CALCULATORS].map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.title,
      url: `https://accounting-theta-pink.vercel.app${c.href}`,
    })),
  },
};

export default function CalculatorListPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="flex items-center gap-2 mb-6">
        <Link href="/" className="text-xs text-text-sub hover:text-primary">← 홈</Link>
      </div>
      <h1 className="text-2xl font-extrabold text-text mb-1">회계 계산기</h1>
      <p className="text-sm text-text-sub mb-6">회계 기초·범용 계산기부터 IFRS/IAS 기준서별 자동 계산까지</p>

      {/* 기초·범용 */}
      <section className="mb-8">
        <h2 className="font-bold text-base text-text mb-1">기초·범용</h2>
        <p className="text-xs text-text-sub mb-3">특정 기준서와 무관하게 누구나 쓰는 계산기</p>
        <div className="grid gap-3">
          {BASIC_CALCULATORS.map((c) => (
            <Link key={c.slug} href={c.href} className="flex items-center justify-between p-4 bg-surface border border-border rounded-lg hover:border-primary transition-colors">
              <div>
                <h3 className="font-semibold text-sm text-text">{c.title}</h3>
                <p className="text-xs text-text-sub mt-0.5">{c.description}</p>
              </div>
              <span className="text-xs text-text-sub ml-4">→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 기준서별 */}
      <section>
        <h2 className="font-bold text-base text-text mb-1">기준서별</h2>
        <p className="text-xs text-text-sub mb-3">IFRS/IAS 기준서별 자동 계산</p>
        <div className="grid gap-3">
          {[...CALCULATORS].sort((a, b) => {
            const aIsIFRS = a.standard.startsWith("IFRS");
            const bIsIFRS = b.standard.startsWith("IFRS");
            if (aIsIFRS && !bIsIFRS) return -1;
            if (!aIsIFRS && bIsIFRS) return 1;
            const aNum = parseInt(a.standard.replace(/\D/g, ""));
            const bNum = parseInt(b.standard.replace(/\D/g, ""));
            return aNum - bNum;
          }).map((c) => {
            const count = PROBLEMS.filter((p) => p.tags?.includes(c.relatedConceptTag)).length;
            return (
              <Link key={c.slug} href={c.href} className="flex items-center justify-between p-4 bg-surface border border-border rounded-lg hover:border-primary transition-colors">
                <div>
                  <p className="text-xs text-primary font-bold">{c.standard}</p>
                  <h3 className="font-semibold text-sm text-text">{c.title}</h3>
                  <p className="text-xs text-text-sub mt-0.5">{c.description}</p>
                </div>
                <span className="text-xs text-text-sub ml-4">{count}문제</span>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
