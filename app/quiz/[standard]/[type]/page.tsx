import { STANDARDS } from "@/constants/standards";
import { PROBLEMS } from "@/constants/problems";
import QuizStarter from "@/components/QuizStarter";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

const VALID_TYPES = ["journal", "ox", "calculation"] as const;
const TYPE_NAMES: Record<string, string> = {
  journal: "분개",
  ox: "OX 퀴즈",
  calculation: "계산 문제",
};
const ALL_STANDARDS = ["common", ...STANDARDS.map((s) => s.id)];

interface Props {
  params: Promise<{ standard: string; type: string }>;
}

export async function generateStaticParams() {
  const params: { standard: string; type: string }[] = [];
  ALL_STANDARDS.forEach((std) => {
    VALID_TYPES.forEach((type) => {
      params.push({ standard: std, type });
    });
  });
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { standard, type } = await params;
  const stdName = standard === "common" ? "공통" : (STANDARDS.find((s) => s.id === standard)?.name ?? standard);
  const typeName = TYPE_NAMES[type] ?? type;
  const title = `${typeName} — ${stdName}`;
  const description = `${stdName} ${typeName}. 클릭형 인터랙티브 회계 문제 풀이.`;
  const url = `/quiz/${standard}/${type}`;
  return {
    title,
    description,
    openGraph: { title: `${title} — 회계던`, description, url, type: "website" },
    alternates: { canonical: url },
  };
}

export default async function QuizPage({ params }: Props) {
  const { standard, type } = await params;
  if (!VALID_TYPES.includes(type as any)) notFound();

  const isCommon = standard === "common";
  const stdName = isCommon ? "공통" : (STANDARDS.find((s) => s.id === standard)?.name ?? standard);
  const typeName = TYPE_NAMES[type] ?? type;

  const stdProblems = isCommon
    ? PROBLEMS.filter((p) => p.standard === "common" && p.type === type)
    : PROBLEMS.filter((p) => p.standard === standard && p.type === type);

  const commonProblems = isCommon
    ? []
    : PROBLEMS.filter((p) => p.standard === "common" && p.type === type);

  if (stdProblems.length === 0 && commonProblems.length === 0) notFound();

  return (
    <div>
      <div className="flex items-center gap-2 mb-5">
        <Link href="/" className="text-xs text-text-sub hover:text-primary">← 홈</Link>
        <span className="text-xs text-border">/</span>
        <Link href={`/${standard}`} className="text-xs text-text-sub hover:text-primary">{stdName}</Link>
        <span className="text-xs text-border">/</span>
        <span className="text-xs font-semibold text-text">{typeName}</span>
      </div>
      <QuizStarter
        stdProblems={stdProblems}
        commonProblems={commonProblems}
        categoryName={`${stdName} · ${typeName}`}
        isCommonStandard={isCommon}
      />
    </div>
  );
}
