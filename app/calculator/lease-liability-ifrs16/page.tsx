"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

/* ── helpers ── */
function fmt(n: number): string {
  return n.toLocaleString("ko-KR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

function parseNum(v: string): number {
  return Number(v.replace(/,/g, "")) || 0;
}

function toCommaInput(v: string): string {
  const raw = v.replace(/[^0-9]/g, "");
  if (!raw) return "";
  return Number(raw).toLocaleString("ko-KR");
}

/* ── types ── */
interface Row {
  period: number;
  opening: number;
  interest: number;
  payment: number;
  closing: number;
}

/* ── JSON-LD ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "IFRS16 리스부채 계산기",
  description: "리스료 현재가치 및 상환스케줄 자동 계산",
  applicationCategory: "FinanceApplication",
  inLanguage: "ko",
  offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" },
};

export default function LeaseCalculatorPage() {
  const [paymentInput, setPaymentInput] = useState("");
  const [periods, setPeriods] = useState("");
  const [rateInput, setRateInput] = useState("");
  const [timing, setTiming] = useState<"end" | "beginning">("end");

  const payment = parseNum(paymentInput);
  const n = Number(periods) || 0;
  const r = (Number(rateInput) || 0) / 100;

  const result = useMemo(() => {
    if (payment <= 0 || n <= 0 || r <= 0) return null;

    /* PV 계산 */
    const pvEnd = payment * (1 - Math.pow(1 + r, -n)) / r;
    const pv = timing === "beginning" ? pvEnd * (1 + r) : pvEnd;

    /* 상환스케줄 */
    const rows: Row[] = [];
    let balance = pv;

    for (let i = 1; i <= n; i++) {
      if (timing === "beginning" && i === 1) {
        // 기초 지급: 첫 회차는 이자 없이 리스료 지급
        rows.push({
          period: i,
          opening: balance,
          interest: 0,
          payment,
          closing: balance - payment,
        });
        balance = balance - payment;
      } else {
        const interest = Math.round(balance * r);
        const closing = balance + interest - payment;
        rows.push({
          period: i,
          opening: balance,
          interest,
          payment,
          closing: Math.max(closing, 0),
        });
        balance = Math.max(closing, 0);
      }
    }

    return { pv: Math.round(pv), rows };
  }, [payment, n, r, timing]);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <title>IFRS16 리스부채 계산기 | 리스 현재가치 자동 계산</title>
      <meta
        name="description"
        content="IFRS16 리스부채 현재가치와 상환스케줄을 자동 계산합니다. 기말/기초 지급 방식 모두 지원."
      />

      <h1 className="text-2xl font-extrabold text-primary mb-1">
        IFRS 16 리스부채 계산기
      </h1>
      <p className="text-sm text-text-sub mb-6">
        리스료의 현재가치와 상환스케줄을 자동으로 계산합니다.
      </p>

      {/* 입력 폼 */}
      <div className="bg-surface border border-border rounded-lg p-5 mb-6 space-y-4">
        <div>
          <label className="block text-sm font-semibold text-text mb-1">
            연간 리스료 (원)
          </label>
          <input
            type="text"
            inputMode="numeric"
            value={paymentInput}
            onChange={(e) => setPaymentInput(toCommaInput(e.target.value))}
            placeholder="10,000,000"
            className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-text mb-1">
              리스 기간 (년)
            </label>
            <input
              type="number"
              min={1}
              value={periods}
              onChange={(e) => setPeriods(e.target.value)}
              placeholder="5"
              className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-text mb-1">
              할인율 (%)
            </label>
            <input
              type="number"
              min={0}
              step={0.1}
              value={rateInput}
              onChange={(e) => setRateInput(e.target.value)}
              placeholder="5"
              className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-text mb-1">
            지급 시점
          </label>
          <div className="flex gap-3">
            {(["end", "beginning"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTiming(t)}
                className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  timing === t
                    ? "bg-primary text-white"
                    : "bg-surface border border-border text-text-sub hover:border-primary"
                }`}
              >
                {t === "end" ? "기말 지급" : "기초 지급"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 결과 */}
      {result && (
        <>
          {/* 현재가치 */}
          <div className="bg-primary-bg/40 border border-primary/10 rounded-lg p-5 mb-6 text-center">
            <p className="text-sm text-text-sub mb-1">리스부채 현재가치</p>
            <p className="text-3xl font-extrabold text-primary">
              {fmt(result.pv)}
              <span className="text-base font-normal text-text-sub ml-1">
                원
              </span>
            </p>
          </div>

          {/* 분개 */}
          <div className="bg-surface border border-border rounded-lg p-5 mb-6">
            <h2 className="font-bold text-text mb-3">인식 시 분개</h2>
            <div className="text-sm space-y-1">
              <p>
                <span className="text-debit font-semibold">(차) 사용권자산</span>{" "}
                {fmt(result.pv)}
              </p>
              <p>
                <span className="text-credit font-semibold">
                  (대) 리스부채
                </span>{" "}
                {fmt(result.pv)}
              </p>
            </div>
          </div>

          {/* 상환스케줄 */}
          <div className="bg-surface border border-border rounded-lg p-5 mb-6">
            <h2 className="font-bold text-text mb-3">상환 스케줄</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-right">
                <thead>
                  <tr className="border-b border-border text-text-sub">
                    <th className="py-2 pr-3 text-left font-semibold">기간</th>
                    <th className="py-2 pr-3 font-semibold">기초 잔액</th>
                    <th className="py-2 pr-3 font-semibold">이자비용</th>
                    <th className="py-2 pr-3 font-semibold">리스료</th>
                    <th className="py-2 font-semibold">기말 잔액</th>
                  </tr>
                </thead>
                <tbody>
                  {result.rows.map((row) => (
                    <tr key={row.period} className="border-b border-border/50">
                      <td className="py-2 pr-3 text-left">{row.period}</td>
                      <td className="py-2 pr-3">{fmt(row.opening)}</td>
                      <td className="py-2 pr-3">{fmt(row.interest)}</td>
                      <td className="py-2 pr-3">{fmt(row.payment)}</td>
                      <td className="py-2">{fmt(row.closing)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {/* 내부 링크 */}
      <div className="flex flex-wrap gap-3 text-sm">
        <Link
          href="/concept/ifrs16"
          className="text-primary hover:underline font-semibold"
        >
          IFRS 16 개념 정리 &rarr;
        </Link>
        <Link
          href="/calculator"
          className="text-text-sub hover:underline"
        >
          계산기 목록으로
        </Link>
      </div>
    </div>
  );
}
