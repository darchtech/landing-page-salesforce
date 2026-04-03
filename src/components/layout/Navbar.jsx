import { useScrollState } from "../../hooks";
import { NAV_LINKS, PRICE } from "../../constants";
import logo from "../../assets/images/oit.jpg";
import { Icons } from "../ui/Icons";
import CTAButton from "../ui/CTAButton";

export default function Navbar({ dark, toggleDark }) {
  const scrolled = useScrollState(40);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-2xl shadow-lg shadow-black/5 dark:shadow-black/30 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          {/* <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30 text-white">
            <Icons.Zap size={28} />
          </div>
          <span className="text-xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Cloud
            <span className="text-blue-600 dark:text-blue-400">Gyani</span>
          </span> */}
        <div className="p-3 rounded-[50%] bg-white">
          <img src={logo} alt="Orange Itect" className="h-16 w-auto object-contain rounded-md" />
        </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-600 dark:text-gray-400">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleDark}
            className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/10 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Toggle dark mode"
          >
            {dark ? <Icons.Sun size={18} /> : <Icons.Moon size={18} />}
          </button>

          <CTAButton size="sm" className="hidden sm:inline-flex">
            Enroll @ {PRICE.current} <Icons.ArrowRight size={16} />
          </CTAButton>
        </div>
      </div>
    </nav>
  );
}
