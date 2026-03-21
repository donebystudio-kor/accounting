import { CALCULATORS } from "@/constants/calculators";
import { PROBLEMS } from "@/constants/problems";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "회계 계산기 모음 | IFRS IAS 자동 계산 | 회계던",
  description: "IFRS16 리스부채, IAS16 감가상각, IFRS9 대손충당금 등 회계 계산기. 무료 자동 계산.",
  alternates: { canonical: "/calculator" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "회계 계산기 모음",
  description: "IFRS/IAS 기준서별 회계 계산기",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: CALCULATORS.map((c, i) => ({
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
      <p className="text-sm text-text-sub mb-6">IFRS/IAS 기준서별 자동 계산</p>
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
                <h2 className="font-semibold text-sm text-text">{c.title}</h2>
                <p className="text-xs text-text-sub mt-0.5">{c.description}</p>
              </div>
              <span className="text-xs text-text-sub ml-4">{count}문제</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
