/**
 * Small pill/badge for labels and tags.
 */
export default function Badge({
  children,
  className = "",
  variant = "blue",
}) {
  const styles = {
    blue: "bg-blue-100 dark:bg-blue-500/15 text-blue-700 dark:text-blue-400 border-blue-200/50 dark:border-blue-500/20",
    green: "bg-green-100 dark:bg-green-500/15 text-green-700 dark:text-green-400 border-green-200/50 dark:border-green-500/20",
    yellow: "bg-yellow-100 dark:bg-yellow-500/15 text-yellow-700 dark:text-yellow-400 border-yellow-200/50 dark:border-yellow-500/20",
    red: "bg-red-100 dark:bg-red-500/15 text-red-700 dark:text-red-400 border-red-200/50 dark:border-red-500/20",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold border ${styles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
