"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import NumberInput from "@/components/NumberInput";
import { PROBLEMS } from "@/constants/problems";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "법인세 계산기 | 당기법인세·이연법인세 자동 계산 (IAS12)",
  description: "세전회계이익과 세무조정 항목을 입력하면 당기법인세, 이연법인세자산/부채, 법인세비용을 자동 계산합니다.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: "https://accounting-theta-pink.vercel.app" },
      { "@type": "ListItem", position: 2, name: "계산기", item: "https://accounting-theta-pink.vercel.app/calculator" },
      { "@type": "ListItem", position: 3, name: "법인세 계산기" },
    ],
  },
};

interface Adjustment {
  name: string;
  amount: number | null;
  type: "permanent" | "temporary";
}

export default function IncomeTaxCalculator() {
  const [accountingProfit, setAccountingProfit] = useState<number | null>(null);
  const [taxRate, setTaxRate] = useState<number | null>(null);
  const [adjustments, setAdjustments] = useState<Adjustment[]>([
    { name: "", amount: null, type: "temporary" },
  ]);

  const problemCount = PROBLEMS.filter((p) => p.tags?.includes("IAS12")).length;

  const updateAdj = (idx: number, field: keyof Adjustment, val: string | number | null) => {
    const next = [...adjustments];
    next[idx] = { ...next[idx], [field]: val } as Adjustment;
    setAdjustments(next);
  };

  const addRow = () => {
    if (adjustments.length >= 10) return;
    setAdjustments([...adjustments, { name: "", amount: null, type: "temporary" }]);
  };

  const removeRow = (idx: number) => {
    if (adjustments.length <= 1) return;
    setAdjustments(adjustments.filter((_, i) => i !== idx));
  };

  const errors = useMemo(() => {
    const e: string[] = [];
    if (taxRate !== null && (taxRate <= 0 || taxRate > 100))
      e.push("세율은 0 초과 100 이하여야 합니다.");
    adjustments.forEach((a, i) => {
      if (a.amount !== null && a.name.trim() === "")
        e.push(`조정 ${i + 1}행: 항목명을 입력하세요.`);
    });
    return e;
  }, [taxRate, adjustments]);

  const allFilled = accountingProfit !== null && taxRate !== null && taxRate > 0 && taxRate <= 100 &&
    adjustments.every((a) => a.name.trim() !== "" && a.amount !== null);
  const canCalc = allFilled && errors.length === 0;

  const result = useMemo(() => {
    if (!canCalc) return null;

    const rate = taxRate! / 100;
    const profit = accountingProfit!;

    // 전체 조정 합계 (양수=가산, 음수=차감)
    const totalAdj = adjustments.reduce((s, a) => s + (a.amount ?? 0), 0);
    const taxableIncome = profit + totalAdj;

    // 당기법인세
    const currentTax = Math.round(taxableIncome * rate);

    // 일시적차이 합계
    const tempDiff = adjustments
      .filter((a) => a.type === "temporary")
      .reduce((s, a) => s + (a.amount ?? 0), 0);

    // 이연법인세
    let deferredTaxLiability = 0;
    let deferredTaxAsset = 0;
    if (tempDiff > 0) {
      deferredTaxLiability = Math.round(tempDiff * rate);
    } else if (tempDiff < 0) {
      deferredTaxAsset = Math.round(Math.abs(tempDiff) * rate);
    }

    // 법인세비용
    const taxExpense = currentTax + deferredTaxLiability - deferredTaxAsset;

    return {
      taxableIncome,
      currentTax,
      tempDiff,
      deferredTaxLiability,
      deferredTaxAsset,
      taxExpense,
    };
  }, [canCalc, accountingProfit, taxRate, adjustments]);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="flex items-center gap-2 mb-5">
        <Link href="/" className="text-xs text-text-sub hover:text-primary">&larr; 홈</Link>
        <span className="text-xs text-border">/</span>
        <Link href="/calculator" className="text-xs text-text-sub hover:text-primary">계산기</Link>
        <span className="text-xs text-border">/</span>
        <span className="text-xs font-semibold text-text">법인세</span>
      </div>

      <h1 className="text-xl font-extrabold text-text mb-1">IAS12 법인세 계산기</h1>
      <p className="text-xs text-text-sub mb-5">당기법인세·이연법인세 자동 계산</p>

      <div className="bg-surface border border-border rounded-lg p-4 mb-5 space-y-3">
        {/* 세전회계이익 */}
        <div>
          <label className="text-xs font-medium text-text block mb-1">세전회계이익</label>
          <NumberInput value={accountingProfit} onChange={setAccountingProfit} placeholder="100,000,000" suffix="원" className="w-full" />
        </div>

        {/* 세율 */}
        <div>
          <label className="text-xs font-medium text-text block mb-1">법인세율</label>
          <NumberInput value={taxRate} onChange={setTaxRate} placeholder="22" suffix="%" className="w-full" min={0} max={100} />
        </div>

        {/* 세무조정 항목 */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="text-xs font-medium text-text">세무조정 항목</label>
            {adjustments.length < 10 && (
              <button onClick={addRow} className="text-xs text-primary font-medium hover:underline">+ 항목 추가</button>
            )}
          </div>
          <p className="text-[11px] text-text-sub mb-2">금액: 양수 = 가산(익금산입), 음수 = 차감(손금산입)</p>
          <div className="space-y-2">
            {adjustments.map((a, i) => (
              <div key={i} className="space-y-1.5 bg-background p-2 rounded-md border border-border/50">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-text-sub w-6 shrink-0">{i + 1}.</span>
                  <input
                    type="text"
                    value={a.name}
                    onChange={(e) => updateAdj(i, "name", e.target.value)}
                    placeholder="항목명 (예: 접대비 한도초과)"
                    className="flex-1 min-h-[40px] px-3 py-2 border border-border rounded-md text-sm focus:outline-none focus:border-primary"
                  />
                  {adjustments.length > 1 && (
                    <button onClick={() => removeRow(i)} className="text-xs text-wrong font-medium shrink-0">삭제</button>
                  )}
                </div>
                <div className="flex items-center gap-2 ml-8">
                  <NumberInput value={a.amount} onChange={(v) => updateAdj(i, "amount", v)} placeholder="금액" suffix="원" className="flex-1" />
                  <div className="flex gap-1">
                    {(["permanent", "temporary"] as const).map((t) => (
                      <button
                        key={t}
                        onClick={() => updateAdj(i, "type", t)}
                        className={`px-2 py-1.5 text-[11px] border rounded font-medium transition-colors ${a.type === t ? "border-primary bg-primary-bg/30 text-primary" : "border-border text-text-sub"}`}
                      >
                        {t === "permanent" ? "영구적" : "일시적"}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {errors.length > 0 && (
          <div className="text-xs text-wrong">{errors.join(" ")}</div>
        )}
      </div>

      {!canCalc && errors.length === 0 && (
        <p className="text-center text-xs text-text-sub py-6">값을 입력하면 자동 계산됩니다</p>
      )}
      {!canCalc && errors.length > 0 && (
        <div className="text-xs text-wrong py-4">{errors.join(" ")}</div>
      )}
      {result && (
        <>
          {/* 요약 */}
          <div className="bg-primary-bg/30 border border-primary/20 rounded-lg p-4 mb-4 text-center">
            <p className="text-xs text-text-sub mb-1">법인세비용</p>
            <p className="text-2xl font-extrabold text-primary">{result.taxExpense.toLocaleString()}원</p>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-surface border border-border rounded-lg p-3 text-center">
              <p className="text-[11px] text-text-sub mb-0.5">과세소득</p>
              <p className="text-lg font-bold text-text">{result.taxableIncome.toLocaleString()}원</p>
            </div>
            <div className="bg-surface border border-border rounded-lg p-3 text-center">
              <p className="text-[11px] text-text-sub mb-0.5">당기법인세</p>
              <p className="text-lg font-bold text-text">{result.currentTax.toLocaleString()}원</p>
            </div>
          </div>

          {result.tempDiff !== 0 && (
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-surface border border-border rounded-lg p-3 text-center">
                <p className="text-[11px] text-text-sub mb-0.5">일시적차이</p>
                <p className="text-lg font-bold text-text">{result.tempDiff.toLocaleString()}원</p>
              </div>
              <div className="bg-surface border border-border rounded-lg p-3 text-center">
                <p className="text-[11px] text-text-sub mb-0.5">
                  {result.deferredTaxLiability > 0 ? "이연법인세부채" : "이연법인세자산"}
                </p>
                <p className="text-lg font-bold text-text">
                  {(result.deferredTaxLiability > 0 ? result.deferredTaxLiability : result.deferredTaxAsset).toLocaleString()}원
                </p>
              </div>
            </div>
          )}

          {/* 분개 */}
          <div className="bg-surface border border-border rounded-lg p-3 mb-4">
            <p className="text-xs font-bold text-text mb-1">분개</p>
            {result.deferredTaxLiability > 0 ? (
              <>
                <p className="text-xs text-debit">(차) 법인세비용 {result.taxExpense.toLocaleString()}</p>
                <p className="text-xs text-credit">(대) 당기법인세부채 {result.currentTax.toLocaleString()}</p>
                <p className="text-xs text-credit">(대) 이연법인세부채 {result.deferredTaxLiability.toLocaleString()}</p>
              </>
            ) : result.deferredTaxAsset > 0 ? (
              <>
                <p className="text-xs text-debit">(차) 법인세비용 {result.taxExpense.toLocaleString()}</p>
                <p className="text-xs text-debit">(차) 이연법인세자산 {result.deferredTaxAsset.toLocaleString()}</p>
                <p className="text-xs text-credit">(대) 당기법인세부채 {result.currentTax.toLocaleString()}</p>
              </>
            ) : (
              <>
                <p className="text-xs text-debit">(차) 법인세비용 {result.taxExpense.toLocaleString()}</p>
                <p className="text-xs text-credit">(대) 당기법인세부채 {result.currentTax.toLocaleString()}</p>
              </>
            )}
          </div>
        </>
      )}

      <p className="text-[11px] text-text-sub mb-4">영구적 차이는 과세소득에만 반영되며, 일시적 차이는 이연법인세 계산에 사용됩니다.</p>

      <div className="flex gap-2">
        <Link href="/concept/ias12" className="flex-1 min-h-[44px] py-2.5 text-center border border-primary text-primary rounded-lg text-sm font-bold">
          IAS 12 개념 보기
        </Link>
        <Link href="/quiz?tag=IAS12" className="flex-1 min-h-[44px] py-2.5 text-center bg-primary text-white rounded-lg text-sm font-bold">
          문제 풀기 ({problemCount})
        </Link>
      </div>
    </div>
  );
}
