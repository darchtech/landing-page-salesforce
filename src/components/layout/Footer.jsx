import { SITE_CONFIG, FOOTER_LINKS } from "../../constants";
import { Icons } from "../ui/Icons";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-white/5 py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 " style={{ padding:"50px"}}>
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20 text-white">
            <Icons.Zap size={14} />
          </div>
          <span className="text-lg font-extrabold text-gray-900 dark:text-white tracking-tight">
            Orange
            <span className="text-blue-600 dark:text-blue-400">ITech</span>
          </span>
        </a>

        {/* Copyright */}
        <p className="text-sm text-gray-500 dark:text-gray-500">
          © {SITE_CONFIG.year} Orange iTech & Cloud Gyani . All rights reserved.
        </p>

        {/* Links */}
        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          {FOOTER_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
