export default function IAS38Diagram() {
  return (
    <svg viewBox="0 0 680 620" className="w-full" role="img" aria-label="IAS 38 무형자산 흐름도">
      <defs>
        <marker id="ah" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6" fill="var(--svg-arrow)" />
        </marker>
      </defs>
      {/* 지출 발생 */}
      <rect x="240" y="10" width="200" height="40" rx="6" fill="var(--svg-gray-bg)" stroke="var(--svg-gray)" strokeWidth="1.5" />
      <text x="340" y="30" textAnchor="middle" dominantBaseline="central" fill="var(--svg-gray)" fontSize="13" fontWeight="bold">지출 발생</text>
      <line x1="340" y1="50" x2="340" y2="80" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* 연구 단계? */}
      <rect x="220" y="80" width="240" height="40" rx="6" fill="var(--svg-amber-bg)" stroke="var(--svg-amber)" strokeWidth="1.5" />
      <text x="340" y="100" textAnchor="middle" dominantBaseline="central" fill="var(--svg-amber)" fontSize="13" fontWeight="bold">연구 단계인가?</text>
      {/* 예 → 전액 비용 */}
      <line x1="460" y1="100" x2="550" y2="100" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="505" y="90" textAnchor="middle" dominantBaseline="central" fill="var(--svg-amber)" fontSize="11">예</text>
      <rect x="550" y="80" width="120" height="40" rx="6" fill="var(--svg-coral-bg)" stroke="var(--svg-coral)" strokeWidth="1.5" />
      <text x="610" y="100" textAnchor="middle" dominantBaseline="central" fill="var(--svg-coral)" fontSize="13" fontWeight="bold">전액 비용</text>
      {/* 아니오 (개발 단계) */}
      <line x1="340" y1="120" x2="340" y2="155" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="355" y="138" textAnchor="start" dominantBaseline="central" fill="var(--svg-amber)" fontSize="11">아니오 (개발 단계)</text>
      {/* 6가지 요건 */}
      <rect x="120" y="155" width="440" height="90" rx="6" fill="var(--svg-purple-bg)" stroke="var(--svg-purple)" strokeWidth="1.5" />
      <text x="340" y="173" textAnchor="middle" dominantBaseline="central" fill="var(--svg-purple)" fontSize="13" fontWeight="bold">개발비 자산화 6가지 요건</text>
      <text x="230" y="193" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="11">① 기술적 실현 가능성</text>
      <text x="450" y="193" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="11">② 완성하여 사용/판매 의도</text>
      <text x="230" y="211" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="11">③ 사용/판매 능력</text>
      <text x="450" y="211" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="11">④ 미래 경제적 효익 창출</text>
      <text x="230" y="229" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="11">⑤ 자원(기술/재무)의 가용성</text>
      <text x="450" y="229" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="11">⑥ 지출의 신뢰성 있는 측정</text>
      <line x1="340" y1="245" x2="340" y2="280" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* 충족 여부 */}
      <rect x="220" y="280" width="240" height="40" rx="6" fill="var(--svg-amber-bg)" stroke="var(--svg-amber)" strokeWidth="1.5" />
      <text x="340" y="300" textAnchor="middle" dominantBaseline="central" fill="var(--svg-amber)" fontSize="13" fontWeight="bold">6가지 요건 모두 충족?</text>
      {/* 충족 → 무형자산 인식 */}
      <line x1="260" y1="320" x2="170" y2="365" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="198" y="337" textAnchor="middle" dominantBaseline="central" fill="var(--svg-amber)" fontSize="11">충족</text>
      <rect x="50" y="365" width="240" height="40" rx="6" fill="var(--svg-teal-bg)" stroke="var(--svg-teal)" strokeWidth="1.5" />
      <text x="170" y="385" textAnchor="middle" dominantBaseline="central" fill="var(--svg-teal)" fontSize="13" fontWeight="bold">무형자산 인식 (개발비)</text>
      {/* 미충족 → 비용 */}
      <line x1="420" y1="320" x2="510" y2="365" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="483" y="337" textAnchor="middle" dominantBaseline="central" fill="var(--svg-amber)" fontSize="11">미충족</text>
      <rect x="410" y="365" width="200" height="40" rx="6" fill="var(--svg-gray-bg)" stroke="var(--svg-gray)" strokeWidth="1.5" />
      <text x="510" y="385" textAnchor="middle" dominantBaseline="central" fill="var(--svg-gray)" fontSize="13" fontWeight="bold">비용 처리</text>
      {/* 인식 후 측정 */}
      <line x1="170" y1="405" x2="170" y2="440" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="340" y="438" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12" fontWeight="bold">인식 후 측정</text>
      <rect x="180" y="448" width="320" height="4" rx="2" fill="var(--svg-gray)" opacity="0.3" />
      {/* 왼쪽: 유한 내용연수 → 상각 */}
      <line x1="240" y1="455" x2="170" y2="490" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <rect x="40" y="480" width="260" height="50" rx="6" fill="var(--svg-blue-bg)" stroke="var(--svg-blue)" strokeWidth="1.5" />
      <text x="170" y="498" textAnchor="middle" dominantBaseline="central" fill="var(--svg-blue)" fontSize="12" fontWeight="bold">유한 내용연수 → 상각</text>
      <text x="170" y="517" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="11">내용연수에 걸쳐 체계적 상각</text>
      {/* 오른쪽: 비한정 → 상각 없음 */}
      <line x1="440" y1="455" x2="510" y2="490" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <rect x="380" y="480" width="260" height="50" rx="6" fill="var(--svg-purple-bg)" stroke="var(--svg-purple)" strokeWidth="1.5" />
      <text x="510" y="498" textAnchor="middle" dominantBaseline="central" fill="var(--svg-purple)" fontSize="12" fontWeight="bold">비한정 내용연수 → 상각 없음</text>
      <text x="510" y="517" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="11">매년 손상검사 의무</text>
      {/* 하단 주의사항 */}
      <line x1="30" y1="560" x2="650" y2="560" stroke="var(--svg-gray)" strokeWidth="0.5" strokeDasharray="4" />
      <rect x="130" y="575" width="420" height="36" rx="6" fill="var(--svg-coral-bg)" stroke="var(--svg-coral)" strokeWidth="1.5" />
      <text x="340" y="593" textAnchor="middle" dominantBaseline="central" fill="var(--svg-coral)" fontSize="12" fontWeight="bold">주의: 비용 처리한 연구비(개발비)는 소급하여 환입 불가</text>
    </svg>
  );
}
