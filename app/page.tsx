import Link from "next/link";
import { CATEGORIES } from "@/constants/problems";
import { PROBLEMS } from "@/constants/problems";

export default function Home() {
  return (
    <div>
      <section className="text-center py-8">
        <h1 className="text-3xl font-bold text-text mb-2">회계던</h1>
        <p className="text-text-sub">
          계정과목 버튼을 클릭해서 분개를 연습하세요
        </p>
      </section>

      <section className="grid gap-3">
        {CATEGORIES.map((cat) => {
          const count = PROBLEMS.filter((p) => p.category === cat.id).length;
          return (
            <Link
              key={cat.id}
              href={`/quiz/${cat.id}`}
              className="flex items-center gap-4 p-4 bg-surface border border-border rounded-xl hover:border-primary transition-colors"
            >
              <span className="text-3xl">{cat.emoji}</span>
              <div className="flex-1">
                <h2 className="font-bold text-text">{cat.name}</h2>
                <p className="text-sm text-text-sub">{cat.description}</p>
              </div>
              <span className="text-sm text-text-sub">{count}문제</span>
            </Link>
          );
        })}
      </section>

      <section className="mt-10 p-5 bg-surface border border-border rounded-xl">
        <h2 className="font-bold text-text mb-2">사용법</h2>
        <ol className="text-sm text-text-sub space-y-1 list-decimal list-inside">
          <li>카테고리를 선택합니다</li>
          <li>문제를 읽고 차변/대변에 들어갈 계정과목 버튼을 클릭합니다</li>
          <li>제출 버튼을 누르면 즉시 채점됩니다</li>
          <li>해설을 확인하고 다음 문제로 넘어갑니다</li>
        </ol>
      </section>
    </div>
  );
}
