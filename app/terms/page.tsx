"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { terms, type Term } from "@/data/terms";
import { PROBLEMS } from "@/constants/problems";

const CATEGORIES = [
  "전체",
  "분개·기록",
  "평가·측정",
  "재무제표",
  "자본·이익",
  "기타",
] as const;

const CATEGORY_STYLE: Record<string, string> = {
  "분개·기록": "bg-indigo-50 text-indigo-700",
  "평가·측정": "bg-teal-50 text-teal-700",
  "재무제표": "bg-slate-100 text-slate-700",
  "자본·이익": "bg-violet-50 text-violet-700",
  "기타": "bg-stone-100 text-stone-600",
};

function getQuestionCount(tag: string | undefined): number {
  if (!tag) return 0;
  return PROBLEMS.filter((p) => p.tags?.includes(tag)).length;
}

export default function TermsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("전체");
  const [search, setSearch] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return terms.filter((t) => {
      if (selectedCategory !== "전체" && t.category !== selectedCategory)
        return false;

      if (search.trim()) {
        const q = search.trim().toLowerCase();
        const matchName = t.name.toLowerCase().includes(q);
        const matchEn = t.nameEn?.toLowerCase().includes(q) ?? false;
        if (!matchName && !matchEn) return false;
      }

      return true;
    });
  }, [selectedCategory, search]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "회계 용어 사전",
            description:
              "계상, 환입, 상각, 발생주의 등 회계에서 자주 쓰이는 용어를 쉽게 정리했습니다.",
            url: "https://accounting-theta-pink.vercel.app/terms",
          }),
        }}
      />

      <div>
        <div className="flex items-center gap-2 mb-6">
          <Link href="/" className="text-xs text-text-sub hover:text-primary">
            &larr; 홈
          </Link>
        </div>

        <h1 className="text-2xl font-extrabold text-text mb-1">
          회계 용어 사전
        </h1>
        <p className="text-sm text-text-sub mb-6">
          회계에서 자주 쓰이는 용어 정의 모음
        </p>

        {/* 카테고리 필터 */}
        <div className="flex flex-wrap gap-2 mb-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 text-xs font-semibold rounded-full border transition-colors ${
                selectedCategory === cat
                  ? "bg-primary text-white border-primary"
                  : "bg-surface text-text-sub border-border hover:border-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 검색 */}
        <input
          type="text"
          placeholder="용어 검색 (한글/영문)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full mb-4 px-3 py-2 text-sm bg-surface border border-border rounded-lg focus:outline-none focus:border-primary"
        />

        <p className="text-xs text-text-sub mb-4">
          {filtered.length}개 용어
        </p>

        {/* 좌우 분할 레이아웃 (데스크탑) / 단일 컬럼 (모바일) */}
        <div className="md:flex md:gap-6">
          {/* 왼쪽: 카드 그리드 */}
          <div className="md:w-[60%]">
            <div
              className="grid gap-3"
              style={{
                gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
              }}
            >
              {filtered.map((term) => (
                <TermCard
                  key={term.id}
                  term={term}
                  isExpanded={expandedId === term.id}
                  onToggle={() =>
                    setExpandedId(expandedId === term.id ? null : term.id)
                  }
                />
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="text-center text-text-sub text-sm py-12">
                검색 결과가 없습니다.
              </p>
            )}
          </div>

          {/* 오른쪽: 상세 패널 (데스크탑) */}
          <div className="hidden md:block md:w-[40%]">
            <div className="sticky top-20">
              {expandedId ? (
                <TermDetail term={filtered.find((t) => t.id === expandedId) ?? terms.find((t) => t.id === expandedId)!} />
              ) : (
                <div className="p-8 bg-surface border border-border rounded-lg text-center text-sm text-text-sub">
                  용어를 선택하면 설명이 표시됩니다
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 하단 패널 (모바일) */}
        {expandedId && (
          <div className="md:hidden">
            {/* 배경 오버레이 */}
            <div
              className="fixed inset-0 bg-black/40 z-40"
              onClick={() => setExpandedId(null)}
            />
            {/* 패널 */}
            <div className="fixed bottom-0 left-0 w-full z-50 bg-surface rounded-t-2xl shadow-lg max-h-[70vh] overflow-y-auto">
              <div className="sticky top-0 bg-surface flex justify-end p-3 border-b border-border">
                <button
                  onClick={() => setExpandedId(null)}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-text-sub text-lg font-bold"
                >
                  X
                </button>
              </div>
              <div className="p-4">
                <TermDetail term={filtered.find((t) => t.id === expandedId) ?? terms.find((t) => t.id === expandedId)!} />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

function TermCard({
  term,
  isExpanded,
  onToggle,
}: {
  term: Term;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const style = CATEGORY_STYLE[term.category] ?? "";

  return (
    <button
      onClick={onToggle}
      className={`text-left px-3 py-2 rounded-lg border transition-colors min-h-[56px] flex items-center ${style} ${
        isExpanded
          ? "border-primary ring-1 ring-primary"
          : "border-transparent hover:border-primary"
      }`}
    >
      <p className="font-bold text-sm leading-tight">{term.name}</p>
    </button>
  );
}

function TermDetail({ term }: { term: Term }) {
  const style = CATEGORY_STYLE[term.category] ?? "";
  const questionCount = getQuestionCount(term.relatedQuestionTag);

  return (
    <div className="p-4 bg-surface border border-primary/30 rounded-lg">
      {/* 용어명 + 영문명 */}
      <div className="mb-2">
        <span className="font-bold text-text">{term.name}</span>
        {term.nameEn && (
          <span className="ml-2 text-xs text-text-sub">
            {term.nameEn}
          </span>
        )}
      </div>

      {/* 카테고리 태그 */}
      <span
        className={`inline-block px-2 py-0.5 text-[11px] font-semibold rounded mb-3 ${style}`}
      >
        {term.category}
      </span>

      {/* 정의 */}
      <p className="text-sm text-text mb-4">{term.definition}</p>

      {/* 예문 */}
      {term.example && (
        <div className="bg-surface border border-border rounded p-3 mb-4">
          <p className="font-mono text-sm text-text">{term.example}</p>
        </div>
      )}

      {/* 관련 문제 CTA */}
      {term.relatedQuestionTag && questionCount > 0 && (
        <Link
          href={`/quiz?tag=${term.relatedQuestionTag}`}
          className="inline-block px-3 py-1.5 text-xs font-semibold bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
        >
          관련 문제 풀기 ({questionCount}개)
        </Link>
      )}
    </div>
  );
}
