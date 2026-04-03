/**
 * Full-width section with consistent max-width container.
 */
export default function Section({ children, className = "", id = "" }) {
  return (
    <section
      id={id}
      className={`relative py-10 md:py-6 px-4 sm:px-6 lg:px-8 overflow-hidden ${className}`}
    >
      <div className="relative z-10 mx-auto">{children}</div>
    </section>
  );
}
