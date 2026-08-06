import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "차변 대변 뜻과 구분법 | 헷갈리지 않는 암기 규칙 정리",
  description:
    "차변과 대변이 헷갈리는 진짜 이유와, 계정 유형별로 증가·감소가 어느 쪽에 오는지 표와 실전 분개 예시로 정리했습니다.",
  openGraph: {
    title: "차변 대변 뜻과 구분법 | 헷갈리지 않는 암기 규칙 정리",
    description:
      "차변과 대변이 헷갈리는 진짜 이유와, 계정 유형별로 증가·감소가 어느 쪽에 오는지 표와 실전 분개 예시로 정리했습니다.",
    url: "/concept/debit-credit",
  },
  alternates: { canonical: "/concept/debit-credit" },
};

export default function DebitCreditPage() {
  return (
    <div>
      {/* breadcrumb */}
      <div className="flex items-center gap-2 mb-6 flex-wrap">
        <Link href="/" className="text-xs text-text-sub hover:text-primary">← 홈</Link>
        <span className="text-xs text-border">/</span>
        <Link href="/concepts" className="text-xs text-text-sub hover:text-primary">회계 개념</Link>
        <span className="text-xs text-border">/</span>
        <span className="text-xs font-semibold text-text">차변과 대변</span>
      </div>

      {/* 헤더 */}
      <div className="mb-8">
        <p className="text-sm text-primary font-bold mb-1">회계 기초</p>
        <h1 className="text-2xl font-extrabold text-text">차변과 대변, 헷갈리지 않는 법</h1>
        <p className="text-xs text-text-sub mt-1">복식부기의 출발점. 방향이 아니라 계정 유형이 핵심입니다.</p>
      </div>

      {/* 정의 */}
      <section className="mb-6">
        <h2 className="font-bold text-sm text-text mb-2">차변·대변이란?</h2>
        <p className="text-sm text-text-sub leading-relaxed mb-2">
          회계 장부는 거래를 항상 왼쪽과 오른쪽 두 칸으로 나눠 기록합니다. 왼쪽 칸을 <strong className="text-text">차변(借邊)</strong>, 오른쪽 칸을 <strong className="text-text">대변(貸邊)</strong>이라고 부릅니다. 이렇게 거래 하나를 두 칸에 나눠 적는 방식을 복식부기라고 하고, 이때 반드시 지켜야 하는 규칙이 하나 있습니다 — <strong className="text-text">차변 금액의 합계와 대변 금액의 합계는 항상 같아야 한다</strong>는 대차평균의 원리입니다.
        </p>
        <p className="text-sm text-text-sub leading-relaxed">
          여기서 가장 중요한 사실은, 차변과 대변 자체는 "증가"나 "감소"라는 의미를 전혀 갖고 있지 않다는 점입니다. 단순히 왼쪽 자리와 오른쪽 자리일 뿐이고, 그 자리에 무엇이 오는지는 계정 유형(자산·부채·자본·수익·비용)에 따라 완전히 달라집니다.
        </p>
      </section>

      {/* 왜 헷갈리는지 */}
      <section className="mb-6">
        <h2 className="font-bold text-sm text-text mb-2">왜 헷갈릴까요?</h2>
        <p className="text-sm text-text-sub leading-relaxed mb-2">
          가장 흔한 착각은 "차변 = 증가, 대변 = 감소"로 통째로 외우는 것입니다. 자산 계정에서는 이 말이 맞습니다 — 자산이 늘면 차변, 줄면 대변입니다. 문제는 부채와 자본입니다. 부채와 자본은 정반대로, <strong className="text-text">늘어나면 대변, 줄어들면 차변</strong>에 적습니다. 자산 기준으로 외운 규칙을 부채·자본에 그대로 적용하면 매번 반대로 틀리게 됩니다.
        </p>
        <p className="text-sm text-text-sub leading-relaxed">
          또 하나는 일상 감각과의 충돌입니다. 은행 통장에서 "입금"은 내 돈이 늘어난 것처럼 보이지만, 은행 입장에서 고객 예금은 은행이 갚아야 할 부채입니다. 그래서 은행이 발행하는 거래명세서의 입금/출금 표시와, 회계상 차변/대변의 방향이 반대로 느껴지는 경우가 많습니다. 이런 감각적인 혼동을 피하려면, "어느 쪽이 자연스러워 보이는가"가 아니라 항상 계정 유형부터 확인하는 습관이 필요합니다.
        </p>
      </section>

      {/* 예시 */}
      <section className="mb-6">
        <h2 className="font-bold text-sm text-text mb-2">구체적 예시로 보기</h2>
        <p className="text-sm text-text-sub leading-relaxed mb-2">
          <strong className="text-text">현금 1,000,000원으로 상품을 매입</strong>했다고 해봅시다. 이 거래에서 상품(자산)이 늘어났고, 현금(자산)이 줄어들었습니다. 둘 다 자산이지만 방향은 반대입니다 — 늘어난 상품은 차변, 줄어든 현금은 대변에 옵니다. "자산이니까 무조건 차변"이 아니라, "자산이 늘었으니 차변, 자산이 줄었으니 대변"이라는 점을 확인할 수 있습니다.
        </p>
        <p className="text-sm text-text-sub leading-relaxed">
          이번엔 <strong className="text-text">은행에서 3,000,000원을 대출</strong>받아 현금으로 받았다고 해봅시다. 현금(자산)이 늘었으니 차변, 동시에 차입금(부채)이 늘었으니 대변입니다. 자산 증가는 차변인데 부채 증가는 대변 — 두 계정이 같은 방향(증가)으로 움직여도 왼쪽·오른쪽이 다르게 배치되는 이유가 바로 계정 유형 때문입니다.
        </p>
      </section>

      {/* 핵심 요약 표 */}
      <section className="mb-6">
        <h2 className="font-bold text-sm text-text mb-3">핵심 요약: 계정 유형별 차변·대변</h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="bg-surface border-b border-border">
                <th className="p-3 font-bold text-text">계정 유형</th>
                <th className="p-3 font-bold text-debit">증가</th>
                <th className="p-3 font-bold text-credit">감소</th>
                <th className="p-3 font-bold text-text">대표 계정과목</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="p-3 text-text-sub">자산</td>
                <td className="p-3 text-debit">차변</td>
                <td className="p-3 text-credit">대변</td>
                <td className="p-3 text-text-sub">현금, 매출채권, 상품</td>
              </tr>
              <tr>
                <td className="p-3 text-text-sub">부채</td>
                <td className="p-3 text-credit">대변</td>
                <td className="p-3 text-debit">차변</td>
                <td className="p-3 text-text-sub">매입채무, 차입금</td>
              </tr>
              <tr>
                <td className="p-3 text-text-sub">자본</td>
                <td className="p-3 text-credit">대변</td>
                <td className="p-3 text-debit">차변</td>
                <td className="p-3 text-text-sub">자본금, 이익잉여금</td>
              </tr>
              <tr>
                <td className="p-3 text-text-sub">비용</td>
                <td className="p-3 text-debit">차변</td>
                <td className="p-3 text-credit">대변</td>
                <td className="p-3 text-text-sub">급여, 임차료</td>
              </tr>
              <tr>
                <td className="p-3 text-text-sub">수익</td>
                <td className="p-3 text-credit">대변</td>
                <td className="p-3 text-debit">차변</td>
                <td className="p-3 text-text-sub">매출, 이자수익</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-sub leading-relaxed mt-2">
          기억하기 쉬운 방법: <strong className="text-text">자산과 비용은 차변이 "제자리"</strong>인 계정이고, <strong className="text-text">부채·자본·수익은 대변이 "제자리"</strong>인 계정입니다. 각 계정이 제자리 방향으로 움직이면 증가, 반대로 움직이면 감소입니다.
        </p>
      </section>

      {/* 자주 하는 실수 */}
      <section className="mb-6">
        <h2 className="font-bold text-sm text-text mb-2">자주 하는 실수와 교정</h2>
        <ul className="list-disc list-inside space-y-2">
          <li className="text-sm text-text-sub leading-relaxed">
            <strong className="text-text">"차변 = 증가"로 통째로 암기</strong> — 자산에서만 맞는 규칙을 부채·자본까지 확대 적용해서 틀립니다. 교정: 위 표처럼 계정 유형별로 따로 외우세요.
          </li>
          <li className="text-sm text-text-sub leading-relaxed">
            <strong className="text-text">차변·대변 중 어느 쪽이 왼쪽인지 순간적으로 헷갈림</strong> — 교정: "차변은 왼쪽, 대변은 오른쪽"을 먼저 기계적으로 떠올린 뒤 계정 유형을 판단하는 순서로 접근하세요.
          </li>
          <li className="text-sm text-text-sub leading-relaxed">
            <strong className="text-text">거래를 "돈이 들어왔다/나갔다"로만 생각</strong> — 현금 외의 계정(매출채권, 재고자산 등)을 놓칩니다. 교정: 항상 "어떤 계정과목이 늘었는지·줄었는지"를 자산·부채·자본·수익·비용 다섯 갈래로 나눠 확인하세요.
          </li>
          <li className="text-sm text-text-sub leading-relaxed">
            <strong className="text-text">차변 합계와 대변 합계가 다른데 그냥 넘어감</strong> — 교정: 분개를 마칠 때마다 반드시 양쪽 합계를 검산하는 습관을 들이세요. 대차평균이 안 맞으면 반드시 어딘가 계정을 빠뜨린 것입니다.
          </li>
        </ul>
      </section>

      {/* 실전 분개 예시 */}
      <section className="mb-6">
        <h2 className="font-bold text-sm text-text mb-3">실전 분개 예시</h2>
        <div className="space-y-2">
          <div className="bg-surface border border-border rounded-lg p-3">
            <p className="text-xs text-text-sub mb-2">상품 500,000원을 현금으로 매입했다.</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-red-50/30 rounded p-2">
                <p className="font-bold text-debit text-[10px] mb-1">차변</p>
                <p className="text-text-sub">상품(자산) <span className="text-text">500,000</span></p>
              </div>
              <div className="bg-blue-50/30 rounded p-2">
                <p className="font-bold text-credit text-[10px] mb-1">대변</p>
                <p className="text-text-sub">현금(자산) <span className="text-text">500,000</span></p>
              </div>
            </div>
          </div>
          <div className="bg-surface border border-border rounded-lg p-3">
            <p className="text-xs text-text-sub mb-2">은행에서 3,000,000원을 차입하여 현금으로 받았다.</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-red-50/30 rounded p-2">
                <p className="font-bold text-debit text-[10px] mb-1">차변</p>
                <p className="text-text-sub">현금(자산) <span className="text-text">3,000,000</span></p>
              </div>
              <div className="bg-blue-50/30 rounded p-2">
                <p className="font-bold text-credit text-[10px] mb-1">대변</p>
                <p className="text-text-sub">차입금(부채) <span className="text-text">3,000,000</span></p>
              </div>
            </div>
          </div>
          <div className="bg-surface border border-border rounded-lg p-3">
            <p className="text-xs text-text-sub mb-2">사무실 임차료 200,000원을 현금으로 지급했다.</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-red-50/30 rounded p-2">
                <p className="font-bold text-debit text-[10px] mb-1">차변</p>
                <p className="text-text-sub">임차료(비용) <span className="text-text">200,000</span></p>
              </div>
              <div className="bg-blue-50/30 rounded p-2">
                <p className="font-bold text-credit text-[10px] mb-1">대변</p>
                <p className="text-text-sub">현금(자산) <span className="text-text">200,000</span></p>
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
          <Link href="/concept/journal-entry" className="flex items-center justify-between p-3 bg-surface border border-border rounded-lg hover:border-primary transition-colors">
            <span className="text-sm text-text">분개 기초: 거래를 회계로 옮기는 원리</span>
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
