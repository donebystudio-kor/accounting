export interface Category {
  id: string;
  standard: string;
  name: string;
  description: string;
}

export const CATEGORIES: Category[] = [
  // common
  { id: "journal-basic", standard: "common", name: "기본 분개 (초급)", description: "단순 거래의 차변/대변 분개" },
  { id: "journal-intermediate", standard: "common", name: "분개 연습 (중급)", description: "복합 거래·결산 수정 분개" },
  { id: "ox-basic", standard: "common", name: "OX 퀴즈", description: "회계 개념 참/거짓 판별" },
  // k-ifrs
  { id: "kifrs-basic", standard: "k-ifrs", name: "K-IFRS 기본 (초급)", description: "K-IFRS 기본 분개와 개념" },
  { id: "kifrs-intermediate", standard: "k-ifrs", name: "K-IFRS 심화 (중급)", description: "K-IFRS 특수 거래 분개" },
  { id: "kifrs-ox", standard: "k-ifrs", name: "K-IFRS OX 퀴즈", description: "K-IFRS 핵심 개념 참/거짓 판별" },
];
