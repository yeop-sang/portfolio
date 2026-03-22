import { Link, useLocation } from "react-router";
import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export function Navigation() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/work", label: "WORK" },
    { path: "/about", label: "ABOUT" },
    { path: "/contact", label: "CONTACT" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        backgroundColor: isScrolled ? "rgba(15, 15, 15, 0.8)" : "transparent",
      }}
    >
      <div className="flex items-center justify-between px-8 py-6">
        <Link
          to="/"
          className="text-white uppercase tracking-[0.15em] text-sm font-medium hover:text-[#C8FF00] transition-colors"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Y.K
        </Link>

        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-white uppercase tracking-[0.15em] text-xs relative group transition-colors hover:text-[#C8FF00]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {link.label}
              <span
                className="absolute -bottom-1 left-0 h-[2px] bg-[#C8FF00] transition-all duration-300"
                style={{
                  width: location.pathname === link.path ? "100%" : "0%",
                }}
              />
            </Link>
          ))}

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="text-white uppercase tracking-[0.15em] text-xs border border-[#2A2A2A] px-3 py-1.5 rounded-full hover:border-[#C8FF00] hover:text-[#C8FF00] transition-all duration-300"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {language === 'ko' ? 'EN' : 'KR'}
          </button>
        </div>
      </div>
    </nav>
  );
}
