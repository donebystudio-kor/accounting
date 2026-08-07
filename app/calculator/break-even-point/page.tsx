"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import NumberInput from "@/components/NumberInput";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "손익분기점(BEP) 계산기",
  description: "고정비, 판매가격, 변동비를 입력하면 손익분기점 판매량·매출액과 목표이익 판매량을 자동 계산합니다.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: "https://accounting-theta-pink.vercel.app" },
      { "@type": "ListItem", position: 2, name: "계산기", item: "https://accounting-theta-pink.vercel.app/calculator" },
      { "@type": "ListItem", position: 3, name: "손익분기점 계산기" },
    ],
  },
};

interface Row { units: number; sales: number; variableCost: number; contribution: number; profit: number; isBep: boolean; }

export default function BreakEvenPointCalculator() {
  const [fixedCost, setFixedCost] = useState<number | null>(null);
  const [unitPrice, setUnitPrice] = useState<number | null>(null);
  const [unitVariableCost, setUnitVariableCost] = useState<number | null>(null);
  const [targetProfit, setTargetProfit] = useState<number | null>(null);
  const [expectedUnits, setExpectedUnits] = useState<number | null>(null);

  const errors = useMemo(() => {
    const e: string[] = [];
    if (fixedCost !== null && fixedCost < 0) e.push("고정비는 0 이상이어야 합니다.");
    if (unitPrice !== null && unitPrice <= 0) e.push("판매가격은 0보다 커야 합니다.");
    if (unitVariableCost !== null && unitVariableCost < 0) e.push("변동비는 0 이상이어야 합니다.");
    if (unitPrice !== null && unitVariableCost !== null && unitVariableCost >= unitPrice) {
      e.push("변동비가 판매가격보다 크거나 같으면 손익분기점을 계산할 수 없습니다 (팔수록 손해).");
    }
    return e;
  }, [fixedCost, unitPrice, unitVariableCost]);

  const canCalc =
    fixedCost !== null && fixedCost >= 0 &&
    unitPrice !== null && unitPrice > 0 &&
    unitVariableCost !== null && unitVariableCost >= 0 &&
    unitVariableCost < unitPrice &&
    errors.length === 0;

  const result = useMemo(() => {
    if (!canCalc) return null;
    const cm = unitPrice! - unitVariableCost!; // 단위당 공헌이익
    const cmRatio = cm / unitPrice!; // 공헌이익률
    const bepUnits = fixedCost! / cm;
    const bepSales = fixedCost! / cmRatio;

    const targetUnits = targetProfit !== null && targetProfit >= 0 ? (fixedCost! + targetProfit) / cm : null;
    const targetSales = targetUnits !== null ? targetUnits * unitPrice! : null;

    const marginOfSafety =
      expectedUnits !== null && expectedUnits > 0
        ? {
            units: expectedUnits - bepUnits,
            ratio: (expectedUnits - bepUnits) / expectedUnits,
          }
        : null;

    // 구간별 손익 전개표: BEP 기준 위아래로 표시
    const step = Math.max(1, Math.round(bepUnits / 10));
    const rows: Row[] = [];
    for (let i = -2; i <= 2; i++) {
      const units = Math.max(0, Math.round(bepUnits) + i * step);
      const sales = units * unitPrice!;
      const variableCost = units * unitVariableCost!;
      const contribution = sales - variableCost;
      const profit = contribution - fixedCost!;
      rows.push({ units, sales, variableCost, contribution, profit, isBep: i === 0 });
    }
    // 중복 제거 (step이 작아 겹치는 경우)
    const uniqueRows = rows.filter((r, i) => i === 0 || r.units !== rows[i - 1].units);

    return {
      cm: Math.round(cm),
      cmRatio,
      bepUnits: Math.ceil(bepUnits),
      bepSales: Math.round(bepSales),
      targetUnits: targetUnits !== null ? Math.ceil(targetUnits) : null,
      targetSales: targetSales !== null ? Math.round(targetSales) : null,
      marginOfSafety,
      rows: uniqueRows,
    };
  }, [canCalc, fixedCost, unitPrice, unitVariableCost, targetProfit, expectedUnits]);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="flex items-center gap-2 mb-5">
        <Link href="/" className="text-xs text-text-sub hover:text-primary">← 홈</Link>
        <span className="text-xs text-border">/</span>
        <Link href="/calculator" className="text-xs text-text-sub hover:text-primary">계산기</Link>
        <span className="text-xs text-border">/</span>
        <span className="text-xs font-semibold text-text">손익분기점</span>
      </div>

      <h1 className="text-xl font-extrabold text-text mb-1">손익분기점(BEP) 계산기</h1>
      <p className="text-xs text-text-sub mb-5">고정비·판매가격·변동비로 손익분기점 판매량과 매출액 자동 계산</p>

      <div className="bg-surface border border-border rounded-lg p-4 mb-5 space-y-3">
        <div>
          <label className="text-xs font-medium text-text block mb-1">고정비 (월/연)</label>
          <NumberInput value={fixedCost} onChange={setFixedCost} placeholder="10,000,000" suffix="원" className="w-full" min={0} />
        </div>
        <div>
          <label className="text-xs font-medium text-text block mb-1">단위당 판매가격</label>
          <NumberInput value={unitPrice} onChange={setUnitPrice} placeholder="10,000" suffix="원" className="w-full" />
        </div>
        <div>
          <label className="text-xs font-medium text-text block mb-1">단위당 변동비</label>
          <NumberInput value={unitVariableCost} onChange={setUnitVariableCost} placeholder="6,000" suffix="원" className="w-full" min={0} />
        </div>
        <div>
          <label className="text-xs font-medium text-text block mb-1">목표이익 (선택)</label>
          <NumberInput value={targetProfit} onChange={setTargetProfit} placeholder="5,000,000" suffix="원" className="w-full" min={0} />
        </div>
        <div>
          <label className="text-xs font-medium text-text block mb-1">예상(현재) 판매량 (선택, 안전한계율 계산용)</label>
          <NumberInput value={expectedUnits} onChange={setExpectedUnits} placeholder="3,000" suffix="개" integer className="w-full" min={0} />
        </div>
        {errors.length > 0 && (
          <div className="text-xs text-wrong">{errors.join(" ")}</div>
        )}
      </div>

      {result && (
        <>
          <div className="bg-primary-bg/30 border border-primary/20 rounded-lg p-4 mb-4 text-center">
            <p className="text-xs text-text-sub mb-1">손익분기점 판매량</p>
            <p className="text-2xl font-extrabold text-primary">{result.bepUnits.toLocaleString()}개</p>
            <p className="text-xs text-text-sub mt-2">손익분기점 매출액</p>
            <p className="text-lg font-extrabold text-primary">{result.bepSales.toLocaleString()}원</p>
          </div>

          <div className="bg-surface border border-border rounded-lg p-3 mb-4">
            <p className="text-xs font-bold text-text mb-2">계산 결과 해석</p>
            <div className="space-y-1 text-xs text-text-sub">
              <p>단위당 공헌이익 = 판매가격 − 변동비 = <span className="text-text">{result.cm.toLocaleString()}원</span></p>
              <p>공헌이익률 = 단위당 공헌이익 ÷ 판매가격 = <span className="text-text">{(result.cmRatio * 100).toFixed(1)}%</span></p>
              <p>즉, 매출 1원당 {(result.cmRatio * 100).toFixed(1)}원이 고정비 회수와 이익에 기여합니다. {result.bepUnits.toLocaleString()}개(={result.bepSales.toLocaleString()}원)를 팔아야 이익도 손실도 없는 지점에 도달합니다.</p>
              {result.targetUnits !== null && (
                <p className="pt-1 border-t border-border/50 mt-1">
                  목표이익 달성 판매량 = (고정비 + 목표이익) ÷ 단위당 공헌이익 = <span className="text-text font-bold">{result.targetUnits.toLocaleString()}개</span> (매출액 약 {result.targetSales!.toLocaleString()}원)
                </p>
              )}
              {result.marginOfSafety !== null && (
                <p className="pt-1 border-t border-border/50 mt-1">
                  안전한계 판매량 = 예상판매량 − BEP판매량 = <span className="text-text">{Math.round(result.marginOfSafety.units).toLocaleString()}개</span>, 안전한계율 = <span className="text-text font-bold">{(result.marginOfSafety.ratio * 100).toFixed(1)}%</span>
                  {result.marginOfSafety.ratio < 0 && <span className="text-wrong"> (예상판매량이 BEP에 못 미쳐 손실 구간입니다)</span>}
                  {" "}— 매출이 이 비율만큼 줄어도 손실이 나지 않는다는 뜻입니다.
                </p>
              )}
            </div>
          </div>

          <div className="overflow-x-auto mb-5">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-border text-text-sub">
                  <th className="py-2 text-center">판매량</th>
                  <th className="py-2 text-right">매출액</th>
                  <th className="py-2 text-right">변동비</th>
                  <th className="py-2 text-right">공헌이익</th>
                  <th className="py-2 text-right">영업손익</th>
                </tr>
              </thead>
              <tbody>
                {result.rows.map((r) => (
                  <tr key={r.units} className={`border-b border-border/50 ${r.isBep ? "bg-primary-bg/20 font-bold" : ""}`}>
                    <td className="py-2 text-center">{r.units.toLocaleString()}개{r.isBep && " (BEP)"}</td>
                    <td className="py-2 text-right">{r.sales.toLocaleString()}</td>
                    <td className="py-2 text-right">{r.variableCost.toLocaleString()}</td>
                    <td className="py-2 text-right">{r.contribution.toLocaleString()}</td>
                    <td className={`py-2 text-right ${r.profit < 0 ? "text-wrong" : r.profit > 0 ? "text-correct" : ""}`}>{r.profit.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      <p className="text-[11px] text-text-sub mb-4">본 계산기는 단위당 판매가격·변동비가 판매량과 무관하게 일정하다고 가정하는 단순 원가·조업도·이익(CVP) 분석 모형을 사용합니다.</p>

      <div className="flex gap-2">
        <Link href="/concepts" className="flex-1 min-h-[44px] py-2.5 text-center border border-primary text-primary rounded-lg text-sm font-bold">
          관련 개념 보기
        </Link>
        <Link href="/quiz/common/calculation" className="flex-1 min-h-[44px] py-2.5 text-center bg-primary text-white rounded-lg text-sm font-bold">
          계산 문제 풀기
        </Link>
      </div>
    </div>
  );
}
