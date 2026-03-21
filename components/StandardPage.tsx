import Link from "next/link";
import { PROBLEMS } from "@/constants/problems";
import { Standard } from "@/constants/standards";

interface Props {
  standard: Standard;
}

const TYPE_INFO: { type: string; name: string; description: string }[] = [
  { type: "journal", name: "분개", description: "차변/대변 계정과목 클릭 문제" },
  { type: "ox", name: "OX 퀴즈", description: "회계 개념 참/거짓 판별" },
  { type: "calculation", name: "계산 문제", description: "회계 계산 연습" },
];

export default function StandardPage({ standard }: Props) {
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
        {TYPE_INFO.map(({ type, name, description }) => {
          const count = PROBLEMS.filter(
            (p) =>
              p.type === type &&
              (p.standard === standard.id || p.standard === "common")
          ).length;
          if (count === 0) return null;
          return (
            <Link
              key={type}
              href={`/quiz/${standard.id}/${type}`}
              className="flex items-center justify-between p-4 bg-surface border border-border rounded-lg hover:border-primary transition-colors"
            >
              <div>
                <h3 className="font-semibold text-sm text-text">{name}</h3>
                <p className="text-xs text-text-sub mt-0.5">{description}</p>
              </div>
              <span className="text-xs text-text-sub whitespace-nowrap ml-4">
                {count}문제
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
