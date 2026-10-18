import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { Navigation } from "./Navigation";
import { useLanguage } from "../context/LanguageContext";
import { contactContent } from "../data/siteContent";
import { ArrowUpRight } from "lucide-react";

export function Root() {
  const { language } = useLanguage();
  const { pathname, hash } = useLocation();
  const isContactPage = pathname.replace(/\/+$/, "").toLowerCase() === "/contact";
  useEffect(() => { document.documentElement.lang = language; }, [language]);
  useEffect(() => { if (!hash) window.scrollTo(0, 0); }, [pathname, hash]);
  return (
    <div className="studio-site">
      <a className="studio-skip" href="#main-content">{language === "ko" ? "본문으로 이동" : "Skip to content"}</a>
      <Navigation />
      <main id="main-content"><Outlet /></main>
      <footer className="studio-footer studio-container">
        {!isContactPage && <div className="studio-footer-main"><p className="studio-eyebrow">CONTACT</p><a href={`mailto:${contactContent.email}`} className="studio-text-link">{contactContent.email}<ArrowUpRight size={20} aria-hidden="true" /></a></div>}
        <div className="studio-footer-bottom"><span>© 2026 SANGYEOP KIM</span><div>{!isContactPage && <><a href={contactContent.githubUrl} target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href={contactContent.linkedInUrl} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></>}<a href="#main-content">{language === "ko" ? "맨 위로 ↑" : "Back to top ↑"}</a></div></div>
      </footer>
    </div>
  );
}
