export default function IAS38Diagram() {
  return (
    <svg viewBox="0 0 800 1107" className="w-full" role="img" aria-label="IAS 38 무형자산 흐름도">
      <defs>
        <marker id="ah" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6" fill="var(--svg-arrow)" />
        </marker>
      </defs>
      {/* 지출 발생 */}
      <rect x="280" y="10" width="240" height="48" rx="8" fill="var(--svg-gray-bg)" stroke="var(--svg-gray)" strokeWidth="1.5" />
      <text x="400" y="34" textAnchor="middle" dominantBaseline="central" fill="var(--svg-gray)" fontSize="15" fontWeight="bold">지출 발생</text>
      <line x1="400" y1="58" x2="400" y2="142" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* 연구 단계? */}
      <rect x="260" y="142" width="280" height="48" rx="8" fill="var(--svg-amber-bg)" stroke="var(--svg-amber)" strokeWidth="1.5" />
      <text x="400" y="166" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">연구 단계인가?</text>
      {/* 예 → 전액 비용 */}
      <line x1="540" y1="166" x2="618" y2="166" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="576" y="154" textAnchor="middle" dominantBaseline="central" fill="var(--svg-amber)" fontSize="13" fontWeight="bold">예</text>
      <rect x="620" y="142" width="110" height="48" rx="8" fill="var(--svg-coral-bg)" stroke="var(--svg-coral)" strokeWidth="1.5" />
      <text x="675" y="166" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">전액 비용</text>
      {/* 아니오 (개발 단계) */}
      <line x1="400" y1="190" x2="400" y2="280" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="418" y="212" textAnchor="start" dominantBaseline="central" fill="var(--svg-amber)" fontSize="12">아니오 (개발 단계)</text>
      {/* 6가지 요건 */}
      <rect x="160" y="280" width="480" height="100" rx="8" fill="var(--svg-purple-bg)" stroke="var(--svg-purple)" strokeWidth="1.5" />
      <text x="400" y="302" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">개발비 자산화 6가지 요건</text>
      <text x="290" y="324" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">① 기술적 실현 가능성</text>
      <text x="510" y="324" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">② 완성하여 사용/판매 의도</text>
      <text x="290" y="344" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">③ 사용/판매 능력</text>
      <text x="510" y="344" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">④ 미래 경제적 효익 창출</text>
      <text x="290" y="364" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">⑤ 자원(기술/재무)의 가용성</text>
      <text x="510" y="364" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">⑥ 지출의 신뢰성 있는 측정</text>
      <line x1="400" y1="380" x2="400" y2="499" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* 충족 여부 */}
      <rect x="260" y="499" width="280" height="48" rx="8" fill="var(--svg-amber-bg)" stroke="var(--svg-amber)" strokeWidth="1.5" />
      <text x="400" y="523" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">6가지 요건 모두 충족?</text>
      {/* 충족 → 무형자산 인식 */}
      <line x1="310" y1="547" x2="130" y2="646" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="205" y="565" textAnchor="middle" dominantBaseline="central" fill="var(--svg-amber)" fontSize="13" fontWeight="bold">충족</text>
      <rect x="0" y="646" width="260" height="48" rx="8" fill="var(--svg-teal-bg)" stroke="var(--svg-teal)" strokeWidth="1.5" />
      <text x="130" y="670" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">무형자산 인식 (개발비)</text>
      {/* 미충족 → 비용 */}
      <line x1="490" y1="547" x2="590" y2="646" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="555" y="565" textAnchor="middle" dominantBaseline="central" fill="var(--svg-amber)" fontSize="13" fontWeight="bold">미충족</text>
      <rect x="480" y="646" width="220" height="48" rx="8" fill="var(--svg-gray-bg)" stroke="var(--svg-gray)" strokeWidth="1.5" />
      <text x="590" y="670" textAnchor="middle" dominantBaseline="central" fill="var(--svg-gray)" fontSize="14" fontWeight="bold">비용 처리</text>
      {/* 인식 후 측정 */}
      <line x1="130" y1="694" x2="130" y2="732" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="400" y="732" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13" fontWeight="bold">인식 후 측정</text>
      <rect x="240" y="793" width="320" height="4" rx="2" fill="var(--svg-gray)" opacity="0.3" />
      {/* 왼쪽: 유한 내용연수 → 상각 */}
      <line x1="300" y1="801" x2="130" y2="860" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <rect x="0" y="850" width="260" height="56" rx="8" fill="var(--svg-blue-bg)" stroke="var(--svg-blue)" strokeWidth="1.5" />
      <text x="130" y="868" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13" fontWeight="bold">유한 내용연수 → 상각</text>
      <text x="130" y="890" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">내용연수에 걸쳐 체계적 상각</text>
      {/* 오른쪽: 비한정 → 상각 없음 */}
      <line x1="500" y1="801" x2="590" y2="860" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <rect x="450" y="850" width="280" height="56" rx="8" fill="var(--svg-purple-bg)" stroke="var(--svg-purple)" strokeWidth="1.5" />
      <text x="590" y="868" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13" fontWeight="bold">비한정 내용연수 → 상각 없음</text>
      <text x="590" y="890" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">매년 손상검사 의무</text>
      {/* 하단 주의사항 */}
      <line x1="30" y1="940" x2="770" y2="940" stroke="var(--svg-gray)" strokeWidth="0.5" strokeDasharray="4" />
      <rect x="170" y="1009" width="460" height="36" rx="8" fill="var(--svg-coral-bg)" stroke="var(--svg-coral)" strokeWidth="1.5" />
      <text x="400" y="1027" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13" fontWeight="bold">주의: 비용 처리한 연구비(개발비)는 소급하여 환입 불가</text>
    </svg>
  );
}
