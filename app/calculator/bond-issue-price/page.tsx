"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import NumberInput from "@/components/NumberInput";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "사채 발행가액 계산기",
  description: "액면금액, 액면이자율, 시장이자율, 만기를 입력하면 사채 발행가액과 유효이자율법 상각표를 자동 계산합니다.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: "https://accounting-theta-pink.vercel.app" },
      { "@type": "ListItem", position: 2, name: "계산기", item: "https://accounting-theta-pink.vercel.app/calculator" },
      { "@type": "ListItem", position: 3, name: "사채 발행가액 계산기" },
    ],
  },
};

interface Row { period: number; opening: number; interest: number; coupon: number; amortization: number; closing: number; }

export default function BondIssuePriceCalculator() {
  const [faceValue, setFaceValue] = useState<number | null>(null);
  const [couponRate, setCouponRate] = useState<number | null>(null);
  const [marketRate, setMarketRate] = useState<number | null>(null);
  const [years, setYears] = useState<number | null>(null);
  const [frequency, setFrequency] = useState<"annual" | "semiannual">("annual");

  const errors = useMemo(() => {
    const e: string[] = [];
    if (faceValue !== null && faceValue <= 0) e.push("액면금액은 0보다 커야 합니다.");
    if (couponRate !== null && couponRate < 0) e.push("액면이자율은 0 이상이어야 합니다.");
    if (marketRate !== null && marketRate < 0) e.push("시장이자율은 0 이상이어야 합니다.");
    if (years !== null && (years < 1 || !Number.isInteger(years))) e.push("만기는 1 이상 정수여야 합니다.");
    return e;
  }, [faceValue, couponRate, marketRate, years]);

  const canCalc =
    faceValue !== null && faceValue > 0 &&
    couponRate !== null && couponRate >= 0 &&
    marketRate !== null && marketRate >= 0 &&
    years !== null && years >= 1 &&
    errors.length === 0;

  const result = useMemo(() => {
    if (!canCalc) return null;

    const periodsPerYear = frequency === "semiannual" ? 2 : 1;
    const n = years! * periodsPerYear;
    const periodMarketRate = marketRate! / 100 / periodsPerYear;
    const periodCouponRate = couponRate! / 100 / periodsPerYear;
    const couponPayment = faceValue! * periodCouponRate;

    const pvPrincipal = periodMarketRate === 0 ? faceValue! : faceValue! / Math.pow(1 + periodMarketRate, n);
    const pvAnnuity =
      periodMarketRate === 0
        ? couponPayment * n
        : couponPayment * (1 - Math.pow(1 + periodMarketRate, -n)) / periodMarketRate;
    const issuePrice = pvPrincipal + pvAnnuity;

    let issueType: "discount" | "premium" | "par";
    if (couponRate! > marketRate!) issueType = "premium";
    else if (couponRate! < marketRate!) issueType = "discount";
    else issueType = "par";

    const difference = Math.abs(issuePrice - faceValue!);

    // 유효이자율법 상각표
    const rows: Row[] = [];
    let balance = issuePrice;
    for (let i = 1; i <= n; i++) {
      const opening = balance;
      let interest = opening * periodMarketRate;
      let coupon = couponPayment;
      let amortization = interest - coupon;
      let closing = opening + amortization;

      if (i === n) {
        // 마지막 회차 반올림 보정: 장부금액이 정확히 액면금액에 도달하도록
        closing = faceValue!;
        amortization = closing - opening;
        interest = coupon + amortization;
      }

      rows.push({
        period: i,
        opening: Math.round(opening),
        interest: Math.round(interest),
        coupon: Math.round(coupon),
        amortization: Math.round(amortization),
        closing: Math.round(closing),
      });
      balance = closing;
    }

    return {
      issuePrice: Math.round(issuePrice),
      issueType,
      difference: Math.round(difference),
      couponPayment: Math.round(couponPayment),
      n,
      periodsPerYear,
      rows,
    };
  }, [canCalc, faceValue, couponRate, marketRate, years, frequency]);

  const issueTypeLabel = {
    discount: "할인발행",
    premium: "할증발행",
    par: "액면발행",
  };

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="flex items-center gap-2 mb-5">
        <Link href="/" className="text-xs text-text-sub hover:text-primary">← 홈</Link>
        <span className="text-xs text-border">/</span>
        <Link href="/calculator" className="text-xs text-text-sub hover:text-primary">계산기</Link>
        <span className="text-xs text-border">/</span>
        <span className="text-xs font-semibold text-text">사채 발행가액</span>
      </div>

      <h1 className="text-xl font-extrabold text-text mb-1">사채 발행가액 계산기</h1>
      <p className="text-xs text-text-sub mb-5">액면·시장이자율로 발행가액과 유효이자율법 상각표 자동 계산</p>

      <div className="bg-surface border border-border rounded-lg p-4 mb-5 space-y-3">
        <div>
          <label className="text-xs font-medium text-text block mb-1">액면금액</label>
          <NumberInput value={faceValue} onChange={setFaceValue} placeholder="1,000,000" suffix="원" className="w-full" />
        </div>
        <div>
          <label className="text-xs font-medium text-text block mb-1">액면이자율 (연)</label>
          <NumberInput value={couponRate} onChange={setCouponRate} placeholder="8" suffix="%" className="w-full" min={0} />
        </div>
        <div>
          <label className="text-xs font-medium text-text block mb-1">시장이자율 (연)</label>
          <NumberInput value={marketRate} onChange={setMarketRate} placeholder="10" suffix="%" className="w-full" min={0} />
        </div>
        <div>
          <label className="text-xs font-medium text-text block mb-1">만기</label>
          <NumberInput value={years} onChange={setYears} placeholder="3" suffix="년" integer className="w-full" min={1} />
        </div>
        <div>
          <label className="text-xs font-medium text-text block mb-1">이자지급주기</label>
          <div className="flex gap-2">
            {([
              { key: "annual", label: "연 1회" },
              { key: "semiannual", label: "반기(연 2회)" },
            ] as const).map((f) => (
              <button
                key={f.key}
                onClick={() => setFrequency(f.key)}
                className={`flex-1 min-h-[40px] px-3 py-2 text-xs border rounded-md font-medium transition-colors ${frequency === f.key ? "border-primary bg-primary-bg/30 text-primary" : "border-border text-text-sub"}`}
              >
                {f.label}
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
            <p className="text-xs text-text-sub mb-1">사채 발행가액</p>
            <p className="text-2xl font-extrabold text-primary">{result.issuePrice.toLocaleString()}원</p>
            <p className="text-xs text-text-sub mt-2">
              액면이자율 {couponRate}% {result.issueType === "par" ? "=" : result.issueType === "premium" ? ">" : "<"} 시장이자율 {marketRate}%
              {" → "}
              <span className="font-bold text-text">{issueTypeLabel[result.issueType]}</span>
            </p>
            {result.issueType !== "par" && (
              <p className="text-xs text-text-sub mt-1">
                사채{result.issueType === "discount" ? "할인" : "할증"}발행차금 = <span className="text-text font-bold">{result.difference.toLocaleString()}원</span>
              </p>
            )}
          </div>

          <div className="bg-surface border border-border rounded-lg p-3 mb-4">
            <p className="text-xs font-bold text-text mb-2">발행 시 분개</p>
            {result.issueType === "discount" && (
              <>
                <p className="text-xs text-debit">(차) 현금 {result.issuePrice.toLocaleString()}</p>
                <p className="text-xs text-debit">(차) 사채할인발행차금 {result.difference.toLocaleString()}</p>
                <p className="text-xs text-credit">(대) 사채 {faceValue!.toLocaleString()}</p>
              </>
            )}
            {result.issueType === "premium" && (
              <>
                <p className="text-xs text-debit">(차) 현금 {result.issuePrice.toLocaleString()}</p>
                <p className="text-xs text-credit">(대) 사채 {faceValue!.toLocaleString()}</p>
                <p className="text-xs text-credit">(대) 사채할증발행차금 {result.difference.toLocaleString()}</p>
              </>
            )}
            {result.issueType === "par" && (
              <>
                <p className="text-xs text-debit">(차) 현금 {result.issuePrice.toLocaleString()}</p>
                <p className="text-xs text-credit">(대) 사채 {faceValue!.toLocaleString()}</p>
              </>
            )}
          </div>

          <p className="text-xs font-bold text-text mb-2">유효이자율법 상각표 (회당 액면이자 {result.couponPayment.toLocaleString()}원)</p>
          <div className="overflow-x-auto mb-5">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-border text-text-sub">
                  <th className="py-2 text-center">회차</th>
                  <th className="py-2 text-right">기초장부금액</th>
                  <th className="py-2 text-right">유효이자</th>
                  <th className="py-2 text-right">액면이자</th>
                  <th className="py-2 text-right">상각액</th>
                  <th className="py-2 text-right">기말장부금액</th>
                </tr>
              </thead>
              <tbody>
                {result.rows.map((r) => (
                  <tr key={r.period} className="border-b border-border/50">
                    <td className="py-2 text-center">{r.period}</td>
                    <td className="py-2 text-right">{r.opening.toLocaleString()}</td>
                    <td className="py-2 text-right">{r.interest.toLocaleString()}</td>
                    <td className="py-2 text-right">{r.coupon.toLocaleString()}</td>
                    <td className="py-2 text-right">{r.amortization.toLocaleString()}</td>
                    <td className="py-2 text-right">{r.closing.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-text-sub mb-4">
            상각액 = 유효이자(기초장부금액 × 시장이자율) − 액면이자. {result.issueType === "discount" ? "할인발행이므로 상각액만큼 매 기간 장부금액이 액면금액을 향해 증가합니다." : result.issueType === "premium" ? "할증발행이므로 상각액(음수)만큼 매 기간 장부금액이 액면금액을 향해 감소합니다." : "액면발행이므로 유효이자와 액면이자가 매 기간 동일합니다."}
          </p>
        </>
      )}

      <div className="flex gap-2">
        <Link href="/concepts" className="flex-1 min-h-[44px] py-2.5 text-center border border-primary text-primary rounded-lg text-sm font-bold">
          관련 개념 보기
        </Link>
        <Link href="/quiz/common/calculation" className="flex-1 min-h-[44px] py-2.5 text-center bg-primary text-white rounded-lg text-sm font-bold">
          계산 문제 풀기
        </Link>
      </div>
    </div>
  );
}
