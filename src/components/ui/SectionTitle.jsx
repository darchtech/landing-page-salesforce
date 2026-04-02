import FadeIn from "./FadeIn";

/**
 * Standardised section heading with optional badge and subtitle.
 */
export default function SectionTitle({ badge, title, subtitle }) {
  return (
    <FadeIn className="text-center mb-14 md:mb-18">
      {badge && (
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-blue-100 dark:bg-blue-500/15 text-blue-700 dark:text-blue-400 mb-5 border border-blue-200/50 dark:border-blue-500/20">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </FadeIn>
  );
}
