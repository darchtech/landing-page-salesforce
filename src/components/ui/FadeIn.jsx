import { useInView } from "../../hooks";

const transforms = {
  up: "translateY(40px)",
  down: "translateY(-40px)",
  left: "translateX(40px)",
  right: "translateX(-40px)",
  none: "none",
};

/**
 * Scroll-triggered fade + slide animation wrapper.
 * @param {{ delay?: number, direction?: "up"|"down"|"left"|"right"|"none", className?: string }} props
 */
export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
}) {
  const [ref, isVisible] = useInView();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : transforms[direction],
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
