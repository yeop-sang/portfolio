import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";
import { featuredWork, lineOspoExperience, studioContent } from "../data/studioContent";
import { StudioProject } from "./StudioProject";
import { LineOspoExperience } from "./LineOspoExperience";

export function Home() {
  const { language } = useLanguage();
  const ko = language === "ko";
  return (
    <div className="studio-container">
      <section className="studio-hero" aria-labelledby="home-title">
        <div className="studio-hero-top"><span className="studio-eyebrow">SANGYEOP KIM / YEOP</span><span className="studio-eyebrow">DEVELOPER</span></div>
        <h1 id="home-title">{studioContent.title[language][0]}<br /><span>{studioContent.title[language][1]}</span></h1>
        <div className="studio-hero-bottom">
          <div><p className="studio-intro">{studioContent.intro[language]}</p><div className="studio-actions"><a href="#selected-work" className="studio-button">{ko ? "대표 작업 보기" : "Explore the work"}<ArrowDown size={16} aria-hidden="true" /></a><Link to="/about" className="studio-text-link">{ko ? "소개" : "About"}<ArrowUpRight size={17} aria-hidden="true" /></Link></div></div>
          <aside className="studio-current"><span className="studio-eyebrow">CURRENTLY</span><p><span className="studio-status-dot" aria-hidden="true" />LINE+ OSPO</p><span>{lineOspoExperience.role[language]}</span></aside>
        </div>
        <div className="studio-hero-foot"><span>AI APPLICATIONS / BACKEND / PRODUCT</span><span>SEOUL, KR <span aria-hidden="true">↘</span></span></div>
      </section>

      <section className="studio-section" id="selected-work" aria-labelledby="selected-heading">
        <div className="studio-section-heading"><div><p className="studio-eyebrow">01 / SELECTED WORK</p><h2 id="selected-heading">{ko ? "주요 프로젝트" : "Selected projects"}</h2></div><Link className="studio-text-link" to="/work">{ko ? "모든 프로젝트" : "All projects"}<ArrowUpRight size={18} aria-hidden="true" /></Link></div>
        <div className="studio-project-grid">{featuredWork.map((work, index) => <StudioProject key={work.id} work={work} index={index} />)}</div>
      </section>

      <LineOspoExperience eyebrow="02 / COMPANY WORK" />
    </div>
  );
}
