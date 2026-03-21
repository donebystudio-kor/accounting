export interface Category {
  id: string;
  standard: string;
  name: string;
  description: string;
}

export const CATEGORIES: Category[] = [
  // common
  { id: "journal-basic", standard: "common", name: "기본 분개", description: "단순 거래의 차변/대변 분개" },
  { id: "journal-intermediate", standard: "common", name: "심화 분개", description: "복합 거래·결산 수정 분개" },
  { id: "ox-basic", standard: "common", name: "OX 퀴즈", description: "회계 개념 참/거짓 판별" },
  // k-ifrs
  { id: "kifrs-basic", standard: "k-ifrs", name: "K-IFRS 기본 분개", description: "K-IFRS 기본 분개와 개념" },
  { id: "kifrs-intermediate", standard: "k-ifrs", name: "K-IFRS 심화 분개", description: "K-IFRS 특수 거래 분개" },
  { id: "kifrs-ox", standard: "k-ifrs", name: "K-IFRS OX 퀴즈", description: "K-IFRS 핵심 개념 참/거짓 판별" },
  // 계산형
  { id: "calc-basic", standard: "common", name: "계산 문제", description: "회계 계산 연습" },
  { id: "kifrs-calc", standard: "k-ifrs", name: "K-IFRS 계산 문제", description: "K-IFRS 계산 연습" },
  // 일반기업
  { id: "general-basic", standard: "general", name: "기본 분개", description: "일반기업회계기준 기본 분개" },
  { id: "general-intermediate", standard: "general", name: "심화 분개", description: "일반기업회계기준 심화 분개" },
  { id: "general-ox", standard: "general", name: "OX 퀴즈", description: "일반기업회계기준 참/거짓 판별" },
  { id: "general-calc", standard: "general", name: "계산 문제", description: "일반기업회계기준 계산 연습" },
  // 은행업
  { id: "bank-basic", standard: "bank", name: "기본 분개", description: "은행업회계 기본 분개" },
  { id: "bank-intermediate", standard: "bank", name: "심화 분개", description: "은행업회계 심화 분개" },
  { id: "bank-ox", standard: "bank", name: "OX 퀴즈", description: "은행업회계 참/거짓 판별" },
  { id: "bank-calc", standard: "bank", name: "계산 문제", description: "은행업회계 계산 연습" },
  // 공공기관
  { id: "public-basic", standard: "public", name: "기본 분개", description: "공공기관회계 기본 분개" },
  { id: "public-ox", standard: "public", name: "OX 퀴즈", description: "공공기관회계 참/거짓 판별" },
  // 고급 카테고리
  { id: "journal-advanced", standard: "common", name: "고급 분개", description: "복합·특수 거래 고급 분개" },
  { id: "ox-advanced", standard: "common", name: "고급 OX 퀴즈", description: "심화 회계 개념 참/거짓" },
  { id: "calc-advanced", standard: "common", name: "고급 계산", description: "심화 회계 계산 문제" },
  { id: "kifrs-advanced", standard: "k-ifrs", name: "K-IFRS 고급 분개", description: "K-IFRS 복합·특수 거래" },
  { id: "kifrs-ox-advanced", standard: "k-ifrs", name: "K-IFRS 고급 OX", description: "K-IFRS 심화 개념 참/거짓" },
  { id: "kifrs-calc-advanced", standard: "k-ifrs", name: "K-IFRS 고급 계산", description: "K-IFRS 심화 계산 문제" },
  { id: "general-advanced", standard: "general", name: "고급 분개", description: "일반기업 복합·특수 거래" },
  { id: "general-ox-advanced", standard: "general", name: "고급 OX 퀴즈", description: "일반기업 심화 개념 참/거짓" },
];
