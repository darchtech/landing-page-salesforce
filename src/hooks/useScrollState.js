import { useState, useEffect } from "react";

/**
 * Returns true when scroll position exceeds the given threshold.
 * @param {number} threshold — pixels scrolled before returning true
 */
export function useScrollState(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold);
    handler(); // initial check
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [threshold]);

  return scrolled;
}
