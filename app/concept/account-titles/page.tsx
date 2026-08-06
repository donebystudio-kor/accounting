import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "계정과목 분류 완전 정리 | 자산·부채·자본·수익·비용 구분법",
  description:
    "계정과목을 자산·부채·자본·수익·비용 5대 요소로 분류하는 기준과, 선급금 vs 선급비용처럼 헷갈리는 계정 쌍을 비교표로 정리했습니다.",
  openGraph: {
    title: "계정과목 분류 완전 정리 | 자산·부채·자본·수익·비용 구분법",
    description:
      "계정과목을 자산·부채·자본·수익·비용 5대 요소로 분류하는 기준과, 선급금 vs 선급비용처럼 헷갈리는 계정 쌍을 비교표로 정리했습니다.",
    url: "/concept/account-titles",
  },
  alternates: { canonical: "/concept/account-titles" },
};

export default function AccountTitlesPage() {
  return (
    <div>
      {/* breadcrumb */}
      <div className="flex items-center gap-2 mb-6 flex-wrap">
        <Link href="/" className="text-xs text-text-sub hover:text-primary">← 홈</Link>
        <span className="text-xs text-border">/</span>
        <Link href="/concepts" className="text-xs text-text-sub hover:text-primary">회계 개념</Link>
        <span className="text-xs text-border">/</span>
        <span className="text-xs font-semibold text-text">계정과목 분류</span>
      </div>

      {/* 헤더 */}
      <div className="mb-8">
        <p className="text-sm text-primary font-bold mb-1">회계 기초</p>
        <h1 className="text-2xl font-extrabold text-text">계정과목 분류 완전 이해</h1>
        <p className="text-xs text-text-sub mt-1">자산·부채·자본·수익·비용, 그리고 헷갈리는 계정 쌍 구분법</p>
      </div>

      {/* 정의 */}
      <section className="mb-6">
        <h2 className="font-bold text-sm text-text mb-2">계정과목이란?</h2>
        <p className="text-sm text-text-sub leading-relaxed mb-2">
          계정과목은 거래를 기록할 때 사용하는 이름표입니다. "현금", "매출채권", "매입채무"처럼 구체적인 이름이 붙고, 이 이름표들은 모두 다음 5대 요소 중 하나에 속합니다.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li className="text-sm text-text-sub leading-relaxed"><strong className="text-text">자산</strong> — 회사가 소유한 경제적 자원 (현금, 매출채권, 재고자산, 건물 등)</li>
          <li className="text-sm text-text-sub leading-relaxed"><strong className="text-text">부채</strong> — 회사가 갚아야 할 의무 (매입채무, 차입금, 미지급금 등)</li>
          <li className="text-sm text-text-sub leading-relaxed"><strong className="text-text">자본</strong> — 자산에서 부채를 뺀 순자산, 주주의 몫 (자본금, 이익잉여금 등)</li>
          <li className="text-sm text-text-sub leading-relaxed"><strong className="text-text">수익</strong> — 영업활동으로 자본을 증가시키는 것 (매출, 이자수익 등)</li>
          <li className="text-sm text-text-sub leading-relaxed"><strong className="text-text">비용</strong> — 영업활동으로 자본을 감소시키는 것 (매출원가, 급여, 임차료 등)</li>
        </ul>
      </section>

      {/* 대표 계정과목 표 */}
      <section className="mb-6">
        <h2 className="font-bold text-sm text-text mb-3">5대 요소별 대표 계정과목</h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="bg-surface border-b border-border">
                <th className="p-3 font-bold text-text">요소</th>
                <th className="p-3 font-bold text-text">세부 분류</th>
                <th className="p-3 font-bold text-text">대표 계정과목</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="p-3 text-text-sub" rowSpan={2}>자산</td>
                <td className="p-3 text-text-sub">유동자산</td>
                <td className="p-3 text-text-sub">현금, 매출채권, 재고자산, 선급비용</td>
              </tr>
              <tr>
                <td className="p-3 text-text-sub">비유동자산</td>
                <td className="p-3 text-text-sub">건물, 기계장치, 무형자산</td>
              </tr>
              <tr>
                <td className="p-3 text-text-sub" rowSpan={2}>부채</td>
                <td className="p-3 text-text-sub">유동부채</td>
                <td className="p-3 text-text-sub">매입채무, 미지급금, 예수금</td>
              </tr>
              <tr>
                <td className="p-3 text-text-sub">비유동부채</td>
                <td className="p-3 text-text-sub">장기차입금, 사채</td>
              </tr>
              <tr>
                <td className="p-3 text-text-sub">자본</td>
                <td className="p-3 text-text-sub">-</td>
                <td className="p-3 text-text-sub">자본금, 자본잉여금, 이익잉여금</td>
              </tr>
              <tr>
                <td className="p-3 text-text-sub">수익</td>
                <td className="p-3 text-text-sub">-</td>
                <td className="p-3 text-text-sub">매출, 이자수익, 잡이익</td>
              </tr>
              <tr>
                <td className="p-3 text-text-sub">비용</td>
                <td className="p-3 text-text-sub">-</td>
                <td className="p-3 text-text-sub">매출원가, 급여, 임차료, 감가상각비</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-sub leading-relaxed mt-2">
          전체 계정과목을 검색하려면 <Link href="/accounts" className="text-primary hover:underline">계정과목 사전</Link>을 확인하세요.
        </p>
      </section>

      {/* 왜 헷갈리는지 */}
      <section className="mb-6">
        <h2 className="font-bold text-sm text-text mb-2">왜 헷갈릴까요?</h2>
        <p className="text-sm text-text-sub leading-relaxed">
          계정과목이 헷갈리는 이유는 대부분 이름이 비슷한데 성격이 다른 계정들 때문입니다. 이름만 보고 대충 비슷한 걸 골라 쓰면 실무에서도, 시험에서도 틀립니다. 아래에서 실제로 가장 많이 혼동되는 세 쌍을 비교해보겠습니다.
        </p>
      </section>

      {/* 헷갈리는 계정 비교표 */}
      <section className="mb-6">
        <h2 className="font-bold text-sm text-text mb-3">헷갈리는 계정 구분</h2>
        <div className="space-y-3">
          <div className="bg-surface border border-border rounded-lg p-4">
            <p className="text-sm font-bold text-text mb-1">선급금 vs 선급비용</p>
            <p className="text-sm text-text-sub leading-relaxed">
              <strong className="text-text">선급금</strong>은 상품이나 재화를 받기로 하고 미리 낸 돈입니다. 나중에 재고자산 등 실물로 바뀝니다. <strong className="text-text">선급비용</strong>은 아직 제공받지 않은 용역(보험, 임차 등)에 대해 미리 낸 비용으로, 시간이 지나면서 비용으로 대체됩니다. 둘 다 유동자산이지만, 나중에 "무엇으로 바뀌는가"가 다릅니다 — 선급금은 자산(재고)으로, 선급비용은 비용으로 바뀝니다.
            </p>
          </div>
          <div className="bg-surface border border-border rounded-lg p-4">
            <p className="text-sm font-bold text-text mb-1">매출채권 vs 미수금</p>
            <p className="text-sm text-text-sub leading-relaxed">
              <strong className="text-text">매출채권</strong>은 회사의 주된 영업활동(상품·제품 판매)에서 발생한 외상대금입니다. <strong className="text-text">미수금</strong>은 영업활동이 아닌 거래(예: 쓰던 비품을 외상으로 처분)에서 발생한 외상대금입니다. 판단 기준은 "이 거래가 우리 회사의 주된 사업인가"입니다.
            </p>
          </div>
          <div className="bg-surface border border-border rounded-lg p-4">
            <p className="text-sm font-bold text-text mb-1">미지급금 vs 미지급비용</p>
            <p className="text-sm text-text-sub leading-relaxed">
              <strong className="text-text">미지급금</strong>은 이미 금액과 조건이 확정된 거래에서 아직 안 준 돈입니다(예: 비품을 외상으로 구입). <strong className="text-text">미지급비용</strong>은 시간이 지나면서 이미 발생했지만 아직 청구서를 받지 않은 비용입니다(예: 이번 달분 이자인데 청구서는 다음 달에 오는 경우). 미지급금은 "거래는 끝났고 대금만 남은 것", 미지급비용은 "기간 경과에 따라 자동으로 쌓이는 것"이라는 차이가 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 자주 하는 실수 */}
      <section className="mb-6">
        <h2 className="font-bold text-sm text-text mb-2">자주 하는 실수와 교정</h2>
        <ul className="list-disc list-inside space-y-2">
          <li className="text-sm text-text-sub leading-relaxed">
            <strong className="text-text">선급금과 선급비용을 같은 것으로 착각</strong> — 교정: "나중에 물건으로 바뀌는가(선급금), 비용으로 바뀌는가(선급비용)"를 먼저 물어보세요.
          </li>
          <li className="text-sm text-text-sub leading-relaxed">
            <strong className="text-text">매출채권과 미수금을 구분하지 않고 아무거나 씀</strong> — 교정: 주된 영업활동에서 생긴 외상인지 아닌지로 구분하세요.
          </li>
          <li className="text-sm text-text-sub leading-relaxed">
            <strong className="text-text">자본잉여금과 이익잉여금을 혼동</strong> — 자본잉여금은 주주와의 자본거래(증자 등)에서 발생하고, 이익잉여금은 영업활동으로 벌어들인 이익이 쌓인 것입니다. 발생 원천이 다릅니다.
          </li>
          <li className="text-sm text-text-sub leading-relaxed">
            <strong className="text-text">비용과 자산을 헷갈림</strong> — 예를 들어 광고선전비는 원칙적으로 비용이지만, 특정 요건을 충족한 개발 지출은 무형자산(개발비)으로 자산화됩니다. 지출했다고 무조건 비용은 아닙니다.
          </li>
        </ul>
      </section>

      {/* 실전 분개 예시 */}
      <section className="mb-6">
        <h2 className="font-bold text-sm text-text mb-3">실전 분개 예시</h2>
        <div className="space-y-2">
          <div className="bg-surface border border-border rounded-lg p-3">
            <p className="text-xs text-text-sub mb-2">다음 달 상품 인도를 조건으로 500,000원을 미리 현금으로 지급했다.</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-red-50/30 rounded p-2">
                <p className="font-bold text-debit text-[10px] mb-1">차변</p>
                <p className="text-text-sub">선급금(자산) <span className="text-text">500,000</span></p>
              </div>
              <div className="bg-blue-50/30 rounded p-2">
                <p className="font-bold text-credit text-[10px] mb-1">대변</p>
                <p className="text-text-sub">현금(자산) <span className="text-text">500,000</span></p>
              </div>
            </div>
          </div>
          <div className="bg-surface border border-border rounded-lg p-3">
            <p className="text-xs text-text-sub mb-2">1년치 보험료 1,200,000원을 현금으로 선지급했다.</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-red-50/30 rounded p-2">
                <p className="font-bold text-debit text-[10px] mb-1">차변</p>
                <p className="text-text-sub">선급비용(자산) <span className="text-text">1,200,000</span></p>
              </div>
              <div className="bg-blue-50/30 rounded p-2">
                <p className="font-bold text-credit text-[10px] mb-1">대변</p>
                <p className="text-text-sub">현금(자산) <span className="text-text">1,200,000</span></p>
              </div>
            </div>
          </div>
          <div className="bg-surface border border-border rounded-lg p-3">
            <p className="text-xs text-text-sub mb-2">쓰던 비품(장부금액 300,000원)을 300,000원에 외상으로 처분했다.</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-red-50/30 rounded p-2">
                <p className="font-bold text-debit text-[10px] mb-1">차변</p>
                <p className="text-text-sub">미수금(자산) <span className="text-text">300,000</span></p>
              </div>
              <div className="bg-blue-50/30 rounded p-2">
                <p className="font-bold text-credit text-[10px] mb-1">대변</p>
                <p className="text-text-sub">비품(자산) <span className="text-text">300,000</span></p>
              </div>
            </div>
            <p className="text-[10px] text-text-sub mt-2">※ 비품 처분은 주된 영업활동이 아니므로 매출채권이 아닌 미수금을 씁니다.</p>
          </div>
        </div>
      </section>

      {/* 문제 풀기 */}
      <div className="grid grid-cols-2 gap-2 mb-6">
        <Link
          href="/accounts"
          className="flex items-center justify-center min-h-[44px] py-3 bg-surface border border-primary text-primary rounded-lg font-bold text-sm text-center active:scale-[0.98] transition-transform"
        >
          계정과목 사전 보기
        </Link>
        <Link
          href="/quiz/common/ox"
          className="flex items-center justify-center min-h-[44px] py-3 bg-primary text-white rounded-lg font-bold text-sm text-center active:scale-[0.98] transition-transform"
        >
          OX 문제 풀기
        </Link>
      </div>

      {/* 관련 개념 */}
      <section>
        <h2 className="font-bold text-sm text-text mb-3">관련 개념</h2>
        <div className="grid gap-2">
          <Link href="/concept/debit-credit" className="flex items-center justify-between p-3 bg-surface border border-border rounded-lg hover:border-primary transition-colors">
            <span className="text-sm text-text">차변과 대변, 헷갈리지 않는 법</span>
            <span className="text-xs text-text-sub">→</span>
          </Link>
          <Link href="/concept/journal-entry" className="flex items-center justify-between p-3 bg-surface border border-border rounded-lg hover:border-primary transition-colors">
            <span className="text-sm text-text">분개 기초: 거래를 회계로 옮기는 원리</span>
            <span className="text-xs text-text-sub">→</span>
          </Link>
          <Link href="/concept/financial-statements" className="flex items-center justify-between p-3 bg-surface border border-border rounded-lg hover:border-primary transition-colors">
            <span className="text-sm text-text">재무제표 5가지와 읽는 법</span>
            <span className="text-xs text-text-sub">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
