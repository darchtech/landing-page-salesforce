import { useRef, useState, useEffect } from "react";

/**
 * Observe whether an element is in view (fires once).
 * @param {{ threshold?: number, rootMargin?: string }} options
 * @returns {[React.RefObject, boolean]}
 */
export function useInView(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, isVisible];
}
