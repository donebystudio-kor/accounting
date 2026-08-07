import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "회계 자격증 종류 비교 | 전산회계·전산세무·재경관리사·AT 선택 가이드",
  description:
    "전산회계 1·2급, 전산세무, 재경관리사, AT(FAT/TAT), 회계관리 등 주요 회계 자격증을 난이도·활용처별로 비교하고 목적에 맞는 선택법을 정리했습니다.",
  openGraph: {
    title: "회계 자격증 종류 비교 | 전산회계·전산세무·재경관리사·AT 선택 가이드",
    description:
      "전산회계 1·2급, 전산세무, 재경관리사, AT(FAT/TAT), 회계관리 등 주요 회계 자격증을 난이도·활용처별로 비교하고 목적에 맞는 선택법을 정리했습니다.",
    url: "/concept/accounting-certificates",
  },
  alternates: { canonical: "/concept/accounting-certificates" },
};

export default function AccountingCertificatesPage() {
  return (
    <div>
      {/* breadcrumb */}
      <div className="flex items-center gap-2 mb-6 flex-wrap">
        <Link href="/" className="text-xs text-text-sub hover:text-primary">← 홈</Link>
        <span className="text-xs text-border">/</span>
        <Link href="/concepts" className="text-xs text-text-sub hover:text-primary">회계 개념</Link>
        <span className="text-xs text-border">/</span>
        <span className="text-xs font-semibold text-text">회계 자격증 비교</span>
      </div>

      {/* 헤더 */}
      <div className="mb-8">
        <p className="text-sm text-primary font-bold mb-1">회계 기초</p>
        <h1 className="text-2xl font-extrabold text-text">회계 자격증 비교와 선택 가이드</h1>
        <p className="text-xs text-text-sub mt-1">목적(취업·실무·자기계발)에 따라 맞는 자격증이 다릅니다.</p>
      </div>

      <p className="text-xs text-text-sub bg-surface border border-border rounded-lg p-3 mb-6 leading-relaxed">
        ⚠️ 응시료·시험 일정·출제 범위는 시행처 사정에 따라 자주 바뀝니다. 이 페이지의 수치는 대략적인 감을 잡기 위한 참고용이며, 실제 접수 전에는 반드시 각 시행처 공식 홈페이지에서 최신 정보를 확인하세요.
      </p>

      {/* 자격증 정리 */}
      <section className="mb-6">
        <h2 className="font-bold text-sm text-text mb-2">주요 회계 자격증</h2>
        <ul className="list-disc list-inside space-y-1">
          <li className="text-sm text-text-sub leading-relaxed"><strong className="text-text">전산회계 1급·2급</strong> — 한국세무사회 주관. 전산 프로그램을 활용한 회계 실무 자격증으로, 회계를 처음 시작하는 사람이 가장 많이 응시합니다.</li>
          <li className="text-sm text-text-sub leading-relaxed"><strong className="text-text">전산세무 1급·2급</strong> — 한국세무사회 주관. 전산회계보다 한 단계 위로, 세무조정과 부가가치세 등 세무 실무 비중이 높습니다.</li>
          <li className="text-sm text-text-sub leading-relaxed"><strong className="text-text">재경관리사</strong> — 삼일회계법인 주관. 재무회계·세무회계·원가관리회계를 폭넓게 다루는 실무형 자격증으로, 인지도가 높아 자기소개서·이력서에 자주 쓰입니다.</li>
          <li className="text-sm text-text-sub leading-relaxed"><strong className="text-text">회계관리 1급·2급</strong> — 삼일회계법인 주관. 재경관리사보다 앞선 입문 단계로 볼 수 있는 자격증입니다.</li>
          <li className="text-sm text-text-sub leading-relaxed"><strong className="text-text">AT자격시험 (FAT/TAT)</strong> — 한국공인회계사회 주관. FAT(회계실무)는 1·2급, TAT(세무실무)는 1·2급으로 나뉘며, 회계법인이 직접 주관한다는 점에서 신뢰도가 높게 평가되는 편입니다.</li>
        </ul>
      </section>

      {/* 비교 표 */}
      <section className="mb-6">
        <h2 className="font-bold text-sm text-text mb-3">난이도·방식·활용처 비교 (대략적 기준)</h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="bg-surface border-b border-border">
                <th className="p-3 font-bold text-text">자격증</th>
                <th className="p-3 font-bold text-text">난이도</th>
                <th className="p-3 font-bold text-text">시험 방식</th>
                <th className="p-3 font-bold text-text">주요 활용처</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="p-3 text-text-sub">전산회계 2급</td>
                <td className="p-3 text-text-sub">입문</td>
                <td className="p-3 text-text-sub">이론(객관식) + 실무(전산 프로그램)</td>
                <td className="p-3 text-text-sub">경리 보조, 회계 첫 입문</td>
              </tr>
              <tr>
                <td className="p-3 text-text-sub">전산회계 1급</td>
                <td className="p-3 text-text-sub">초급</td>
                <td className="p-3 text-text-sub">이론(객관식) + 실무(전산 프로그램)</td>
                <td className="p-3 text-text-sub">경리·회계 실무 취업</td>
              </tr>
              <tr>
                <td className="p-3 text-text-sub">전산세무 2급·1급</td>
                <td className="p-3 text-text-sub">중급~중상급</td>
                <td className="p-3 text-text-sub">이론(객관식) + 실무(전산 프로그램)</td>
                <td className="p-3 text-text-sub">세무·경리 실무, 세무대리인 사무소 취업</td>
              </tr>
              <tr>
                <td className="p-3 text-text-sub">회계관리 2급·1급</td>
                <td className="p-3 text-text-sub">입문~중급</td>
                <td className="p-3 text-text-sub">객관식 필기</td>
                <td className="p-3 text-text-sub">회계 기초 다지기, 재경관리사 준비 단계</td>
              </tr>
              <tr>
                <td className="p-3 text-text-sub">재경관리사</td>
                <td className="p-3 text-text-sub">중급</td>
                <td className="p-3 text-text-sub">객관식 필기</td>
                <td className="p-3 text-text-sub">취업 스펙, 실무 역량 증명, 승진</td>
              </tr>
              <tr>
                <td className="p-3 text-text-sub">AT (FAT 2급·1급)</td>
                <td className="p-3 text-text-sub">입문~초급</td>
                <td className="p-3 text-text-sub">이론 + 실무(전산 프로그램)</td>
                <td className="p-3 text-text-sub">회계 실무 취업 준비</td>
              </tr>
              <tr>
                <td className="p-3 text-text-sub">AT (TAT 2급·1급)</td>
                <td className="p-3 text-text-sub">중급~중상급</td>
                <td className="p-3 text-text-sub">이론 + 실무(전산 프로그램)</td>
                <td className="p-3 text-text-sub">세무 실무 취업 준비</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 목적별 추천 */}
      <section className="mb-6">
        <h2 className="font-bold text-sm text-text mb-2">목적별 추천</h2>
        <ul className="list-disc list-inside space-y-1">
          <li className="text-sm text-text-sub leading-relaxed"><strong className="text-text">회계를 처음 공부한다면</strong> — 전산회계 2급 또는 회계관리 2급으로 시작하는 경우가 많습니다.</li>
          <li className="text-sm text-text-sub leading-relaxed"><strong className="text-text">경리·회계 실무 취업이 목표라면</strong> — 전산회계 1급, AT(FAT 1급)을 우선 고려합니다.</li>
          <li className="text-sm text-text-sub leading-relaxed"><strong className="text-text">세무 실무 쪽으로 방향을 잡는다면</strong> — 전산세무, AT(TAT)를 준비합니다.</li>
          <li className="text-sm text-text-sub leading-relaxed"><strong className="text-text">이력서에 무게감 있는 자격증이 필요하다면</strong> — 재경관리사가 인지도 면에서 자주 언급됩니다.</li>
          <li className="text-sm text-text-sub leading-relaxed"><strong className="text-text">단순히 회계 개념을 익히고 싶은 자기계발 목적이라면</strong> — 자격증 취득보다 이 사이트의 기초 개념 학습과 문제 풀이만으로도 충분히 도움이 됩니다.</li>
        </ul>
      </section>

      {/* 준비 기간 */}
      <section className="mb-6">
        <h2 className="font-bold text-sm text-text mb-2">준비 기간 가이드 (개인차 큼)</h2>
        <p className="text-sm text-text-sub leading-relaxed">
          회계를 전혀 몰랐던 사람 기준으로, 입문 단계 자격증(전산회계 2급·회계관리 2급)은 대략 2~4주, 중급 단계(전산회계 1급·AT FAT1급)는 대략 1~2개월, 재경관리사나 전산세무 1급처럼 범위가 넓은 자격증은 대략 2~3개월 정도를 참고 기준으로 삼는 경우가 많습니다. 다만 기존 회계 지식이나 학습 시간에 따라 차이가 크므로, 이 사이트의 <Link href="/concept/study-roadmap" className="text-primary hover:underline">회계 공부 순서</Link>대로 기초부터 차근히 확인하며 본인의 속도를 가늠해보는 것을 권합니다.
        </p>
      </section>

      {/* 문제 링크 */}
      <Link
        href="/quiz/common/ox"
        className="block w-full min-h-[44px] py-3 bg-primary text-white rounded-lg font-bold text-sm text-center active:scale-[0.98] transition-transform mb-6"
      >
        기초 개념 OX 문제로 실력 점검하기 →
      </Link>

      {/* 관련 개념 */}
      <section>
        <h2 className="font-bold text-sm text-text mb-3">관련 개념</h2>
        <div className="grid gap-2">
          <Link href="/concept/study-roadmap" className="flex items-center justify-between p-3 bg-surface border border-border rounded-lg hover:border-primary transition-colors">
            <span className="text-sm text-text">회계 공부 순서: 무엇부터 시작할까</span>
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
