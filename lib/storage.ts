// localStorage 기반 오답노트 + 북마크 + 위치 기억
// SSR 안전: 모든 함수에서 typeof window 체크

const WRONG_KEY = "accounting_wrong";
const BOOKMARKS_KEY = "accounting_bookmarks";
const POSITION_KEY = "accounting_last_position";

// === 오답 ===
export function getWrongCounts(): Record<string, number> {
  if (typeof window === "undefined") return {};
  try { return JSON.parse(localStorage.getItem(WRONG_KEY) || "{}"); }
  catch { return {}; }
}

export function addWrong(id: string) {
  const data = getWrongCounts();
  data[id] = (data[id] || 0) + 1;
  localStorage.setItem(WRONG_KEY, JSON.stringify(data));
}

export function getWrongCount(id: string): number {
  return getWrongCounts()[id] || 0;
}

export function getWrongIds(): string[] {
  const data = getWrongCounts();
  return Object.entries(data)
    .sort((a, b) => b[1] - a[1])
    .map(([id]) => id);
}

export function clearWrong() {
  if (typeof window !== "undefined") localStorage.removeItem(WRONG_KEY);
}

// === 북마크 ===
export function getBookmarks(): string[] {
  if (typeof window === "undefined") return [];
  try { return JSON.parse(localStorage.getItem(BOOKMARKS_KEY) || "[]"); }
  catch { return []; }
}

export function toggleBookmark(id: string): boolean {
  const arr = getBookmarks();
  const idx = arr.indexOf(id);
  if (idx >= 0) { arr.splice(idx, 1); }
  else { arr.push(id); }
  localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(arr));
  return idx < 0; // true = 추가됨
}

export function isBookmarked(id: string): boolean {
  return getBookmarks().includes(id);
}

export function clearBookmarks() {
  if (typeof window !== "undefined") localStorage.removeItem(BOOKMARKS_KEY);
}

// === 마지막 위치 ===
export interface LastPosition {
  standard: string;
  type: string;
  index: number;
  savedAt: string;
}

export function savePosition(pos: Omit<LastPosition, "savedAt">) {
  if (typeof window === "undefined") return;
  const data: LastPosition = { ...pos, savedAt: new Date().toISOString() };
  localStorage.setItem(POSITION_KEY, JSON.stringify(data));
}

export function getLastPosition(): LastPosition | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(POSITION_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch { return null; }
}

export function clearPosition() {
  if (typeof window !== "undefined") localStorage.removeItem(POSITION_KEY);
}

export function isPositionStale(pos: LastPosition): boolean {
  const saved = new Date(pos.savedAt).getTime();
  return Date.now() - saved > 24 * 60 * 60 * 1000;
}
