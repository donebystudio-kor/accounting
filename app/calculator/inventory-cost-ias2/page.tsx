"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import NumberInput from "@/components/NumberInput";
import { PROBLEMS } from "@/constants/problems";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "재고자산 계산기 | 선입선출법·가중평균법 매출원가 자동 계산 (IAS2)",
  description: "매입내역과 판매수량을 입력하면 선입선출법(FIFO)과 가중평균법 기준 매출원가와 기말재고를 자동 계산합니다.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: "https://accounting-theta-pink.vercel.app" },
      { "@type": "ListItem", position: 2, name: "계산기", item: "https://accounting-theta-pink.vercel.app/calculator" },
      { "@type": "ListItem", position: 3, name: "재고자산 계산기" },
    ],
  },
};

interface Purchase {
  quantity: number | null;
  unitCost: number | null;
}

interface FifoLayer {
  source: number;
  quantity: number;
  unitCost: number;
  total: number;
}

export default function InventoryCostCalculator() {
  const [salesQuantity, setSalesQuantity] = useState<number | null>(null);
  const [purchases, setPurchases] = useState<Purchase[]>([
    { quantity: null, unitCost: null },
  ]);
  const [method, setMethod] = useState<"fifo" | "weighted">("fifo");

  const problemCount = PROBLEMS.filter((p) => p.tags?.includes("IAS2")).length;

  const updatePurchase = (idx: number, field: keyof Purchase, val: number | null) => {
    const next = [...purchases];
    next[idx] = { ...next[idx], [field]: val };
    setPurchases(next);
  };

  const addRow = () => {
    if (purchases.length >= 10) return;
    setPurchases([...purchases, { quantity: null, unitCost: null }]);
  };

  const removeRow = (idx: number) => {
    if (purchases.length <= 1) return;
    setPurchases(purchases.filter((_, i) => i !== idx));
  };

  const totalPurchaseQty = purchases.reduce((s, p) => s + (p.quantity ?? 0), 0);
  const totalPurchaseCost = purchases.reduce((s, p) => s + (p.quantity ?? 0) * (p.unitCost ?? 0), 0);

  const errors = useMemo(() => {
    const e: string[] = [];
    if (salesQuantity !== null && (salesQuantity <= 0 || !Number.isInteger(salesQuantity)))
      e.push("판매수량은 1 이상 정수여야 합니다.");
    purchases.forEach((p, i) => {
      if (p.quantity !== null && (p.quantity <= 0 || !Number.isInteger(p.quantity)))
        e.push(`매입 ${i + 1}행: 수량은 1 이상 정수여야 합니다.`);
      if (p.unitCost !== null && p.unitCost <= 0)
        e.push(`매입 ${i + 1}행: 단가는 0보다 커야 합니다.`);
    });
    if (salesQuantity !== null && salesQuantity > totalPurchaseQty && totalPurchaseQty > 0)
      e.push("판매수량이 총 매입수량을 초과합니다.");
    return e;
  }, [salesQuantity, purchases, totalPurchaseQty]);

  const allFilled = salesQuantity !== null && salesQuantity > 0 &&
    purchases.every((p) => p.quantity !== null && p.quantity > 0 && p.unitCost !== null && p.unitCost > 0);
  const canCalc = allFilled && errors.length === 0;

  const result = useMemo(() => {
    if (!canCalc) return null;
    const sq = salesQuantity!;
    const endingQty = totalPurchaseQty - sq;

    if (method === "fifo") {
      // FIFO: 먼저 매입분부터 판매 → 기말재고는 나중 매입분
      let remaining = endingQty;
      const layers: FifoLayer[] = [];
      // 기말재고는 뒤에서부터 채움
      for (let i = purchases.length - 1; i >= 0 && remaining > 0; i--) {
        const p = purchases[i];
        const qty = Math.min(remaining, p.quantity!);
        layers.unshift({
          source: i + 1,
          quantity: qty,
          unitCost: p.unitCost!,
          total: qty * p.unitCost!,
        });
        remaining -= qty;
      }
      const endingCost = layers.reduce((s, l) => s + l.total, 0);
      const cogs = totalPurchaseCost - endingCost;
      return { endingQty, endingCost, cogs, layers, avgUnitCost: null as number | null };
    } else {
      // 가중평균법
      const avgUnitCost = totalPurchaseCost / totalPurchaseQty;
      const cogs = Math.round(sq * avgUnitCost);
      const endingCost = totalPurchaseCost - cogs;
      return { endingQty, endingCost, cogs, layers: null as FifoLayer[] | null, avgUnitCost };
    }
  }, [canCalc, salesQuantity, purchases, method, totalPurchaseQty, totalPurchaseCost]);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="flex items-center gap-2 mb-5">
        <Link href="/" className="text-xs text-text-sub hover:text-primary">&larr; 홈</Link>
        <span className="text-xs text-border">/</span>
        <Link href="/calculator" className="text-xs text-text-sub hover:text-primary">계산기</Link>
        <span className="text-xs text-border">/</span>
        <span className="text-xs font-semibold text-text">재고자산</span>
      </div>

      <h1 className="text-xl font-extrabold text-text mb-1">IAS2 재고자산 계산기</h1>
      <p className="text-xs text-text-sub mb-5">선입선출법(FIFO)·가중평균법 매출원가 자동 계산</p>

      <div className="bg-surface border border-border rounded-lg p-4 mb-5 space-y-3">
        {/* 판매수량 */}
        <div>
          <label className="text-xs font-medium text-text block mb-1">판매수량</label>
          <NumberInput value={salesQuantity} onChange={setSalesQuantity} placeholder="100" suffix="개" integer className="w-full" min={1} />
        </div>

        {/* 평가방법 */}
        <div>
          <label className="text-xs font-medium text-text block mb-1">평가방법</label>
          <div className="flex gap-2">
            {([["fifo", "선입선출법 (FIFO)"], ["weighted", "가중평균법"]] as const).map(([v, label]) => (
              <button key={v} onClick={() => setMethod(v)} className={`flex-1 min-h-[40px] px-3 py-2 text-xs border rounded-md font-medium transition-colors ${method === v ? "border-primary bg-primary-bg/30 text-primary" : "border-border text-text-sub"}`}>
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* 매입내역 */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="text-xs font-medium text-text">매입내역</label>
            {purchases.length < 10 && (
              <button onClick={addRow} className="text-xs text-primary font-medium hover:underline">+ 행 추가</button>
            )}
          </div>
          <div className="space-y-2">
            {purchases.map((p, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-xs text-text-sub w-6 shrink-0">{i + 1}.</span>
                <NumberInput value={p.quantity} onChange={(v) => updatePurchase(i, "quantity", v)} placeholder="수량" suffix="개" integer className="flex-1" min={1} />
                <NumberInput value={p.unitCost} onChange={(v) => updatePurchase(i, "unitCost", v)} placeholder="단가" suffix="원" className="flex-1" />
                {purchases.length > 1 && (
                  <button onClick={() => removeRow(i)} className="text-xs text-wrong font-medium shrink-0">삭제</button>
                )}
              </div>
            ))}
          </div>
          <p className="text-[11px] text-text-sub mt-1">총 매입: {totalPurchaseQty.toLocaleString()}개 / {totalPurchaseCost.toLocaleString()}원</p>
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
            <p className="text-xs text-text-sub mb-1">매출원가 (COGS)</p>
            <p className="text-2xl font-extrabold text-primary">{result.cogs.toLocaleString()}원</p>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-surface border border-border rounded-lg p-3 text-center">
              <p className="text-[11px] text-text-sub mb-0.5">기말재고수량</p>
              <p className="text-lg font-bold text-text">{result.endingQty.toLocaleString()}개</p>
            </div>
            <div className="bg-surface border border-border rounded-lg p-3 text-center">
              <p className="text-[11px] text-text-sub mb-0.5">기말재고금액</p>
              <p className="text-lg font-bold text-text">{result.endingCost.toLocaleString()}원</p>
            </div>
          </div>

          {result.avgUnitCost !== null && (
            <div className="bg-surface border border-border rounded-lg p-3 mb-4 text-center">
              <p className="text-[11px] text-text-sub mb-0.5">가중평균단가</p>
              <p className="text-lg font-bold text-text">{Math.round(result.avgUnitCost).toLocaleString()}원</p>
            </div>
          )}

          {/* FIFO 층별 상세 */}
          {result.layers && result.layers.length > 0 && (
            <div className="overflow-x-auto mb-4">
              <p className="text-xs font-bold text-text mb-2">FIFO 기말재고 층별 내역</p>
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-border text-text-sub">
                    <th className="py-2 text-center">매입차수</th>
                    <th className="py-2 text-right">수량</th>
                    <th className="py-2 text-right">단가</th>
                    <th className="py-2 text-right">금액</th>
                  </tr>
                </thead>
                <tbody>
                  {result.layers.map((l, i) => (
                    <tr key={i} className="border-b border-border/50">
                      <td className="py-2 text-center">{l.source}차</td>
                      <td className="py-2 text-right">{l.quantity.toLocaleString()}</td>
                      <td className="py-2 text-right">{l.unitCost.toLocaleString()}</td>
                      <td className="py-2 text-right">{l.total.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* 분개 */}
          <div className="bg-surface border border-border rounded-lg p-3 mb-4">
            <p className="text-xs font-bold text-text mb-1">분개</p>
            <p className="text-xs text-debit">(차) 매출원가 {result.cogs.toLocaleString()}</p>
            <p className="text-xs text-credit">(대) 재고자산 {result.cogs.toLocaleString()}</p>
          </div>
        </>
      )}

      <p className="text-[11px] text-text-sub mb-4">총매입원가: {totalPurchaseCost.toLocaleString()}원 | 매입내역 순서대로 FIFO 적용</p>

      <div className="flex gap-2">
        <Link href="/concept/ias2" className="flex-1 min-h-[44px] py-2.5 text-center border border-primary text-primary rounded-lg text-sm font-bold">
          IAS 2 개념 보기
        </Link>
        <Link href="/quiz?tag=IAS2" className="flex-1 min-h-[44px] py-2.5 text-center bg-primary text-white rounded-lg text-sm font-bold">
          문제 풀기 ({problemCount})
        </Link>
      </div>
    </div>
  );
}
