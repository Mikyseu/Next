const DATE_UNITS = [
  ['day', 86400],
  ['hour', 3600],
  ['minute', 60],
  ['second', 1],
];

const getDateDiffs = timestamp => {
  const now = Date.now();
  const elapsed = (timestamp - now) / 1000;

  for (const [unit, secondsInUnit] of DATE_UNITS) {
    if (Math.abs(elapsed) > secondsInUnit || unit === 'second') {
      const value = Math.round(elapsed / secondsInUnit);
      return { value, unit };
    }
  }

  return { value: 0, unit: 'second' };
};

export default function useTimeAgo(timestamp) {
  const { unit, value } = getDateDiffs(timestamp);

  if (!Number.isFinite(value)) {
    return 'Ahora mismo';
  }

  const rtf = new Intl.RelativeTimeFormat('es', { style: 'short' });
  return rtf.format(value, unit);
}
