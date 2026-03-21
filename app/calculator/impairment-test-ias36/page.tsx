"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import NumberInput from "@/components/NumberInput";
import { PROBLEMS } from "@/constants/problems";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "손상차손 계산기 | IAS36 회수가능액·손상차손 자동 계산",
  description: "장부금액, 순공정가치, 사용가치를 입력하면 IAS36 기준 회수가능액과 손상차손을 자동 계산합니다.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: "https://accounting-theta-pink.vercel.app" },
      { "@type": "ListItem", position: 2, name: "계산기", item: "https://accounting-theta-pink.vercel.app/calculator" },
      { "@type": "ListItem", position: 3, name: "손상차손 계산기" },
    ],
  },
};

export default function ImpairmentTestCalculator() {
  const [carryingAmount, setCarryingAmount] = useState<number | null>(null);
  const [fairValueLessSellingCosts, setFairValueLessSellingCosts] = useState<number | null>(null);
  const [valueInUse, setValueInUse] = useState<number | null>(null);

  const problemCount = PROBLEMS.filter((p) => p.tags?.includes("IAS36")).length;

  const errors = useMemo(() => {
    const e: string[] = [];
    if (carryingAmount !== null && carryingAmount <= 0) e.push("장부금액은 0보다 커야 합니다.");
    if (fairValueLessSellingCosts !== null && fairValueLessSellingCosts < 0) e.push("순공정가치는 0 이상이어야 합니다.");
    if (valueInUse !== null && valueInUse < 0) e.push("사용가치는 0 이상이어야 합니다.");
    if (fairValueLessSellingCosts !== null && valueInUse !== null && fairValueLessSellingCosts === 0 && valueInUse === 0)
      e.push("순공정가치와 사용가치가 모두 0이면 회수가능액을 산정할 수 없습니다.");
    return e;
  }, [carryingAmount, fairValueLessSellingCosts, valueInUse]);

  const canCalc =
    carryingAmount !== null && carryingAmount > 0 &&
    fairValueLessSellingCosts !== null && fairValueLessSellingCosts >= 0 &&
    valueInUse !== null && valueInUse >= 0 &&
    errors.length === 0;

  const result = useMemo(() => {
    if (!canCalc) return null;

    const ca = carryingAmount!;
    const fv = fairValueLessSellingCosts!;
    const viu = valueInUse!;

    const recoverableAmount = Math.max(fv, viu);
    const basis = fv >= viu ? "순공정가치" : "사용가치";
    const impairmentLoss = Math.max(0, ca - recoverableAmount);

    return { recoverableAmount, basis, impairmentLoss };
  }, [canCalc, carryingAmount, fairValueLessSellingCosts, valueInUse]);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="flex items-center gap-2 mb-5">
        <Link href="/" className="text-xs text-text-sub hover:text-primary">&larr; 홈</Link>
        <span className="text-xs text-border">/</span>
        <Link href="/calculator" className="text-xs text-text-sub hover:text-primary">계산기</Link>
        <span className="text-xs text-border">/</span>
        <span className="text-xs font-semibold text-text">손상차손</span>
      </div>

      <h1 className="text-xl font-extrabold text-text mb-1">IAS36 손상차손 계산기</h1>
      <p className="text-xs text-text-sub mb-5">회수가능액과 손상차손 자동 계산</p>

      <div className="bg-surface border border-border rounded-lg p-4 mb-5 space-y-3">
        <div>
          <label className="text-xs font-medium text-text block mb-1">장부금액</label>
          <NumberInput value={carryingAmount} onChange={setCarryingAmount} placeholder="100,000,000" suffix="원" className="w-full" />
        </div>
        <div>
          <label className="text-xs font-medium text-text block mb-1">순공정가치 (공정가치 - 처분부대원가)</label>
          <NumberInput value={fairValueLessSellingCosts} onChange={setFairValueLessSellingCosts} placeholder="80,000,000" suffix="원" className="w-full" min={0} />
        </div>
        <div>
          <label className="text-xs font-medium text-text block mb-1">사용가치</label>
          <NumberInput value={valueInUse} onChange={setValueInUse} placeholder="70,000,000" suffix="원" className="w-full" min={0} />
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
          {/* 회수가능액 */}
          <div className="bg-primary-bg/30 border border-primary/20 rounded-lg p-4 mb-4 text-center">
            <p className="text-xs text-text-sub mb-1">회수가능액 ({result.basis} 기준)</p>
            <p className="text-2xl font-extrabold text-primary">{result.recoverableAmount.toLocaleString()}원</p>
          </div>

          {/* 손상차손 */}
          <div className={`border rounded-lg p-4 mb-4 text-center ${result.impairmentLoss === 0 ? "bg-correct/10 border-correct/30" : "bg-wrong/10 border-wrong/30"}`}>
            <p className="text-xs text-text-sub mb-1">손상차손</p>
            {result.impairmentLoss === 0 ? (
              <p className="text-2xl font-extrabold text-correct">손상 없음</p>
            ) : (
              <p className="text-2xl font-extrabold text-wrong">{result.impairmentLoss.toLocaleString()}원</p>
            )}
          </div>

          {/* 계산 과정 */}
          <div className="bg-surface border border-border rounded-lg p-3 mb-4">
            <p className="text-xs font-bold text-text mb-2">계산 과정</p>
            <div className="space-y-1 text-xs text-text-sub">
              <p>장부금액: {carryingAmount!.toLocaleString()}원</p>
              <p>순공정가치: {fairValueLessSellingCosts!.toLocaleString()}원</p>
              <p>사용가치: {valueInUse!.toLocaleString()}원</p>
              <p>회수가능액 = MAX({fairValueLessSellingCosts!.toLocaleString()}, {valueInUse!.toLocaleString()}) = {result.recoverableAmount.toLocaleString()}원</p>
              <p>손상차손 = MAX(0, {carryingAmount!.toLocaleString()} - {result.recoverableAmount.toLocaleString()}) = {result.impairmentLoss.toLocaleString()}원</p>
            </div>
          </div>

          {/* 분개 */}
          <div className="bg-surface border border-border rounded-lg p-3 mb-4">
            <p className="text-xs font-bold text-text mb-1">분개</p>
            {result.impairmentLoss > 0 ? (
              <>
                <p className="text-xs text-debit">(차) 손상차손 {result.impairmentLoss.toLocaleString()}</p>
                <p className="text-xs text-credit">(대) 자산손상누계액 {result.impairmentLoss.toLocaleString()}</p>
              </>
            ) : (
              <p className="text-xs text-text-sub">분개 없음</p>
            )}
          </div>
        </>
      )}

      <p className="text-[11px] text-text-sub mb-4">회수가능액 = MAX(순공정가치, 사용가치) | 손상차손 = MAX(0, 장부금액 - 회수가능액)</p>

      <div className="flex gap-2">
        <Link href="/concept/ias36" className="flex-1 min-h-[44px] py-2.5 text-center border border-primary text-primary rounded-lg text-sm font-bold">
          IAS 36 개념 보기
        </Link>
        <Link href="/quiz?tag=IAS36" className="flex-1 min-h-[44px] py-2.5 text-center bg-primary text-white rounded-lg text-sm font-bold">
          문제 풀기 ({problemCount})
        </Link>
      </div>
    </div>
  );
}
