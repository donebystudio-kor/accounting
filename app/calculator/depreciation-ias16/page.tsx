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
  year: number;
  depreciation: number;
  accumulated: number;
  bookValue: number;
}

/* ── JSON-LD ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "감가상각 계산기 (IAS16)",
  description: "정액법, 정률법 감가상각비 및 연도별 장부가액 자동 계산",
  applicationCategory: "FinanceApplication",
  inLanguage: "ko",
  offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" },
};

export default function DepreciationCalculatorPage() {
  const [costInput, setCostInput] = useState("");
  const [residualInput, setResidualInput] = useState("");
  const [lifeInput, setLifeInput] = useState("");
  const [method, setMethod] = useState<"straight" | "declining">("straight");

  const cost = parseNum(costInput);
  const residual = parseNum(residualInput);
  const life = Number(lifeInput) || 0;

  const result = useMemo(() => {
    if (cost <= 0 || life <= 0 || residual < 0 || residual >= cost) return null;

    const rows: Row[] = [];

    if (method === "straight") {
      const annual = Math.round((cost - residual) / life);
      let accumulated = 0;

      for (let y = 1; y <= life; y++) {
        // 마지막 연도: 잔여 차액 조정
        const dep = y === life ? cost - residual - accumulated : annual;
        accumulated += dep;
        rows.push({
          year: y,
          depreciation: dep,
          accumulated,
          bookValue: cost - accumulated,
        });
      }

      return { annual, rate: null, rows };
    } else {
      // 정률법: 상각률 = 1 - (residual/cost)^(1/life)
      if (residual <= 0) return null; // 정률법은 잔존가치 > 0 필요
      const rate = 1 - Math.pow(residual / cost, 1 / life);
      let bookValue = cost;
      let accumulated = 0;

      for (let y = 1; y <= life; y++) {
        let dep: number;
        if (y === life) {
          dep = bookValue - residual;
        } else {
          dep = Math.round(bookValue * rate);
        }
        accumulated += dep;
        bookValue -= dep;
        rows.push({
          year: y,
          depreciation: dep,
          accumulated,
          bookValue: Math.max(bookValue, residual),
        });
      }

      return { annual: rows[0]?.depreciation ?? 0, rate, rows };
    }
  }, [cost, residual, life, method]);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <title>감가상각 계산기 | 정액법 정률법 자동 계산 (IAS16)</title>
      <meta
        name="description"
        content="IAS16 기준 정액법, 정률법 감가상각비와 연도별 장부가액을 자동 계산합니다."
      />

      <h1 className="text-2xl font-extrabold text-primary mb-1">
        IAS 16 감가상각 계산기
      </h1>
      <p className="text-sm text-text-sub mb-6">
        정액법, 정률법 감가상각비와 연도별 장부가액을 계산합니다.
      </p>

      {/* 입력 폼 */}
      <div className="bg-surface border border-border rounded-lg p-5 mb-6 space-y-4">
        <div>
          <label className="block text-sm font-semibold text-text mb-1">
            취득원가 (원)
          </label>
          <input
            type="text"
            inputMode="numeric"
            value={costInput}
            onChange={(e) => setCostInput(toCommaInput(e.target.value))}
            placeholder="100,000,000"
            className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-text mb-1">
              잔존가치 (원)
            </label>
            <input
              type="text"
              inputMode="numeric"
              value={residualInput}
              onChange={(e) => setResidualInput(toCommaInput(e.target.value))}
              placeholder="10,000,000"
              className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-text mb-1">
              내용연수 (년)
            </label>
            <input
              type="number"
              min={1}
              value={lifeInput}
              onChange={(e) => setLifeInput(e.target.value)}
              placeholder="5"
              className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-text mb-1">
            상각방법
          </label>
          <div className="flex gap-3">
            {(["straight", "declining"] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMethod(m)}
                className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  method === m
                    ? "bg-primary text-white"
                    : "bg-surface border border-border text-text-sub hover:border-primary"
                }`}
              >
                {m === "straight" ? "정액법" : "정률법"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 결과 */}
      {result && (
        <>
          {/* 요약 */}
          <div className="bg-primary-bg/40 border border-primary/10 rounded-lg p-5 mb-6 text-center">
            <p className="text-sm text-text-sub mb-1">
              {method === "straight" ? "연간 감가상각비 (정액법)" : "1차년도 감가상각비 (정률법)"}
            </p>
            <p className="text-3xl font-extrabold text-primary">
              {fmt(result.annual)}
              <span className="text-base font-normal text-text-sub ml-1">
                원
              </span>
            </p>
            {result.rate !== null && (
              <p className="text-sm text-text-sub mt-1">
                상각률: {(result.rate * 100).toFixed(2)}%
              </p>
            )}
          </div>

          {/* 분개 */}
          <div className="bg-surface border border-border rounded-lg p-5 mb-6">
            <h2 className="font-bold text-text mb-3">매기 분개</h2>
            <div className="text-sm space-y-1">
              <p>
                <span className="text-debit font-semibold">
                  (차) 감가상각비
                </span>{" "}
                xxx
              </p>
              <p>
                <span className="text-credit font-semibold">
                  (대) 감가상각누계액
                </span>{" "}
                xxx
              </p>
            </div>
          </div>

          {/* 연도별 테이블 */}
          <div className="bg-surface border border-border rounded-lg p-5 mb-6">
            <h2 className="font-bold text-text mb-3">연도별 감가상각 내역</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-right">
                <thead>
                  <tr className="border-b border-border text-text-sub">
                    <th className="py-2 pr-3 text-left font-semibold">연도</th>
                    <th className="py-2 pr-3 font-semibold">감가상각비</th>
                    <th className="py-2 pr-3 font-semibold">누계액</th>
                    <th className="py-2 font-semibold">장부가액</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50 text-text-sub">
                    <td className="py-2 pr-3 text-left">취득시</td>
                    <td className="py-2 pr-3">-</td>
                    <td className="py-2 pr-3">-</td>
                    <td className="py-2">{fmt(cost)}</td>
                  </tr>
                  {result.rows.map((row) => (
                    <tr key={row.year} className="border-b border-border/50">
                      <td className="py-2 pr-3 text-left">{row.year}차년도</td>
                      <td className="py-2 pr-3">{fmt(row.depreciation)}</td>
                      <td className="py-2 pr-3">{fmt(row.accumulated)}</td>
                      <td className="py-2">{fmt(row.bookValue)}</td>
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
          href="/concept/ias16"
          className="text-primary hover:underline font-semibold"
        >
          IAS 16 개념 정리 &rarr;
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
