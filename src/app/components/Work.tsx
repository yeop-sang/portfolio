import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { contributions, projects } from "../data/projects";
import { contactContent, workPageContent } from "../data/siteContent";
import { featuredWork } from "../data/studioContent";
import { StudioProject } from "./StudioProject";
import { LineOspoExperience } from "./LineOspoExperience";
import { YoungIlYoungExperience } from "./YoungIlYoungExperience";

export function Work() {
  const { language } = useLanguage();
  const ko = language === "ko";
  const otherWork = projects.filter((project) => !featuredWork.some((item) => item.id === project.id));
  return (
    <div className="studio-container studio-page">
      <header className="studio-page-heading"><p className="studio-eyebrow">SELECTED WORK / EXPERIMENTS / OPEN SOURCE</p><h1>{workPageContent.projectsTitle[language]}</h1><p className="studio-intro">{workPageContent.projectsIntro[language]}</p></header>
      <div className="studio-project-grid">{featuredWork.map((work, index) => <StudioProject key={work.id} work={work} index={index} />)}</div>
      <LineOspoExperience />
      <YoungIlYoungExperience />
      <section className="studio-section" aria-labelledby="more-work-heading"><div className="studio-section-heading"><div><p className="studio-eyebrow">MORE WORK</p><h2 id="more-work-heading">{ko ? "다른 프로젝트" : "Other projects"}</h2></div></div><div className="studio-work-list">{otherWork.map((project) => <Link to={`/work/${project.id}`} key={project.id}><span className="studio-eyebrow">{project.year}</span><div><h3>{project.title}</h3><p>{project.description[language]}</p></div><ArrowUpRight size={24} aria-hidden="true" /></Link>)}</div></section>
      <section className="studio-section" aria-labelledby="oss-heading"><div className="studio-section-heading"><div><p className="studio-eyebrow">OPEN SOURCE</p><h2 id="oss-heading">{workPageContent.contributionsTitle[language]}</h2></div></div><div className="studio-oss-list">{contributions.map((item) => <article key={item.id}><div className="studio-project-meta"><span>{item.scope}</span><span>{item.year}</span></div><h3>{item.title}</h3><p>{item.summary[language]}</p><details><summary>{ko ? "기여 내용과 기술 보기" : "Contribution details"}</summary><p>{item.details[language]}</p><ul>{item.results[language].map((result) => <li key={result}>{result}</li>)}</ul><p className="studio-eyebrow">{item.tech.join(" / ")}</p></details><div className="studio-actions"><a href={item.links.repo} target="_blank" rel="noopener noreferrer" className="studio-text-link">Repository ↗</a>{item.links.pr && <a href={item.links.pr} target="_blank" rel="noopener noreferrer" className="studio-text-link">Pull Request ↗</a>}{item.links.commit && <a href={item.links.commit} target="_blank" rel="noopener noreferrer" className="studio-text-link">Commit ↗</a>}</div></article>)}</div><a href={contactContent.githubUrl} className="studio-text-link" target="_blank" rel="noopener noreferrer">{workPageContent.morePublicWorkLabel[language]}<ArrowUpRight size={18} aria-hidden="true" /></a></section>
    </div>
  );
}
