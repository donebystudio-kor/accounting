export default function IAS19Diagram() {
  return (
    <svg viewBox="0 0 680 560" className="w-full" role="img" aria-label="IAS 19 종업원급여 흐름도">
      <defs>
        <marker id="ah" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6" fill="var(--svg-arrow)" />
        </marker>
      </defs>
      {/* 퇴직급여제도 */}
      <rect x="190" y="10" width="300" height="40" rx="6" fill="var(--svg-amber-bg)" stroke="var(--svg-amber)" strokeWidth="1.5" />
      <text x="340" y="30" textAnchor="middle" dominantBaseline="central" fill="var(--svg-amber)" fontSize="14" fontWeight="bold">퇴직급여제도</text>
      {/* 분기 */}
      <line x1="240" y1="50" x2="140" y2="50" stroke="var(--svg-arrow)" />
      <line x1="140" y1="50" x2="140" y2="100" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="155" y="75" textAnchor="start" dominantBaseline="central" fill="var(--svg-teal)" fontSize="11">DC형</text>
      <line x1="440" y1="50" x2="540" y2="50" stroke="var(--svg-arrow)" />
      <line x1="540" y1="50" x2="540" y2="100" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="480" y="75" textAnchor="start" dominantBaseline="central" fill="var(--svg-purple)" fontSize="11">DB형</text>
      {/* DC형 */}
      <rect x="20" y="100" width="240" height="44" rx="6" fill="var(--svg-teal-bg)" stroke="var(--svg-teal)" strokeWidth="1.5" />
      <text x="140" y="115" textAnchor="middle" dominantBaseline="central" fill="var(--svg-teal)" fontSize="13" fontWeight="bold">확정기여형 (DC)</text>
      <text x="140" y="133" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="10">사외적립 기금에 기여금 납입</text>
      <line x1="140" y1="144" x2="140" y2="180" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <rect x="30" y="180" width="220" height="40" rx="6" fill="var(--svg-teal-bg)" stroke="var(--svg-teal)" strokeWidth="1" />
      <text x="140" y="193" textAnchor="middle" dominantBaseline="central" fill="var(--svg-teal)" fontSize="12" fontWeight="bold">퇴직급여비용 인식</text>
      <text x="140" y="210" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="10">기여금 = 비용 (단순)</text>
      <line x1="140" y1="220" x2="140" y2="260" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <rect x="40" y="260" width="200" height="36" rx="6" fill="var(--svg-gray-bg)" stroke="var(--svg-gray)" strokeWidth="1" />
      <text x="140" y="278" textAnchor="middle" dominantBaseline="central" fill="var(--svg-gray)" fontSize="12">추가 의무 없음</text>
      {/* DB형 */}
      <rect x="410" y="100" width="260" height="44" rx="6" fill="var(--svg-purple-bg)" stroke="var(--svg-purple)" strokeWidth="1.5" />
      <text x="540" y="115" textAnchor="middle" dominantBaseline="central" fill="var(--svg-purple)" fontSize="13" fontWeight="bold">확정급여형 (DB)</text>
      <text x="540" y="133" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="10">확정급여채무의 현재가치 측정</text>
      <line x1="540" y1="144" x2="540" y2="180" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* DB: 순확정급여부채 */}
      <rect x="400" y="180" width="280" height="44" rx="6" fill="var(--svg-purple-bg)" stroke="var(--svg-purple)" strokeWidth="1" />
      <text x="540" y="195" textAnchor="middle" dominantBaseline="central" fill="var(--svg-purple)" fontSize="12" fontWeight="bold">순확정급여부채(자산)</text>
      <text x="540" y="213" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="10">= 확정급여채무(PV) - 사외적립자산(FV)</text>
      {/* DB 분기: 비용 항목 */}
      <line x1="470" y1="224" x2="470" y2="280" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <line x1="620" y1="224" x2="620" y2="280" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* 당기근무+이자 → 퇴직급여비용 */}
      <rect x="370" y="280" width="200" height="54" rx="6" fill="var(--svg-blue-bg)" stroke="var(--svg-blue)" strokeWidth="1.5" />
      <text x="470" y="297" textAnchor="middle" dominantBaseline="central" fill="var(--svg-blue)" fontSize="12" fontWeight="bold">퇴직급여비용 (P/L)</text>
      <text x="470" y="315" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="10">당기근무원가</text>
      <text x="470" y="328" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="10">+ 순이자원가(수익)</text>
      {/* 재측정요소 → OCI */}
      <rect x="580" y="280" width="90" height="54" rx="6" fill="var(--svg-coral-bg)" stroke="var(--svg-coral)" strokeWidth="1.5" />
      <text x="625" y="300" textAnchor="middle" dominantBaseline="central" fill="var(--svg-coral)" fontSize="11" fontWeight="bold">재측정</text>
      <text x="625" y="318" textAnchor="middle" dominantBaseline="central" fill="var(--svg-coral)" fontSize="9">보험수리적</text>
      <text x="625" y="330" textAnchor="middle" dominantBaseline="central" fill="var(--svg-coral)" fontSize="9">손익 등</text>
      <line x1="625" y1="334" x2="625" y2="370" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <rect x="540" y="370" width="170" height="44" rx="6" fill="var(--svg-coral-bg)" stroke="var(--svg-coral)" strokeWidth="1.5" />
      <text x="625" y="385" textAnchor="middle" dominantBaseline="central" fill="var(--svg-coral)" fontSize="12" fontWeight="bold">기타포괄손익</text>
      <text x="625" y="403" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="10">재분류 불가 (영구 OCI)</text>
      {/* 하단 비교 */}
      <rect x="40" y="440" width="600" height="50" rx="6" fill="var(--svg-gray-bg)" stroke="var(--svg-gray)" strokeWidth="1" />
      <text x="340" y="457" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12" fontWeight="bold">DC형 vs DB형 핵심 차이</text>
      <text x="340" y="477" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="10">DC: 기여금 납입 시 의무 종료 | DB: 퇴직 시까지 기업이 투자위험 부담, 복잡한 보험수리적 가정 필요</text>
      {/* 하단 DB 공식 */}
      <rect x="40" y="500" width="600" height="44" rx="6" fill="var(--svg-purple-bg)" stroke="var(--svg-purple)" strokeWidth="1" />
      <text x="340" y="515" textAnchor="middle" dominantBaseline="central" fill="var(--svg-purple)" fontSize="11" fontWeight="bold">DB형 재무제표 표시</text>
      <text x="340" y="533" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="10">재무상태표: 순확정급여부채(자산) | 포괄손익계산서: 퇴직급여비용(P/L) + 재측정요소(OCI)</text>
    </svg>
  );
}
