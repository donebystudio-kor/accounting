import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 — 회계던",
};

export default function PrivacyPage() {
  return (
    <div className="prose prose-sm max-w-none">
      <h1 className="text-xl font-bold mb-4">개인정보처리방침</h1>
      <p className="text-text-sub text-sm">최종 수정일: 2026년 3월 21일</p>

      <h2 className="text-base font-bold mt-6 mb-2">1. 수집하는 개인정보</h2>
      <p className="text-sm text-text-sub">
        회계던은 별도의 회원가입 없이 이용할 수 있으며, 개인정보를 수집하지
        않습니다.
      </p>

      <h2 className="text-base font-bold mt-6 mb-2">2. 쿠키 및 분석 도구</h2>
      <p className="text-sm text-text-sub">
        서비스 개선을 위해 Google Analytics 등의 분석 도구를 사용할 수 있습니다.
        이 경우 익명화된 사용 통계만 수집됩니다.
      </p>

      <h2 className="text-base font-bold mt-6 mb-2">3. 문의</h2>
      <p className="text-sm text-text-sub">
        개인정보 관련 문의는 donebystudio@gmail.com으로 연락해 주세요.
      </p>
    </div>
  );
}
