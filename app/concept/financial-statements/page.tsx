import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "재무제표 5가지 종류와 보는 법 | 재무상태표·손익계산서 읽는 순서",
  description:
    "재무상태표, 손익계산서, 현금흐름표, 자본변동표, 주석 5가지 재무제표가 각각 무엇을 보여주고 서로 어떻게 연결되는지 정리했습니다.",
  openGraph: {
    title: "재무제표 5가지 종류와 보는 법 | 재무상태표·손익계산서 읽는 순서",
    description:
      "재무상태표, 손익계산서, 현금흐름표, 자본변동표, 주석 5가지 재무제표가 각각 무엇을 보여주고 서로 어떻게 연결되는지 정리했습니다.",
    url: "/concept/financial-statements",
  },
  alternates: { canonical: "/concept/financial-statements" },
};

export default function FinancialStatementsPage() {
  return (
    <div>
      {/* breadcrumb */}
      <div className="flex items-center gap-2 mb-6 flex-wrap">
        <Link href="/" className="text-xs text-text-sub hover:text-primary">← 홈</Link>
        <span className="text-xs text-border">/</span>
        <Link href="/concepts" className="text-xs text-text-sub hover:text-primary">회계 개념</Link>
        <span className="text-xs text-border">/</span>
        <span className="text-xs font-semibold text-text">재무제표 5가지</span>
      </div>

      {/* 헤더 */}
      <div className="mb-8">
        <p className="text-sm text-primary font-bold mb-1">회계 기초</p>
        <h1 className="text-2xl font-extrabold text-text">재무제표 5가지와 읽는 법</h1>
        <p className="text-xs text-text-sub mt-1">각자 다른 질문에 답하는 5개의 문서가 서로 맞물려 있습니다.</p>
      </div>

      {/* 정의 */}
      <section className="mb-6">
        <h2 className="font-bold text-sm text-text mb-2">재무제표란?</h2>
        <p className="text-sm text-text-sub leading-relaxed mb-2">
          재무제표는 회사의 재무 상태와 경영 성과를 정해진 형식으로 정리한 보고서입니다. 회계기준(K-IFRS·일반기업회계기준)은 다음 5가지를 완전한 재무제표로 요구합니다. 각각 답하는 질문이 다르다는 점이 핵심입니다.
        </p>
        <ol className="list-decimal list-inside space-y-1 mt-2">
          <li className="text-sm text-text-sub leading-relaxed"><strong className="text-text">재무상태표</strong> — 특정 시점에 무엇을 가지고 있고 무엇을 빚졌는가? (자산 = 부채 + 자본)</li>
          <li className="text-sm text-text-sub leading-relaxed"><strong className="text-text">손익계산서</strong> — 일정 기간 동안 얼마를 벌고 얼마를 썼는가? (수익 − 비용 = 순이익)</li>
          <li className="text-sm text-text-sub leading-relaxed"><strong className="text-text">현금흐름표</strong> — 일정 기간 동안 실제 현금이 어떻게 들어오고 나갔는가?</li>
          <li className="text-sm text-text-sub leading-relaxed"><strong className="text-text">자본변동표</strong> — 일정 기간 동안 자본금·이익잉여금 등 자본 항목이 어떻게 변했는가?</li>
          <li className="text-sm text-text-sub leading-relaxed"><strong className="text-text">주석</strong> — 위 4가지 숫자만으로는 알 수 없는 세부 설명 (회계정책, 우발부채 등)</li>
        </ol>
      </section>

      {/* 읽는 순서 */}
      <section className="mb-6">
        <h2 className="font-bold text-sm text-text mb-2">읽는 순서</h2>
        <p className="text-sm text-text-sub leading-relaxed">
          처음 보는 회사라면 <strong className="text-text">손익계산서(얼마 벌었나) → 재무상태표(무엇을 가지고 무엇을 빚졌나) → 현금흐름표(실제 현금이 어떻게 움직였나) → 자본변동표 → 주석(세부 확인)</strong> 순서로 읽는 게 자연스럽습니다. 재무상태표는 특정 시점의 "잔액(스톡)"을, 나머지 세 제표는 일정 "기간의 변화(플로우)"를 보여준다는 차이를 기억해두면 헷갈리지 않습니다.
        </p>
      </section>

      {/* 왜 헷갈리는지 */}
      <section className="mb-6">
        <h2 className="font-bold text-sm text-text mb-2">왜 헷갈릴까요?</h2>
        <p className="text-sm text-text-sub leading-relaxed mb-2">
          가장 흔한 오해는 <strong className="text-text">"순이익이 났으면 현금도 그만큼 늘었을 것"</strong>이라는 생각입니다. 회계는 현금이 오간 시점이 아니라 거래가 발생한 시점에 수익·비용을 인식하는 발생주의를 따릅니다. 외상으로 판매하면 현금은 안 들어왔어도 매출(수익)은 이미 인식됩니다. 그래서 손익계산서상 순이익과 실제 현금 증감이 다를 수 있고, 이 간극을 보여주는 것이 바로 현금흐름표입니다.
        </p>
        <p className="text-sm text-text-sub leading-relaxed">
          또한 재무상태표를 손익계산서처럼 "이번 달 실적"으로 착각하는 경우가 많습니다. 재무상태표는 "12월 31일 현재" 같은 한 시점의 스냅샷이고, 손익계산서는 "1월 1일부터 12월 31일까지" 같은 기간 누적치입니다. 이 차이를 놓치면 두 제표의 숫자를 비교할 때 계속 혼란스럽습니다.
        </p>
      </section>

      {/* 핵심 요약 표 */}
      <section className="mb-6">
        <h2 className="font-bold text-sm text-text mb-3">핵심 요약: 5대 재무제표 비교</h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="bg-surface border-b border-border">
                <th className="p-3 font-bold text-text">재무제표</th>
                <th className="p-3 font-bold text-text">시점/기간</th>
                <th className="p-3 font-bold text-text">보여주는 것</th>
                <th className="p-3 font-bold text-text">핵심 등식</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="p-3 text-text-sub">재무상태표</td>
                <td className="p-3 text-text-sub">특정 시점</td>
                <td className="p-3 text-text-sub">자산·부채·자본</td>
                <td className="p-3 text-text-sub">자산 = 부채 + 자본</td>
              </tr>
              <tr>
                <td className="p-3 text-text-sub">손익계산서</td>
                <td className="p-3 text-text-sub">일정 기간</td>
                <td className="p-3 text-text-sub">수익·비용·순이익</td>
                <td className="p-3 text-text-sub">수익 − 비용 = 순이익</td>
              </tr>
              <tr>
                <td className="p-3 text-text-sub">현금흐름표</td>
                <td className="p-3 text-text-sub">일정 기간</td>
                <td className="p-3 text-text-sub">영업·투자·재무활동 현금</td>
                <td className="p-3 text-text-sub">기초현금 + 순현금흐름 = 기말현금</td>
              </tr>
              <tr>
                <td className="p-3 text-text-sub">자본변동표</td>
                <td className="p-3 text-text-sub">일정 기간</td>
                <td className="p-3 text-text-sub">자본금·이익잉여금 등 변동</td>
                <td className="p-3 text-text-sub">기초자본 + 변동 = 기말자본</td>
              </tr>
              <tr>
                <td className="p-3 text-text-sub">주석</td>
                <td className="p-3 text-text-sub">-</td>
                <td className="p-3 text-text-sub">회계정책, 우발부채 등 세부사항</td>
                <td className="p-3 text-text-sub">-</td>
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
            <strong className="text-text">순이익 = 현금 증가로 착각</strong> — 발생주의 회계에서는 다릅니다. 순이익과 현금 증감이 왜 다른지는 현금흐름표에서 확인해야 합니다.
          </li>
          <li className="text-sm text-text-sub leading-relaxed">
            <strong className="text-text">재무상태표를 기간 데이터로 착각</strong> — 재무상태표는 시점 스냅샷입니다. "이번 분기 재무상태표"라는 말은 정확히는 "이번 분기 말 시점의 재무상태표"를 뜻합니다.
          </li>
          <li className="text-sm text-text-sub leading-relaxed">
            <strong className="text-text">주석을 안 보고 숫자만 확인</strong> — 우발부채, 특수관계자거래처럼 재무상태표·손익계산서 숫자에 안 잡히지만 중요한 정보는 주석에만 있습니다.
          </li>
          <li className="text-sm text-text-sub leading-relaxed">
            <strong className="text-text">현금흐름표의 세 활동(영업·투자·재무)을 구분 못함</strong> — 예를 들어 감가상각비는 손익계산서에서 비용으로 빠졌지만 실제 현금 유출이 없었으므로, 영업활동 현금흐름을 계산할 때 순이익에 다시 더해줍니다.
          </li>
        </ul>
      </section>

      {/* 숫자로 보는 예시 */}
      <section className="mb-6">
        <h2 className="font-bold text-sm text-text mb-3">숫자로 보는 예시</h2>
        <div className="space-y-2">
          <div className="bg-surface border border-border rounded-lg p-3">
            <p className="text-xs text-text-sub mb-2">매출 1,000,000원을 전액 외상으로 발생시켰다.</p>
            <div className="text-xs text-text-sub space-y-1">
              <p>· 분개: 차변 매출채권(자산) 1,000,000 / 대변 매출(수익) 1,000,000</p>
              <p>· 손익계산서: 매출 1,000,000원 반영 → 순이익 증가</p>
              <p>· 재무상태표: 매출채권(자산) 1,000,000원 증가</p>
              <p>· 현금흐름표: 현금 유입 없음 — <strong className="text-text">순이익은 늘었지만 현금은 그대로</strong>인 대표적인 예시입니다.</p>
            </div>
          </div>
          <div className="bg-surface border border-border rounded-lg p-3">
            <p className="text-xs text-text-sub mb-2">감가상각비 300,000원을 계상했다.</p>
            <div className="text-xs text-text-sub space-y-1">
              <p>· 분개: 차변 감가상각비(비용) 300,000 / 대변 감가상각누계액 300,000</p>
              <p>· 손익계산서: 비용 300,000원 반영 → 순이익 감소</p>
              <p>· 현금흐름표: 영업활동에서 감가상각비 300,000원을 다시 더해줌 (현금이 실제로 나가지 않았으므로)</p>
            </div>
          </div>
          <div className="bg-surface border border-border rounded-lg p-3">
            <p className="text-xs text-text-sub mb-2">당기순이익 5,000,000원이 발생했고, 그중 1,000,000원을 현금 배당했다.</p>
            <div className="text-xs text-text-sub space-y-1">
              <p>· 자본변동표: 이익잉여금 +5,000,000 − 1,000,000 = +4,000,000</p>
              <p>· 재무상태표: 자본(이익잉여금) 4,000,000원 증가</p>
              <p>· 현금흐름표: 배당금 1,000,000원 지급은 재무활동 현금유출로 표시</p>
            </div>
          </div>
        </div>
      </section>

      {/* 문제 풀기 */}
      <Link
        href="/quiz/common/ox"
        className="block w-full min-h-[44px] py-3 bg-primary text-white rounded-lg font-bold text-sm text-center active:scale-[0.98] transition-transform mb-6"
      >
        재무제표 개념 OX 문제 풀기 →
      </Link>

      {/* 관련 개념 */}
      <section>
        <h2 className="font-bold text-sm text-text mb-3">관련 개념</h2>
        <div className="grid gap-2">
          <Link href="/concept/account-titles" className="flex items-center justify-between p-3 bg-surface border border-border rounded-lg hover:border-primary transition-colors">
            <span className="text-sm text-text">계정과목 분류 완전 이해</span>
            <span className="text-xs text-text-sub">→</span>
          </Link>
          <Link href="/concept/debit-credit" className="flex items-center justify-between p-3 bg-surface border border-border rounded-lg hover:border-primary transition-colors">
            <span className="text-sm text-text">차변과 대변, 헷갈리지 않는 법</span>
            <span className="text-xs text-text-sub">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
