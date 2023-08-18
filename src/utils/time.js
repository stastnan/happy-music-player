export function formatToMinAndSec(s) {
  if (!s) return null;
  return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;
}
