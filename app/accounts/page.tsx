"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { accounts, type Account } from "@/data/accounts";
import { PROBLEMS } from "@/constants/problems";
import { ACCOUNT_TYPE_STYLE } from "@/constants/accounts";

const CATEGORIES = ["전체", "자산", "부채", "자본", "수익", "비용"] as const;


function getQuestionCount(tag: string | undefined): number {
  if (!tag) return 0;
  return PROBLEMS.filter((p) => p.tags?.includes(tag)).length;
}

export default function AccountsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("전체");
  const [search, setSearch] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return accounts.filter((a) => {
      // category filter
      if (selectedCategory !== "전체" && a.category !== selectedCategory) return false;

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
  }, [selectedCategory, search]);

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
              "실무에서 자주 쓰는 회계 계정과목 정의 및 분개 정리",
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
          실무에서 자주 쓰는 회계 계정과목 정의 및 분개 정리
        </p>

        {/* 카테고리 필터 */}
        <div className="flex flex-wrap gap-2 mb-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => { setSelectedCategory(cat); setExpandedId(null); }}
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
          placeholder="계정과목 검색 (한글/영문)"
          value={search}
          onChange={(e) => { setSearch(e.target.value); setExpandedId(null); }}
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
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-text-sub text-sm py-12">
            검색 결과가 없습니다.
          </p>
        )}

        {/* 상세 패널 (그리드 아래 고정) */}
        {expandedId && (() => {
          const account = filtered.find((a) => a.id === expandedId) ?? accounts.find((a) => a.id === expandedId);
          return account ? (
            <div className="w-full mt-4" ref={(el) => { if (el) el.scrollIntoView({ behavior: "smooth", block: "nearest" }); }}>
              <AccountDetail account={account} />
            </div>
          ) : null;
        })()}
      </div>
    </>
  );
}

function AccountCard({
  account,
  isExpanded,
  onToggle,
}: {
  account: Account;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const categoryStyle = ACCOUNT_TYPE_STYLE[account.category as keyof typeof ACCOUNT_TYPE_STYLE] ?? "";

  return (
    <button
      onClick={onToggle}
      className={`text-left p-3 bg-surface border rounded-lg transition-colors min-h-[72px] ${
        isExpanded
          ? "border-primary ring-1 ring-primary"
          : "border-border hover:border-primary"
      }`}
    >
      <p className="font-bold text-sm text-text leading-tight">
        {account.name}
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
  );
}

function AccountDetail({ account }: { account: Account }) {
  const questionCount = getQuestionCount(account.relatedQuestionTag);

  return (
    <div className="p-5 bg-surface border border-border rounded-lg">
      {/* 계정과목명 */}
      <p className="font-bold text-text mb-1">{account.name}</p>

      {/* 영문명 */}
      <p className="text-xs text-text-sub mb-2">{account.nameEn}</p>

      {/* 정의 */}
      <p className="text-sm text-text mb-4">{account.definition}</p>

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
  );
}
