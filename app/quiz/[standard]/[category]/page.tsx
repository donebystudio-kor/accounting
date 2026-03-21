import { STANDARDS } from "@/constants/standards";
import { CATEGORIES } from "@/constants/categories";
import { PROBLEMS } from "@/constants/problems";
import QuizSession from "@/components/QuizSession";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

interface Props {
  params: Promise<{ standard: string; category: string }>;
}

export async function generateStaticParams() {
  const params: { standard: string; category: string }[] = [];
  // 모든 카테고리의 원래 기준 경로
  CATEGORIES.forEach((cat) => {
    params.push({ standard: cat.standard, category: cat.id });
  });
  // 각 기준에서 해당 기준 전용 카테고리 접근 (공통 문제 합산)
  STANDARDS.forEach((std) => {
    CATEGORIES.filter((c) => c.standard === std.id).forEach((cat) => {
      params.push({ standard: std.id, category: cat.id });
    });
  });
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { standard, category } = await params;
  const cat = CATEGORIES.find((c) => c.id === category);
  if (!cat) return {};
  const stdName = standard === "common" ? "공통" : (STANDARDS.find(s => s.id === standard)?.name ?? standard);
  const title = `${cat.name} — ${stdName}`;
  const description = `${stdName} ${cat.description}. 클릭형 인터랙티브 회계 문제 풀이.`;
  const url = `/quiz/${standard}/${category}`;
  return {
    title,
    description,
    openGraph: { title: `${title} — 회계던`, description, url, type: "website" },
    alternates: { canonical: url },
  };
}

export default async function QuizPage({ params }: Props) {
  const { standard, category } = await params;
  const cat = CATEGORIES.find((c) => c.id === category);
  if (!cat) notFound();

  const isCommonStandard = standard === "common";
  const stdName = isCommonStandard
    ? "공통"
    : (STANDARDS.find((s) => s.id === standard)?.name ?? standard);

  let problems;
  if (isCommonStandard) {
    // 공통 직접 접근: 공통 문제만
    problems = PROBLEMS.filter((p) => p.standard === "common" && p.category === category);
  } else {
    // 기준별 카테고리 접근: 해당 카테고리 문제 + 모든 공통 문제
    const stdProblems = PROBLEMS.filter(
      (p) => p.standard === standard && p.category === category
    );
    const commonProblems = PROBLEMS.filter((p) => p.standard === "common");
    problems = [...stdProblems, ...commonProblems];
  }

  if (problems.length === 0) notFound();

  return (
    <div>
      <div className="flex items-center gap-2 mb-5">
        <Link href="/" className="text-xs text-text-sub hover:text-primary">
          ← 홈
        </Link>
        <span className="text-xs text-border">/</span>
        <Link href={`/${standard}`} className="text-xs text-text-sub hover:text-primary">
          {stdName}
        </Link>
        <span className="text-xs text-border">/</span>
        <span className="text-xs font-semibold text-text">{cat.name}</span>
      </div>
      <QuizSession problems={problems} categoryName={`${stdName} · ${cat.name}`} />
    </div>
  );
}
