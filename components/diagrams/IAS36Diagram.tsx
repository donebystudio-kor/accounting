export default function IAS36Diagram() {
  return (
    <svg viewBox="0 0 680 730" className="w-full" role="img" aria-label="IAS 36 자산손상 흐름도">
      <defs>
        <marker id="ah" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6" fill="var(--svg-arrow)" />
        </marker>
      </defs>
      {/* 손상 징후 발견 */}
      <rect x="170" y="10" width="340" height="56" rx="8" fill="var(--svg-gray-bg)" stroke="var(--svg-gray)" strokeWidth="1.5" />
      <text x="340" y="28" textAnchor="middle" dominantBaseline="central" fill="var(--svg-gray)" fontSize="15" fontWeight="bold">손상 징후 발견</text>
      <text x="340" y="50" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">영업권은 매년 의무적 검사</text>
      <line x1="340" y1="66" x2="340" y2="106" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* 개별 측정 가능? */}
      <rect x="180" y="106" width="320" height="48" rx="8" fill="var(--svg-amber-bg)" stroke="var(--svg-amber)" strokeWidth="1.5" />
      <text x="340" y="130" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">개별 자산 측정 가능?</text>
      {/* 가능 → 회수가능액 */}
      <line x1="240" y1="154" x2="170" y2="200" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="190" y="170" textAnchor="middle" dominantBaseline="central" fill="var(--svg-amber)" fontSize="12">가능</text>
      <rect x="30" y="200" width="280" height="56" rx="8" fill="var(--svg-blue-bg)" stroke="var(--svg-blue)" strokeWidth="1.5" />
      <text x="170" y="218" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">회수가능액 측정</text>
      <text x="170" y="240" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">= max(순공정가치, 사용가치)</text>
      {/* 불가능 → CGU */}
      <line x1="440" y1="154" x2="510" y2="200" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="490" y="170" textAnchor="middle" dominantBaseline="central" fill="var(--svg-amber)" fontSize="12">불가능</text>
      <rect x="370" y="200" width="280" height="56" rx="8" fill="var(--svg-purple-bg)" stroke="var(--svg-purple)" strokeWidth="1.5" />
      <text x="510" y="218" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">CGU(현금창출단위) 단위 검사</text>
      <text x="510" y="240" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">영업권을 CGU에 배분</text>
      {/* 합류 → 비교 */}
      <line x1="170" y1="256" x2="170" y2="300" stroke="var(--svg-arrow)" />
      <line x1="510" y1="256" x2="510" y2="300" stroke="var(--svg-arrow)" />
      <line x1="170" y1="300" x2="510" y2="300" stroke="var(--svg-arrow)" />
      <line x1="340" y1="300" x2="340" y2="340" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* 장부가액 > 회수가능액? */}
      <rect x="160" y="340" width="360" height="48" rx="8" fill="var(--svg-amber-bg)" stroke="var(--svg-amber)" strokeWidth="1.5" />
      <text x="340" y="364" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">장부가액 &gt; 회수가능액?</text>
      {/* 아니오 → 손상 없음 */}
      <line x1="520" y1="364" x2="588" y2="364" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="550" y="352" textAnchor="middle" dominantBaseline="central" fill="var(--svg-amber)" fontSize="12">아니오</text>
      <rect x="590" y="340" width="80" height="48" rx="8" fill="var(--svg-teal-bg)" stroke="var(--svg-teal)" strokeWidth="1.5" />
      <text x="630" y="364" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13" fontWeight="bold">손상 없음</text>
      {/* 예 → 손상차손 */}
      <line x1="340" y1="388" x2="340" y2="436" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="358" y="412" textAnchor="start" dominantBaseline="central" fill="var(--svg-amber)" fontSize="12">예</text>
      <rect x="170" y="436" width="340" height="56" rx="8" fill="var(--svg-coral-bg)" stroke="var(--svg-coral)" strokeWidth="1.5" />
      <text x="340" y="454" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">손상차손 인식</text>
      <text x="340" y="476" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">= 장부가액 - 회수가능액</text>
      <line x1="340" y1="492" x2="340" y2="536" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* CGU 배분 순서 */}
      <rect x="140" y="536" width="400" height="56" rx="8" fill="var(--svg-coral-bg)" stroke="var(--svg-coral)" strokeWidth="1.5" />
      <text x="340" y="554" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13" fontWeight="bold">CGU 배분: 영업권 먼저 차감</text>
      <text x="340" y="576" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">잔여 손상차손은 나머지 자산에 비례 배분</text>
      <line x1="340" y1="592" x2="340" y2="622" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* 이후 회복 */}
      <text x="340" y="638" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13" fontWeight="bold">이후 회복 가능 여부</text>
      {/* 왼쪽: 영업권 환입 불가 */}
      <line x1="240" y1="650" x2="170" y2="686" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <rect x="30" y="676" width="280" height="48" rx="8" fill="var(--svg-gray-bg)" stroke="var(--svg-gray)" strokeWidth="1.5" />
      <text x="170" y="692" textAnchor="middle" dominantBaseline="central" fill="var(--svg-gray)" fontSize="13" fontWeight="bold">영업권: 환입 불가</text>
      <text x="170" y="712" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">한번 인식한 손상차손 취소 불가</text>
      {/* 오른쪽: 기타 자산 환입 가능 */}
      <line x1="440" y1="650" x2="510" y2="686" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <rect x="370" y="676" width="280" height="48" rx="8" fill="var(--svg-teal-bg)" stroke="var(--svg-teal)" strokeWidth="1.5" />
      <text x="510" y="692" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13" fontWeight="bold">기타 자산: 환입 가능</text>
      <text x="510" y="712" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">손상 전 장부가액 한도 내</text>
    </svg>
  );
}
