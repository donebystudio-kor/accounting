"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import NumberInput from "@/components/NumberInput";
import { PROBLEMS } from "@/constants/problems";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "IFRS16 리스부채 계산기",
  description: "리스료, 할인율, 기간(개월)을 입력하면 IFRS16 기준 리스부채 현재가치와 월별 상환 스케줄을 자동 계산합니다.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: "https://accounting-theta-pink.vercel.app" },
      { "@type": "ListItem", position: 2, name: "계산기", item: "https://accounting-theta-pink.vercel.app/calculator" },
      { "@type": "ListItem", position: 3, name: "리스부채 계산기" },
    ],
  },
};

interface Row { period: number; opening: number; interest: number; payment: number; closing: number; }

export default function LeaseCalculator() {
  const [payment, setPayment] = useState<number | null>(null);
  const [months, setMonths] = useState<number | null>(null);
  const [rate, setRate] = useState<number | null>(null);
  const [timing, setTiming] = useState<"end" | "beginning">("end");

  const problemCount = PROBLEMS.filter((p) => p.tags?.includes("IFRS16")).length;

  const errors = useMemo(() => {
    const e: string[] = [];
    if (payment !== null && payment <= 0) e.push("리스료는 0보다 커야 합니다.");
    if (months !== null && (months < 1 || !Number.isInteger(months))) e.push("기간은 1 이상 정수여야 합니다.");
    if (rate !== null && rate < 0) e.push("할인율은 0 이상이어야 합니다.");
    return e;
  }, [payment, months, rate]);

  const canCalc = payment !== null && payment > 0 && months !== null && months >= 1 && rate !== null && rate >= 0 && errors.length === 0;

  const result = useMemo(() => {
    if (!canCalc) return null;
    const monthlyRate = rate! / 100 / 12; // 연이자율 → 월이자율
    const n = months!;
    const pmt = payment!;

    let pv: number;
    if (monthlyRate === 0) {
      pv = pmt * n;
    } else {
      pv = pmt * (1 - Math.pow(1 + monthlyRate, -n)) / monthlyRate;
      if (timing === "beginning") pv *= (1 + monthlyRate);
    }

    // 월별 상환 스케줄
    const rows: Row[] = [];
    let balance = pv;
    for (let i = 1; i <= n; i++) {
      const opening = balance;
      let interest: number;
      let principal: number;

      if (timing === "beginning" && i === 1) {
        interest = 0;
        principal = pmt;
      } else {
        interest = opening * monthlyRate;
        principal = pmt - interest;
      }

      let closing = opening - principal;
      // 마지막 회차 반올림 보정
      if (i === n) {
        closing = 0;
        principal = opening - interest > 0 ? opening : pmt - interest;
        interest = pmt - principal > 0 ? pmt - principal : interest;
      }

      rows.push({
        period: i,
        opening: Math.round(opening),
        interest: Math.round(interest),
        payment: Math.round(pmt),
        closing: Math.max(0, Math.round(closing)),
      });
      balance = closing;
    }
    if (rows.length > 0) rows[rows.length - 1].closing = 0;

    return { pv: Math.round(pv), rows };
  }, [canCalc, payment, months, rate, timing]);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="flex items-center gap-2 mb-5">
        <Link href="/" className="text-xs text-text-sub hover:text-primary">← 홈</Link>
        <span className="text-xs text-border">/</span>
        <Link href="/calculator" className="text-xs text-text-sub hover:text-primary">계산기</Link>
        <span className="text-xs text-border">/</span>
        <span className="text-xs font-semibold text-text">리스부채</span>
      </div>

      <h1 className="text-xl font-extrabold text-text mb-1">IFRS16 리스부채 계산기</h1>
      <p className="text-xs text-text-sub mb-5">월 단위 리스 현재가치와 상환 스케줄 자동 계산</p>

      <div className="bg-surface border border-border rounded-lg p-4 mb-5 space-y-3">
        <div>
          <label className="text-xs font-medium text-text block mb-1">리스료 (월)</label>
          <NumberInput value={payment} onChange={setPayment} placeholder="1,000,000" suffix="원" className="w-full" />
        </div>
        <div>
          <label className="text-xs font-medium text-text block mb-1">기간 (개월)</label>
          <NumberInput value={months} onChange={setMonths} placeholder="36" suffix="개월" integer className="w-full" min={1} />
        </div>
        <div>
          <label className="text-xs font-medium text-text block mb-1">할인율 (연)</label>
          <NumberInput value={rate} onChange={setRate} placeholder="5" suffix="%" className="w-full" min={0} />
        </div>
        <div>
          <label className="text-xs font-medium text-text block mb-1">지급시점</label>
          <div className="flex gap-2">
            {(["end", "beginning"] as const).map((t) => (
              <button key={t} onClick={() => setTiming(t)} className={`flex-1 min-h-[40px] px-3 py-2 text-xs border rounded-md font-medium transition-colors ${timing === t ? "border-primary bg-primary-bg/30 text-primary" : "border-border text-text-sub"}`}>
                {t === "end" ? "기말 지급" : "기초 지급"}
              </button>
            ))}
          </div>
        </div>
        {errors.length > 0 && (
          <div className="text-xs text-wrong">{errors.join(" ")}</div>
        )}
      </div>

      {result && (
        <>
          <div className="bg-primary-bg/30 border border-primary/20 rounded-lg p-4 mb-4 text-center">
            <p className="text-xs text-text-sub mb-1">리스부채 현재가치</p>
            <p className="text-2xl font-extrabold text-primary">{result.pv.toLocaleString()}원</p>
          </div>

          <div className="bg-surface border border-border rounded-lg p-3 mb-4">
            <p className="text-xs font-bold text-text mb-1">최초 인식 분개</p>
            <p className="text-xs text-debit">(차) 사용권자산 {result.pv.toLocaleString()}</p>
            <p className="text-xs text-credit">(대) 리스부채 {result.pv.toLocaleString()}</p>
          </div>

          <div className="overflow-x-auto mb-5">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-border text-text-sub">
                  <th className="py-2 text-center">회차(월)</th>
                  <th className="py-2 text-right">기초잔액</th>
                  <th className="py-2 text-right">이자비용</th>
                  <th className="py-2 text-right">리스료</th>
                  <th className="py-2 text-right">기말잔액</th>
                </tr>
              </thead>
              <tbody>
                {result.rows.map((r) => (
                  <tr key={r.period} className="border-b border-border/50">
                    <td className="py-2 text-center">{r.period}</td>
                    <td className="py-2 text-right">{r.opening.toLocaleString()}</td>
                    <td className="py-2 text-right">{r.interest.toLocaleString()}</td>
                    <td className="py-2 text-right">{r.payment.toLocaleString()}</td>
                    <td className="py-2 text-right">{r.closing.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      <div className="flex gap-2">
        <Link href="/concept/ifrs16" className="flex-1 min-h-[44px] py-2.5 text-center border border-primary text-primary rounded-lg text-sm font-bold">
          IFRS 16 개념 보기
        </Link>
        <Link href="/quiz?tag=IFRS16" className="flex-1 min-h-[44px] py-2.5 text-center bg-primary text-white rounded-lg text-sm font-bold">
          문제 풀기 ({problemCount})
        </Link>
      </div>
    </div>
  );
}
