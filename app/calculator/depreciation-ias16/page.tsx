"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import NumberInput from "@/components/NumberInput";
import { PROBLEMS } from "@/constants/problems";

const jsonLd = {
  "@context": "https://schema.org", "@type": "WebPage", name: "감가상각 계산기",
  breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "홈", item: "https://accounting-theta-pink.vercel.app" },
    { "@type": "ListItem", position: 2, name: "계산기", item: "https://accounting-theta-pink.vercel.app/calculator" },
    { "@type": "ListItem", position: 3, name: "감가상각 계산기" },
  ]},
};

interface Row { year: number; expense: number; accumulated: number; bookValue: number; }

export default function DepreciationCalculator() {
  const [cost, setCost] = useState<number | null>(null);
  const [residual, setResidual] = useState<number | null>(null);
  const [life, setLife] = useState<number | null>(null);
  const [method, setMethod] = useState<"straight" | "declining">("straight");

  const problemCount = PROBLEMS.filter((p) => p.tags?.includes("IAS16")).length;

  const errors = useMemo(() => {
    const e: string[] = [];
    if (cost !== null && cost <= 0) e.push("취득원가는 0보다 커야 합니다.");
    if (residual !== null && residual < 0) e.push("잔존가치는 0 이상이어야 합니다.");
    if (cost !== null && residual !== null && residual > cost) e.push("잔존가치는 취득원가 이하여야 합니다.");
    if (life !== null && (life < 1 || !Number.isInteger(life))) e.push("내용연수는 1 이상 정수여야 합니다.");
    return e;
  }, [cost, residual, life]);

  const canCalc = cost !== null && cost > 0 && residual !== null && residual >= 0 && residual <= cost && life !== null && life >= 1 && errors.length === 0;

  const result = useMemo(() => {
    if (!canCalc) return null;
    const c = cost!, r = residual!, n = life!;
    const rows: Row[] = [];
    let acc = 0;

    if (method === "straight") {
      const annual = Math.round((c - r) / n);
      for (let y = 1; y <= n; y++) {
        const exp = y === n ? c - r - acc : annual;
        acc += exp;
        rows.push({ year: y, expense: exp, accumulated: acc, bookValue: c - acc });
      }
    } else {
      const rate = 1 - Math.pow(r / c, 1 / n);
      let bv = c;
      for (let y = 1; y <= n; y++) {
        let exp = Math.round(bv * rate);
        if (y === n) exp = bv - r;
        acc += exp;
        bv -= exp;
        rows.push({ year: y, expense: exp, accumulated: acc, bookValue: Math.max(bv, r) });
      }
    }
    return { rows, annualStraight: method === "straight" ? Math.round((c - r) / n) : null };
  }, [canCalc, cost, residual, life, method]);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="flex items-center gap-2 mb-5">
        <Link href="/" className="text-xs text-text-sub hover:text-primary">← 홈</Link>
        <span className="text-xs text-border">/</span>
        <Link href="/calculator" className="text-xs text-text-sub hover:text-primary">계산기</Link>
        <span className="text-xs text-border">/</span>
        <span className="text-xs font-semibold text-text">감가상각</span>
      </div>
      <h1 className="text-xl font-extrabold text-text mb-1">감가상각 계산기</h1>
      <p className="text-xs text-text-sub mb-5">정액법·정률법 감가상각비 자동 계산</p>

      <div className="bg-surface border border-border rounded-lg p-4 mb-5 space-y-3">
        <div><label className="text-xs font-medium text-text block mb-1">취득원가</label>
          <NumberInput value={cost} onChange={setCost} placeholder="10,000,000" suffix="원" className="w-full" /></div>
        <div><label className="text-xs font-medium text-text block mb-1">잔존가치</label>
          <NumberInput value={residual} onChange={setResidual} placeholder="1,000,000" suffix="원" className="w-full" min={0} /></div>
        <div><label className="text-xs font-medium text-text block mb-1">내용연수</label>
          <NumberInput value={life} onChange={setLife} placeholder="5" suffix="년" integer className="w-full" min={1} /></div>
        <div><label className="text-xs font-medium text-text block mb-1">상각방법</label>
          <div className="flex gap-2">
            {(["straight", "declining"] as const).map((m) => (
              <button key={m} onClick={() => setMethod(m)} className={`flex-1 min-h-[40px] px-3 py-2 text-xs border rounded-md font-medium transition-colors ${method === m ? "border-primary bg-primary-bg/30 text-primary" : "border-border text-text-sub"}`}>
                {m === "straight" ? "정액법" : "정률법"}
              </button>
            ))}
          </div>
        </div>
        {errors.length > 0 && <div className="text-xs text-wrong">{errors.join(" ")}</div>}
      </div>

      {result && (
        <>
          {result.annualStraight !== null && (
            <div className="bg-primary-bg/30 border border-primary/20 rounded-lg p-4 mb-4 text-center">
              <p className="text-xs text-text-sub mb-1">연간 감가상각비</p>
              <p className="text-2xl font-extrabold text-primary">{result.annualStraight.toLocaleString()}원</p>
            </div>
          )}
          <div className="bg-surface border border-border rounded-lg p-3 mb-4">
            <p className="text-xs font-bold text-text mb-1">분개</p>
            <p className="text-xs text-debit">(차) 감가상각비 {(result.rows[0]?.expense ?? 0).toLocaleString()}</p>
            <p className="text-xs text-credit">(대) 감가상각누계액 {(result.rows[0]?.expense ?? 0).toLocaleString()}</p>
          </div>
          <div className="overflow-x-auto mb-5">
            <table className="w-full text-xs">
              <thead><tr className="border-b border-border text-text-sub">
                <th className="py-2 text-center">연도</th><th className="py-2 text-right">감가상각비</th><th className="py-2 text-right">누계액</th><th className="py-2 text-right">장부가액</th>
              </tr></thead>
              <tbody>
                {result.rows.map((r) => (
                  <tr key={r.year} className="border-b border-border/50">
                    <td className="py-2 text-center">{r.year}</td>
                    <td className="py-2 text-right">{r.expense.toLocaleString()}</td>
                    <td className="py-2 text-right">{r.accumulated.toLocaleString()}</td>
                    <td className="py-2 text-right">{r.bookValue.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
      <div className="flex gap-2">
        <Link href="/concept/ias16" className="flex-1 min-h-[44px] py-2.5 text-center border border-primary text-primary rounded-lg text-sm font-bold">IAS 16 개념 보기</Link>
        <Link href="/quiz?tag=IAS16" className="flex-1 min-h-[44px] py-2.5 text-center bg-primary text-white rounded-lg text-sm font-bold">문제 풀기 ({problemCount})</Link>
      </div>
    </div>
  );
}
