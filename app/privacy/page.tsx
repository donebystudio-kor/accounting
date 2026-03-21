import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "회계던 개인정보처리방침. 수집하는 개인정보, 쿠키 정책, 문의처 안내.",
  openGraph: {
    title: "개인정보처리방침 — 회계던",
    description: "회계던 개인정보처리방침.",
    url: "/privacy",
  },
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">개인정보처리방침</h1>
      <p className="text-xs text-text-sub mb-6">최종 수정일: 2026년 3월 21일</p>
      <div className="space-y-5 text-sm text-text-sub">
        <section>
          <h2 className="font-bold text-text mb-1">1. 수집하는 개인정보</h2>
          <p>회계던은 별도의 회원가입 없이 이용할 수 있으며, 개인정보를 수집하지 않습니다.</p>
        </section>
        <section>
          <h2 className="font-bold text-text mb-1">2. 로컬 저장소(localStorage) 사용</h2>
          <p>회계던은 사용자 기기의 로컬 저장소(localStorage)에 아래 데이터를 저장합니다. 이 데이터는 서버로 전송되지 않으며, 사용자 기기에만 보관됩니다.</p>
          <ul className="list-disc list-inside mt-1 space-y-0.5 text-xs">
            <li>오답 기록: 틀린 문제 ID 및 오답 횟수</li>
            <li>북마크: 사용자가 찜한 문제 ID 목록</li>
            <li>마지막 풀이 위치: 이어서 풀기를 위한 세션 정보</li>
          </ul>
          <p className="mt-1">브라우저 설정에서 사이트 데이터를 삭제하거나, 옵션 화면의 초기화 버튼을 사용하면 모든 데이터가 삭제됩니다.</p>
        </section>
        <section>
          <h2 className="font-bold text-text mb-1">3. 쿠키 및 분석 도구</h2>
          <p>서비스 개선을 위해 Google Analytics 등의 분석 도구를 사용할 수 있습니다. 익명화된 사용 통계만 수집됩니다.</p>
        </section>
        <section>
          <h2 className="font-bold text-text mb-1">4. 문의</h2>
          <p>개인정보 관련 문의: donebystudio@gmail.com</p>
        </section>
      </div>
    </div>
  );
}
