import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "K-IFRS와 일반기업회계기준 차이 | 적용 대상과 주요 차이점 정리",
  description:
    "K-IFRS와 일반기업회계기준이 왜 나뉘어 있는지, 리스·금융상품·수익인식 등 주요 차이점과 실무에서 체감되는 차이를 정리했습니다.",
  openGraph: {
    title: "K-IFRS와 일반기업회계기준 차이 | 적용 대상과 주요 차이점 정리",
    description:
      "K-IFRS와 일반기업회계기준이 왜 나뉘어 있는지, 리스·금융상품·수익인식 등 주요 차이점과 실무에서 체감되는 차이를 정리했습니다.",
    url: "/concept/kifrs-vs-kgaap",
  },
  alternates: { canonical: "/concept/kifrs-vs-kgaap" },
};

export default function KifrsVsKgaapPage() {
  return (
    <div>
      {/* breadcrumb */}
      <div className="flex items-center gap-2 mb-6 flex-wrap">
        <Link href="/" className="text-xs text-text-sub hover:text-primary">← 홈</Link>
        <span className="text-xs text-border">/</span>
        <Link href="/concepts" className="text-xs text-text-sub hover:text-primary">회계 개념</Link>
        <span className="text-xs text-border">/</span>
        <span className="text-xs font-semibold text-text">K-IFRS vs 일반기업회계기준</span>
      </div>

      {/* 헤더 */}
      <div className="mb-8">
        <p className="text-sm text-primary font-bold mb-1">회계 기초</p>
        <h1 className="text-2xl font-extrabold text-text">K-IFRS와 일반기업회계기준의 차이</h1>
        <p className="text-xs text-text-sub mt-1">같은 거래도 어느 기준을 적용하느냐에 따라 재무제표 모습이 달라집니다.</p>
      </div>

      {/* 정의 */}
      <section className="mb-6">
        <h2 className="font-bold text-sm text-text mb-2">두 기준이 왜 나뉘어 있을까요?</h2>
        <p className="text-sm text-text-sub leading-relaxed mb-2">
          한국에는 두 가지 회계기준 체계가 함께 쓰입니다. <strong className="text-text">K-IFRS(한국채택국제회계기준)</strong>는 국제회계기준(IFRS)을 그대로 받아들인 기준으로, 상장법인과 금융회사 등 일정 요건에 해당하는 회사가 의무적으로 적용합니다. <strong className="text-text">일반기업회계기준</strong>은 K-IFRS를 적용할 의무가 없는 비상장 중소·중견기업을 대상으로 만들어진, 상대적으로 간소화된 기준입니다.
        </p>
        <p className="text-sm text-text-sub leading-relaxed">
          두 기준이 나뉜 이유는 목적이 다르기 때문입니다. 상장사는 전 세계 투자자가 비교할 수 있어야 하므로 국제적으로 통일된 기준(K-IFRS)이 필요하고, 대다수의 비상장 중소기업은 그 정도로 복잡하고 공시 부담이 큰 기준을 적용할 실익이 크지 않아 상대적으로 간단한 기준(일반기업회계기준)을 따로 둔 것입니다.
        </p>
      </section>

      {/* 주요 차이점 표 */}
      <section className="mb-6">
        <h2 className="font-bold text-sm text-text mb-3">주요 차이점</h2>
        <p className="text-xs text-text-sub leading-relaxed mb-2">
          아래는 자주 언급되는 대표적인 차이의 방향성을 정리한 것입니다. 실제 적용 시에는 세부 요건이 있으므로 정확한 판단은 해당 기준서 원문을 확인하시기 바랍니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="bg-surface border-b border-border">
                <th className="p-3 font-bold text-text">항목</th>
                <th className="p-3 font-bold text-text">K-IFRS</th>
                <th className="p-3 font-bold text-text">일반기업회계기준</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="p-3 text-text-sub">주 재무제표</td>
                <td className="p-3 text-text-sub">연결재무제표 중심</td>
                <td className="p-3 text-text-sub">개별재무제표 중심</td>
              </tr>
              <tr>
                <td className="p-3 text-text-sub">리스</td>
                <td className="p-3 text-text-sub">원칙적으로 모든 리스를 자산·부채로 인식(IFRS16)</td>
                <td className="p-3 text-text-sub">금융리스·운용리스 구분 유지, 운용리스는 비용 처리</td>
              </tr>
              <tr>
                <td className="p-3 text-text-sub">금융상품 분류</td>
                <td className="p-3 text-text-sub">AC·FVOCI·FVTPL 3분류, 기대신용손실(ECL) 모형</td>
                <td className="p-3 text-text-sub">상대적으로 단순한 분류, 발생손실 중심 대손 처리</td>
              </tr>
              <tr>
                <td className="p-3 text-text-sub">유형자산 재평가</td>
                <td className="p-3 text-text-sub">원가모형·재평가모형 선택 가능</td>
                <td className="p-3 text-text-sub">재평가모형 인정 범위·절차에 차이 있음</td>
              </tr>
              <tr>
                <td className="p-3 text-text-sub">수익인식</td>
                <td className="p-3 text-text-sub">5단계 모형(IFRS15), 통제 이전 기준</td>
                <td className="p-3 text-text-sub">상대적으로 단순한 위험·보상 이전 기준에 가까움</td>
              </tr>
              <tr>
                <td className="p-3 text-text-sub">주석 공시</td>
                <td className="p-3 text-text-sub">매우 방대하고 상세함</td>
                <td className="p-3 text-text-sub">상대적으로 간소함</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 실무 체감 예시 */}
      <section className="mb-6">
        <h2 className="font-bold text-sm text-text mb-2">실무에서 체감되는 차이 — 리스 예시</h2>
        <p className="text-sm text-text-sub leading-relaxed">
          같은 "사무실 5년 임차 계약"이라도 어느 기준을 적용하느냐에 따라 재무제표 모습이 크게 달라질 수 있습니다. <strong className="text-text">K-IFRS</strong>를 적용하면 원칙적으로 계약 시점에 사용권자산(자산)과 리스부채(부채)를 재무상태표에 인식하므로, 부채비율이 눈에 띄게 올라갈 수 있습니다. <strong className="text-text">일반기업회계기준</strong>을 적용하는 회사가 같은 계약을 운용리스로 분류한다면, 매달 임차료를 비용으로 처리할 뿐 재무상태표에는 자산·부채가 잡히지 않습니다. 재무제표만 보고 두 회사의 재무상태를 단순 비교하면 오해가 생길 수 있는 대표적인 지점입니다.
        </p>
      </section>

      {/* 왜 헷갈리는지/실수 */}
      <section className="mb-6">
        <h2 className="font-bold text-sm text-text mb-2">입문자가 자주 헷갈리는 지점</h2>
        <ul className="list-disc list-inside space-y-2">
          <li className="text-sm text-text-sub leading-relaxed">
            <strong className="text-text">"어느 기준이 더 어렵다/쉽다"로만 이해</strong> — 난이도 차이라기보다 적용 대상과 목적이 다른 별개의 체계라는 점을 먼저 이해하는 게 중요합니다.
          </li>
          <li className="text-sm text-text-sub leading-relaxed">
            <strong className="text-text">시험 공부 시 두 기준을 섞어서 봄</strong> — 문제집이나 자격증 시험이 어느 기준을 전제로 출제하는지 먼저 확인해야 합니다. K-IFRS 문제에 일반기업회계기준 지식을 적용하면 틀리는 경우가 많습니다.
          </li>
          <li className="text-sm text-text-sub leading-relaxed">
            <strong className="text-text">모든 비상장회사는 일반기업회계기준만 쓴다고 단정</strong> — 비상장회사도 필요에 따라(예: 해외 상장 준비 등) K-IFRS를 선택 적용할 수 있는 경우가 있습니다. 회사별 적용 여부는 해당 회사의 재무제표 주석에서 명시적으로 확인하는 것이 정확합니다.
          </li>
        </ul>
      </section>

      {/* 문제 링크 */}
      <div className="grid grid-cols-2 gap-2 mb-6">
        <Link
          href="/k-ifrs"
          className="flex items-center justify-center min-h-[44px] py-3 bg-surface border border-primary text-primary rounded-lg font-bold text-sm text-center active:scale-[0.98] transition-transform"
        >
          K-IFRS 문제 풀기
        </Link>
        <Link
          href="/general"
          className="flex items-center justify-center min-h-[44px] py-3 bg-primary text-white rounded-lg font-bold text-sm text-center active:scale-[0.98] transition-transform"
        >
          일반기업 문제 풀기
        </Link>
      </div>

      {/* 관련 개념 */}
      <section>
        <h2 className="font-bold text-sm text-text mb-3">관련 개념</h2>
        <div className="grid gap-2">
          <Link href="/concepts" className="flex items-center justify-between p-3 bg-surface border border-border rounded-lg hover:border-primary transition-colors">
            <span className="text-sm text-text">기준서별 개념 전체 보기</span>
            <span className="text-xs text-text-sub">→</span>
          </Link>
          <Link href="/concept/study-roadmap" className="flex items-center justify-between p-3 bg-surface border border-border rounded-lg hover:border-primary transition-colors">
            <span className="text-sm text-text">회계 공부 순서: 무엇부터 시작할까</span>
            <span className="text-xs text-text-sub">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
