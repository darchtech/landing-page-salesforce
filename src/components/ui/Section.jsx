/**
 * Full-width section with consistent max-width container.
 */
export default function Section({ children, className = "", id = "" }) {
  return (
    <section
      id={id}
      className={`relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden ${className}`}
    >
      <div className="relative z-10 max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
