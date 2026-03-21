"use client";

import { useState } from "react";

interface Props {
  hint: string;
}

export default function HintToggle({ hint }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-2">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="text-xs text-primary hover:text-primary-dark transition-colors"
        >
          💡 힌트 보기
        </button>
      ) : (
        <p className="text-xs text-primary">💡 {hint}</p>
      )}
    </div>
  );
}
