import Link from "next/link";
import { CATEGORIES } from "@/constants/categories";
import { PROBLEMS } from "@/constants/problems";
import { Standard } from "@/constants/standards";

interface Props {
  standard: Standard;
}

export default function StandardPage({ standard }: Props) {
  const stdCats = CATEGORIES.filter((c) => c.standard === standard.id);
  const commonTotal = PROBLEMS.filter((p) => p.standard === "common").length;

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <Link href="/" className="text-xs text-text-sub hover:text-primary">
          ← 홈
        </Link>
      </div>

      <section className="text-center py-6 mb-6">
        <span className="text-4xl">{standard.emoji}</span>
        <h1 className="text-2xl font-extrabold text-primary mt-2">{standard.name}</h1>
        <p className="text-text-sub text-sm mt-1">{standard.description}</p>
      </section>

      <div className="grid gap-2">
        {stdCats.map((cat) => {
          const stdCount = PROBLEMS.filter(
            (p) => p.standard === standard.id && p.category === cat.id
          ).length;
          const total = stdCount + commonTotal;

          return (
            <Link
              key={cat.id}
              href={`/quiz/${standard.id}/${cat.id}`}
              className="flex items-center justify-between p-4 bg-surface border border-border rounded-lg hover:border-primary transition-colors"
            >
              <div>
                <h3 className="font-semibold text-sm text-text">{cat.name}</h3>
                <p className="text-xs text-text-sub mt-0.5">{cat.description}</p>
              </div>
              <span className="text-xs text-text-sub whitespace-nowrap ml-4">
                {total}문제
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
