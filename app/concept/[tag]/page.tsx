import { CONCEPTS } from "@/constants/concepts";
import { PROBLEMS } from "@/constants/problems";
import ConceptDiagram from "@/components/diagrams";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

interface Props {
  params: Promise<{ tag: string }>;
}

export async function generateStaticParams() {
  return CONCEPTS.map((c) => ({ tag: c.tag.toLowerCase() }));
}

const META_MAP: Record<string, { title: string; description: string }> = {
  ifrs16: {
    title: "IFRS 16 리스 회계처리 완벽 정리 | 사용권자산·리스부채 분개",
    description: "IFRS 16 리스 회계처리 방법, 사용권자산과 리스부채 인식 기준, 핵심 분개 패턴을 정리했습니다.",
  },
  ias16: {
    title: "IAS 16 유형자산 회계처리 | 감가상각·재평가 분개 정리",
    description: "IAS 16 유형자산 취득·감가상각·처분 회계처리와 재평가모형 적용 방법을 정리했습니다.",
  },
  ias2: {
    title: "IAS 2 재고자산 회계처리 | 선입선출법·가중평균법 완벽 정리",
    description: "IAS 2 재고자산 평가 방법, 선입선출법과 가중평균법 차이, 저가법 적용 기준을 정리했습니다.",
  },
  ias12: {
    title: "IAS 12 법인세 회계처리 | 이연법인세 자산·부채 계산 방법",
    description: "IAS 12 당기법인세와 이연법인세 계산 방법, 일시적차이와 영구차이 구분을 정리했습니다.",
  },
  ias19: {
    title: "IAS 19 퇴직급여 회계처리 | 확정급여채무 현재가치 계산",
    description: "IAS 19 확정급여제도 회계처리, 퇴직급여채무 현재가치 계산과 보험수리적손익을 정리했습니다.",
  },
  ifrs9: {
    title: "IFRS 9 금융상품 회계처리 | 대손충당금·ECL 계산 방법",
    description: "IFRS 9 금융자산 분류·측정, 기대신용손실(ECL) 대손충당금 계산 방법을 정리했습니다.",
  },
  ifrs15: {
    title: "IFRS 15 수익인식 회계처리 | 진행률·계약자산 계산 방법",
    description: "IFRS 15 수행의무 식별, 거래가격 배분, 진행률 기준 수익인식 방법을 정리했습니다.",
  },
  ias36: {
    title: "IAS 36 손상차손 회계처리 | 회수가능액 계산·손상테스트",
    description: "IAS 36 자산손상 인식 기준, 회수가능액 계산 방법, 손상차손 환입 조건을 정리했습니다.",
  },
  ias37: {
    title: "IAS 37 충당부채 회계처리 | 복구충당부채 현재가치 계산",
    description: "IAS 37 충당부채 인식 요건, 복구충당부채 현재가치 계산과 이자전입액 처리를 정리했습니다.",
  },
  ias38: {
    title: "IAS 38 무형자산 회계처리 | 상각·손상·개발비 인식 기준",
    description: "IAS 38 무형자산 인식 요건, 상각 방법, 연구비와 개발비 구분 기준을 정리했습니다.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  const concept = CONCEPTS.find((c) => c.tag.toLowerCase() === tag.toLowerCase());
  if (!concept) return {};
  const meta = META_MAP[concept.tag.toLowerCase()];
  const title = meta?.title ?? `${concept.code} ${concept.name} — 회계 개념 | 회계던`;
  const description = meta?.description ?? `${concept.code} ${concept.name} 개념 설명, 핵심 분개 패턴, 관련 문제 풀이.`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `/concept/${tag}`,
    },
    alternates: { canonical: `/concept/${tag}` },
  };
}

