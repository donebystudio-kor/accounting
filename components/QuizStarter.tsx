"use client";

import { useState, useMemo, useEffect } from "react";
import { Problem } from "@/constants/problems";
import QuizSession from "./QuizSession";
import { clearWrong, clearBookmarks, clearSolved, getWrongIds, getBookmarks, getUnsolvedIds } from "@/lib/storage";

interface Props {
  stdProblems: Problem[];
  commonProblems: Problem[];
  categoryName: string;
  isCommonStandard: boolean;
}

type DifficultyFilter = "all" | "basic-intermediate" | "advanced-practical";
type RangeFilter = "all" | "unsolved" | "wrong" | "bookmark";
type CountOption = 10 | 20 | 50 | "all";

export default function QuizStarter({
  stdProblems,
  commonProblems,
  categoryName,
  isCommonStandard,
}: Props) {
  const [started, setStarted] = useState(false);
  const [includeCommon, setIncludeCommon] = useState(true);
  const [diffFilter, setDiffFilter] = useState<DifficultyFilter>("all");
  const [rangeFilter, setRangeFilter] = useState<RangeFilter>("all");
  const [countOption, setCountOption] = useState<CountOption>("all");

  // localStorage 데이터 (클라이언트에서만)
  const [wrongIds, setWrongIds] = useState<string[]>([]);
  const [bookmarkIds, setBookmarkIds] = useState<string[]>([]);
  const [unsolvedIds, setUnsolvedIds] = useState<string[]>([]);

  useEffect(() => {
    const allIds = [...stdProblems, ...commonProblems].map((p) => p.id);
    setWrongIds(getWrongIds());
    setBookmarkIds(getBookmarks());
    setUnsolvedIds(getUnsolvedIds(allIds));
  }, [stdProblems, commonProblems]);

  // 1차: 기준 + 공통 + 난이도
  const baseProblems = useMemo(() => {
    const base = isCommonStandard
      ? stdProblems
      : includeCommon
      ? [...stdProblems, ...commonProblems]
      : stdProblems;

    if (diffFilter === "basic-intermediate") {
      return base.filter((p) => p.difficulty === "basic" || p.difficulty === "intermediate");
    }
    if (diffFilter === "advanced-practical") {
      return base.filter((p) => p.difficulty === "advanced" || p.difficulty === "practical");
    }
    return base;
  }, [stdProblems, commonProblems, isCommonStandard, includeCommon, diffFilter]);

  // 2차: 문제 범위 적용
  const rangedProblems = useMemo(() => {
    if (rangeFilter === "unsolved") {
      const set = new Set(unsolvedIds);
      return baseProblems.filter((p) => set.has(p.id));
    }
    if (rangeFilter === "wrong") {
      const set = new Set(wrongIds);
      // 오답 횟수 많은 순
      return baseProblems.filter((p) => set.has(p.id)).sort((a, b) => {
        const ai = wrongIds.indexOf(a.id);
        const bi = wrongIds.indexOf(b.id);
        return ai - bi;
      });
    }
    if (rangeFilter === "bookmark") {
      const set = new Set(bookmarkIds);
      return baseProblems.filter((p) => set.has(p.id));
    }
    return baseProblems;
  }, [baseProblems, rangeFilter, wrongIds, bookmarkIds, unsolvedIds]);

  // 3차: 문제 수
  const finalProblems = useMemo(() => {
    if (countOption === "all") return rangedProblems;
    return rangedProblems.slice(0, countOption);
  }, [rangedProblems, countOption]);

  if (started) {
    return <QuizSession problems={finalProblems} categoryName={categoryName} />;
  }

  const diffOptions: { value: DifficultyFilter; label: string }[] = [
    { value: "all", label: "전체" },
    { value: "basic-intermediate", label: "초급·중급" },
    { value: "advanced-practical", label: "고급·실전" },
  ];

  const rangeOptions: { value: RangeFilter; label: string; count: number }[] = [
    { value: "all", label: "전체", count: baseProblems.length },
    { value: "unsolved", label: "안 푼 문제", count: baseProblems.filter((p) => new Set(unsolvedIds).has(p.id)).length },
    { value: "wrong", label: "오답 문제", count: baseProblems.filter((p) => new Set(wrongIds).has(p.id)).length },
    { value: "bookmark", label: "북마크", count: baseProblems.filter((p) => new Set(bookmarkIds).has(p.id)).length },
  ];

  const countOptions: { value: CountOption; label: string }[] = [
    { value: 10, label: "10문제" },
    { value: 20, label: "20문제" },
    { value: 50, label: "50문제" },
    { value: "all", label: "전체" },
  ];

  return (
    <div className="py-6">
      <div className="bg-surface border border-border rounded-lg p-5 mb-5 space-y-5">
        <h2 className="font-bold text-text">문제 풀이 옵션</h2>

        {/* 공통 문제 포함 */}
        {!isCommonStandard && (
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-text">공통 문제 포함</p>
              <p className="text-xs text-text-sub mt-0.5">모든 회계기준에 공통으로 적용되는 문제를 함께 출제합니다</p>
            </div>
            <button
              onClick={() => setIncludeCommon(!includeCommon)}
              className={`relative w-11 h-6 rounded-full transition-colors ${includeCommon ? "bg-primary" : "bg-border"}`}
            >
              <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${includeCommon ? "translate-x-5" : ""}`} />
            </button>
          </div>
        )}

        {/* 문제 범위 */}
        <div>
          <p className="text-sm font-medium text-text mb-2">문제 범위</p>
          <div className="grid grid-cols-2 gap-2">
            {rangeOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setRangeFilter(opt.value)}
                disabled={opt.count === 0 && opt.value !== "all"}
                className={`min-h-[40px] px-3 py-2 text-xs border rounded-md font-medium transition-colors ${
                  rangeFilter === opt.value
                    ? "border-primary bg-primary-bg/30 text-primary"
                    : opt.count === 0 && opt.value !== "all"
                    ? "border-border text-text-sub/30 cursor-not-allowed"
                    : "border-border text-text-sub hover:border-primary/50"
                }`}
              >
                {opt.label} ({opt.count})
              </button>
            ))}
          </div>
        </div>

        {/* 난이도 선택 */}
        <div>
          <p className="text-sm font-medium text-text mb-2">난이도</p>
          <div className="flex gap-2">
            {diffOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setDiffFilter(opt.value)}
                className={`flex-1 min-h-[40px] px-3 py-2 text-xs border rounded-md font-medium transition-colors ${
                  diffFilter === opt.value
                    ? "border-primary bg-primary-bg/30 text-primary"
                    : "border-border text-text-sub hover:border-primary/50"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* 문제 수 선택 */}
        <div>
          <p className="text-sm font-medium text-text mb-2">문제 수</p>
          <div className="flex gap-2">
            {countOptions.map((opt) => {
              const disabled = opt.value !== "all" && opt.value > rangedProblems.length;
              return (
                <button
                  key={String(opt.value)}
                  onClick={() => !disabled && setCountOption(opt.value)}
                  disabled={disabled}
                  className={`flex-1 min-h-[40px] px-3 py-2 text-xs border rounded-md font-medium transition-colors ${
                    countOption === opt.value
                      ? "border-primary bg-primary-bg/30 text-primary"
                      : disabled
                      ? "border-border text-text-sub/30 cursor-not-allowed"
                      : "border-border text-text-sub hover:border-primary/50"
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 문제 수 요약 */}
        <div className="text-xs text-text-sub pt-2 border-t border-border">
          사용 가능: <span className="font-bold text-text">{rangedProblems.length}문제</span>
          {countOption !== "all" && (
            <> → 출제: <span className="font-bold text-primary">{Math.min(countOption as number, rangedProblems.length)}문제</span></>
          )}
          {rangedProblems.length === 0 && rangeFilter !== "all" && (
            <p className="mt-1 text-wrong">선택한 조건에 해당하는 문제가 없습니다</p>
          )}
        </div>
      </div>

      <button
        onClick={() => setStarted(true)}
        disabled={finalProblems.length === 0}
        className="w-full min-h-[44px] py-3 bg-primary text-white rounded-lg font-bold text-sm disabled:opacity-40 active:scale-[0.98] transition-transform"
      >
        {finalProblems.length}문제 시작
      </button>

      {/* 초기화 */}
      <div className="flex gap-2 mt-4">
        <button onClick={() => { if (confirm("오답 기록을 모두 삭제할까요?")) { clearWrong(); setWrongIds([]); } }}
          className="flex-1 min-h-[40px] py-2 text-xs border border-border rounded-lg text-text-sub hover:border-wrong hover:text-wrong transition-colors">
          오답 초기화
        </button>
        <button onClick={() => { if (confirm("북마크를 모두 삭제할까요?")) { clearBookmarks(); setBookmarkIds([]); } }}
          className="flex-1 min-h-[40px] py-2 text-xs border border-border rounded-lg text-text-sub hover:border-wrong hover:text-wrong transition-colors">
          북마크 초기화
        </button>
        <button onClick={() => { if (confirm("푼 문제 기록을 모두 초기화할까요?")) { clearSolved(); setUnsolvedIds([...stdProblems, ...commonProblems].map(p=>p.id)); } }}
          className="flex-1 min-h-[40px] py-2 text-xs border border-border rounded-lg text-text-sub hover:border-wrong hover:text-wrong transition-colors">
          풀이 초기화
        </button>
      </div>
    </div>
  );
}
