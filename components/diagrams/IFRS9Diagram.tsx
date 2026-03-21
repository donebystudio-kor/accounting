export default function IFRS9Diagram() {
  return (
    <svg viewBox="0 0 680 1010" className="w-full" role="img" aria-label="IFRS 9 금융상품 흐름도">
      <defs>
        <marker id="ah" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6" fill="var(--svg-arrow)" />
        </marker>
      </defs>
      {/* 금융자산 취득 */}
      <rect x="220" y="10" width="240" height="48" rx="8" fill="var(--svg-gray-bg)" stroke="var(--svg-gray)" strokeWidth="1.5" />
      <text x="340" y="34" textAnchor="middle" dominantBaseline="central" fill="var(--svg-gray)" fontSize="15" fontWeight="bold">금융자산 취득</text>
      <line x1="340" y1="58" x2="340" y2="142" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* SPPI 테스트 */}
      <rect x="160" y="142" width="360" height="56" rx="8" fill="var(--svg-amber-bg)" stroke="var(--svg-amber)" strokeWidth="1.5" />
      <text x="340" y="162" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">① SPPI 테스트</text>
      <text x="340" y="184" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">현금흐름이 원금과 이자만으로 구성?</text>
      {/* SPPI No → FVTPL */}
      <line x1="520" y1="172" x2="598" y2="172" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="556" y="160" textAnchor="middle" dominantBaseline="central" fill="var(--svg-coral)" fontSize="13" fontWeight="bold">No</text>
      <rect x="600" y="148" width="70" height="48" rx="8" fill="var(--svg-coral-bg)" stroke="var(--svg-coral)" strokeWidth="1.5" />
      <text x="635" y="172" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13" fontWeight="bold">FVTPL</text>
      {/* SPPI Yes → 사업모형 */}
      <line x1="340" y1="200" x2="340" y2="301" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="358" y="224" textAnchor="start" dominantBaseline="central" fill="var(--svg-teal)" fontSize="13" fontWeight="bold">Yes</text>
      <rect x="160" y="301" width="360" height="56" rx="8" fill="var(--svg-amber-bg)" stroke="var(--svg-amber)" strokeWidth="1.5" />
      <text x="340" y="319" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">② 사업모형 테스트</text>
      <text x="340" y="341" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">금융자산 관리 목적은?</text>
      {/* 3분기 화살표 */}
      <line x1="210" y1="357" x2="120" y2="357" stroke="var(--svg-arrow)" />
      <line x1="120" y1="357" x2="120" y2="490" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="132" y="392" textAnchor="start" dominantBaseline="central" fill="var(--svg-blue)" fontSize="12">수취 목적</text>
      <line x1="340" y1="357" x2="340" y2="490" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="358" y="392" textAnchor="start" dominantBaseline="central" fill="var(--svg-teal)" fontSize="12">수취 + 매도</text>
      <line x1="470" y1="357" x2="560" y2="357" stroke="var(--svg-arrow)" />
      <line x1="560" y1="357" x2="560" y2="490" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="515" y="392" textAnchor="start" dominantBaseline="central" fill="var(--svg-coral)" fontSize="12">그 외</text>
      {/* AC */}
      <rect x="10" y="490" width="220" height="76" rx="8" fill="var(--svg-blue-bg)" stroke="var(--svg-blue)" strokeWidth="1.5" />
      <text x="120" y="510" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">상각후원가 (AC)</text>
      <text x="120" y="532" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">유효이자율법 적용</text>
      <text x="120" y="552" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">이자수익 → 당기손익</text>
      {/* FVOCI */}
      <rect x="240" y="490" width="200" height="76" rx="8" fill="var(--svg-teal-bg)" stroke="var(--svg-teal)" strokeWidth="1.5" />
      <text x="340" y="510" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">FVOCI</text>
      <text x="340" y="532" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">공정가치 변동 → OCI</text>
      <text x="340" y="552" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">처분 시 재분류(P/L)</text>
      {/* FVTPL (아래) */}
      <rect x="450" y="490" width="220" height="76" rx="8" fill="var(--svg-coral-bg)" stroke="var(--svg-coral)" strokeWidth="1.5" />
      <text x="560" y="510" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">FVTPL</text>
      <text x="560" y="532" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">공정가치 변동 → 당기손익</text>
      <text x="560" y="552" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">파생상품, 주식 등</text>
      {/* 손상 연결선 */}
      <line x1="120" y1="566" x2="120" y2="679" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <line x1="340" y1="566" x2="340" y2="679" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* ECL 적용 대상 표시 */}
      <rect x="96" y="679" width="48" height="28" rx="8" fill="var(--svg-purple-bg)" stroke="var(--svg-purple)" strokeWidth="1" />
      <text x="120" y="693" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">ECL</text>
      <rect x="316" y="679" width="48" height="28" rx="8" fill="var(--svg-purple-bg)" stroke="var(--svg-purple)" strokeWidth="1" />
      <text x="340" y="693" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">ECL</text>
      {/* 하단: ECL 모형 */}
      <rect x="50" y="775" width="580" height="160" rx="8" fill="var(--svg-purple-bg)" stroke="var(--svg-purple)" strokeWidth="1.5" />
      <text x="340" y="799" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="15" fontWeight="bold">기대신용손실(ECL) 모형</text>
      <text x="340" y="823" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">AC, FVOCI 채무상품에 적용 — 3단계 접근법</text>
      {/* 3단계 */}
      <rect x="70" y="880" width="170" height="72" rx="8" fill="var(--svg-blue-bg)" stroke="var(--svg-blue)" strokeWidth="1" />
      <text x="155" y="906" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13" fontWeight="bold">Stage 1</text>
      <text x="155" y="930" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">12개월 ECL</text>
      <rect x="255" y="880" width="170" height="72" rx="8" fill="var(--svg-amber-bg)" stroke="var(--svg-amber)" strokeWidth="1" />
      <text x="340" y="906" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13" fontWeight="bold">Stage 2</text>
      <text x="340" y="930" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">전체기간 ECL</text>
      <rect x="440" y="880" width="170" height="72" rx="8" fill="var(--svg-coral-bg)" stroke="var(--svg-coral)" strokeWidth="1" />
      <text x="525" y="906" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13" fontWeight="bold">Stage 3</text>
      <text x="525" y="930" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">전체기간 ECL (손상)</text>
    </svg>
  );
}
