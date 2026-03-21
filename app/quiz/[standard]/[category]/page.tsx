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
  CATEGORIES.forEach((cat) => {
    params.push({ standard: cat.standard, category: cat.id });
  });
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
  const cat = CATEGORIES.find((c) => c.id === category);
  if (!cat) return {};
  const stdName = standard === "common" ? "공통" : (STANDARDS.find(s => s.id === standard)?.name ?? standard);
  const title = `${cat.name} — ${stdName}`;
  const description = `${stdName} ${cat.description}. 클릭형 인터랙티브 회계 문제 풀이.`;
  const url = `/quiz/${standard}/${category}`;
  return {
    title,
    description,
    openGraph: {
      title: `${title} — 회계던`,
      description,
      url,
      type: "website",
    },
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
