export default function IAS12Diagram() {
  return (
    <svg viewBox="0 0 800 899" className="w-full" role="img" aria-label="IAS 12 법인세 흐름도">
      <defs>
        <marker id="ah" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6" fill="var(--svg-arrow)" />
        </marker>
      </defs>
      {/* 회계이익 vs 과세소득 */}
      <rect x="210" y="10" width="380" height="56" rx="8" fill="var(--svg-amber-bg)" stroke="var(--svg-amber)" strokeWidth="1.5" />
      <text x="400" y="28" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="15" fontWeight="bold">회계이익 vs 과세소득</text>
      <text x="400" y="50" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">차이 발생: 영구적 차이(무시) + 일시적 차이(이연법인세)</text>
      <line x1="400" y1="66" x2="400" y2="160" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* 일시적 차이 */}
      <rect x="250" y="160" width="300" height="48" rx="8" fill="var(--svg-amber-bg)" stroke="var(--svg-amber)" strokeWidth="1.5" />
      <text x="400" y="184" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">일시적 차이 분석</text>
      {/* 분기 */}
      <line x1="290" y1="208" x2="110" y2="208" stroke="var(--svg-arrow)" />
      <line x1="110" y1="208" x2="110" y2="322" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="122" y="238" textAnchor="start" dominantBaseline="central" fill="var(--svg-coral)" fontSize="12">가산일시적차이</text>
      <line x1="510" y1="208" x2="610" y2="208" stroke="var(--svg-arrow)" />
      <line x1="610" y1="208" x2="610" y2="322" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="528" y="238" textAnchor="start" dominantBaseline="central" fill="var(--svg-teal)" fontSize="12">차감일시적차이</text>
      {/* 가산 → DTL */}
      <rect x="0" y="322" width="220" height="60" rx="8" fill="var(--svg-coral-bg)" stroke="var(--svg-coral)" strokeWidth="1.5" />
      <text x="110" y="342" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">이연법인세부채 (DTL)</text>
      <text x="110" y="364" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">미래 과세소득 증가 → 추가 납부 예상</text>
      {/* 차감 → DTA */}
      <rect x="480" y="322" width="260" height="60" rx="8" fill="var(--svg-teal-bg)" stroke="var(--svg-teal)" strokeWidth="1.5" />
      <text x="610" y="342" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">이연법인세자산 (DTA)</text>
      <text x="610" y="364" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">미래 과세소득 감소 → 세금 절감 예상</text>
      {/* DTA 실현가능성 */}
      <line x1="610" y1="382" x2="610" y2="478" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <rect x="480" y="478" width="260" height="56" rx="8" fill="var(--svg-amber-bg)" stroke="var(--svg-amber)" strokeWidth="1.5" />
      <text x="610" y="496" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13" fontWeight="bold">실현가능성 검토</text>
      <text x="610" y="518" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">미래 과세소득 충분한가?</text>
      {/* 분기: 실현가능 / 미인식 */}
      <line x1="550" y1="534" x2="550" y2="640" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="525" y="560" textAnchor="end" dominantBaseline="central" fill="var(--svg-teal)" fontSize="12">충분</text>
      <line x1="680" y1="534" x2="680" y2="640" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="695" y="560" textAnchor="start" dominantBaseline="central" fill="var(--svg-gray)" fontSize="12">불충분</text>
      <rect x="470" y="640" width="160" height="48" rx="8" fill="var(--svg-teal-bg)" stroke="var(--svg-teal)" strokeWidth="1" />
      <text x="550" y="664" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13">DTA 인식</text>
      <rect x="640" y="640" width="100" height="48" rx="8" fill="var(--svg-gray-bg)" stroke="var(--svg-gray)" strokeWidth="1" />
      <text x="690" y="664" textAnchor="middle" dominantBaseline="central" fill="var(--svg-gray)" fontSize="13">미인식</text>
      {/* 하단 공식 */}
      <rect x="110" y="775" width="580" height="60" rx="8" fill="var(--svg-purple-bg)" stroke="var(--svg-purple)" strokeWidth="1.5" />
      <text x="400" y="795" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">법인세비용 = 당기법인세 +/- 이연법인세 변동</text>
      <text x="400" y="819" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">당기법인세: 과세소득 x 세율 | 이연법인세 변동: DTL/DTA 기말 - 기초</text>
    </svg>
  );
}
