import { useScrollState } from "../../hooks";
import { Icons } from "../ui/Icons";

export default function ScrollToTop() {
  const show = useScrollState(1200);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-20 right-5 z-40 w-11 h-11 rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-all cursor-pointer ${
        show
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <Icons.ChevronUp size={20} />
    </button>
  );
}
