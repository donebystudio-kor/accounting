"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import NumberInput from "@/components/NumberInput";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "재무비율 계산기",
  description: "유동자산, 부채, 매출액 등을 입력하면 유동비율, 부채비율, ROE, ROA 등 주요 재무비율을 자동 계산합니다.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: "https://accounting-theta-pink.vercel.app" },
      { "@type": "ListItem", position: 2, name: "계산기", item: "https://accounting-theta-pink.vercel.app/calculator" },
      { "@type": "ListItem", position: 3, name: "재무비율 계산기" },
    ],
  },
};

interface RatioRow {
  label: string;
  formula: string;
  value: number | null;
  unit: "%" | "회";
  guide: string;
}

export default function FinancialRatiosCalculator() {
  const [currentAssets, setCurrentAssets] = useState<number | null>(null);
  const [currentLiabilities, setCurrentLiabilities] = useState<number | null>(null);
  const [inventory, setInventory] = useState<number | null>(null);
  const [totalAssets, setTotalAssets] = useState<number | null>(null);
  const [totalLiabilities, setTotalLiabilities] = useState<number | null>(null);
  const [equity, setEquity] = useState<number | null>(null);
  const [revenue, setRevenue] = useState<number | null>(null);
  const [netIncome, setNetIncome] = useState<number | null>(null);
  const [operatingIncome, setOperatingIncome] = useState<number | null>(null);

  const ratios: RatioRow[] = useMemo(() => {
    const pct = (n: number) => n * 100;
    return [
      {
        label: "유동비율",
        formula: "유동자산 ÷ 유동부채",
        value: currentAssets !== null && currentLiabilities ? pct(currentAssets / currentLiabilities) : null,
        unit: "%",
        guide: "일반적으로 200% 이상이면 단기 지급능력이 양호하다고 보지만, 업종에 따라 기준이 크게 다릅니다.",
      },
      {
        label: "당좌비율",
        formula: "(유동자산 − 재고자산) ÷ 유동부채",
        value: currentAssets !== null && inventory !== null && currentLiabilities ? pct((currentAssets - inventory) / currentLiabilities) : null,
        unit: "%",
        guide: "재고자산을 제외한 더 보수적인 단기 지급능력 지표로, 100% 이상이면 양호하다고 보는 경우가 많습니다.",
      },
      {
        label: "부채비율",
        formula: "총부채 ÷ 자기자본",
        value: totalLiabilities !== null && equity ? pct(totalLiabilities / equity) : null,
        unit: "%",
        guide: "100% 이하면 안정적, 200%를 넘으면 재무위험이 높다고 보는 경우가 많지만 금융업·건설업 등은 구조적으로 높게 나타납니다.",
      },
      {
        label: "자기자본비율",
        formula: "자기자본 ÷ 총자산",
        value: equity !== null && totalAssets ? pct(equity / totalAssets) : null,
        unit: "%",
        guide: "총자산 중 갚지 않아도 되는 자본의 비중입니다. 50% 이상이면 재무구조가 안정적이라고 보는 경우가 많습니다.",
      },
      {
        label: "ROE (자기자본이익률)",
        formula: "당기순이익 ÷ 자기자본",
        value: netIncome !== null && equity ? pct(netIncome / equity) : null,
        unit: "%",
        guide: "주주 자본이 얼마나 효율적으로 이익을 냈는지 보여줍니다. 시중금리보다 충분히 높아야 투자 매력이 있다고 평가됩니다.",
      },
      {
        label: "ROA (총자산이익률)",
        formula: "당기순이익 ÷ 총자산",
        value: netIncome !== null && totalAssets ? pct(netIncome / totalAssets) : null,
        unit: "%",
        guide: "보유 자산 전체의 수익성을 보여줍니다. 자산집약적 업종(제조·장치산업)은 구조적으로 낮게 나올 수 있습니다.",
      },
      {
        label: "영업이익률",
        formula: "영업이익 ÷ 매출액",
        value: operatingIncome !== null && revenue ? pct(operatingIncome / revenue) : null,
        unit: "%",
        guide: "본업에서 벌어들이는 수익성입니다. 업종별 편차가 매우 커서 절대 기준보다 동종업계·과거 추세와 비교하는 게 유의미합니다.",
      },
      {
        label: "순이익률",
        formula: "당기순이익 ÷ 매출액",
        value: netIncome !== null && revenue ? pct(netIncome / revenue) : null,
        unit: "%",
        guide: "영업외손익·법인세까지 반영된 최종 수익성입니다. 일회성 손익의 영향을 받을 수 있어 영업이익률과 함께 보는 게 좋습니다.",
      },
      {
        label: "총자산회전율",
        formula: "매출액 ÷ 총자산",
        value: revenue !== null && totalAssets ? revenue / totalAssets : null,
        unit: "회",
        guide: "자산을 얼마나 효율적으로 매출에 활용하는지 보여줍니다. 소매·유통업은 높고, 장치산업은 낮게 나오는 게 일반적입니다.",
      },
    ];
  }, [currentAssets, currentLiabilities, inventory, totalAssets, totalLiabilities, equity, revenue, netIncome, operatingIncome]);

  const computedCount = ratios.filter((r) => r.value !== null).length;

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="flex items-center gap-2 mb-5">
        <Link href="/" className="text-xs text-text-sub hover:text-primary">← 홈</Link>
        <span className="text-xs text-border">/</span>
        <Link href="/calculator" className="text-xs text-text-sub hover:text-primary">계산기</Link>
        <span className="text-xs text-border">/</span>
        <span className="text-xs font-semibold text-text">재무비율</span>
      </div>

      <h1 className="text-xl font-extrabold text-text mb-1">재무비율 계산기</h1>
      <p className="text-xs text-text-sub mb-5">재무상태표·손익계산서 숫자로 유동성·안정성·수익성 비율 자동 계산</p>

      <div className="bg-surface border border-border rounded-lg p-4 mb-5 space-y-3">
        <p className="text-[11px] text-text-sub">필요한 항목만 입력해도 계산 가능한 비율만 자동으로 표시됩니다.</p>
        <div>
          <label className="text-xs font-medium text-text block mb-1">유동자산</label>
          <NumberInput value={currentAssets} onChange={setCurrentAssets} placeholder="500,000,000" suffix="원" className="w-full" min={0} />
        </div>
        <div>
          <label className="text-xs font-medium text-text block mb-1">유동부채</label>
          <NumberInput value={currentLiabilities} onChange={setCurrentLiabilities} placeholder="250,000,000" suffix="원" className="w-full" min={0} />
        </div>
        <div>
          <label className="text-xs font-medium text-text block mb-1">재고자산</label>
          <NumberInput value={inventory} onChange={setInventory} placeholder="100,000,000" suffix="원" className="w-full" min={0} />
        </div>
        <div>
          <label className="text-xs font-medium text-text block mb-1">총자산</label>
          <NumberInput value={totalAssets} onChange={setTotalAssets} placeholder="1,000,000,000" suffix="원" className="w-full" min={0} />
        </div>
        <div>
          <label className="text-xs font-medium text-text block mb-1">총부채</label>
          <NumberInput value={totalLiabilities} onChange={setTotalLiabilities} placeholder="400,000,000" suffix="원" className="w-full" min={0} />
        </div>
        <div>
          <label className="text-xs font-medium text-text block mb-1">자기자본</label>
          <NumberInput value={equity} onChange={setEquity} placeholder="600,000,000" suffix="원" className="w-full" min={0} />
        </div>
        <div>
          <label className="text-xs font-medium text-text block mb-1">매출액</label>
          <NumberInput value={revenue} onChange={setRevenue} placeholder="800,000,000" suffix="원" className="w-full" min={0} />
        </div>
        <div>
          <label className="text-xs font-medium text-text block mb-1">영업이익</label>
          <NumberInput value={operatingIncome} onChange={setOperatingIncome} placeholder="80,000,000" suffix="원" className="w-full" min={0} />
        </div>
        <div>
          <label className="text-xs font-medium text-text block mb-1">당기순이익</label>
          <NumberInput value={netIncome} onChange={setNetIncome} placeholder="60,000,000" suffix="원" className="w-full" min={0} />
        </div>
      </div>

      {computedCount > 0 && (
        <div className="mb-5">
          <p className="text-xs font-bold text-text mb-2">계산 결과 해석</p>
          <div className="space-y-2">
            {ratios.filter((r) => r.value !== null).map((r) => (
              <div key={r.label} className="bg-surface border border-border rounded-lg p-3">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm font-bold text-text">{r.label}</p>
                  <p className="text-lg font-extrabold text-primary">
                    {r.unit === "%" ? r.value!.toFixed(1) : r.value!.toFixed(2)}{r.unit}
                  </p>
                </div>
                <p className="text-[11px] text-text-sub">{r.formula}</p>
                <p className="text-[11px] text-text-sub mt-1">{r.guide}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {computedCount === 0 && (
        <p className="text-xs text-text-sub bg-surface border border-border rounded-lg p-4 mb-5 text-center">위 항목을 입력하면 계산 가능한 비율이 여기에 표시됩니다.</p>
      )}

      <p className="text-[11px] text-text-sub mb-4">위 해석 기준은 일반적으로 통용되는 참고 수치일 뿐이며, 업종·기업 규모·경기 상황에 따라 적정 수준이 크게 달라질 수 있습니다. 동종업계 평균이나 해당 기업의 과거 추세와 비교하는 것이 더 정확합니다.</p>

      <div className="flex gap-2">
        <Link href="/concept/financial-statements" className="flex-1 min-h-[44px] py-2.5 text-center border border-primary text-primary rounded-lg text-sm font-bold">
          재무제표 개념 보기
        </Link>
        <Link href="/quiz/common/ox" className="flex-1 min-h-[44px] py-2.5 text-center bg-primary text-white rounded-lg text-sm font-bold">
          관련 문제 풀기
        </Link>
      </div>
    </div>
  );
}
