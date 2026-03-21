"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { PROBLEMS } from "@/constants/problems";
import QuizSession from "@/components/QuizSession";
import Link from "next/link";
import { getWrongIds, getBookmarks } from "@/lib/storage";

function QuizRouter() {
  const searchParams = useSearchParams();
  const tag = searchParams.get("tag");
  const mode = searchParams.get("mode");
  const [modeProblems, setModeProblems] = useState<typeof PROBLEMS | null>(null);
  const [modeLabel, setModeLabel] = useState("");

  useEffect(() => {
    if (mode === "wrong") {
      const ids = getWrongIds();
      const ps = ids.map((id) => PROBLEMS.find((p) => p.id === id)).filter(Boolean) as typeof PROBLEMS;
      setModeProblems(ps);
      setModeLabel(`오답 노트 (${ps.length}문제)`);
    } else if (mode === "bookmark") {
      const ids = getBookmarks();
      const ps = ids.map((id) => PROBLEMS.find((p) => p.id === id)).filter(Boolean) as typeof PROBLEMS;
      setModeProblems(ps);
      setModeLabel(`북마크 (${ps.length}문제)`);
    }
  }, [mode]);

  // 오답/북마크 모드
  if (mode === "wrong" || mode === "bookmark") {
    if (modeProblems === null) return <div className="text-center py-12 text-text-sub">로딩 중...</div>;
    if (modeProblems.length === 0) {
      return (
        <div className="text-center py-12">
          <p className="text-text-sub mb-4">{mode === "wrong" ? "오답 기록이 없습니다." : "북마크된 문제가 없습니다."}</p>
          <Link href="/" className="text-primary text-sm hover:underline">홈으로</Link>
        </div>
      );
    }
    return (
      <div>
        <div className="flex items-center gap-2 mb-5">
          <Link href="/" className="text-xs text-text-sub hover:text-primary">← 홈</Link>
          <span className="text-xs text-border">/</span>
          <span className="text-xs font-semibold text-text">{modeLabel}</span>
        </div>
        <QuizSession problems={modeProblems} categoryName={modeLabel} />
      </div>
    );
  }

  // 태그 모드
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
        <p className="text-text-sub mb-4">&ldquo;{tag}&rdquo; 태그에 해당하는 문제가 없습니다.</p>
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
      <QuizRouter />
    </Suspense>
  );
}
