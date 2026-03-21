"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import NumberInput from "@/components/NumberInput";
import { PROBLEMS } from "@/constants/problems";

const jsonLd = {
  "@context": "https://schema.org", "@type": "WebPage", name: "대손충당금 계산기",
  breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "홈", item: "https://accounting-theta-pink.vercel.app" },
    { "@type": "ListItem", position: 2, name: "계산기", item: "https://accounting-theta-pink.vercel.app/calculator" },
    { "@type": "ListItem", position: 3, name: "대손충당금 계산기" },
  ]},
};

interface Bucket { label: string; balance: number | null; lossRate: number | null; }

const LABELS = ["정상 (0~30일)", "요주의 (31~90일)", "부실 (91~180일)", "대손 (181일+)"];

export default function EclCalculator() {
  const [buckets, setBuckets] = useState<Bucket[]>(
    LABELS.map((label) => ({ label, balance: null, lossRate: null }))
  );
  const [existingAllowance, setExistingAllowance] = useState<number | null>(null);

  const problemCount = PROBLEMS.filter((p) => p.tags?.includes("IFRS9")).length;

  const updateBucket = (i: number, field: "balance" | "lossRate", val: number | null) => {
    setBuckets((prev) => prev.map((b, j) => j === i ? { ...b, [field]: val } : b));
  };

  const errors = useMemo(() => {
    const e: string[] = [];
    buckets.forEach((b) => {
      if (b.balance !== null && b.balance < 0) e.push(`${b.label}: 잔액은 0 이상이어야 합니다.`);
      if (b.lossRate !== null && b.lossRate < 0) e.push(`${b.label}: 손실률은 0 이상이어야 합니다.`);
    });
    if (existingAllowance !== null && existingAllowance < 0) e.push("기존 충당금은 0 이상이어야 합니다.");
    return e;
  }, [buckets, existingAllowance]);

  const canCalc = buckets.some((b) => b.balance !== null && b.balance > 0 && b.lossRate !== null && b.lossRate >= 0) && errors.length === 0;

  const result = useMemo(() => {
    if (!canCalc) return null;
    const rows = buckets.map((b) => {
      const bal = b.balance ?? 0;
      const rate = (b.lossRate ?? 0) / 100;
      const ecl = Math.round(bal * rate);
      return { label: b.label, balance: bal, lossRate: b.lossRate ?? 0, ecl };
    });
    const totalRequired = rows.reduce((s, r) => s + r.ecl, 0);
    const existing = existingAllowance ?? 0;
    const additional = totalRequired - existing;
    return { rows, totalRequired, existing, additional };
  }, [canCalc, buckets, existingAllowance]);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="flex items-center gap-2 mb-5">
        <Link href="/" className="text-xs text-text-sub hover:text-primary">← 홈</Link>
        <span className="text-xs text-border">/</span>
        <Link href="/calculator" className="text-xs text-text-sub hover:text-primary">계산기</Link>
        <span className="text-xs text-border">/</span>
        <span className="text-xs font-semibold text-text">대손충당금</span>
      </div>
      <h1 className="text-xl font-extrabold text-text mb-1">대손충당금 계산기 (ECL)</h1>
      <p className="text-xs text-text-sub mb-5">IFRS9 기대신용손실 자동 계산</p>

      <div className="bg-surface border border-border rounded-lg p-4 mb-5 space-y-4">
        {buckets.map((b, i) => (
          <div key={i}>
            <p className="text-xs font-medium text-text mb-2">{b.label}</p>
            <div className="grid grid-cols-2 gap-2">
              <NumberInput value={b.balance} onChange={(v) => updateBucket(i, "balance", v)} placeholder="잔액" suffix="원" className="w-full" min={0} />
              <NumberInput value={b.lossRate} onChange={(v) => updateBucket(i, "lossRate", v)} placeholder="손실률" suffix="%" className="w-full" min={0} />
            </div>
          </div>
        ))}
        <div>
          <p className="text-xs font-medium text-text mb-1">기존 대손충당금 잔액 (선택)</p>
          <NumberInput value={existingAllowance} onChange={setExistingAllowance} placeholder="0" suffix="원" className="w-full" min={0} />
        </div>
        {errors.length > 0 && <div className="text-xs text-wrong">{errors.join(" ")}</div>}
      </div>

      {result && (
        <>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-xs">
              <thead><tr className="border-b border-border text-text-sub">
                <th className="py-2 text-left">구간</th><th className="py-2 text-right">잔액</th><th className="py-2 text-right">손실률</th><th className="py-2 text-right">ECL</th>
              </tr></thead>
              <tbody>
                {result.rows.map((r) => (
                  <tr key={r.label} className="border-b border-border/50">
                    <td className="py-2">{r.label}</td>
                    <td className="py-2 text-right">{r.balance.toLocaleString()}</td>
                    <td className="py-2 text-right">{r.lossRate}%</td>
                    <td className="py-2 text-right font-medium">{r.ecl.toLocaleString()}</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-border font-bold">
                  <td className="py-2" colSpan={3}>총 필요 충당금</td>
                  <td className="py-2 text-right text-primary">{result.totalRequired.toLocaleString()}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-3 gap-2 mb-4 text-center text-xs">
            <div className="bg-surface border border-border rounded-lg p-3">
              <p className="text-text-sub">필요 충당금</p>
              <p className="font-bold text-text">{result.totalRequired.toLocaleString()}</p>
            </div>
            <div className="bg-surface border border-border rounded-lg p-3">
              <p className="text-text-sub">기존 잔액</p>
              <p className="font-bold text-text">{result.existing.toLocaleString()}</p>
            </div>
            <div className={`border rounded-lg p-3 ${result.additional >= 0 ? "bg-red-50 border-wrong/30" : "bg-green-50 border-correct/30"}`}>
              <p className="text-text-sub">{result.additional >= 0 ? "추가 설정" : "환입"}</p>
              <p className={`font-bold ${result.additional >= 0 ? "text-wrong" : "text-correct"}`}>{Math.abs(result.additional).toLocaleString()}</p>
            </div>
          </div>

          {result.additional !== 0 && (
            <div className="bg-surface border border-border rounded-lg p-3 mb-4">
              <p className="text-xs font-bold text-text mb-1">분개</p>
              {result.additional > 0 ? (
                <><p className="text-xs text-debit">(차) 대손상각비 {result.additional.toLocaleString()}</p>
                <p className="text-xs text-credit">(대) 대손충당금 {result.additional.toLocaleString()}</p></>
              ) : (
                <><p className="text-xs text-debit">(차) 대손충당금 {Math.abs(result.additional).toLocaleString()}</p>
                <p className="text-xs text-credit">(대) 대손충당금환입 {Math.abs(result.additional).toLocaleString()}</p></>
              )}
            </div>
          )}
        </>
      )}

      <div className="flex gap-2">
        <Link href="/concept/ifrs9" className="flex-1 min-h-[44px] py-2.5 text-center border border-primary text-primary rounded-lg text-sm font-bold">IFRS 9 개념 보기</Link>
        <Link href="/quiz?tag=IFRS9" className="flex-1 min-h-[44px] py-2.5 text-center bg-primary text-white rounded-lg text-sm font-bold">문제 풀기 ({problemCount})</Link>
      </div>
    </div>
  );
}