export default async function ConceptPage({ params }: Props) {
  const { tag } = await params;
  const concept = CONCEPTS.find((c) => c.tag.toLowerCase() === tag.toLowerCase());
  if (!concept) notFound();

  // 태그 매칭 문제
  const related = PROBLEMS.filter((p) => p.tags?.includes(concept.tag));

  // 핵심 분개 패턴 추출 (journal 타입에서 최대 5개)
  const journalExamples = related
    .filter((p) => p.type === "journal" && p.debit && p.credit)
    .slice(0, 5);

  // 유형별 문제 수
  const journalCount = related.filter((p) => p.type === "journal").length;
  const oxCount = related.filter((p) => p.type === "ox").length;
  const calcCount = related.filter((p) => p.type === "calculation").length;

  return (
    <div>
      {/* breadcrumb */}
      <div className="flex items-center gap-2 mb-6">
        <Link href="/" className="text-xs text-text-sub hover:text-primary">← 홈</Link>
        <span className="text-xs text-border">/</span>
        <span className="text-xs font-semibold text-text">{concept.code} {concept.name}</span>
      </div>

      {/* 헤더 */}
      <div className="mb-8">
        <p className="text-sm text-primary font-bold mb-1">{concept.code}</p>
        <h1 className="text-2xl font-extrabold text-text">{concept.name}</h1>
        <p className="text-xs text-text-sub mt-1">관련 문제 {related.length}개</p>
      </div>

      {/* 다이어그램 */}
      <ConceptDiagram tag={concept.tag} />

      {/* 한 줄 정의 */}
      {concept.oneLiner && (
        <section className="mb-6">
          <h2 className="font-bold text-sm text-text mb-2">{concept.code} {concept.name}이란?</h2>
          <p className="text-sm text-text-sub leading-relaxed">{concept.oneLiner}</p>
        </section>
      )}

      {/* 언제 적용하는가 */}
      {concept.whenToApply && (
        <section className="mb-6">
          <h2 className="font-bold text-sm text-text mb-2">언제 적용하는가</h2>
          <p className="text-sm text-text-sub leading-relaxed">{concept.whenToApply}</p>
        </section>
      )}

      {/* 핵심 계산 공식 */}
      {concept.formula && (
        <section className="mb-6">
          <h2 className="font-bold text-sm text-text mb-2">핵심 계산 공식</h2>
          <pre className="bg-surface border border-border rounded-lg p-4 text-sm text-text-sub leading-relaxed overflow-x-auto whitespace-pre-wrap">
            <code>{concept.formula}</code>
          </pre>
        </section>
      )}

      {/* 자주 하는 실수 */}
      {concept.commonMistakes && concept.commonMistakes.length > 0 && (
        <section className="mb-6">
          <h2 className="font-bold text-sm text-text mb-2">자주 하는 실수</h2>
          <ul className="list-disc list-inside space-y-1">
            {concept.commonMistakes.map((mistake, i) => (
              <li key={i} className="text-sm text-text-sub leading-relaxed">{mistake}</li>
            ))}
          </ul>
        </section>
      )}

      {/* 개념 설명 */}
      <section className="bg-surface border border-border rounded-lg p-5 mb-6">
        <h2 className="font-bold text-sm text-text mb-3">개념 설명</h2>
        {concept.description.split("\n\n").map((para, i) => (
          <p key={i} className="text-sm text-text-sub leading-relaxed mb-2 last:mb-0">
            {para}
          </p>
        ))}
      </section>

      {/* 핵심 분개 패턴 */}
      {journalExamples.length > 0 && (
        <section className="mb-6">
          <h2 className="font-bold text-sm text-text mb-3">핵심 분개 패턴</h2>
          <div className="space-y-2">
            {journalExamples.map((p) => (
              <div
                key={p.id}
                className="bg-surface border border-border rounded-lg p-3"
              >
                <p className="text-xs text-text-sub mb-2">{p.text}</p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-red-50/30 rounded p-2">
                    <p className="font-bold text-debit text-[10px] mb-1">차변</p>
                    {p.debit!.map((e, i) => (
                      <p key={i} className="text-text-sub">
                        {e.account} <span className="text-text">{e.amount.toLocaleString()}</span>
                      </p>
                    ))}
                  </div>
                  <div className="bg-blue-50/30 rounded p-2">
                    <p className="font-bold text-credit text-[10px] mb-1">대변</p>
                    {p.credit!.map((e, i) => (
                      <p key={i} className="text-text-sub">
                        {e.account} <span className="text-text">{e.amount.toLocaleString()}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 관련 문제 요약 */}
      <section className="mb-6">
        <h2 className="font-bold text-sm text-text mb-3">관련 문제</h2>
        <div className="grid grid-cols-3 gap-2">
          {journalCount > 0 && (
            <div className="bg-surface border border-border rounded-lg p-3 text-center">
              <p className="text-lg font-bold text-primary">{journalCount}</p>
              <p className="text-[10px] text-text-sub">분개</p>
            </div>
          )}
          {oxCount > 0 && (
            <div className="bg-surface border border-border rounded-lg p-3 text-center">
              <p className="text-lg font-bold text-primary">{oxCount}</p>
              <p className="text-[10px] text-text-sub">OX</p>
            </div>
          )}
          {calcCount > 0 && (
            <div className="bg-surface border border-border rounded-lg p-3 text-center">
              <p className="text-lg font-bold text-primary">{calcCount}</p>
              <p className="text-[10px] text-text-sub">계산</p>
            </div>
          )}
        </div>
      </section>

      {/* 문제 풀기 버튼 */}
      <Link
        href={`/quiz/concept/${concept.tag.toLowerCase()}`}
        className="block w-full min-h-[44px] py-3 bg-primary text-white rounded-lg font-bold text-sm text-center active:scale-[0.98] transition-transform"
      >
        이 개념 문제 풀기 ({related.length}문제)
      </Link>
    </div>
  );
}
