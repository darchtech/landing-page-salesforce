import { SITE_CONFIG, FOOTER_LINKS } from "../../constants";
import logo from "../../assets/images/oit.jpg";
export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-white/5 py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4" style={{ padding: "50px" }}>
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5">
          <img
            src={logo}
            alt="Orange ITech"
            className="h-10 w-auto object-contain"
          />
          <span className="text-lg font-extrabold text-gray-900 dark:text-white tracking-tight">
            Orange
            <span className="text-orange-500 dark:text-orange-400"> ITech</span>
          </span>
        </a>

        {/* Copyright */}
        <p className="text-sm text-gray-500 dark:text-gray-500">
          © {SITE_CONFIG.year} Orange ITech. All rights reserved.
        </p>

        {/* Links */}
        {/* <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          {FOOTER_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
            >
              {label}
            </a>
          ))}
        </div> */}
      </div>
    </footer>
  );
}