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
  return CATEGORIES.map((cat) => ({
    standard: cat.standard,
    category: cat.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { standard, category } = await params;
  const std = STANDARDS.find((s) => s.id === standard);
  const cat = CATEGORIES.find((c) => c.id === category && c.standard === standard);
  if (!std || !cat) return {};
  return {
    title: `${cat.name} — ${std.name} — 회계던`,
    description: `${std.name} ${cat.description}. 클릭형 인터랙티브 문제 풀이.`,
  };
}

export default async function QuizPage({ params }: Props) {
  const { standard, category } = await params;
  const std = STANDARDS.find((s) => s.id === standard);
  const cat = CATEGORIES.find((c) => c.id === category && c.standard === standard);
  if (!std || !cat) notFound();

  const problems = PROBLEMS.filter(
    (p) => p.standard === standard && p.category === category
  );

  return (
    <div>
      <div className="flex items-center gap-2 mb-5">
        <Link href="/" className="text-xs text-text-sub hover:text-primary">
          ← 홈
        </Link>
        <span className="text-xs text-border">/</span>
        <span className="text-xs text-text-sub">{std.name}</span>
        <span className="text-xs text-border">/</span>
        <span className="text-xs font-semibold text-text">{cat.name}</span>
      </div>
      <QuizSession problems={problems} categoryName={cat.name} />
    </div>
  );
}
