/* =========================================================
   ✏️ 가족 일정은 이 파일만 고치면 돼요
   (GitHub 웹에서 이 파일 열고 연필 아이콘 → 수정 → Commit)
   ========================================================= */

// 엄마 근무 주기: 기준일(쉬는 날)부터 아래 순서가 계속 반복돼요
//   off=휴무, day=데이, night=나이트, rest=비번(나이트 끝나고 아침 9시 퇴근한 날)
const MOM = {
  anchor: '2026-09-29',
  cycle: ['off', 'day', 'day', 'night', 'night', 'rest'],
};

// 주기와 다른 날 (연차, 근무 바꾼 날 등) — 이 날만 바뀌고 주기는 그대로 이어져요
const MOM_CHANGES = {
  '2026-10-06': { shift: 'off', label: '연차' },
};

const SHIFTS = {
  off:   { label: '휴무',   time: '쉬는 날' },
  day:   { label: '데이',   time: '09:00 출근 · 18:00 퇴근' },
  night: { label: '나이트', time: '18:00 출근 · 다음날 09:00 퇴근' },
  rest:  { label: '비번',   time: '아침 09:00 퇴근 후 쉼' },
};

// home = 평소에 지내는 곳
const PEOPLE = {
  jimin:   { name: '지민', home: '중국', color: 'var(--jimin)' },
  minji:   { name: '민지', home: '한국', color: 'var(--minji)' },
  suntaek: { name: '순택', home: '중국', color: 'var(--suntaek)' },
};

const PLACES = { 한국: '🇰🇷', 중국: '🇨🇳', 일본: '🇯🇵' };

// 하루짜리 일정
//   short  = 달력 칸에 짧게 보일 이름 (색깔로 누군지 구분)
//   flight = 비행기 타고 있는 시간 [출발, 도착] — 한국 시간 기준. 이 시간엔 '비행 중'으로 보여요
const EVENTS = [
  { date: '2026-10-01', who: 'suntaek', title: '순택 입국', short: '입국', time: '17:15', flight: ['13:40', '17:15'],
    note: '대한항공 KE868 · 광저우 12:40 출발 → 인천 T2 17:15 도착' },
  { date: '2026-10-03', who: 'jimin',   title: '지민 입국', short: '입국', note: '시간 미정' },
  { date: '2026-10-03', who: 'minji',   title: '민지 결혼식 💍', short: '결혼식', time: '17:00' },
  { date: '2026-10-04', who: 'jimin',   title: '지민 출국', short: '출국', note: '중국으로 · 시간 미정' },
  { date: '2026-10-05', who: 'minji',   title: '민지 일본 출국', short: '출국' },
  { date: '2026-10-12', who: 'suntaek', title: '순택 출국', short: '출국', time: '08:50', flight: ['08:50', '12:30'],
    note: '대한항공 KE867 · 인천 T2 08:50 출발 → 광저우 11:30 도착' },
  { date: '2026-10-14', who: 'minji',   title: '민지 귀국', short: '귀국' },
];

// 기간: 이 동안 where 에 있어요 (달력 칸 아래 얇은 색 선으로 표시)
//   fromTime / toTime = 도착·출발 시각 (한국 시간, 모르면 빼도 돼요)
const STAYS = [
  { who: 'suntaek', where: '한국', from: '2026-10-01', fromTime: '17:15', to: '2026-10-12', toTime: '08:50', label: '순택 한국 체류' },
  { who: 'jimin',   where: '한국', from: '2026-10-03', to: '2026-10-04', label: '지민 한국 체류' },
  { who: 'minji',   where: '일본', from: '2026-10-05', to: '2026-10-14', label: '민지 일본 여행' },
];
