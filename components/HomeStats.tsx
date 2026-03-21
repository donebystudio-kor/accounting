"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getWrongIds, getBookmarks, getLastPosition, isPositionStale, getSolvedCount, type LastPosition } from "@/lib/storage";
import { PROBLEMS } from "@/constants/problems";

export default function HomeStats() {
  const [wrongCount, setWrongCount] = useState(0);
  const [bookmarkCount, setBookmarkCount] = useState(0);
  const [solvedCount, setSolvedCount] = useState(0);
  const [lastPos, setLastPos] = useState<LastPosition | null>(null);

  useEffect(() => {
    setWrongCount(getWrongIds().length);
    setSolvedCount(getSolvedCount());
    setBookmarkCount(getBookmarks().length);
    setLastPos(getLastPosition());
  }, []);

  const totalProblems = PROBLEMS.length;
  const unsolvedCount = totalProblems - solvedCount;

  if (wrongCount === 0 && bookmarkCount === 0 && solvedCount === 0 && !lastPos) return null;

  return (
    <section className="mb-8 space-y-2">
      {/* 이어서 풀기 */}
      {lastPos && (
        <div className="bg-surface border border-border rounded-lg p-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-text">이어서 풀기</p>
            <p className="text-xs text-text-sub mt-0.5">
              {lastPos.standard} · {lastPos.index + 1}번째 문제
              {isPositionStale(lastPos) && (
                <span className="ml-1 text-partial">(오래된 기록)</span>
              )}
            </p>
          </div>
          <Link
            href={`/quiz?resume=true`}
            className="px-4 py-2 bg-primary text-white rounded-lg text-xs font-bold"
          >
            계속하기
          </Link>
        </div>
      )}

      {/* 통계 */}
      <div className="grid grid-cols-2 gap-2">
        {wrongCount > 0 && (
          <Link
            href="/quiz?mode=wrong"
            className="bg-surface border border-border rounded-lg p-3 hover:border-primary transition-colors"
          >
            <p className="text-xs text-text-sub">오답 노트</p>
            <p className="text-lg font-bold text-wrong">{wrongCount}개</p>
            <p className="text-[10px] text-text-sub">틀린 문제 다시 풀기 →</p>
          </Link>
        )}
        {bookmarkCount > 0 && (
          <Link
            href="/quiz?mode=bookmark"
            className="bg-surface border border-border rounded-lg p-3 hover:border-primary transition-colors"
          >
            <p className="text-xs text-text-sub">북마크</p>
            <p className="text-lg font-bold text-primary">{bookmarkCount}개</p>
            <p className="text-[10px] text-text-sub">찜한 문제 풀기 →</p>
          </Link>
        )}
        {solvedCount > 0 && (
          <Link
            href="/quiz?mode=unsolved"
            className="bg-surface border border-border rounded-lg p-3 hover:border-primary transition-colors"
          >
            <p className="text-xs text-text-sub">진행률</p>
            <p className="text-lg font-bold text-text">{solvedCount}<span className="text-xs font-normal text-text-sub">/{totalProblems}</span></p>
            <p className="text-[10px] text-text-sub">{unsolvedCount > 0 ? `안 푼 ${unsolvedCount}문제 풀기 →` : "전부 완료! 🎉"}</p>
          </Link>
        )}
      </div>
    </section>
  );
}
