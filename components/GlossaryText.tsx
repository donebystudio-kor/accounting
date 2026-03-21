"use client";

import { GLOSSARY } from "@/constants/glossary";

interface Props {
  text: string;
}

// 긴 용어부터 먼저 매칭 (감가상각 > 상각, 충당부채 > 부채)
const terms = Object.keys(GLOSSARY).sort((a, b) => b.length - a.length);
const pattern = new RegExp(`(${terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "g");

export default function GlossaryText({ text }: Props) {
  const parts = text.split(pattern);

  return (
    <span>
      {parts.map((part, i) => {
        const def = GLOSSARY[part];
        if (!def) return <span key={i}>{part}</span>;
        return (
          <span key={i} className="relative group/tip inline">
            <span className="underline decoration-dotted decoration-text-sub/40 underline-offset-2 cursor-help">
              {part}
            </span>
            <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2.5 py-1.5 bg-gray-900 text-white text-[11px] leading-tight rounded-md whitespace-nowrap opacity-0 group-hover/tip:opacity-100 transition-opacity z-30 max-w-[220px] whitespace-normal text-center">
              {def}
              <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
            </span>
          </span>
        );
      })}
    </span>
  );
}
