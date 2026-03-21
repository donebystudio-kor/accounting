import { CONCEPTS } from "@/constants/concepts";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "회계 다이어그램 모음 | IFRS IAS 흐름도 | 회계던",
  description: "IFRS 16 리스, IAS 16 유형자산, IFRS 9 금융상품 등 주요 회계기준서 SVG 흐름도.",
  alternates: { canonical: "/diagrams" },
};

export default function DiagramsPage() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <Link href="/" className="text-xs text-text-sub hover:text-primary">← 홈</Link>
      </div>
      <h1 className="text-2xl font-extrabold text-text mb-1">회계 다이어그램</h1>
      <p className="text-sm text-text-sub mb-6">주요 IFRS/IAS 기준서별 흐름도 · 개념 페이지에서 확인</p>

      <div className="grid gap-2">
        {CONCEPTS.map((c) => (
          <Link
            key={c.tag}
            href={`/concept/${c.tag.toLowerCase()}`}
            className="flex items-center justify-between p-4 bg-surface border border-border rounded-lg hover:border-primary transition-colors"
          >
            <div>
              <p className="text-xs text-primary font-bold">{c.code}</p>
              <h2 className="font-semibold text-sm text-text">{c.name} 흐름도</h2>
            </div>
            <span className="text-xs text-text-sub">보기 →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
