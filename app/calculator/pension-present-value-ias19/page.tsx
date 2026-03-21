"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import NumberInput from "@/components/NumberInput";
import { PROBLEMS } from "@/constants/problems";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "퇴직급여 계산기 | IAS19 확정급여채무 현재가치 자동 계산",
  description: "미래퇴직급여, 할인율, 잔여근무기간을 입력하면 IAS19 기준 확정급여채무 현재가치와 연도별 스케줄을 자동 계산합니다.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: "https://accounting-theta-pink.vercel.app" },
      { "@type": "ListItem", position: 2, name: "계산기", item: "https://accounting-theta-pink.vercel.app/calculator" },
      { "@type": "ListItem", position: 3, name: "퇴직급여 계산기" },
    ],
  },
};

interface ScheduleRow {
  year: number;
  opening: number;
  serviceCost: number;
  interestCost: number;
  closing: number;
}

export default function PensionPVCalculator() {
  const [futureBenefit, setFutureBenefit] = useState<number | null>(null);
  const [discountRate, setDiscountRate] = useState<number | null>(null);
  const [yearsToRetirement, setYearsToRetirement] = useState<number | null>(null);
  const [currentServiceCost, setCurrentServiceCost] = useState<number | null>(0);

  const problemCount = PROBLEMS.filter((p) => p.tags?.includes("IAS19")).length;

  const errors = useMemo(() => {
    const e: string[] = [];
    if (futureBenefit !== null && futureBenefit <= 0) e.push("미래퇴직급여는 0보다 커야 합니다.");
    if (discountRate !== null && discountRate < 0) e.push("할인율은 0 이상이어야 합니다.");
    if (yearsToRetirement !== null && (yearsToRetirement < 1 || !Number.isInteger(yearsToRetirement)))
      e.push("잔여근무기간은 1 이상 정수여야 합니다.");
    if (currentServiceCost !== null && currentServiceCost < 0) e.push("당기근무원가는 0 이상이어야 합니다.");
    return e;
  }, [futureBenefit, discountRate, yearsToRetirement, currentServiceCost]);

  const canCalc =
    futureBenefit !== null && futureBenefit > 0 &&
    discountRate !== null && discountRate >= 0 &&
    yearsToRetirement !== null && yearsToRetirement >= 1 && Number.isInteger(yearsToRetirement) &&
    errors.length === 0;

  const result = useMemo(() => {
    if (!canCalc) return null;

    const fv = futureBenefit!;
    const r = discountRate! / 100;
    const n = yearsToRetirement!;
    const sc = currentServiceCost ?? 0;

    // 현재가치
    let pv: number;
    if (r === 0) {
      pv = fv;
    } else {
      pv = fv / Math.pow(1 + r, n);
    }

    // 스케줄
    const rows: ScheduleRow[] = [];
    let balance = pv;
    for (let i = 1; i <= n; i++) {
      const opening = balance;
      const interestCost = r === 0 ? 0 : opening * r;
      let closing = opening + sc + interestCost;

      // 마지막 연도 보정
      let adjInterest = interestCost;
      if (i === n) {
        closing = fv;
        adjInterest = closing - opening - sc;
      }

      rows.push({
        year: i,
        opening: Math.round(opening),
        serviceCost: Math.round(sc),
        interestCost: Math.round(adjInterest),
        closing: Math.round(closing),
      });
      balance = closing;
    }

    // 당기비용 (첫 해 기준)
    const firstInterest = rows.length > 0 ? rows[0].interestCost : 0;
    const totalCurrentCost = Math.round(sc) + firstInterest;

    return { pv: Math.round(pv), rows, firstInterest, totalCurrentCost, serviceCost: Math.round(sc) };
  }, [canCalc, futureBenefit, discountRate, yearsToRetirement, currentServiceCost]);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="flex items-center gap-2 mb-5">
        <Link href="/" className="text-xs text-text-sub hover:text-primary">&larr; 홈</Link>
        <span className="text-xs text-border">/</span>
        <Link href="/calculator" className="text-xs text-text-sub hover:text-primary">계산기</Link>
        <span className="text-xs text-border">/</span>
        <span className="text-xs font-semibold text-text">퇴직급여</span>
      </div>

      <h1 className="text-xl font-extrabold text-text mb-1">IAS19 퇴직급여 현재가치 계산기</h1>
      <p className="text-xs text-text-sub mb-5">확정급여채무 현재가치와 연도별 전개 스케줄 자동 계산</p>

      <div className="bg-surface border border-border rounded-lg p-4 mb-5 space-y-3">
        <div>
          <label className="text-xs font-medium text-text block mb-1">미래퇴직급여</label>
          <NumberInput value={futureBenefit} onChange={setFutureBenefit} placeholder="100,000,000" suffix="원" className="w-full" />
        </div>
        <div>
          <label className="text-xs font-medium text-text block mb-1">할인율 (연)</label>
          <NumberInput value={discountRate} onChange={setDiscountRate} placeholder="5" suffix="%" className="w-full" min={0} />
        </div>
        <div>
          <label className="text-xs font-medium text-text block mb-1">잔여근무기간</label>
          <NumberInput value={yearsToRetirement} onChange={setYearsToRetirement} placeholder="10" suffix="년" integer className="w-full" min={1} />
        </div>
        <div>
          <label className="text-xs font-medium text-text block mb-1">당기근무원가 (선택, 기본 0)</label>
          <NumberInput value={currentServiceCost} onChange={(v) => setCurrentServiceCost(v ?? 0)} placeholder="0" suffix="원" className="w-full" min={0} />
          <p className="text-[10px] text-text-sub mt-1">근무원가는 매년 동일하게 적용됩니다</p>
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
          {/* 현재가치 카드 */}
          <div className="bg-primary-bg/30 border border-primary/20 rounded-lg p-4 mb-4 text-center">
            <p className="text-xs text-text-sub mb-1">확정급여채무 현재가치</p>
            <p className="text-2xl font-extrabold text-primary">{result.pv.toLocaleString()}원</p>
          </div>

          {/* 당기비용 카드 */}
          <div className="bg-surface border border-border rounded-lg p-3 mb-4 text-center">
            <p className="text-[11px] text-text-sub mb-0.5">당기 퇴직급여 비용 (1차연도)</p>
            <p className="text-lg font-bold text-text">{result.totalCurrentCost.toLocaleString()}원</p>
            <p className="text-[11px] text-text-sub mt-1">
              근무원가 {result.serviceCost.toLocaleString()} + 이자비용 {result.firstInterest.toLocaleString()}
            </p>
          </div>

          {/* 분개 */}
          <div className="bg-surface border border-border rounded-lg p-3 mb-4">
            <p className="text-xs font-bold text-text mb-1">매년 분개</p>
            {result.serviceCost > 0 ? (
              <>
                <p className="text-xs text-debit">(차) 퇴직급여(근무원가) xxx</p>
                <p className="text-xs text-debit">(차) 퇴직급여(이자비용) xxx</p>
                <p className="text-xs text-credit">(대) 확정급여채무 xxx</p>
              </>
            ) : (
              <>
                <p className="text-xs text-debit">(차) 이자비용 xxx</p>
                <p className="text-xs text-credit">(대) 확정급여채무 xxx</p>
              </>
            )}
          </div>

          {/* 스케줄 표 */}
          <div className="overflow-x-auto mb-4">
            <p className="text-xs font-bold text-text mb-2">연도별 전개 스케줄</p>
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-border text-text-sub">
                  <th className="py-2 text-center">연차</th>
                  <th className="py-2 text-right">기초잔액</th>
                  {result.serviceCost > 0 && <th className="py-2 text-right">근무원가</th>}
                  <th className="py-2 text-right">이자비용</th>
                  <th className="py-2 text-right">기말잔액</th>
                </tr>
              </thead>
              <tbody>
                {result.rows.map((r) => (
                  <tr key={r.year} className="border-b border-border/50">
                    <td className="py-2 text-center">{r.year}년</td>
                    <td className="py-2 text-right">{r.opening.toLocaleString()}</td>
                    {result.serviceCost > 0 && <td className="py-2 text-right">{r.serviceCost.toLocaleString()}</td>}
                    <td className="py-2 text-right">{r.interestCost.toLocaleString()}</td>
                    <td className="py-2 text-right">{r.closing.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      <p className="text-[11px] text-text-sub mb-4">PV = 미래퇴직급여 / (1+r)^n | 기말잔액 = 기초 + 근무원가 + 이자비용(기초 x r)</p>

      <div className="flex gap-2">
        <Link href="/concept/ias19" className="flex-1 min-h-[44px] py-2.5 text-center border border-primary text-primary rounded-lg text-sm font-bold">
          IAS 19 개념 보기
        </Link>
        <Link href="/quiz?tag=IAS19" className="flex-1 min-h-[44px] py-2.5 text-center bg-primary text-white rounded-lg text-sm font-bold">
          문제 풀기 ({problemCount})
        </Link>
      </div>
    </div>
  );
}
