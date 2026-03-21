"use client";

import { useState } from "react";

interface Props {
  value: number | null;
  onChange: (v: number | null) => void;
  placeholder?: string;
  suffix?: string;
  min?: number;
  max?: number;
  integer?: boolean;
  className?: string;
}

function format(n: number | null): string {
  if (n === null) return "";
  return n.toLocaleString();
}

function parse(s: string): number | null {
  const cleaned = s.replace(/,/g, "").trim();
  if (cleaned === "") return null;
  const n = Number(cleaned);
  if (isNaN(n)) return null;
  return n;
}

export default function NumberInput({
  value,
  onChange,
  placeholder = "",
  suffix,
  min,
  max,
  integer,
  className = "",
}: Props) {
  const [display, setDisplay] = useState(format(value));
  const [focused, setFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    setDisplay(raw);
    const n = parse(raw);
    if (n !== null && n < 0) return; // 음수 불허
    onChange(n);
  };

  const handleFocus = () => {
    setFocused(true);
    // 포커스 시 콤마 제거
    if (value !== null) setDisplay(String(value));
  };

  const handleBlur = () => {
    setFocused(false);
    const n = parse(display);
    if (n === null) {
      setDisplay("");
      onChange(null);
      return;
    }
    if (n < 0) { setDisplay(""); onChange(null); return; }
    if (min !== undefined && n < min) { setDisplay(format(min)); onChange(min); return; }
    if (max !== undefined && n > max) { setDisplay(format(max)); onChange(max); return; }
    const final = integer ? Math.round(n) : n;
    setDisplay(format(final));
    onChange(final);
  };

  return (
    <div className="flex items-center gap-1.5">
      <input
        type="text"
        inputMode="decimal"
        value={focused ? display : format(value)}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        className={`min-h-[44px] px-3 py-2.5 border border-border rounded-md text-sm text-right focus:outline-none focus:border-primary ${className}`}
      />
      {suffix && <span className="text-sm text-text-sub whitespace-nowrap">{suffix}</span>}
    </div>
  );
}
