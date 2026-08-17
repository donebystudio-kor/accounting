/**
 * indexnow.mjs — IndexNow bulk URL submission
 *
 * 대상: Bing + 네이버(한국어 사이트)
 * 주의: 구글은 IndexNow 미지원.
 *
 * 사용법:
 *   npm run indexnow            실제 제출
 *   npm run indexnow -- --dry-run  제출 없이 URL 수만 출력
 *
 * 권장: 배포 후 수동 실행.
 * 과제출 방지: 마지막 제출로부터 1시간 미만이면 실행 거부.
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dir = dirname(fileURLToPath(import.meta.url));
const ROOT   = resolve(__dir, '..');

// ── 설정 ─────────────────────────────────────────────────────────
const KEY          = '21b6a47ea12b1e70953eab08a317af20';
const HOST         = 'hoegyedon.com';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_URL  = `https://${HOST}/sitemap.xml`;
const GUARD_PATH   = resolve(ROOT, '.indexnow-last.json');
const COOLDOWN_MS  = 60 * 60 * 1000; // 1시간

const ENDPOINTS = [
  { url: 'https://www.bing.com/indexnow',                    label: 'Bing'  },
  { url: 'https://searchadvisor.naver.com/indexnow',         label: 'Naver' },
];

// ── 인자 파싱 ────────────────────────────────────────────────────
const isDryRun = process.argv.includes('--dry-run');

// ── 쿨다운 가드 ──────────────────────────────────────────────────
if (!isDryRun && existsSync(GUARD_PATH)) {
  const { lastSubmit } = JSON.parse(readFileSync(GUARD_PATH, 'utf8'));
  const elapsed = Date.now() - lastSubmit;
  if (elapsed < COOLDOWN_MS) {
    const remaining = Math.ceil((COOLDOWN_MS - elapsed) / 60000);
    console.error(`[IndexNow] 쿨다운 중 — ${remaining}분 후 재실행 가능.`);
    console.error('           강제 실행하려면 .indexnow-last.json 을 삭제하세요.');
    process.exit(1);
  }
}

// ── sitemap fetch & 파싱 ─────────────────────────────────────────
console.log(`[IndexNow] sitemap fetch: ${SITEMAP_URL}`);
let xml;
try {
  const res = await fetch(SITEMAP_URL);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  xml = await res.text();
} catch (err) {
  console.error(`[IndexNow] sitemap fetch 실패: ${err.message}`);
  process.exit(1);
}

const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);

console.log(`[IndexNow] URL 수: ${urls.length}`);
console.log(`[IndexNow] 키 파일: ${KEY_LOCATION}`);

if (isDryRun) {
  console.log('\n[DRY-RUN] 실제 제출하지 않음. --dry-run 제거 후 재실행하면 제출됩니다.');
  urls.forEach(u => console.log('  ', u));
  process.exit(0);
}

// ── 제출 함수 ────────────────────────────────────────────────────
async function submit(endpoint, label) {
  const body = JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList: urls });
  let res;
  try {
    res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body,
    });
  } catch (err) {
    console.error(`[IndexNow][${label}] 네트워크 오류: ${err.message}`);
    return false;
  }
  const status = res.status;
  const text   = await res.text().catch(() => '');
  if (status === 200 || status === 202) {
    console.log(`[IndexNow][${label}] ✅ 성공 — HTTP ${status} (${urls.length}개 URL)`);
    if (text) console.log(`           응답: ${text.slice(0, 200)}`);
    return true;
  } else {
    console.error(`[IndexNow][${label}] ❌ HTTP ${status}`);
    console.error(`           응답: ${text.slice(0, 300)}`);
    return false;
  }
}

// ── 실제 제출 (Bing + 네이버) ────────────────────────────────────
console.log(`\n[IndexNow] ${urls.length}개 URL 제출 중...`);
const results = await Promise.all(ENDPOINTS.map(ep => submit(ep.url, ep.label)));
const allOk   = results.every(Boolean);

if (allOk) {
  writeFileSync(GUARD_PATH, JSON.stringify({ lastSubmit: Date.now(), count: urls.length }));
} else {
  console.error('\n[IndexNow] 일부 엔드포인트 실패 — 위 오류 확인.');
  process.exit(1);
}
