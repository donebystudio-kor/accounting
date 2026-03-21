export default function IAS38Diagram() {
  return (
    <svg viewBox="0 0 680 720" className="w-full" role="img" aria-label="IAS 38 무형자산 흐름도">
      <defs>
        <marker id="ah" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6" fill="var(--svg-arrow)" />
        </marker>
      </defs>
      {/* 지출 발생 */}
      <rect x="220" y="10" width="240" height="48" rx="8" fill="var(--svg-gray-bg)" stroke="var(--svg-gray)" strokeWidth="1.5" />
      <text x="340" y="34" textAnchor="middle" dominantBaseline="central" fill="var(--svg-gray)" fontSize="15" fontWeight="bold">지출 발생</text>
      <line x1="340" y1="58" x2="340" y2="98" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* 연구 단계? */}
      <rect x="200" y="98" width="280" height="48" rx="8" fill="var(--svg-amber-bg)" stroke="var(--svg-amber)" strokeWidth="1.5" />
      <text x="340" y="122" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">연구 단계인가?</text>
      {/* 예 → 전액 비용 */}
      <line x1="480" y1="122" x2="558" y2="122" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="516" y="110" textAnchor="middle" dominantBaseline="central" fill="var(--svg-amber)" fontSize="13" fontWeight="bold">예</text>
      <rect x="560" y="98" width="110" height="48" rx="8" fill="var(--svg-coral-bg)" stroke="var(--svg-coral)" strokeWidth="1.5" />
      <text x="615" y="122" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">전액 비용</text>
      {/* 아니오 (개발 단계) */}
      <line x1="340" y1="146" x2="340" y2="190" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="358" y="168" textAnchor="start" dominantBaseline="central" fill="var(--svg-amber)" fontSize="12">아니오 (개발 단계)</text>
      {/* 6가지 요건 */}
      <rect x="100" y="190" width="480" height="100" rx="8" fill="var(--svg-purple-bg)" stroke="var(--svg-purple)" strokeWidth="1.5" />
      <text x="340" y="212" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">개발비 자산화 6가지 요건</text>
      <text x="230" y="234" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">① 기술적 실현 가능성</text>
      <text x="450" y="234" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">② 완성하여 사용/판매 의도</text>
      <text x="230" y="254" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">③ 사용/판매 능력</text>
      <text x="450" y="254" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">④ 미래 경제적 효익 창출</text>
      <text x="230" y="274" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">⑤ 자원(기술/재무)의 가용성</text>
      <text x="450" y="274" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">⑥ 지출의 신뢰성 있는 측정</text>
      <line x1="340" y1="290" x2="340" y2="336" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* 충족 여부 */}
      <rect x="200" y="336" width="280" height="48" rx="8" fill="var(--svg-amber-bg)" stroke="var(--svg-amber)" strokeWidth="1.5" />
      <text x="340" y="360" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">6가지 요건 모두 충족?</text>
      {/* 충족 → 무형자산 인식 */}
      <line x1="250" y1="384" x2="170" y2="434" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="195" y="402" textAnchor="middle" dominantBaseline="central" fill="var(--svg-amber)" fontSize="13" fontWeight="bold">충족</text>
      <rect x="40" y="434" width="260" height="48" rx="8" fill="var(--svg-teal-bg)" stroke="var(--svg-teal)" strokeWidth="1.5" />
      <text x="170" y="458" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">무형자산 인식 (개발비)</text>
      {/* 미충족 → 비용 */}
      <line x1="430" y1="384" x2="510" y2="434" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="485" y="402" textAnchor="middle" dominantBaseline="central" fill="var(--svg-amber)" fontSize="13" fontWeight="bold">미충족</text>
      <rect x="400" y="434" width="220" height="48" rx="8" fill="var(--svg-gray-bg)" stroke="var(--svg-gray)" strokeWidth="1.5" />
      <text x="510" y="458" textAnchor="middle" dominantBaseline="central" fill="var(--svg-gray)" fontSize="14" fontWeight="bold">비용 처리</text>
      {/* 인식 후 측정 */}
      <line x1="170" y1="482" x2="170" y2="520" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="340" y="520" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13" fontWeight="bold">인식 후 측정</text>
      <rect x="180" y="532" width="320" height="4" rx="2" fill="var(--svg-gray)" opacity="0.3" />
      {/* 왼쪽: 유한 내용연수 → 상각 */}
      <line x1="240" y1="540" x2="170" y2="580" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <rect x="30" y="570" width="280" height="56" rx="8" fill="var(--svg-blue-bg)" stroke="var(--svg-blue)" strokeWidth="1.5" />
      <text x="170" y="588" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13" fontWeight="bold">유한 내용연수 → 상각</text>
      <text x="170" y="610" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">내용연수에 걸쳐 체계적 상각</text>
      {/* 오른쪽: 비한정 → 상각 없음 */}
      <line x1="440" y1="540" x2="510" y2="580" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <rect x="370" y="570" width="280" height="56" rx="8" fill="var(--svg-purple-bg)" stroke="var(--svg-purple)" strokeWidth="1.5" />
      <text x="510" y="588" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13" fontWeight="bold">비한정 내용연수 → 상각 없음</text>
      <text x="510" y="610" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">매년 손상검사 의무</text>
      {/* 하단 주의사항 */}
      <line x1="30" y1="660" x2="650" y2="660" stroke="var(--svg-gray)" strokeWidth="0.5" strokeDasharray="4" />
      <rect x="110" y="676" width="460" height="36" rx="8" fill="var(--svg-coral-bg)" stroke="var(--svg-coral)" strokeWidth="1.5" />
      <text x="340" y="694" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13" fontWeight="bold">주의: 비용 처리한 연구비(개발비)는 소급하여 환입 불가</text>
    </svg>
  );
}
