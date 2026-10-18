import { Link, useLocation } from "react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Navigation() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const { language, toggleLanguage } = useLanguage();
  useEffect(() => setOpen(false), [pathname]);
  const navLinks = [
    { path: "/work", label: "WORK" }, { path: "/about", label: "ABOUT" },
    { path: "/credentials", label: "CREDENTIALS" }, { path: "/contact", label: "CONTACT" },
  ];
  return (
    <header className="studio-header" onKeyDown={(event) => { if (event.key === "Escape" && open) { setOpen(false); menuButton.current?.focus(); } }}>
      <div className="studio-nav-shell">
        <Link to="/" className="studio-brand" onClick={() => setOpen(false)}>Y.S<span aria-hidden="true">.</span></Link>
        <nav className={`studio-nav ${open ? "is-open" : ""}`} id="site-navigation" aria-label={language === "ko" ? "주 메뉴" : "Main navigation"}>
          {navLinks.map((link) => <Link key={link.path} to={link.path} aria-current={pathname === link.path || pathname.startsWith(`${link.path}/`) ? "page" : undefined} onClick={() => setOpen(false)}>{link.label}</Link>)}
        </nav>
        <div className="studio-nav-actions"><button type="button" className="studio-language" onClick={toggleLanguage}>{language === "ko" ? "EN" : "KR"}</button><button ref={menuButton} type="button" className="studio-menu-toggle" aria-label={language === "ko" ? (open ? "메뉴 닫기" : "메뉴 열기") : (open ? "Close menu" : "Open menu")} aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button></div>
      </div>
    </header>
  );
}
