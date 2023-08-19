export function formatToMinAndSec(s) {
  if (!s) return "0:00";
  let seconds = Math.round(s);

  return (seconds - (seconds %= 60)) / 60 + (9 < seconds ? ":" : ":0") + seconds;
}
