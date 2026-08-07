import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "회계 공부 순서 | 입문자를 위한 4단계 학습 로드맵",
  description:
    "완전 입문자부터 실무까지, 회계 기본 원리 → 계정과목·재무제표 → 개별 주제 → 기준서별 심화 4단계로 무엇부터 공부해야 할지 정리했습니다.",
  openGraph: {
    title: "회계 공부 순서 | 입문자를 위한 4단계 학습 로드맵",
    description:
      "완전 입문자부터 실무까지, 회계 기본 원리 → 계정과목·재무제표 → 개별 주제 → 기준서별 심화 4단계로 무엇부터 공부해야 할지 정리했습니다.",
    url: "/concept/study-roadmap",
  },
  alternates: { canonical: "/concept/study-roadmap" },
};

export default function StudyRoadmapPage() {
  return (
    <div>
      {/* breadcrumb */}
      <div className="flex items-center gap-2 mb-6 flex-wrap">
        <Link href="/" className="text-xs text-text-sub hover:text-primary">← 홈</Link>
        <span className="text-xs text-border">/</span>
        <Link href="/concepts" className="text-xs text-text-sub hover:text-primary">회계 개념</Link>
        <span className="text-xs text-border">/</span>
        <span className="text-xs font-semibold text-text">회계 공부 순서</span>
      </div>

      {/* 헤더 */}
      <div className="mb-8">
        <p className="text-sm text-primary font-bold mb-1">회계 기초</p>
        <h1 className="text-2xl font-extrabold text-text">회계 공부 순서: 무엇부터 시작할까</h1>
        <p className="text-xs text-text-sub mt-1">순서를 지키면 훨씬 빨리 이해됩니다. 4단계로 정리했습니다.</p>
      </div>

      {/* 정의 */}
      <section className="mb-6">
        <h2 className="font-bold text-sm text-text mb-2">왜 순서가 중요할까요?</h2>
        <p className="text-sm text-text-sub leading-relaxed">
          회계는 앞 단계 개념 위에 다음 단계가 쌓이는 구조입니다. 차변·대변을 모르면 분개를 이해할 수 없고, 분개를 모르면 재무제표가 어떻게 만들어지는지 이해할 수 없고, 재무제표 흐름을 모르면 감가상각이나 리스 같은 개별 주제가 왜 필요한지 와닿지 않습니다. 순서를 건너뛰고 어려운 내용부터 보면 암기에만 의존하게 되고, 결국 조금만 문제가 응용되어도 못 풀게 됩니다. 아래 4단계를 순서대로 따라가 보세요.
        </p>
      </section>

      {/* 4단계 로드맵 */}
      <section className="mb-6">
        <h2 className="font-bold text-sm text-text mb-3">4단계 로드맵</h2>
        <div className="space-y-3">
          <div className="bg-surface border border-border rounded-lg p-4">
            <p className="text-xs text-primary font-bold mb-1">1단계</p>
            <p className="text-sm font-bold text-text mb-2">회계의 기본 원리 (차변·대변, 분개)</p>
            <p className="text-sm text-text-sub leading-relaxed mb-3">
              모든 회계는 결국 "거래를 어떻게 왼쪽·오른쪽으로 나눠 적는가"에서 출발합니다. 이 단계를 대충 넘기면 나중에 계속 발목을 잡힙니다.
            </p>
            <div className="flex flex-wrap gap-2">
              <Link href="/concept/debit-credit" className="text-xs px-3 py-1.5 bg-primary-bg/30 text-primary rounded-full hover:bg-primary-bg/50">차변과 대변</Link>
              <Link href="/concept/journal-entry" className="text-xs px-3 py-1.5 bg-primary-bg/30 text-primary rounded-full hover:bg-primary-bg/50">분개 기초</Link>
            </div>
          </div>

          <div className="bg-surface border border-border rounded-lg p-4">
            <p className="text-xs text-primary font-bold mb-1">2단계</p>
            <p className="text-sm font-bold text-text mb-2">계정과목과 재무제표</p>
            <p className="text-sm text-text-sub leading-relaxed mb-3">
              분개를 할 때 쓰는 계정과목의 종류를 정확히 구분하고, 그 분개들이 모여서 어떤 보고서(재무제표)로 완성되는지 큰 그림을 잡는 단계입니다.
            </p>
            <div className="flex flex-wrap gap-2">
              <Link href="/concept/account-titles" className="text-xs px-3 py-1.5 bg-primary-bg/30 text-primary rounded-full hover:bg-primary-bg/50">계정과목 분류</Link>
              <Link href="/concept/financial-statements" className="text-xs px-3 py-1.5 bg-primary-bg/30 text-primary rounded-full hover:bg-primary-bg/50">재무제표 5가지</Link>
              <Link href="/accounts" className="text-xs px-3 py-1.5 bg-primary-bg/30 text-primary rounded-full hover:bg-primary-bg/50">계정과목 사전</Link>
            </div>
          </div>

          <div className="bg-surface border border-border rounded-lg p-4">
            <p className="text-xs text-primary font-bold mb-1">3단계</p>
            <p className="text-sm font-bold text-text mb-2">개별 주제 (감가상각, 재고자산 등)</p>
            <p className="text-sm text-text-sub leading-relaxed mb-3">
              기초 원리를 익혔다면, 이제 실무·시험에서 자주 나오는 개별 주제로 넘어갑니다. 이 단계부터는 직접 계산 문제를 풀어보며 손에 익히는 게 중요합니다.
            </p>
            <div className="flex flex-wrap gap-2">
              <Link href="/concept/depreciation" className="text-xs px-3 py-1.5 bg-primary-bg/30 text-primary rounded-full hover:bg-primary-bg/50">감가상각</Link>
              <Link href="/quiz/common/calculation" className="text-xs px-3 py-1.5 bg-primary-bg/30 text-primary rounded-full hover:bg-primary-bg/50">기초 계산 문제</Link>
              <Link href="/quiz/common/journal" className="text-xs px-3 py-1.5 bg-primary-bg/30 text-primary rounded-full hover:bg-primary-bg/50">기초 분개 문제</Link>
            </div>
          </div>

          <div className="bg-surface border border-border rounded-lg p-4">
            <p className="text-xs text-primary font-bold mb-1">4단계</p>
            <p className="text-sm font-bold text-text mb-2">기준서별 심화 (K-IFRS, 일반기업회계기준 등)</p>
            <p className="text-sm text-text-sub leading-relaxed mb-3">
              마지막으로 리스, 금융상품, 수익인식처럼 기준서 번호가 붙는 전문 주제로 들어갑니다. 목적(취업·시험·실무)에 맞는 기준을 먼저 정하고 공부하는 게 효율적입니다.
            </p>
            <div className="flex flex-wrap gap-2">
              <Link href="/concept/kifrs-vs-kgaap" className="text-xs px-3 py-1.5 bg-primary-bg/30 text-primary rounded-full hover:bg-primary-bg/50">K-IFRS vs 일반기업회계기준</Link>
              <Link href="/concepts" className="text-xs px-3 py-1.5 bg-primary-bg/30 text-primary rounded-full hover:bg-primary-bg/50">기준서별 개념 전체</Link>
              <Link href="/k-ifrs" className="text-xs px-3 py-1.5 bg-primary-bg/30 text-primary rounded-full hover:bg-primary-bg/50">K-IFRS 문제</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 요약 표 */}
      <section className="mb-6">
        <h2 className="font-bold text-sm text-text mb-3">한눈에 보는 로드맵</h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="bg-surface border-b border-border">
                <th className="p-3 font-bold text-text">단계</th>
                <th className="p-3 font-bold text-text">배우는 것</th>
                <th className="p-3 font-bold text-text">이 사이트에서</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="p-3 text-text-sub">1</td>
                <td className="p-3 text-text-sub">차변·대변, 분개</td>
                <td className="p-3 text-text-sub">회계 기초 가이드</td>
              </tr>
              <tr>
                <td className="p-3 text-text-sub">2</td>
                <td className="p-3 text-text-sub">계정과목, 재무제표 구조</td>
                <td className="p-3 text-text-sub">회계 기초 가이드 + 계정과목 사전</td>
              </tr>
              <tr>
                <td className="p-3 text-text-sub">3</td>
                <td className="p-3 text-text-sub">감가상각 등 개별 주제, 계산 연습</td>
                <td className="p-3 text-text-sub">회계 기초 가이드 + 문제 풀이</td>
              </tr>
              <tr>
                <td className="p-3 text-text-sub">4</td>
                <td className="p-3 text-text-sub">기준서별 심화(IFRS16, IAS2 등)</td>
                <td className="p-3 text-text-sub">기준서별 개념 + 기준별 문제·계산기</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 자주 하는 실수 */}
      <section className="mb-6">
        <h2 className="font-bold text-sm text-text mb-2">공부할 때 흔한 실수</h2>
        <ul className="list-disc list-inside space-y-2">
          <li className="text-sm text-text-sub leading-relaxed">
            <strong className="text-text">처음부터 어려운 기준서로 시작</strong> — IFRS16 리스나 IFRS9 금융상품처럼 전문적인 주제를 기초 없이 바로 공부하면, 이해가 아니라 암기에 의존하게 되고 쉽게 지칩니다. 1~2단계부터 차근히 밟는 게 결국 더 빠릅니다.
          </li>
          <li className="text-sm text-text-sub leading-relaxed">
            <strong className="text-text">문제만 반복해서 풀고 원리는 안 봄</strong> — 패턴을 외워서 맞히는 방식은 문제가 조금만 바뀌어도 무너집니다. 문제를 풀다 막히면 관련 개념 페이지로 돌아가 원리를 다시 확인하는 습관이 중요합니다.
          </li>
          <li className="text-sm text-text-sub leading-relaxed">
            <strong className="text-text">K-IFRS와 일반기업회계기준을 구분하지 않고 학습</strong> — 목적에 맞지 않는 기준을 공부하면 시간을 낭비하게 됩니다. <Link href="/concept/kifrs-vs-kgaap" className="text-primary hover:underline">두 기준의 차이</Link>를 먼저 확인하세요.
          </li>
          <li className="text-sm text-text-sub leading-relaxed">
            <strong className="text-text">계정과목을 안 외우고 바로 분개 문제부터 풂</strong> — 계정과목 이름을 모르면 거래를 이해해도 분개를 완성할 수 없습니다. 2단계를 먼저 다지세요.
          </li>
        </ul>
      </section>

      {/* 자격증이 목표라면 */}
      <section className="mb-6">
        <h2 className="font-bold text-sm text-text mb-2">자격증 취득이 목표라면</h2>
        <p className="text-sm text-text-sub leading-relaxed">
          위 로드맵으로 기초를 다진 뒤, 목적에 맞는 자격증을 선택해 준비하는 것을 추천합니다. 자격증별 난이도와 활용처는 <Link href="/concept/accounting-certificates" className="text-primary hover:underline">회계 자격증 비교 가이드</Link>에서 확인하세요.
        </p>
      </section>

      {/* 시작하기 버튼 */}
      <Link
        href="/concept/debit-credit"
        className="block w-full min-h-[44px] py-3 bg-primary text-white rounded-lg font-bold text-sm text-center active:scale-[0.98] transition-transform mb-6"
      >
        1단계부터 시작하기 →
      </Link>

      {/* 관련 개념 */}
      <section>
        <h2 className="font-bold text-sm text-text mb-3">관련 개념</h2>
        <div className="grid gap-2">
          <Link href="/concept/kifrs-vs-kgaap" className="flex items-center justify-between p-3 bg-surface border border-border rounded-lg hover:border-primary transition-colors">
            <span className="text-sm text-text">K-IFRS와 일반기업회계기준의 차이</span>
            <span className="text-xs text-text-sub">→</span>
          </Link>
          <Link href="/concept/accounting-certificates" className="flex items-center justify-between p-3 bg-surface border border-border rounded-lg hover:border-primary transition-colors">
            <span className="text-sm text-text">회계 자격증 비교와 선택 가이드</span>
            <span className="text-xs text-text-sub">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
