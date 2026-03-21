"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getWrongIds, getBookmarks } from "@/lib/storage";

export default function HomeStats() {
  const [wrongCount, setWrongCount] = useState(0);
  const [bookmarkCount, setBookmarkCount] = useState(0);

  useEffect(() => {
    setWrongCount(getWrongIds().length);
    setBookmarkCount(getBookmarks().length);
  }, []);

  if (wrongCount === 0 && bookmarkCount === 0) return null;

  return (
    <section className="mb-8 space-y-2">
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
      </div>
    </section>
  );
}
