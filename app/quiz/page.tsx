"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { PROBLEMS } from "@/constants/problems";
import QuizSession from "@/components/QuizSession";
import Link from "next/link";

function QuizByTag() {
  const searchParams = useSearchParams();
  const tag = searchParams.get("tag");

  if (!tag) {
    return (
      <div className="text-center py-12">
        <p className="text-text-sub mb-4">태그를 선택해주세요.</p>
        <Link href="/" className="text-primary text-sm hover:underline">홈으로</Link>
      </div>
    );
  }

  const problems = PROBLEMS.filter((p) => p.tags?.includes(tag));

  if (problems.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-text-sub mb-4">"{tag}" 태그에 해당하는 문제가 없습니다.</p>
        <Link href="/" className="text-primary text-sm hover:underline">홈으로</Link>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-2 mb-5">
        <Link href="/" className="text-xs text-text-sub hover:text-primary">← 홈</Link>
        <span className="text-xs text-border">/</span>
        <span className="text-xs font-semibold text-text">{tag} 문제 풀기</span>
      </div>
      <QuizSession problems={problems} categoryName={tag} />
    </div>
  );
}

export default function QuizPage() {
  return (
    <Suspense fallback={<div className="text-center py-12 text-text-sub">로딩 중...</div>}>
      <QuizByTag />
    </Suspense>
  );
}
