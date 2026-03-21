import { CATEGORIES, PROBLEMS } from "@/constants/problems";
import QuizClient from "@/components/QuizClient";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({ category: cat.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = CATEGORIES.find((c) => c.id === category);
  if (!cat) return {};
  return {
    title: `${cat.name} — 회계던`,
    description: `${cat.description}. 클릭형 분개 문제 풀이.`,
  };
}

export default async function QuizPage({ params }: Props) {
  const { category } = await params;
  const cat = CATEGORIES.find((c) => c.id === category);
  if (!cat) notFound();

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Link href="/" className="text-text-sub hover:text-primary text-sm">
          ← 홈
        </Link>
        <h1 className="font-bold text-lg">
          {cat.emoji} {cat.name}
        </h1>
      </div>
      <QuizClient category={category} />
    </div>
  );
}
