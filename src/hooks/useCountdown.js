import { useState, useEffect } from "react";

/**
 * Real-time countdown hook.
 * @param {Date} targetDate — the date to count down to
 * @returns {{ days, hours, minutes, seconds, isExpired }}
 */
export function useCountdown(targetDate) {
  const calcRemaining = () => {
    const diff = Math.max(0, targetDate - Date.now());
    return {
      days: Math.floor(diff / 86_400_000),
      hours: Math.floor((diff % 86_400_000) / 3_600_000),
      minutes: Math.floor((diff % 3_600_000) / 60_000),
      seconds: Math.floor((diff % 60_000) / 1_000),
      isExpired: diff === 0,
    };
  };

  const [time, setTime] = useState(calcRemaining);

  useEffect(() => {
    if (time.isExpired) return;
    const id = setInterval(() => setTime(calcRemaining()), 1_000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetDate]);

  return time;
}
