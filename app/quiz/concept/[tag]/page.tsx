import { CONCEPTS } from "@/constants/concepts";
import { PROBLEMS } from "@/constants/problems";
import QuizSession from "@/components/QuizSession";
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
    title: `${concept.code} ${concept.name} 문제 풀기 | 회계던`,
    description: `${concept.code} ${concept.name} 관련 분개·OX·계산 문제 풀이.`,
  };
}

export default async function ConceptQuizPage({ params }: Props) {
  const { tag } = await params;
  const concept = CONCEPTS.find((c) => c.tag.toLowerCase() === tag.toLowerCase());
  if (!concept) notFound();

  const problems = PROBLEMS.filter((p) => p.tags?.includes(concept.tag));
  if (problems.length === 0) notFound();

  return (
    <div>
      <div className="flex items-center gap-2 mb-5">
        <Link href="/" className="text-xs text-text-sub hover:text-primary">← 홈</Link>
        <span className="text-xs text-border">/</span>
        <Link href={`/concept/${tag}`} className="text-xs text-text-sub hover:text-primary">
          {concept.code} {concept.name}
        </Link>
        <span className="text-xs text-border">/</span>
        <span className="text-xs font-semibold text-text">문제 풀기</span>
      </div>
      <QuizSession problems={problems} categoryName={`${concept.code} ${concept.name}`} />
    </div>
  );
}
