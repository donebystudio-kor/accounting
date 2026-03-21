export default function IAS19Diagram() {
  return (
    <svg viewBox="0 0 680 660" className="w-full" role="img" aria-label="IAS 19 종업원급여 흐름도">
      <defs>
        <marker id="ah" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6" fill="var(--svg-arrow)" />
        </marker>
      </defs>
      {/* 퇴직급여제도 */}
      <rect x="170" y="10" width="340" height="48" rx="8" fill="var(--svg-amber-bg)" stroke="var(--svg-amber)" strokeWidth="1.5" />
      <text x="340" y="34" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="15" fontWeight="bold">퇴직급여제도</text>
      {/* 분기 */}
      <line x1="220" y1="58" x2="140" y2="58" stroke="var(--svg-arrow)" />
      <line x1="140" y1="58" x2="140" y2="118" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="152" y="88" textAnchor="start" dominantBaseline="central" fill="var(--svg-teal)" fontSize="12">DC형</text>
      <line x1="460" y1="58" x2="540" y2="58" stroke="var(--svg-arrow)" />
      <line x1="540" y1="58" x2="540" y2="118" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="482" y="88" textAnchor="start" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">DB형</text>
      {/* DC형 */}
      <rect x="10" y="118" width="260" height="56" rx="8" fill="var(--svg-teal-bg)" stroke="var(--svg-teal)" strokeWidth="1.5" />
      <text x="140" y="136" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">확정기여형 (DC)</text>
      <text x="140" y="158" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">사외적립 기금에 기여금 납입</text>
      <line x1="140" y1="174" x2="140" y2="218" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <rect x="20" y="218" width="240" height="56" rx="8" fill="var(--svg-teal-bg)" stroke="var(--svg-teal)" strokeWidth="1" />
      <text x="140" y="236" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13" fontWeight="bold">퇴직급여비용 인식</text>
      <text x="140" y="258" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">기여금 = 비용 (단순)</text>
      <line x1="140" y1="274" x2="140" y2="318" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <rect x="30" y="318" width="220" height="48" rx="8" fill="var(--svg-gray-bg)" stroke="var(--svg-gray)" strokeWidth="1" />
      <text x="140" y="342" textAnchor="middle" dominantBaseline="central" fill="var(--svg-gray)" fontSize="13">추가 의무 없음</text>
      {/* DB형 */}
      <rect x="400" y="118" width="280" height="56" rx="8" fill="var(--svg-purple-bg)" stroke="var(--svg-purple)" strokeWidth="1.5" />
      <text x="540" y="136" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">확정급여형 (DB)</text>
      <text x="540" y="158" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">확정급여채무의 현재가치 측정</text>
      <line x1="540" y1="174" x2="540" y2="218" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* DB: 순확정급여부채 */}
      <rect x="390" y="218" width="300" height="56" rx="8" fill="var(--svg-purple-bg)" stroke="var(--svg-purple)" strokeWidth="1" />
      <text x="540" y="236" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13" fontWeight="bold">순확정급여부채(자산)</text>
      <text x="540" y="258" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">= 확정급여채무(PV) - 사외적립자산(FV)</text>
      {/* DB 분기: 비용 항목 */}
      <line x1="470" y1="274" x2="470" y2="334" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <line x1="620" y1="274" x2="620" y2="334" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* 당기근무+이자 → 퇴직급여비용 */}
      <rect x="360" y="334" width="220" height="60" rx="8" fill="var(--svg-blue-bg)" stroke="var(--svg-blue)" strokeWidth="1.5" />
      <text x="470" y="352" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13" fontWeight="bold">퇴직급여비용 (P/L)</text>
      <text x="470" y="372" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">당기근무원가</text>
      <text x="470" y="388" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">+ 순이자원가(수익)</text>
      {/* 재측정요소 → OCI */}
      <rect x="590" y="334" width="80" height="60" rx="8" fill="var(--svg-coral-bg)" stroke="var(--svg-coral)" strokeWidth="1.5" />
      <text x="630" y="354" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12" fontWeight="bold">재측정</text>
      <text x="630" y="374" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">보험수리적</text>
      <text x="630" y="390" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">손익 등</text>
      <line x1="630" y1="394" x2="630" y2="440" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <rect x="530" y="440" width="200" height="56" rx="8" fill="var(--svg-coral-bg)" stroke="var(--svg-coral)" strokeWidth="1.5" />
      <text x="630" y="458" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13" fontWeight="bold">기타포괄손익</text>
      <text x="630" y="480" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">재분류 불가 (영구 OCI)</text>
      {/* 하단 비교 */}
      <rect x="30" y="530" width="620" height="56" rx="8" fill="var(--svg-gray-bg)" stroke="var(--svg-gray)" strokeWidth="1" />
      <text x="340" y="548" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13" fontWeight="bold">DC형 vs DB형 핵심 차이</text>
      <text x="340" y="570" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">DC: 기여금 납입 시 의무 종료 | DB: 퇴직 시까지 기업이 투자위험 부담, 복잡한 보험수리적 가정 필요</text>
      {/* 하단 DB 공식 */}
      <rect x="30" y="600" width="620" height="50" rx="8" fill="var(--svg-purple-bg)" stroke="var(--svg-purple)" strokeWidth="1" />
      <text x="340" y="616" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13" fontWeight="bold">DB형 재무제표 표시</text>
      <text x="340" y="638" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">재무상태표: 순확정급여부채(자산) | 포괄손익계산서: 퇴직급여비용(P/L) + 재측정요소(OCI)</text>
    </svg>
  );
}
