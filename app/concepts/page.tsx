import { CONCEPTS } from "@/constants/concepts";
import { PROBLEMS } from "@/constants/problems";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "회계 개념 모음 | 차변·대변부터 IFRS·IAS 기준서까지 | 회계던",
  description: "차변·대변, 분개, 재무제표, 계정과목 같은 회계 기초부터 IFRS 16 리스, IAS 16 유형자산 등 기준서별 개념까지 정리했습니다.",
  openGraph: {
    title: "회계 개념 모음 | 차변·대변부터 IFRS·IAS 기준서까지 | 회계던",
    description: "차변·대변, 분개, 재무제표, 계정과목 같은 회계 기초부터 IFRS 16 리스, IAS 16 유형자산 등 기준서별 개념까지 정리했습니다.",
    url: "/concepts",
  },
  alternates: { canonical: "/concepts" },
};

const BASIC_CONCEPTS = [
  { slug: "debit-credit", title: "차변과 대변", summary: "헷갈리지 않는 법" },
  { slug: "journal-entry", title: "분개 기초", summary: "거래를 회계로 옮기는 원리" },
  { slug: "financial-statements", title: "재무제표 5가지", summary: "읽는 법" },
  { slug: "account-titles", title: "계정과목 분류", summary: "완전 이해" },
  { slug: "depreciation", title: "감가상각", summary: "정액법·정률법·생산량비례법 차이" },
  { slug: "study-roadmap", title: "회계 공부 순서", summary: "무엇부터 시작할까" },
  { slug: "kifrs-vs-kgaap", title: "K-IFRS vs 일반기업회계기준", summary: "두 기준의 차이" },
  { slug: "accounting-certificates", title: "회계 자격증 비교", summary: "선택 가이드" },
];

export default function ConceptsPage() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <Link href="/" className="text-xs text-text-sub hover:text-primary">← 홈</Link>
      </div>
      <h1 className="text-2xl font-extrabold text-text mb-1">회계 개념</h1>
      <p className="text-sm text-text-sub mb-6">회계 기초 개념부터 주요 IFRS/IAS 기준서까지</p>

      {/* 회계 기초 */}
      <section className="mb-8">
        <h2 className="font-bold text-base text-text mb-1">회계 기초</h2>
        <p className="text-xs text-text-sub mb-3">회계를 처음 접한다면 여기서 시작하세요</p>
        <div className="grid gap-2">
          {BASIC_CONCEPTS.map((c) => (
            <Link
              key={c.slug}
              href={`/concept/${c.slug}`}
              className="flex items-center justify-between p-4 bg-surface border border-border rounded-lg hover:border-primary transition-colors"
            >
              <div>
                <h3 className="font-semibold text-sm text-text">{c.title}</h3>
                <p className="text-xs text-text-sub">{c.summary}</p>
              </div>
              <span className="text-xs text-text-sub">→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 기준서별 개념 */}
      <section>
        <h2 className="font-bold text-base text-text mb-1">기준서별 개념</h2>
        <p className="text-xs text-text-sub mb-3">주요 IFRS/IAS 기준서별 개념 설명과 핵심 분개 패턴</p>
        <div className="grid gap-2">
          {[...CONCEPTS].sort((a, b) => {
            const aIsIFRS = a.tag.startsWith("IFRS");
            const bIsIFRS = b.tag.startsWith("IFRS");
            if (aIsIFRS && !bIsIFRS) return -1;
            if (!aIsIFRS && bIsIFRS) return 1;
            const aNum = parseInt(a.tag.replace(/\D/g, ""));
            const bNum = parseInt(b.tag.replace(/\D/g, ""));
            return aNum - bNum;
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
                  <h3 className="font-semibold text-sm text-text">{c.name}</h3>
                </div>
                <span className="text-xs text-text-sub">{count}문제</span>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
