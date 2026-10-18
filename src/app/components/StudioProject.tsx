import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";
import { featuredWork } from "../data/studioContent";
import { useLanguage } from "../context/LanguageContext";

export function StudioProject({ work, index }: { work: (typeof featuredWork)[number]; index: number }) {
  const { language } = useLanguage();
  const project = projects.find((item) => item.id === work.id);
  if (!project) return null;
  return (
    <article className="studio-project">
      <Link className="studio-project-image" to={`/work/${work.id}`} aria-label={`${project.title} — ${language === "ko" ? "프로젝트 상세" : "case study"}`}>
        <img src={work.image} alt={work.alt[language]} loading="lazy" width="1280" height="720" />
      </Link>
      <div className="studio-project-meta"><span>0{index + 1} / {work.category}</span><span>{project.period ?? project.year}</span></div>
      <h3><Link to={`/work/${work.id}`}>{project.title}<ArrowUpRight size={24} aria-hidden="true" /></Link></h3>
      <p className="studio-project-summary">{work.summary[language]}</p>
      <dl className="studio-project-facts">
        <div><dt>{language === "ko" ? "내 역할" : "My role"}</dt><dd>{work.role[language]}</dd></div>
        <div><dt>{language === "ko" ? "검증 범위" : "Validation"}</dt><dd>{work.scope[language]}</dd></div>
        <div><dt>{language === "ko" ? "성과" : "Recognition"}</dt><dd>{work.outcome[language]}</dd></div>
      </dl>
    </article>
  );
}
