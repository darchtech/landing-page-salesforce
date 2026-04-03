import { useScrollState } from "../../hooks";
import { PRICE } from "../../constants";
import CTAButton from "../ui/CTAButton";
import { Icons } from "../ui/Icons";

export default function StickyBar() {
  const show = useScrollState(600);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ${
        show
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-white/90 dark:bg-gray-950/90 backdrop-blur-2xl border-t border-gray-200 dark:border-white/10 shadow-2xl shadow-black/10 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden sm:block">
            <p className="font-bold text-gray-900 dark:text-white text-sm">
              Salesforce Career Accelerator
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Limited seats · Starts 12th April 2026
            </p>
          </div>
          <CTAButton size="md" className="w-full sm:w-auto">
            Enroll Now @ {PRICE.current} <Icons.ArrowRight size={16} />
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
