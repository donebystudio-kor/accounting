export default function IAS36Diagram() {
  return (
    <svg viewBox="0 0 680 620" className="w-full" role="img" aria-label="IAS 36 자산손상 흐름도">
      <defs>
        <marker id="ah" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6" fill="var(--svg-arrow)" />
        </marker>
      </defs>
      {/* 손상 징후 발견 */}
      <rect x="190" y="10" width="300" height="50" rx="6" fill="var(--svg-gray-bg)" stroke="var(--svg-gray)" strokeWidth="1.5" />
      <text x="340" y="28" textAnchor="middle" dominantBaseline="central" fill="var(--svg-gray)" fontSize="13" fontWeight="bold">손상 징후 발견</text>
      <text x="340" y="47" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="11">영업권은 매년 의무적 검사</text>
      <line x1="340" y1="60" x2="340" y2="90" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* 개별 측정 가능? */}
      <rect x="200" y="90" width="280" height="40" rx="6" fill="var(--svg-amber-bg)" stroke="var(--svg-amber)" strokeWidth="1.5" />
      <text x="340" y="110" textAnchor="middle" dominantBaseline="central" fill="var(--svg-amber)" fontSize="13" fontWeight="bold">개별 자산 측정 가능?</text>
      {/* 가능 → 회수가능액 */}
      <line x1="260" y1="130" x2="170" y2="170" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="198" y="145" textAnchor="middle" dominantBaseline="central" fill="var(--svg-amber)" fontSize="11">가능</text>
      <rect x="40" y="170" width="260" height="50" rx="6" fill="var(--svg-blue-bg)" stroke="var(--svg-blue)" strokeWidth="1.5" />
      <text x="170" y="188" textAnchor="middle" dominantBaseline="central" fill="var(--svg-blue)" fontSize="12" fontWeight="bold">회수가능액 측정</text>
      <text x="170" y="207" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="11">= max(순공정가치, 사용가치)</text>
      {/* 불가능 → CGU */}
      <line x1="420" y1="130" x2="510" y2="170" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="483" y="145" textAnchor="middle" dominantBaseline="central" fill="var(--svg-amber)" fontSize="11">불가능</text>
      <rect x="380" y="170" width="260" height="50" rx="6" fill="var(--svg-purple-bg)" stroke="var(--svg-purple)" strokeWidth="1.5" />
      <text x="510" y="188" textAnchor="middle" dominantBaseline="central" fill="var(--svg-purple)" fontSize="12" fontWeight="bold">CGU(현금창출단위) 단위 검사</text>
      <text x="510" y="207" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="11">영업권을 CGU에 배분</text>
      {/* 합류 → 비교 */}
      <line x1="170" y1="220" x2="170" y2="260" stroke="var(--svg-arrow)" />
      <line x1="510" y1="220" x2="510" y2="260" stroke="var(--svg-arrow)" />
      <line x1="170" y1="260" x2="510" y2="260" stroke="var(--svg-arrow)" />
      <line x1="340" y1="260" x2="340" y2="290" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* 장부가액 > 회수가능액? */}
      <rect x="180" y="290" width="320" height="40" rx="6" fill="var(--svg-amber-bg)" stroke="var(--svg-amber)" strokeWidth="1.5" />
      <text x="340" y="310" textAnchor="middle" dominantBaseline="central" fill="var(--svg-amber)" fontSize="13" fontWeight="bold">장부가액 &gt; 회수가능액?</text>
      {/* 아니오 → 손상 없음 */}
      <line x1="500" y1="310" x2="580" y2="310" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="540" y="300" textAnchor="middle" dominantBaseline="central" fill="var(--svg-amber)" fontSize="11">아니오</text>
      <rect x="580" y="290" width="90" height="40" rx="6" fill="var(--svg-teal-bg)" stroke="var(--svg-teal)" strokeWidth="1.5" />
      <text x="625" y="310" textAnchor="middle" dominantBaseline="central" fill="var(--svg-teal)" fontSize="12" fontWeight="bold">손상 없음</text>
      {/* 예 → 손상차손 */}
      <line x1="340" y1="330" x2="340" y2="370" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="355" y="350" textAnchor="start" dominantBaseline="central" fill="var(--svg-amber)" fontSize="11">예</text>
      <rect x="190" y="370" width="300" height="44" rx="6" fill="var(--svg-coral-bg)" stroke="var(--svg-coral)" strokeWidth="1.5" />
      <text x="340" y="385" textAnchor="middle" dominantBaseline="central" fill="var(--svg-coral)" fontSize="13" fontWeight="bold">손상차손 인식</text>
      <text x="340" y="403" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="11">= 장부가액 - 회수가능액</text>
      <line x1="340" y1="414" x2="340" y2="450" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* CGU 배분 순서 */}
      <rect x="170" y="450" width="340" height="44" rx="6" fill="var(--svg-coral-bg)" stroke="var(--svg-coral)" strokeWidth="1.5" />
      <text x="340" y="465" textAnchor="middle" dominantBaseline="central" fill="var(--svg-coral)" fontSize="12" fontWeight="bold">CGU 배분: 영업권 먼저 차감</text>
      <text x="340" y="483" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="11">잔여 손상차손은 나머지 자산에 비례 배분</text>
      <line x1="340" y1="494" x2="340" y2="520" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* 이후 회복 */}
      <text x="340" y="535" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12" fontWeight="bold">이후 회복 가능 여부</text>
      {/* 왼쪽: 영업권 환입 불가 */}
      <line x1="240" y1="545" x2="170" y2="575" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <rect x="50" y="565" width="240" height="40" rx="6" fill="var(--svg-gray-bg)" stroke="var(--svg-gray)" strokeWidth="1.5" />
      <text x="170" y="578" textAnchor="middle" dominantBaseline="central" fill="var(--svg-gray)" fontSize="12" fontWeight="bold">영업권: 환입 불가</text>
      <text x="170" y="595" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="11">한번 인식한 손상차손 취소 불가</text>
      {/* 오른쪽: 기타 자산 환입 가능 */}
      <line x1="440" y1="545" x2="510" y2="575" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <rect x="390" y="565" width="240" height="40" rx="6" fill="var(--svg-teal-bg)" stroke="var(--svg-teal)" strokeWidth="1.5" />
      <text x="510" y="578" textAnchor="middle" dominantBaseline="central" fill="var(--svg-teal)" fontSize="12" fontWeight="bold">기타 자산: 환입 가능</text>
      <text x="510" y="595" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="11">손상 전 장부가액 한도 내</text>
    </svg>
  );
}
