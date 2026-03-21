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

const ALL_STANDARDS = [{ id: "common" }, ...STANDARDS];

export async function generateStaticParams() {
  const params: { standard: string; category: string }[] = [];
  // 공통 카테고리의 경우: common + 각 기준에서도 접근 가능
  CATEGORIES.forEach((cat) => {
    params.push({ standard: cat.standard, category: cat.id });
  });
  // 각 기준에서 공통 카테고리 접근
  const commonCats = CATEGORIES.filter((c) => c.standard === "common");
  STANDARDS.forEach((std) => {
    commonCats.forEach((cat) => {
      params.push({ standard: std.id, category: cat.id });
    });
  });
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { standard, category } = await params;
  const std = ALL_STANDARDS.find((s) => s.id === standard);
  const cat = CATEGORIES.find((c) => c.id === category);
  if (!std || !cat) return {};
  const stdName = standard === "common" ? "공통" : (STANDARDS.find(s => s.id === standard)?.name ?? standard);
  return {
    title: `${cat.name} — ${stdName} — 회계던`,
    description: `${stdName} ${cat.description}. 클릭형 인터랙티브 문제 풀이.`,
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

  // 해당 기준 문제 + 공통 문제 합산 (common 직접 접근 시는 common만)
  const problems = isCommonStandard
    ? PROBLEMS.filter((p) => p.standard === "common" && p.category === category)
    : PROBLEMS.filter(
        (p) =>
          p.category === category &&
          (p.standard === standard || p.standard === "common")
      );

  if (problems.length === 0) notFound();

  return (
    <div>
      <div className="flex items-center gap-2 mb-5">
        <Link href="/" className="text-xs text-text-sub hover:text-primary">
          ← 홈
        </Link>
        <span className="text-xs text-border">/</span>
        <span className="text-xs text-text-sub">{stdName}</span>
        <span className="text-xs text-border">/</span>
        <span className="text-xs font-semibold text-text">{cat.name}</span>
      </div>
      <QuizSession problems={problems} categoryName={`${stdName} · ${cat.name}`} />
    </div>
  );
}
