"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import NumberInput from "@/components/NumberInput";
import { PROBLEMS } from "@/constants/problems";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "수익인식 계산기 | IFRS15 진행률·인식수익 자동 계산",
  description: "계약총액, 진행률을 입력하면 IFRS15 기준 누적인식수익, 당기인식수익, 계약자산/부채를 자동 계산합니다.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: "https://accounting-theta-pink.vercel.app" },
      { "@type": "ListItem", position: 2, name: "계산기", item: "https://accounting-theta-pink.vercel.app/calculator" },
      { "@type": "ListItem", position: 3, name: "수익인식 계산기" },
    ],
  },
};

type ProgressMethod = "cost" | "manual";

export default function RevenueRecognitionCalculator() {
  const [contractPrice, setContractPrice] = useState<number | null>(null);
  const [progressMethod, setProgressMethod] = useState<ProgressMethod>("cost");
  const [totalCostEstimate, setTotalCostEstimate] = useState<number | null>(null);
  const [actualCostToDate, setActualCostToDate] = useState<number | null>(null);
  const [progressPercent, setProgressPercent] = useState<number | null>(null);
  const [priorRevenue, setPriorRevenue] = useState<number | null>(0);
  const [billedAmount, setBilledAmount] = useState<number | null>(null);

  const problemCount = PROBLEMS.filter((p) => p.tags?.includes("IFRS15")).length;

  const errors = useMemo(() => {
    const e: string[] = [];
    if (contractPrice !== null && contractPrice <= 0) e.push("계약총액은 0보다 커야 합니다.");
    if (progressMethod === "cost") {
      if (totalCostEstimate !== null && totalCostEstimate <= 0) e.push("총예정원가는 0보다 커야 합니다.");
      if (actualCostToDate !== null && actualCostToDate < 0) e.push("누적원가는 0 이상이어야 합니다.");
      if (totalCostEstimate !== null && actualCostToDate !== null && actualCostToDate > totalCostEstimate)
        e.push("누적원가가 총예정원가를 초과할 수 없습니다.");
    }
    if (progressMethod === "manual") {
      if (progressPercent !== null && (progressPercent < 0 || progressPercent > 100))
        e.push("진행률은 0~100 사이여야 합니다.");
    }
    if (priorRevenue !== null && priorRevenue < 0) e.push("전기인식수익은 0 이상이어야 합니다.");
    return e;
  }, [contractPrice, progressMethod, totalCostEstimate, actualCostToDate, progressPercent, priorRevenue]);

  const canCalc = useMemo(() => {
    if (contractPrice === null || contractPrice <= 0) return false;
    if (priorRevenue === null || priorRevenue < 0) return false;
    if (progressMethod === "cost") {
      if (totalCostEstimate === null || totalCostEstimate <= 0) return false;
      if (actualCostToDate === null || actualCostToDate < 0) return false;
    }
    if (progressMethod === "manual") {
      if (progressPercent === null || progressPercent < 0 || progressPercent > 100) return false;
    }
    return errors.length === 0;
  }, [contractPrice, progressMethod, totalCostEstimate, actualCostToDate, progressPercent, priorRevenue, errors]);

  const result = useMemo(() => {
    if (!canCalc) return null;

    const cp = contractPrice!;
    const prior = priorRevenue ?? 0;

    let pct: number;
    if (progressMethod === "cost") {
      pct = (actualCostToDate! / totalCostEstimate!) * 100;
    } else {
      pct = progressPercent!;
    }

    const cumulativeRevenue = Math.round(cp * pct / 100);
    const currentRevenue = cumulativeRevenue - prior;

    let contractAsset: number | null = null;
    let contractLiability: number | null = null;
    if (billedAmount !== null && billedAmount >= 0) {
      const diff = cumulativeRevenue - billedAmount;
      if (diff > 0) contractAsset = diff;
      else if (diff < 0) contractLiability = Math.abs(diff);
    }

    return { pct: Math.round(pct * 100) / 100, cumulativeRevenue, currentRevenue, contractAsset, contractLiability };
  }, [canCalc, contractPrice, progressMethod, totalCostEstimate, actualCostToDate, progressPercent, priorRevenue, billedAmount]);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="flex items-center gap-2 mb-5">
        <Link href="/" className="text-xs text-text-sub hover:text-primary">&larr; 홈</Link>
        <span className="text-xs text-border">/</span>
        <Link href="/calculator" className="text-xs text-text-sub hover:text-primary">계산기</Link>
        <span className="text-xs text-border">/</span>
        <span className="text-xs font-semibold text-text">수익인식</span>
      </div>

      <h1 className="text-xl font-extrabold text-text mb-1">IFRS15 수익인식 계산기</h1>
      <p className="text-xs text-text-sub mb-5">진행률 기반 누적·당기 인식수익 자동 계산</p>

      <div className="bg-surface border border-border rounded-lg p-4 mb-5 space-y-3">
        <div>
          <label className="text-xs font-medium text-text block mb-1">계약총액</label>
          <NumberInput value={contractPrice} onChange={setContractPrice} placeholder="1,000,000,000" suffix="원" className="w-full" />
        </div>

        {/* 진행률 산정 방법 */}
        <div>
          <label className="text-xs font-medium text-text block mb-1">진행률 산정 방법</label>
          <div className="flex gap-2">
            {([["cost", "원가비율법"], ["manual", "직접 입력"]] as const).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setProgressMethod(key)}
                className={`flex-1 min-h-[40px] px-3 py-2 text-xs border rounded-md font-medium transition-colors ${progressMethod === key ? "border-primary bg-primary-bg/30 text-primary" : "border-border text-text-sub"}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {progressMethod === "cost" && (
          <>
            <div>
              <label className="text-xs font-medium text-text block mb-1">총예정원가</label>
              <NumberInput value={totalCostEstimate} onChange={setTotalCostEstimate} placeholder="800,000,000" suffix="원" className="w-full" />
            </div>
            <div>
              <label className="text-xs font-medium text-text block mb-1">누적발생원가</label>
              <NumberInput value={actualCostToDate} onChange={setActualCostToDate} placeholder="320,000,000" suffix="원" className="w-full" min={0} />
            </div>
          </>
        )}

        {progressMethod === "manual" && (
          <div>
            <label className="text-xs font-medium text-text block mb-1">진행률</label>
            <NumberInput value={progressPercent} onChange={setProgressPercent} placeholder="40" suffix="%" className="w-full" min={0} max={100} />
          </div>
        )}

        <div>
          <label className="text-xs font-medium text-text block mb-1">전기인식수익 (기본 0)</label>
          <NumberInput value={priorRevenue} onChange={(v) => setPriorRevenue(v ?? 0)} placeholder="0" suffix="원" className="w-full" min={0} />
        </div>

        <div>
          <label className="text-xs font-medium text-text block mb-1">청구액 (선택)</label>
          <NumberInput value={billedAmount} onChange={setBilledAmount} placeholder="300,000,000" suffix="원" className="w-full" min={0} />
        </div>

        {errors.length > 0 && (
          <div className="text-xs text-wrong">{errors.join(" ")}</div>
        )}
      </div>

      {!canCalc && errors.length === 0 && (
        <p className="text-center text-xs text-text-sub py-6">값을 입력하면 자동 계산됩니다</p>
      )}

      {result && (
        <>
          {/* 진행률 프로그레스 바 */}
          <div className="bg-surface border border-border rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center mb-2">
              <p className="text-xs font-bold text-text">진행률</p>
              <p className="text-sm font-extrabold text-primary">{result.pct}%</p>
            </div>
            <div className="w-full bg-border/30 rounded-full h-3">
              <div
                className="bg-primary h-3 rounded-full transition-all duration-300"
                style={{ width: `${Math.min(result.pct, 100)}%` }}
              />
            </div>
          </div>

          {/* 누적 / 당기 카드 */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-primary-bg/30 border border-primary/20 rounded-lg p-3 text-center">
              <p className="text-[11px] text-text-sub mb-1">누적인식수익</p>
              <p className="text-lg font-extrabold text-primary">{result.cumulativeRevenue.toLocaleString()}원</p>
            </div>
            <div className="bg-primary-bg/30 border border-primary/20 rounded-lg p-3 text-center">
              <p className="text-[11px] text-text-sub mb-1">당기인식수익</p>
              <p className="text-lg font-extrabold text-primary">{result.currentRevenue.toLocaleString()}원</p>
            </div>
          </div>

          {/* 계약자산 / 계약부채 */}
          {billedAmount !== null && (result.contractAsset !== null || result.contractLiability !== null) && (
            <div className={`border rounded-lg p-4 mb-4 text-center ${result.contractAsset ? "bg-primary-bg/20 border-primary/20" : "bg-wrong/10 border-wrong/30"}`}>
              {result.contractAsset !== null && (
                <>
                  <p className="text-xs text-text-sub mb-1">계약자산 (초과수익)</p>
                  <p className="text-lg font-extrabold text-primary">{result.contractAsset.toLocaleString()}원</p>
                </>
              )}
              {result.contractLiability !== null && (
                <>
                  <p className="text-xs text-text-sub mb-1">계약부채 (초과청구)</p>
                  <p className="text-lg font-extrabold text-wrong">{result.contractLiability.toLocaleString()}원</p>
                </>
              )}
            </div>
          )}

          {billedAmount !== null && result.contractAsset === null && result.contractLiability === null && (
            <div className="bg-correct/10 border border-correct/30 rounded-lg p-4 mb-4 text-center">
              <p className="text-xs text-text-sub mb-1">계약자산/부채</p>
              <p className="text-lg font-extrabold text-correct">없음 (청구 = 수익)</p>
            </div>
          )}

          {/* 분개 */}
          <div className="bg-surface border border-border rounded-lg p-3 mb-4">
            <p className="text-xs font-bold text-text mb-1">당기 분개</p>
            {result.currentRevenue > 0 ? (
              <>
                {result.contractAsset !== null ? (
                  <p className="text-xs text-debit">(차) 계약자산 {result.currentRevenue.toLocaleString()}</p>
                ) : billedAmount !== null ? (
                  <p className="text-xs text-debit">(차) 매출채권 {result.currentRevenue.toLocaleString()}</p>
                ) : (
                  <p className="text-xs text-debit">(차) 계약자산 {result.currentRevenue.toLocaleString()}</p>
                )}
                <p className="text-xs text-credit">(대) 수익 {result.currentRevenue.toLocaleString()}</p>
                {result.contractLiability !== null && (
                  <>
                    <p className="text-xs text-debit mt-1">(차) 현금 {billedAmount!.toLocaleString()}</p>
                    <p className="text-xs text-credit">(대) 계약부채 {result.contractLiability.toLocaleString()}</p>
                    <p className="text-xs text-credit">(대) 수익 {(billedAmount! - result.contractLiability).toLocaleString()}</p>
                  </>
                )}
              </>
            ) : (
              <p className="text-xs text-text-sub">당기 인식수익이 0이므로 분개 없음</p>
            )}
          </div>
        </>
      )}

      <p className="text-[11px] text-text-sub mb-4">진행률 = 누적발생원가 / 총예정원가 x 100 | 누적인식수익 = 계약총액 x 진행률</p>

      <div className="flex gap-2">
        <Link href="/concept/ifrs15" className="flex-1 min-h-[44px] py-2.5 text-center border border-primary text-primary rounded-lg text-sm font-bold">
          IFRS 15 개념 보기
        </Link>
        <Link href="/quiz?tag=IFRS15" className="flex-1 min-h-[44px] py-2.5 text-center bg-primary text-white rounded-lg text-sm font-bold">
          문제 풀기 ({problemCount})
        </Link>
      </div>
    </div>
  );
}
