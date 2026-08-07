import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "감가상각 계산법 | 정액법·정률법·생산량비례법 차이와 예시",
  description:
    "감가상각이 왜 필요한지부터 정액법·정률법·생산량비례법의 계산식과 연도별 상각액 비교, 분개 예시까지 정리했습니다.",
  openGraph: {
    title: "감가상각 계산법 | 정액법·정률법·생산량비례법 차이와 예시",
    description:
      "감가상각이 왜 필요한지부터 정액법·정률법·생산량비례법의 계산식과 연도별 상각액 비교, 분개 예시까지 정리했습니다.",
    url: "/concept/depreciation",
  },
  alternates: { canonical: "/concept/depreciation" },
};

export default function DepreciationPage() {
  return (
    <div>
      {/* breadcrumb */}
      <div className="flex items-center gap-2 mb-6 flex-wrap">
        <Link href="/" className="text-xs text-text-sub hover:text-primary">← 홈</Link>
        <span className="text-xs text-border">/</span>
        <Link href="/concepts" className="text-xs text-text-sub hover:text-primary">회계 개념</Link>
        <span className="text-xs text-border">/</span>
        <span className="text-xs font-semibold text-text">감가상각</span>
      </div>

      {/* 헤더 */}
      <div className="mb-8">
        <p className="text-sm text-primary font-bold mb-1">회계 기초</p>
        <h1 className="text-2xl font-extrabold text-text">감가상각 방법별 차이와 계산법</h1>
        <p className="text-xs text-text-sub mt-1">정액법·정률법·생산량비례법, 같은 자산도 방법에 따라 매년 비용이 달라집니다.</p>
      </div>

      {/* 왜 필요한지 */}
      <section className="mb-6">
        <h2 className="font-bold text-sm text-text mb-2">감가상각은 왜 필요할까요?</h2>
        <p className="text-sm text-text-sub leading-relaxed mb-2">
          기계장치나 건물처럼 여러 해에 걸쳐 쓰는 자산을 취득한 해에 전액 비용으로 처리하면 어떻게 될까요? 그 자산을 사서 쓰는 이후 몇 년 동안은 비용 없이 수익만 잡히게 되어, 손익계산서가 실제 경영 성과를 왜곡해서 보여주게 됩니다. 감가상각은 이 문제를 해결하기 위해 <strong className="text-text">자산의 취득원가를 그 자산이 수익을 창출하는 기간(내용연수)에 걸쳐 나눠서 비용으로 인식</strong>하는 절차입니다. 수익과 비용을 같은 기간에 대응시킨다는 뜻에서 이를 수익·비용 대응의 원칙이라고 부릅니다.
        </p>
        <p className="text-sm text-text-sub leading-relaxed">
          여기서 중요한 오해 하나를 짚고 넘어가야 합니다. 감가상각은 <strong className="text-text">자산의 시가(현재 팔면 얼마 받을지)가 얼마나 떨어졌는지를 추정하는 절차가 아닙니다.</strong> 감가상각은 어디까지나 이미 지불한 취득원가를 회계적으로 기간별로 나눠 배분하는 절차일 뿐입니다. 그래서 감가상각을 다 마친 자산이 시장에서는 여전히 비싸게 팔릴 수도 있고, 반대로 장부가액이 남아 있는데도 실제로는 거의 가치가 없을 수도 있습니다.
        </p>
      </section>

      {/* 3가지 방법 */}
      <section className="mb-6">
        <h2 className="font-bold text-sm text-text mb-2">3가지 계산 방법</h2>
        <div className="space-y-3">
          <div className="bg-surface border border-border rounded-lg p-4">
            <p className="text-sm font-bold text-text mb-1">① 정액법 (Straight-Line Method)</p>
            <p className="text-sm text-text-sub leading-relaxed mb-2">매년 똑같은 금액을 상각합니다. 계산이 가장 단순하고, 실무에서 가장 널리 쓰입니다.</p>
            <pre className="bg-primary-bg/30 rounded p-2 text-xs text-text-sub whitespace-pre-wrap"><code>연간 감가상각비 = (취득원가 − 잔존가치) ÷ 내용연수</code></pre>
          </div>
          <div className="bg-surface border border-border rounded-lg p-4">
            <p className="text-sm font-bold text-text mb-1">② 정률법 (Declining-Balance Method)</p>
            <p className="text-sm text-text-sub leading-relaxed mb-2">매년 기초 장부가액에 일정한 상각률을 곱합니다. 장부가액이 매년 줄어들기 때문에 상각액도 초반에 크고 갈수록 작아집니다. 상각률은 보통 문제나 자산 성격에 따라 미리 주어지며, <code className="text-xs bg-surface px-1">1 − (잔존가치 ÷ 취득원가)^(1/내용연수)</code>로 역산할 수도 있습니다.</p>
            <pre className="bg-primary-bg/30 rounded p-2 text-xs text-text-sub whitespace-pre-wrap"><code>연간 감가상각비 = 기초 장부가액 × 상각률</code></pre>
          </div>
          <div className="bg-surface border border-border rounded-lg p-4">
            <p className="text-sm font-bold text-text mb-1">③ 생산량비례법 (Units-of-Production Method)</p>
            <p className="text-sm text-text-sub leading-relaxed mb-2">시간이 아니라 실제 사용량(생산량, 주행거리 등)에 비례해서 상각합니다. 많이 쓴 해에는 많이, 적게 쓴 해에는 적게 상각됩니다.</p>
            <pre className="bg-primary-bg/30 rounded p-2 text-xs text-text-sub whitespace-pre-wrap"><code>단위당 상각액 = (취득원가 − 잔존가치) ÷ 총예상생산량{"\n"}연간 감가상각비 = 단위당 상각액 × 당기 실제생산량</code></pre>
          </div>
        </div>
      </section>

      {/* 비교 예시 */}
      <section className="mb-6">
        <h2 className="font-bold text-sm text-text mb-3">같은 자산, 세 가지 방법으로 비교</h2>
        <p className="text-sm text-text-sub leading-relaxed mb-3">
          취득원가 12,000,000원, 잔존가치 1,500,000원, 내용연수 3년인 기계장치를 예로 들어보겠습니다. 정률법 상각률은 50%, 생산량비례법의 총예상생산량은 30,000단위(연도별 실제생산량 15,000 / 9,000 / 6,000단위)로 가정합니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="bg-surface border-b border-border">
                <th className="p-3 font-bold text-text">연도</th>
                <th className="p-3 font-bold text-text">정액법</th>
                <th className="p-3 font-bold text-text">정률법</th>
                <th className="p-3 font-bold text-text">생산량비례법</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="p-3 text-text-sub">1년차</td>
                <td className="p-3 text-text-sub">3,500,000</td>
                <td className="p-3 text-text-sub">6,000,000</td>
                <td className="p-3 text-text-sub">5,250,000</td>
              </tr>
              <tr>
                <td className="p-3 text-text-sub">2년차</td>
                <td className="p-3 text-text-sub">3,500,000</td>
                <td className="p-3 text-text-sub">3,000,000</td>
                <td className="p-3 text-text-sub">3,150,000</td>
              </tr>
              <tr>
                <td className="p-3 text-text-sub">3년차</td>
                <td className="p-3 text-text-sub">3,500,000</td>
                <td className="p-3 text-text-sub">1,500,000</td>
                <td className="p-3 text-text-sub">2,100,000</td>
              </tr>
              <tr className="bg-primary-bg/20">
                <td className="p-3 font-bold text-text">합계</td>
                <td className="p-3 font-bold text-text">10,500,000</td>
                <td className="p-3 font-bold text-text">10,500,000</td>
                <td className="p-3 font-bold text-text">10,500,000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-sub leading-relaxed mt-2">
          세 방법 모두 3년 합계는 10,500,000원(= 12,000,000 − 1,500,000)으로 같습니다. 방법에 따라 <strong className="text-text">"언제" 비용으로 인식하느냐만 달라질 뿐, 자산의 총 상각 대상 금액은 같다</strong>는 점이 핵심입니다. 정률법은 초반에 더 많이, 정액법은 매년 균등하게 비용을 인식한다는 차이가 표에서 그대로 드러납니다.
        </p>
      </section>

      {/* 누계액-장부가액 관계 */}
      <section className="mb-6">
        <h2 className="font-bold text-sm text-text mb-2">감가상각누계액과 장부가액</h2>
        <p className="text-sm text-text-sub leading-relaxed">
          감가상각비를 인식할 때는 자산 계정을 직접 줄이지 않고, <strong className="text-text">감가상각누계액</strong>이라는 별도 계정(자산의 차감 계정)에 쌓아둡니다. 재무상태표에는 "기계장치 12,000,000 − 감가상각누계액 3,500,000 = 장부가액 8,500,000"처럼 표시됩니다. 즉 <strong className="text-text">장부가액 = 취득원가 − 감가상각누계액</strong>입니다.
        </p>
      </section>

      {/* 어떤 상황에 어떤 방법 */}
      <section className="mb-6">
        <h2 className="font-bold text-sm text-text mb-2">어떤 상황에 어떤 방법이 적합할까요</h2>
        <ul className="list-disc list-inside space-y-1">
          <li className="text-sm text-text-sub leading-relaxed"><strong className="text-text">정액법</strong> — 사용 강도가 매년 비슷한 건물, 비품 등에 적합하고, 계산과 예측이 쉬워 실무에서 가장 많이 사용됩니다.</li>
          <li className="text-sm text-text-sub leading-relaxed"><strong className="text-text">정률법</strong> — 기술 진부화가 빠른 전자기기·기계장치처럼 초반에 효익이 더 크게 발생하는 자산에 적합합니다.</li>
          <li className="text-sm text-text-sub leading-relaxed"><strong className="text-text">생산량비례법</strong> — 채굴기계, 생산설비, 차량처럼 실제 사용량(생산량·주행거리)에 따라 마모되는 자산에 적합합니다.</li>
        </ul>
      </section>

      {/* 자주 하는 실수 */}
      <section className="mb-6">
        <h2 className="font-bold text-sm text-text mb-2">자주 하는 실수와 교정</h2>
        <ul className="list-disc list-inside space-y-2">
          <li className="text-sm text-text-sub leading-relaxed">
            <strong className="text-text">토지도 감가상각한다고 착각</strong> — 토지는 내용연수가 무한하다고 보아 감가상각하지 않습니다.
          </li>
          <li className="text-sm text-text-sub leading-relaxed">
            <strong className="text-text">정률법 상각률을 취득원가에 곱함</strong> — 정률법은 매년 취득원가가 아니라 <strong className="text-text">그 해 기초 장부가액</strong>에 상각률을 곱합니다. 그래서 상각액이 해마다 줄어듭니다.
          </li>
          <li className="text-sm text-text-sub leading-relaxed">
            <strong className="text-text">감가상각누계액을 부채로 착각</strong> — 감가상각누계액은 부채가 아니라 자산의 차감(평가성) 계정입니다.
          </li>
          <li className="text-sm text-text-sub leading-relaxed">
            <strong className="text-text">내용연수가 끝나면 자산이 사라진다고 착각</strong> — 상각이 끝난 뒤에도 자산을 계속 쓴다면 장부가액은 잔존가치로 남아있고, 추가로 상각하지 않습니다.
          </li>
        </ul>
      </section>

      {/* 분개 예시 */}
      <section className="mb-6">
        <h2 className="font-bold text-sm text-text mb-3">분개 예시 (정액법 1년차)</h2>
        <div className="bg-surface border border-border rounded-lg p-3">
          <p className="text-xs text-text-sub mb-2">기계장치 감가상각비 3,500,000원을 계상했다.</p>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-red-50/30 rounded p-2">
              <p className="font-bold text-debit text-[10px] mb-1">차변</p>
              <p className="text-text-sub">감가상각비(비용) <span className="text-text">3,500,000</span></p>
            </div>
            <div className="bg-blue-50/30 rounded p-2">
              <p className="font-bold text-credit text-[10px] mb-1">대변</p>
              <p className="text-text-sub">감가상각누계액 <span className="text-text">3,500,000</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* 문제/계산기 링크 */}
      <div className="grid grid-cols-2 gap-2 mb-6">
        <Link
          href="/calculator/depreciation-ias16"
          className="flex items-center justify-center min-h-[44px] py-3 bg-surface border border-primary text-primary rounded-lg font-bold text-sm text-center active:scale-[0.98] transition-transform"
        >
          감가상각 계산기
        </Link>
        <Link
          href="/quiz/common/calculation"
          className="flex items-center justify-center min-h-[44px] py-3 bg-primary text-white rounded-lg font-bold text-sm text-center active:scale-[0.98] transition-transform"
        >
          계산 문제 풀기
        </Link>
      </div>
      <p className="text-xs text-text-sub -mt-4 mb-6">※ 감가상각 계산기는 정액법·정률법을 지원합니다. 생산량비례법은 위 계산식을 직접 대입해 연습해보세요.</p>

      {/* 관련 개념 */}
      <section>
        <h2 className="font-bold text-sm text-text mb-3">관련 개념</h2>
        <div className="grid gap-2">
          <Link href="/concept/account-titles" className="flex items-center justify-between p-3 bg-surface border border-border rounded-lg hover:border-primary transition-colors">
            <span className="text-sm text-text">계정과목 분류 완전 이해</span>
            <span className="text-xs text-text-sub">→</span>
          </Link>
          <Link href="/concept/journal-entry" className="flex items-center justify-between p-3 bg-surface border border-border rounded-lg hover:border-primary transition-colors">
            <span className="text-sm text-text">분개 기초: 거래를 회계로 옮기는 원리</span>
            <span className="text-xs text-text-sub">→</span>
          </Link>
          <Link href="/concept/ias16" className="flex items-center justify-between p-3 bg-surface border border-border rounded-lg hover:border-primary transition-colors">
            <span className="text-sm text-text">IAS 16 유형자산 (기준서 심화)</span>
            <span className="text-xs text-text-sub">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
