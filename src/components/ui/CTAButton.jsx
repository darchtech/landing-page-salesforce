import { PAYMENT_LINK } from "../../constants";

const sizes = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const variants = {
  primary: `
    bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white
    shadow-lg shadow-blue-500/25
    hover:shadow-xl hover:shadow-blue-500/40 hover:scale-[1.04]
    active:scale-100
  `,
  secondary: `
    bg-white/10 dark:bg-white/5 backdrop-blur-md
    text-blue-600 dark:text-blue-400
    border-2 border-blue-500/30
    hover:border-blue-500/60 hover:bg-blue-50 dark:hover:bg-blue-500/10
    hover:scale-[1.04] active:scale-100
  `,
  ghost: `
    text-blue-600 dark:text-blue-400
    hover:bg-blue-50 dark:hover:bg-blue-500/10
  `,
};

/**
 * Conversion-focused CTA button that links to the payment page.
 */
export default function CTAButton({
  children,
  variant = "primary",
  size = "lg",
  className = "",
  href,
}) {
  return (
    <a
      href={href || PAYMENT_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        relative inline-flex items-center justify-center gap-2
        font-bold rounded-xl
        transition-all duration-300 cursor-pointer select-none overflow-hidden
        group
        ${sizes[size]}
        ${variants[variant]}
        ${className}
      `}
    >
      {/* Shimmer effect */}
      <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </a>
  );
}
