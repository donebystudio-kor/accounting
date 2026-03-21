export default function IAS19Diagram() {
  return (
    <svg viewBox="0 0 800 1013" className="w-full" role="img" aria-label="IAS 19 종업원급여 흐름도">
      <defs>
        <marker id="ah" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6" fill="var(--svg-arrow)" />
        </marker>
      </defs>
      {/* 퇴직급여제도 */}
      <rect x="230" y="10" width="340" height="48" rx="8" fill="var(--svg-amber-bg)" stroke="var(--svg-amber)" strokeWidth="1.5" />
      <text x="400" y="34" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="15" fontWeight="bold">퇴직급여제도</text>
      {/* 분기 */}
      <line x1="280" y1="58" x2="100" y2="58" stroke="var(--svg-arrow)" />
      <line x1="100" y1="58" x2="100" y2="172" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="112" y="88" textAnchor="start" dominantBaseline="central" fill="var(--svg-teal)" fontSize="12">DC형</text>
      <line x1="520" y1="58" x2="620" y2="58" stroke="var(--svg-arrow)" />
      <line x1="620" y1="58" x2="620" y2="172" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="562" y="88" textAnchor="start" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">DB형</text>
      {/* DC형 */}
      <rect x="0" y="172" width="200" height="56" rx="8" fill="var(--svg-teal-bg)" stroke="var(--svg-teal)" strokeWidth="1.5" />
      <text x="100" y="190" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">확정기여형 (DC)</text>
      <text x="100" y="212" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">사외적립 기금에 기여금 납입</text>
      <line x1="100" y1="228" x2="100" y2="322" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <rect x="0" y="322" width="200" height="56" rx="8" fill="var(--svg-teal-bg)" stroke="var(--svg-teal)" strokeWidth="1" />
      <text x="100" y="340" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13" fontWeight="bold">퇴직급여비용 인식</text>
      <text x="100" y="362" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">기여금 = 비용 (단순)</text>
      <line x1="100" y1="378" x2="100" y2="472" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <rect x="0" y="472" width="200" height="48" rx="8" fill="var(--svg-gray-bg)" stroke="var(--svg-gray)" strokeWidth="1" />
      <text x="100" y="504" textAnchor="middle" dominantBaseline="central" fill="var(--svg-gray)" fontSize="13">추가 의무 없음</text>
      {/* DB형 */}
      <rect x="480" y="172" width="280" height="56" rx="8" fill="var(--svg-purple-bg)" stroke="var(--svg-purple)" strokeWidth="1.5" />
      <text x="620" y="190" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">확정급여형 (DB)</text>
      <text x="620" y="212" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">확정급여채무의 현재가치 측정</text>
      <line x1="620" y1="228" x2="620" y2="322" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* DB: 순확정급여부채 */}
      <rect x="470" y="322" width="300" height="56" rx="8" fill="var(--svg-purple-bg)" stroke="var(--svg-purple)" strokeWidth="1" />
      <text x="620" y="340" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13" fontWeight="bold">순확정급여부채(자산)</text>
      <text x="620" y="362" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">= 확정급여채무(PV) - 사외적립자산(FV)</text>
      {/* DB 분기: 비용 항목 */}
      <line x1="550" y1="378" x2="550" y2="496" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <line x1="700" y1="378" x2="700" y2="496" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* 당기근무+이자 → 퇴직급여비용 */}
      <rect x="440" y="496" width="220" height="60" rx="8" fill="var(--svg-blue-bg)" stroke="var(--svg-blue)" strokeWidth="1.5" />
      <text x="550" y="514" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13" fontWeight="bold">퇴직급여비용 (P/L)</text>
      <text x="550" y="534" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">당기근무원가</text>
      <text x="550" y="550" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">+ 순이자원가(수익)</text>
      {/* 재측정요소 → OCI */}
      <rect x="670" y="496" width="80" height="60" rx="8" fill="var(--svg-coral-bg)" stroke="var(--svg-coral)" strokeWidth="1.5" />
      <text x="710" y="516" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12" fontWeight="bold">재측정</text>
      <text x="710" y="536" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">보험수리적</text>
      <text x="710" y="552" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">손익 등</text>
      <line x1="710" y1="556" x2="710" y2="655" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <rect x="610" y="655" width="180" height="56" rx="8" fill="var(--svg-coral-bg)" stroke="var(--svg-coral)" strokeWidth="1.5" />
      <text x="700" y="673" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13" fontWeight="bold">기타포괄손익</text>
      <text x="700" y="695" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">재분류 불가 (영구 OCI)</text>
      {/* 하단 비교 */}
      <rect x="90" y="790" width="620" height="56" rx="8" fill="var(--svg-gray-bg)" stroke="var(--svg-gray)" strokeWidth="1" />
      <text x="400" y="808" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13" fontWeight="bold">DC형 vs DB형 핵심 차이</text>
      <text x="400" y="830" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">DC: 기여금 납입 시 의무 종료 | DB: 퇴직 시까지 기업이 투자위험 부담, 복잡한 보험수리적 가정 필요</text>
      {/* 하단 DB 공식 */}
      <rect x="90" y="895" width="620" height="50" rx="8" fill="var(--svg-purple-bg)" stroke="var(--svg-purple)" strokeWidth="1" />
      <text x="400" y="911" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13" fontWeight="bold">DB형 재무제표 표시</text>
      <text x="400" y="933" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">재무상태표: 순확정급여부채(자산) | 포괄손익계산서: 퇴직급여비용(P/L) + 재측정요소(OCI)</text>
    </svg>
  );
}
