import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "분개하는 법 기초 | 거래를 회계로 옮기는 5단계 원리",
  description:
    "거래를 인식하고 계정과목을 정해 차변·대변으로 배치하는 분개의 5단계 순서를, 단순분개·복합분개 실전 예시로 정리했습니다.",
  openGraph: {
    title: "분개하는 법 기초 | 거래를 회계로 옮기는 5단계 원리",
    description:
      "거래를 인식하고 계정과목을 정해 차변·대변으로 배치하는 분개의 5단계 순서를, 단순분개·복합분개 실전 예시로 정리했습니다.",
    url: "/concept/journal-entry",
  },
  alternates: { canonical: "/concept/journal-entry" },
};

export default function JournalEntryPage() {
  return (
    <div>
      {/* breadcrumb */}
      <div className="flex items-center gap-2 mb-6 flex-wrap">
        <Link href="/" className="text-xs text-text-sub hover:text-primary">← 홈</Link>
        <span className="text-xs text-border">/</span>
        <Link href="/concepts" className="text-xs text-text-sub hover:text-primary">회계 개념</Link>
        <span className="text-xs text-border">/</span>
        <span className="text-xs font-semibold text-text">분개 기초</span>
      </div>

      {/* 헤더 */}
      <div className="mb-8">
        <p className="text-sm text-primary font-bold mb-1">회계 기초</p>
        <h1 className="text-2xl font-extrabold text-text">분개 기초: 거래를 회계로 옮기는 원리</h1>
        <p className="text-xs text-text-sub mt-1">거래 하나를 5단계로 나눠 생각하면 막히지 않습니다.</p>
      </div>

      {/* 정의 */}
      <section className="mb-6">
        <h2 className="font-bold text-sm text-text mb-2">분개란?</h2>
        <p className="text-sm text-text-sub leading-relaxed mb-2">
          분개(分介)는 실제로 일어난 거래를 회계 장부에 기록하기 위해, 관련된 계정과목을 차변과 대변으로 나누어 적는 절차입니다. 회계는 결국 "거래 → 분개 → 장부(원장) → 재무제표"의 흐름으로 만들어지는데, 분개는 그 첫 단계이자 가장 기본이 되는 작업입니다.
        </p>
        <p className="text-sm text-text-sub leading-relaxed">
          분개는 항상 다음 5단계 순서로 진행합니다.
        </p>
        <ol className="list-decimal list-inside space-y-1 mt-2">
          <li className="text-sm text-text-sub leading-relaxed"><strong className="text-text">거래 인식</strong> — 무슨 일이 일어났는지 파악합니다.</li>
          <li className="text-sm text-text-sub leading-relaxed"><strong className="text-text">계정과목 결정</strong> — 그 거래로 어떤 자산·부채·자본·수익·비용이 영향을 받았는지 정합니다.</li>
          <li className="text-sm text-text-sub leading-relaxed"><strong className="text-text">증가·감소 판단</strong> — 각 계정이 늘었는지 줄었는지 확인합니다.</li>
          <li className="text-sm text-text-sub leading-relaxed"><strong className="text-text">차변·대변 배치</strong> — <Link href="/concept/debit-credit" className="text-primary hover:underline">계정 유형별 규칙</Link>에 따라 왼쪽/오른쪽에 나눠 적습니다.</li>
          <li className="text-sm text-text-sub leading-relaxed"><strong className="text-text">금액 기입과 검산</strong> — 차변 합계와 대변 합계가 같은지 확인합니다.</li>
        </ol>
      </section>

      {/* 왜 헷갈리는지 */}
      <section className="mb-6">
        <h2 className="font-bold text-sm text-text mb-2">왜 헷갈릴까요?</h2>
        <p className="text-sm text-text-sub leading-relaxed mb-2">
          가장 많이 막히는 지점은 <strong className="text-text">여러 계정이 동시에 얽히는 거래</strong>입니다. 계정과목이 2개뿐인 단순한 거래는 쉽게 풀리지만, 하나의 거래 대금을 현금·외상·어음으로 나눠 받거나, 세금이나 수수료가 끼어드는 순간 어떤 계정을 몇 개나 넣어야 할지 놓치기 쉽습니다.
        </p>
        <p className="text-sm text-text-sub leading-relaxed">
          또 하나는 거래를 "돈이 오갔다"는 감각으로만 이해하고, 정식 계정과목 이름을 떠올리지 못하는 경우입니다. 예를 들어 "외상으로 팔았다"는 거래를 "매출채권"이라는 계정과목으로 연결하지 못하면, 아무리 거래 내용을 이해해도 분개를 완성할 수 없습니다.
        </p>
      </section>

      {/* 예시: 단계별 시연 */}
      <section className="mb-6">
        <h2 className="font-bold text-sm text-text mb-2">단계별로 따라가 보기</h2>
        <p className="text-sm text-text-sub leading-relaxed mb-2">
          거래: <strong className="text-text">"상품을 800,000원에 판매하고, 500,000원은 현금으로 받고 나머지는 외상으로 했다."</strong>
        </p>
        <div className="bg-surface border border-border rounded-lg p-4 space-y-2">
          <p className="text-sm text-text-sub"><strong className="text-text">① 거래 인식</strong> — 상품 판매, 대금 일부는 현금, 일부는 외상.</p>
          <p className="text-sm text-text-sub"><strong className="text-text">② 계정 결정</strong> — 현금(자산), 매출채권(자산, 외상대금), 매출(수익).</p>
          <p className="text-sm text-text-sub"><strong className="text-text">③ 증가·감소 판단</strong> — 현금 증가, 매출채권 증가, 매출(수익) 발생.</p>
          <p className="text-sm text-text-sub"><strong className="text-text">④ 차변·대변 배치</strong> — 자산 증가는 차변(현금, 매출채권), 수익 발생은 대변(매출).</p>
          <p className="text-sm text-text-sub"><strong className="text-text">⑤ 검산</strong> — 현금 500,000 + 매출채권 300,000 = 매출 800,000. 차변 합계와 대변 합계가 일치합니다.</p>
        </div>
      </section>

      {/* 핵심 요약 표 */}
      <section className="mb-6">
        <h2 className="font-bold text-sm text-text mb-3">핵심 요약: 단순분개 vs 복합분개</h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="bg-surface border-b border-border">
                <th className="p-3 font-bold text-text">구분</th>
                <th className="p-3 font-bold text-text">계정과목 수</th>
                <th className="p-3 font-bold text-text">예시</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="p-3 text-text-sub">단순분개</td>
                <td className="p-3 text-text-sub">차변 1개, 대변 1개 (총 2개)</td>
                <td className="p-3 text-text-sub">비품을 현금으로 구입</td>
              </tr>
              <tr>
                <td className="p-3 text-text-sub">복합분개</td>
                <td className="p-3 text-text-sub">차변 또는 대변 중 한쪽 이상이 2개 이상</td>
                <td className="p-3 text-text-sub">상품을 팔고 대금 일부는 현금, 일부는 외상</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 자주 하는 실수 */}
      <section className="mb-6">
        <h2 className="font-bold text-sm text-text mb-2">자주 하는 실수와 교정</h2>
        <ul className="list-disc list-inside space-y-2">
          <li className="text-sm text-text-sub leading-relaxed">
            <strong className="text-text">거래에서 계정과목을 다 못 찾아 금액이 안 맞음</strong> — 교정: 대금 지급·수령 방식(현금/외상/어음 등)을 따로따로 쪼개서 각각 계정과목으로 인식하세요.
          </li>
          <li className="text-sm text-text-sub leading-relaxed">
            <strong className="text-text">자산 증가 거래인데 습관적으로 대변에 적음</strong> — 방향 자체가 헷갈리는 경우는 <Link href="/concept/debit-credit" className="text-primary hover:underline">차변·대변 규칙</Link>부터 다시 확인하세요.
          </li>
          <li className="text-sm text-text-sub leading-relaxed">
            <strong className="text-text">부가가치세(예수금)처럼 부수적으로 따라오는 계정을 빠뜨림</strong> — 실무에서 특히 자주 놓치는 부분입니다. 대금에 세금이나 수수료가 포함되어 있는지 항상 확인하는 습관이 필요합니다.
          </li>
          <li className="text-sm text-text-sub leading-relaxed">
            <strong className="text-text">정식 계정과목명을 쓰지 않고 임의로 이름을 붙임</strong> — "외상값"이 아니라 "매출채권"처럼 정해진 계정과목명을 써야 합니다. <Link href="/accounts" className="text-primary hover:underline">계정과목 사전</Link>에서 정확한 이름을 확인하세요.
          </li>
        </ul>
      </section>

      {/* 실전 분개 예시 */}
      <section className="mb-6">
        <h2 className="font-bold text-sm text-text mb-3">실전 분개 예시</h2>
        <div className="space-y-2">
          <div className="bg-surface border border-border rounded-lg p-3">
            <p className="text-xs text-text-sub mb-2">(단순분개) 비품 1,000,000원을 현금으로 구입했다.</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-red-50/30 rounded p-2">
                <p className="font-bold text-debit text-[10px] mb-1">차변</p>
                <p className="text-text-sub">비품(자산) <span className="text-text">1,000,000</span></p>
              </div>
              <div className="bg-blue-50/30 rounded p-2">
                <p className="font-bold text-credit text-[10px] mb-1">대변</p>
                <p className="text-text-sub">현금(자산) <span className="text-text">1,000,000</span></p>
              </div>
            </div>
          </div>
          <div className="bg-surface border border-border rounded-lg p-3">
            <p className="text-xs text-text-sub mb-2">(복합분개) 상품 800,000원을 판매하고 현금 500,000원, 나머지는 외상으로 받았다.</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-red-50/30 rounded p-2">
                <p className="font-bold text-debit text-[10px] mb-1">차변</p>
                <p className="text-text-sub">현금(자산) <span className="text-text">500,000</span></p>
                <p className="text-text-sub">매출채권(자산) <span className="text-text">300,000</span></p>
              </div>
              <div className="bg-blue-50/30 rounded p-2">
                <p className="font-bold text-credit text-[10px] mb-1">대변</p>
                <p className="text-text-sub">매출(수익) <span className="text-text">800,000</span></p>
              </div>
            </div>
          </div>
          <div className="bg-surface border border-border rounded-lg p-3">
            <p className="text-xs text-text-sub mb-2">(복합분개) 급여 2,000,000원 중 원천징수 소득세 100,000원을 뺀 나머지를 현금으로 지급했다.</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-red-50/30 rounded p-2">
                <p className="font-bold text-debit text-[10px] mb-1">차변</p>
                <p className="text-text-sub">급여(비용) <span className="text-text">2,000,000</span></p>
              </div>
              <div className="bg-blue-50/30 rounded p-2">
                <p className="font-bold text-credit text-[10px] mb-1">대변</p>
                <p className="text-text-sub">예수금(부채) <span className="text-text">100,000</span></p>
                <p className="text-text-sub">현금(자산) <span className="text-text">1,900,000</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 문제 풀기 */}
      <Link
        href="/quiz/common/journal"
        className="block w-full min-h-[44px] py-3 bg-primary text-white rounded-lg font-bold text-sm text-center active:scale-[0.98] transition-transform mb-6"
      >
        분개 기초 문제 풀기 →
      </Link>

      {/* 관련 개념 */}
      <section>
        <h2 className="font-bold text-sm text-text mb-3">관련 개념</h2>
        <div className="grid gap-2">
          <Link href="/concept/debit-credit" className="flex items-center justify-between p-3 bg-surface border border-border rounded-lg hover:border-primary transition-colors">
            <span className="text-sm text-text">차변과 대변, 헷갈리지 않는 법</span>
            <span className="text-xs text-text-sub">→</span>
          </Link>
          <Link href="/concept/account-titles" className="flex items-center justify-between p-3 bg-surface border border-border rounded-lg hover:border-primary transition-colors">
            <span className="text-sm text-text">계정과목 분류 완전 이해</span>
            <span className="text-xs text-text-sub">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
