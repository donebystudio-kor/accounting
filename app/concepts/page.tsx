import { CONCEPTS } from "@/constants/concepts";
import { PROBLEMS } from "@/constants/problems";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "회계 개념 모음 | IFRS IAS 기준서별 학습 | 회계던",
  description: "IFRS 16 리스, IAS 16 유형자산, IFRS 9 금융상품 등 주요 회계기준서 개념 설명과 핵심 분개 패턴.",
  alternates: { canonical: "/concepts" },
};

export default function ConceptsPage() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <Link href="/" className="text-xs text-text-sub hover:text-primary">← 홈</Link>
      </div>
      <h1 className="text-2xl font-extrabold text-text mb-1">회계 개념</h1>
      <p className="text-sm text-text-sub mb-6">주요 IFRS/IAS 기준서별 개념 설명과 핵심 분개 패턴</p>

      <div className="grid gap-2">
        {[...CONCEPTS].sort((a, b) => {
          const aIsIFRS = a.tag.startsWith("IFRS");
          const bIsIFRS = b.tag.startsWith("IFRS");
          if (aIsIFRS && !bIsIFRS) return -1;
          if (!aIsIFRS && bIsIFRS) return 1;
          const aNum = parseInt(a.tag.replace(/\D/g, ""));
          const bNum = parseInt(b.tag.replace(/\D/g, ""));
          return bNum - aNum;
        }).map((c) => {
          const count = PROBLEMS.filter((p) => p.tags?.includes(c.tag)).length;
          return (
            <Link
              key={c.tag}
              href={`/concept/${c.tag.toLowerCase()}`}
              className="flex items-center justify-between p-4 bg-surface border border-border rounded-lg hover:border-primary transition-colors"
            >
              <div>
                <p className="text-xs text-primary font-bold">{c.code}</p>
                <h2 className="font-semibold text-sm text-text">{c.name}</h2>
              </div>
              <span className="text-xs text-text-sub">{count}문제</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
