"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import NumberInput from "@/components/NumberInput";
import { PROBLEMS } from "@/constants/problems";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "충당부채 현재가치 계산기 | IAS37 복구충당부채 자동 계산",
  description: "미래지출액과 할인율을 입력하면 IAS37 기준 충당부채 현재가치와 연도별 이자전입 스케줄을 자동 계산합니다.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: "https://accounting-theta-pink.vercel.app" },
      { "@type": "ListItem", position: 2, name: "계산기", item: "https://accounting-theta-pink.vercel.app/calculator" },
      { "@type": "ListItem", position: 3, name: "충당부채 계산기" },
    ],
  },
};

type ProvisionType = "restoration" | "warranty" | "legal" | "other";

interface ScheduleRow {
  year: number;
  opening: number;
  interest: number;
  closing: number;
}

const PROVISION_LABELS: Record<ProvisionType, { debitAccount: string; creditAccount: string; label: string }> = {
  restoration: { debitAccount: "복구원가", creditAccount: "복구충당부채", label: "복구충당부채" },
  warranty: { debitAccount: "제품보증비", creditAccount: "제품보증충당부채", label: "제품보증충당부채" },
  legal: { debitAccount: "소송비용", creditAccount: "소송충당부채", label: "소송충당부채" },
  other: { debitAccount: "충당부채전입액", creditAccount: "충당부채", label: "충당부채" },
};

