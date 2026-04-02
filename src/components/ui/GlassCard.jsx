/**
 * Glassmorphism card with optional hover lift effect.
 */
export default function GlassCard({
  children,
  className = "",
  hover = true,
}) {
  return (
    <div
      className={`
        bg-white/70 dark:bg-white/[0.04] backdrop-blur-xl
        border border-white/40 dark:border-white/10
        rounded-2xl
        shadow-lg shadow-black/[0.03] dark:shadow-black/20
        ${
          hover
            ? `hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5
               hover:-translate-y-1 hover:border-blue-200/50 dark:hover:border-blue-500/20`
            : ""
        }
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </div>
  );
}
