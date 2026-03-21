export interface Standard {
  id: string;
  name: string;
  description: string;
  emoji: string;
}

export const STANDARDS: Standard[] = [
  { id: "common", name: "공통", description: "모든 기준에 적용되는 기본 회계", emoji: "📚" },
  { id: "k-ifrs", name: "K-IFRS", description: "상장사·대기업 회계기준", emoji: "🏢" },
  { id: "general", name: "일반기업", description: "중소기업 회계기준", emoji: "🏪" },
  { id: "bank", name: "은행업", description: "은행업 회계기준", emoji: "🏦" },
  { id: "public", name: "공공기관", description: "공공기관 회계기준", emoji: "🏛️" },
];