export default function ProvisionPVCalculator() {
  const [futureCashOutflow, setFutureCashOutflow] = useState<number | null>(null);
  const [discountRate, setDiscountRate] = useState<number | null>(null);
  const [periods, setPeriods] = useState<number | null>(null);
  const [provisionType, setProvisionType] = useState<ProvisionType>("restoration");

  const problemCount = PROBLEMS.filter((p) => p.tags?.includes("IAS37")).length;

  const errors = useMemo(() => {
    const e: string[] = [];
    if (futureCashOutflow !== null && futureCashOutflow <= 0)
      e.push("미래지출액은 0보다 커야 합니다.");
    if (discountRate !== null && discountRate < 0)
      e.push("할인율은 0 이상이어야 합니다.");
    if (periods !== null && (periods < 1 || !Number.isInteger(periods)))
      e.push("기간은 1 이상 정수여야 합니다.");
    return e;
  }, [futureCashOutflow, discountRate, periods]);

  const canCalc = futureCashOutflow !== null && futureCashOutflow > 0 &&
    discountRate !== null && discountRate >= 0 &&
    periods !== null && periods >= 1 && Number.isInteger(periods) &&
    errors.length === 0;

  const result = useMemo(() => {
    if (!canCalc) return null;

    const fv = futureCashOutflow!;
    const r = discountRate! / 100;
    const n = periods!;

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
      let closing: number;
      let interest: number;

      if (r === 0) {
        interest = 0;
        closing = opening;
      } else {
        closing = opening * (1 + r);
        interest = closing - opening;
      }

      // 마지막 년도 보정
      if (i === n) {
        closing = fv;
        interest = closing - opening;
      }

      rows.push({
        year: i,
        opening: Math.round(opening),
        interest: Math.round(interest),
        closing: Math.round(closing),
      });
      balance = closing;
    }

    return { pv: Math.round(pv), rows, discount: Math.round(fv - pv) };
  }, [canCalc, futureCashOutflow, discountRate, periods]);

  const info = PROVISION_LABELS[provisionType];

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="flex items-center gap-2 mb-5">
        <Link href="/" className="text-xs text-text-sub hover:text-primary">&larr; 홈</Link>
        <span className="text-xs text-border">/</span>
        <Link href="/calculator" className="text-xs text-text-sub hover:text-primary">계산기</Link>
        <span className="text-xs text-border">/</span>
        <span className="text-xs font-semibold text-text">충당부채</span>
      </div>

      <h1 className="text-xl font-extrabold text-text mb-1">IAS37 충당부채 현재가치 계산기</h1>
      <p className="text-xs text-text-sub mb-5">복구충당부채·제품보증·소송충당부채 현재가치 자동 계산</p>

      <div className="bg-surface border border-border rounded-lg p-4 mb-5 space-y-3">
        {/* 충당부채 유형 */}
        <div>
          <label className="text-xs font-medium text-text block mb-1">충당부채 유형</label>
          <div className="grid grid-cols-2 gap-2">
            {(["restoration", "warranty", "legal", "other"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setProvisionType(t)}
                className={`min-h-[40px] px-3 py-2 text-xs border rounded-md font-medium transition-colors ${provisionType === t ? "border-primary bg-primary-bg/30 text-primary" : "border-border text-text-sub"}`}
              >
                {PROVISION_LABELS[t].label}
              </button>
            ))}
          </div>
        </div>

        {/* 미래지출액 */}
        <div>
          <label className="text-xs font-medium text-text block mb-1">미래지출액</label>
          <NumberInput value={futureCashOutflow} onChange={setFutureCashOutflow} placeholder="100,000,000" suffix="원" className="w-full" />
        </div>

        {/* 할인율 */}
        <div>
          <label className="text-xs font-medium text-text block mb-1">할인율 (연)</label>
          <NumberInput value={discountRate} onChange={setDiscountRate} placeholder="5" suffix="%" className="w-full" min={0} />
        </div>

        {/* 기간 */}
        <div>
          <label className="text-xs font-medium text-text block mb-1">기간</label>
          <NumberInput value={periods} onChange={setPeriods} placeholder="5" suffix="년" integer className="w-full" min={1} />
        </div>

        {errors.length > 0 && (
          <div className="text-xs text-wrong">{errors.join(" ")}</div>
        )}
      </div>

      {result && (
        <>
          {/* 요약 */}
          <div className="bg-primary-bg/30 border border-primary/20 rounded-lg p-4 mb-4 text-center">
            <p className="text-xs text-text-sub mb-1">{info.label} 현재가치</p>
            <p className="text-2xl font-extrabold text-primary">{result.pv.toLocaleString()}원</p>
          </div>

          {result.discount > 0 && (
            <div className="bg-surface border border-border rounded-lg p-3 mb-4 text-center">
              <p className="text-[11px] text-text-sub mb-0.5">할인차금 (총 이자전입액)</p>
              <p className="text-lg font-bold text-text">{result.discount.toLocaleString()}원</p>
            </div>
          )}

          {/* 최초 인식 분개 */}
          <div className="bg-surface border border-border rounded-lg p-3 mb-4">
            <p className="text-xs font-bold text-text mb-1">최초 인식 분개</p>
            <p className="text-xs text-debit">(차) {info.debitAccount} {result.pv.toLocaleString()}</p>
            <p className="text-xs text-credit">(대) {info.creditAccount} {result.pv.toLocaleString()}</p>
          </div>

          {/* 이자전입 스케줄 */}
          <div className="overflow-x-auto mb-4">
            <p className="text-xs font-bold text-text mb-2">연도별 이자전입 스케줄</p>
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-border text-text-sub">
                  <th className="py-2 text-center">연차</th>
                  <th className="py-2 text-right">기초잔액</th>
                  <th className="py-2 text-right">이자전입</th>
                  <th className="py-2 text-right">기말잔액</th>
                </tr>
              </thead>
              <tbody>
                {result.rows.map((r) => (
                  <tr key={r.year} className="border-b border-border/50">
                    <td className="py-2 text-center">{r.year}년</td>
                    <td className="py-2 text-right">{r.opening.toLocaleString()}</td>
                    <td className="py-2 text-right">{r.interest.toLocaleString()}</td>
                    <td className="py-2 text-right">{r.closing.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 매년 이자전입 분개 */}
          {result.discount > 0 && (
            <div className="bg-surface border border-border rounded-lg p-3 mb-4">
              <p className="text-xs font-bold text-text mb-1">매년 이자전입 분개</p>
              <p className="text-xs text-debit">(차) 이자비용 xxx</p>
              <p className="text-xs text-credit">(대) {info.creditAccount} xxx</p>
            </div>
          )}
        </>
      )}

      <p className="text-[11px] text-text-sub mb-4">PV = 미래지출액 / (1+r)^n | 할인율 0%인 경우 현재가치 = 미래지출액</p>

      <div className="flex gap-2">
        <Link href="/concept/ias37" className="flex-1 min-h-[44px] py-2.5 text-center border border-primary text-primary rounded-lg text-sm font-bold">
          IAS 37 개념 보기
        </Link>
        <Link href="/quiz?tag=IAS37" className="flex-1 min-h-[44px] py-2.5 text-center bg-primary text-white rounded-lg text-sm font-bold">
          문제 풀기 ({problemCount})
        </Link>
      </div>
    </div>
  );
}
