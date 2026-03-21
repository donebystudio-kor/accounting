"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { accounts, type Account } from "@/data/accounts";
import { PROBLEMS } from "@/constants/problems";
import { ACCOUNT_TYPE_STYLE } from "@/constants/accounts";

const CATEGORIES = ["전체", "자산", "부채", "자본", "수익", "비용"] as const;

const STANDARD_FILTERS = [
  { label: "전체", key: null },
  { label: "K-IFRS", key: "kifrs" },
  { label: "일반기업", key: "general" },
  { label: "은행업", key: "bank" },
  { label: "공공기관", key: "public" },
] as const;

const STANDARD_LABELS: Record<string, string> = {
  kifrs: "K-IFRS",
  general: "일반기업",
  sme: "중소기업",
  bank: "은행업",
  insurance: "보험업",
  financial: "금융투자업",
  public: "공공기관",
  government: "정부",
  policyBank: "정책금융",
};

function getQuestionCount(tag: string | undefined): number {
  if (!tag) return 0;
  return PROBLEMS.filter((p) => p.tags?.includes(tag)).length;
}

export default function AccountsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("전체");
  const [selectedStandard, setSelectedStandard] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return accounts.filter((a) => {
      // category filter
      if (selectedCategory !== "전체" && a.category !== selectedCategory) return false;

      // standard filter
      if (selectedStandard) {
        const val = a.standardDiff[selectedStandard as keyof typeof a.standardDiff];
        if (!val || val === "해당없음") return false;
      }

      // search
      if (search.trim()) {
        const q = search.trim().toLowerCase();
        if (
          !a.name.toLowerCase().includes(q) &&
          !a.nameEn.toLowerCase().includes(q)
        )
          return false;
      }

      return true;
    });
  }, [selectedCategory, selectedStandard, search]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "계정과목 사전",
            description:
              "K-IFRS, 일반기업, 은행업, 보험업, 공공기관, 정부회계 기준별 계정과목 명칭과 정의를 한눈에 비교합니다.",
            url: "https://accounting-theta-pink.vercel.app/accounts",
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
          계정과목 사전
        </h1>
        <p className="text-sm text-text-sub mb-6">
          K-IFRS·일반기업·은행·보험·공공기관·정부 회계기준별 명칭 비교
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

        {/* 기준별 필터 */}
        <div className="flex flex-wrap gap-2 mb-4">
          {STANDARD_FILTERS.map((sf) => (
            <button
              key={sf.label}
              onClick={() =>
                setSelectedStandard(selectedStandard === sf.key ? null : sf.key)
              }
              className={`px-3 py-1 text-xs font-semibold rounded-full border transition-colors ${
                selectedStandard === sf.key
                  ? "bg-primary text-white border-primary"
                  : "bg-surface text-text-sub border-border hover:border-primary"
              }`}
            >
              {sf.label}
            </button>
          ))}
        </div>

        {/* 검색 */}
        <input
          type="text"
          placeholder="계정과목 검색 (한글/영문)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full mb-4 px-3 py-2 text-sm bg-surface border border-border rounded-lg focus:outline-none focus:border-primary"
        />

        <p className="text-xs text-text-sub mb-4">
          {filtered.length}개 계정과목
        </p>

        {/* 카드 그리드 */}
        <div
          className="grid gap-3"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          }}
        >
          {filtered.map((account) => (
            <AccountCard
              key={account.id}
              account={account}
              isExpanded={expandedId === account.id}
              onToggle={() =>
                setExpandedId(expandedId === account.id ? null : account.id)
              }
              selectedStandard={selectedStandard}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-text-sub text-sm py-12">
            검색 결과가 없습니다.
          </p>
        )}
      </div>
    </>
  );
}

function AccountCard({
  account,
  isExpanded,
  onToggle,
  selectedStandard,
}: {
  account: Account;
  isExpanded: boolean;
  onToggle: () => void;
  selectedStandard: string | null;
}) {
  const categoryStyle = ACCOUNT_TYPE_STYLE[account.category as keyof typeof ACCOUNT_TYPE_STYLE] ?? "";
  const questionCount = getQuestionCount(account.relatedQuestionTag);

  // 기준 필터 선택 시 해당 기준의 명칭으로 카드 표시
  const displayName = selectedStandard
    ? (account.standardDiff[selectedStandard as keyof typeof account.standardDiff] ?? account.name)
    : account.name;

  return (
    <div className="flex flex-col">
      <button
        onClick={onToggle}
        className={`text-left p-3 bg-surface border rounded-lg transition-colors ${
          isExpanded
            ? "border-primary ring-1 ring-primary"
            : "border-border hover:border-primary"
        }`}
      >
        <p className="font-bold text-sm text-text leading-tight">
          {displayName}
        </p>
        <p className="text-[12px] text-text-sub mt-0.5 leading-tight">
          {account.nameEn}
        </p>
        <div className="flex flex-wrap gap-1 mt-2">
          <span
            className={`inline-block px-2 py-0.5 text-[11px] font-semibold rounded border ${categoryStyle}`}
          >
            {account.category}
          </span>
          {account.liquidity && (
            <span
              className={`inline-block px-2 py-0.5 text-[11px] font-semibold rounded ${
                account.liquidity === "유동"
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {account.liquidity}
            </span>
          )}
        </div>
      </button>

      {/* 상세 패널 */}
      {isExpanded && (
        <div className="mt-1 p-4 bg-surface border border-primary/30 rounded-lg">
          {/* 정의 */}
          <p className="text-sm text-text mb-4">{account.definition}</p>

          {/* 기준별 명칭 비교 테이블 */}
          <h3 className="text-xs font-bold text-text mb-2">
            기준별 명칭 비교
          </h3>
          {(() => {
            const kifrsName = account.standardDiff.kifrs;
            const diffEntries = Object.entries(account.standardDiff).filter(
              ([key, value]) => key !== "kifrs" && value !== kifrsName
            );
            if (diffEntries.length === 0) {
              return (
                <p className="text-xs text-text-sub mb-4">
                  모든 기준에서 동일하게 사용합니다
                </p>
              );
            }
            return (
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-1.5 pr-3 text-text-sub font-semibold">
                        기준
                      </th>
                      <th className="text-left py-1.5 text-text-sub font-semibold">
                        계정과목명
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {diffEntries.map(([key, value]) => (
                      <tr key={key} className="border-b border-border/50">
                        <td className="py-1.5 pr-3 text-text-sub whitespace-nowrap">
                          {STANDARD_LABELS[key] ?? key}
                        </td>
                        <td
                          className={`py-1.5 ${
                            value === "해당없음"
                              ? "text-text-sub/50 italic"
                              : "text-text"
                          }`}
                        >
                          {value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          })()}

          {/* 관련 분개 */}
          {account.journalExample && (
            <div className="mb-4">
              <h3 className="text-xs font-bold text-text mb-1">관련 분개</h3>
              <p className="text-xs text-text bg-bg p-2 rounded font-mono">
                {account.journalExample}
              </p>
            </div>
          )}

          {/* CTA */}
          <div className="flex flex-wrap gap-2">
            {account.relatedQuestionTag && questionCount > 0 && (
              <Link
                href={`/quiz?tag=${account.relatedQuestionTag}`}
                className="px-3 py-1.5 text-xs font-semibold bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
              >
                관련 문제 풀기 ({questionCount}개)
              </Link>
            )}
            {account.relatedConceptTag && (
              <Link
                href={`/concept/${account.relatedConceptTag}`}
                className="px-3 py-1.5 text-xs font-semibold bg-surface border border-border text-text rounded-lg hover:border-primary transition-colors"
              >
                개념 보기
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
