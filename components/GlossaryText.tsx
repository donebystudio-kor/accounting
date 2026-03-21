"use client";

// 용어 추가: constants/glossary.json에 항목 추가하면 자동 반영
import glossaryData from "@/constants/glossary.json";

interface Props {
  text: string;
}

// _comment 필드 제외
const GLOSSARY: Record<string, string> = Object.fromEntries(
  Object.entries(glossaryData).filter(([k]) => !k.startsWith("_"))
);

// 긴 용어부터 먼저 매칭 (감가상각 > 상각, 충당부채 > 부채 등)
const terms = Object.keys(GLOSSARY).sort((a, b) => b.length - a.length);
const pattern = new RegExp(
  `(${terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
  "g"
);

export default function GlossaryText({ text }: Props) {
  const parts = text.split(pattern);

  return (
    <span>
      {parts.map((part, i) => {
        const def = GLOSSARY[part];
        if (!def) return <span key={i}>{part}</span>;
        return (
          <span key={i} className="relative group/tip inline-block">
            <span className="underline decoration-dotted decoration-text-sub/40 underline-offset-2 cursor-help">
              {part}
            </span>
            <span className="pointer-events-none absolute bottom-full left-0 mb-1.5 px-2.5 py-1.5 bg-gray-900 text-white text-[11px] leading-snug rounded-md opacity-0 group-hover/tip:opacity-100 transition-opacity z-30 w-[200px] text-left">
              {def}
              <span className="absolute top-full left-4 border-4 border-transparent border-t-gray-900" />
            </span>
          </span>
        );
      })}
    </span>
  );
}
