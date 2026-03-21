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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  const concept = CONCEPTS.find((c) => c.tag.toLowerCase() === tag.toLowerCase());
  if (!concept) return {};
  return {
    title: `${concept.code} ${concept.name} — 회계 개념 | 회계던`,
    description: `${concept.code} ${concept.name} 개념 설명, 핵심 분개 패턴, 관련 문제 풀이.`,
    openGraph: {
      title: `${concept.code} ${concept.name} — 회계 개념 | 회계던`,
      description: `${concept.code} ${concept.name} 개념 설명, 핵심 분개 패턴, 관련 문제 풀이.`,
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
