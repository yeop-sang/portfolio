import { Link, useParams } from "react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { projects } from "../data/projects";
import { ProjectVideo } from "./ProjectVideo";
import { NotFound } from "./NotFound";

export function ProjectDetail() {
  const { id } = useParams();
  const { language } = useLanguage();
  const project = projects.find((item) => String(item.id) === id);
  if (!project) return <NotFound />;
  const ko = language === "ko";
  const details = project.details[language];
  const isCaseStudy = Boolean(details.decision);
  const nextProject = projects[(projects.indexOf(project) + 1) % projects.length];
  return (
    <article className="studio-container studio-page studio-case">
      <Link className="studio-text-link" to="/work"><ArrowLeft size={16} aria-hidden="true" />{ko ? "프로젝트로 돌아가기" : "Back to projects"}</Link>
      <header className="studio-page-heading"><div className="studio-project-meta"><span>{project.tags}</span><span>{project.period ?? project.year}</span></div><h1>{project.title}</h1><p className="studio-intro">{project.description[language]}</p></header>
      <div className="studio-case-intro"><section><h2>{ko ? "개요" : "Overview"}</h2><p>{details.overview}</p></section><aside>{details.role && <section><h2>{ko ? "역할" : "Role"}</h2><p>{details.role}</p>{details.teamRole && <div className="studio-team-role"><h3>{ko ? "팀원이 구현한 부분" : "Built by teammates"}</h3><p>{details.teamRole}</p></div>}</section>}<section><h2>{ko ? "기술 스택" : "Tech stack"}</h2><p className="studio-tech">{details.tech.join(" / ")}</p></section></aside></div>
      {project.video ? <ProjectVideo key={project.id} project={project} language={language} /> : project.heroImage && <figure className="studio-case-cover"><img src={project.heroImage.src} alt={project.heroImage.alt[language]} width="1280" height="720" /></figure>}
      {details.workflow && (
        <section className="studio-workflow" aria-labelledby="workflow-heading">
          <h2 id="workflow-heading">{details.workflow.title}</h2>
          <ol>{details.workflow.steps.map((step, index) => <li key={step}><span className="studio-eyebrow">0{index + 1}</span><span>{step}</span>{index < details.workflow!.steps.length - 1 && <span className="studio-flow-arrow" aria-hidden="true">→</span>}</li>)}</ol>
          <p>{details.workflow.note}</p>
        </section>
      )}
      <div className="studio-case-story">
        <section>
          <div><span className="studio-eyebrow">01 / PROBLEM</span><h2>{ko ? "문제" : "Challenge"}</h2></div>
          <p>{details.challenge}</p>
        </section>
        {details.decision && <section>
          <div><span className="studio-eyebrow">02 / DECISION</span><h2>{ko ? "판단 근거" : "Why this approach"}</h2></div>
          <p>{details.decision}</p>
        </section>}
        <section>
          <div><span className="studio-eyebrow">{isCaseStudy ? "03 / IMPLEMENTATION" : "02 / DECISION & BUILD"}</span><h2>{ko ? (isCaseStudy ? "구현한 것" : "해결") : (isCaseStudy ? "Implementation" : "Solution")}</h2></div>
          <p>{details.solution}</p>
        </section>
        <section>
          <div><span className="studio-eyebrow">{isCaseStudy ? "04 / VALIDATION" : "03 / OUTCOME"}</span><h2>{ko ? (isCaseStudy ? "검증 결과" : "결과") : (isCaseStudy ? "Validation" : "Results")}</h2></div>
          <div><ul>{details.results.map((result) => <li key={result}>{result}</li>)}</ul>{details.validationNote && <p className="studio-validation-note">{details.validationNote}</p>}</div>
        </section>
        {details.impact && <section>
          <div>{isCaseStudy && <span className="studio-eyebrow">05 / LIMITS & LEARNING</span>}<h2>{ko ? (isCaseStudy ? "한계와 배운 점" : "의미") : (isCaseStudy ? "Limits & learning" : "Why it matters")}</h2></div>
          <p>{details.impact}</p>
        </section>}
      </div>
      {(project.gallery?.length ?? 0) > 0 && <section className="studio-section" aria-labelledby="evidence-heading"><div className="studio-section-heading"><div><p className="studio-eyebrow">EVIDENCE</p><h2 id="evidence-heading">{ko ? "화면과 검증 자료" : "Product & evidence"}</h2></div></div><div className="studio-evidence-grid">{project.gallery!.map((asset) => <figure key={asset.src}><a href={asset.src} target="_blank" rel="noopener noreferrer"><img src={asset.src} alt={asset.alt[language]} loading="lazy" width="1000" height="700" /></a><figcaption>{asset.alt[language]}</figcaption></figure>)}</div></section>}
      {(details.highlights?.length ?? 0) > 0 && <section className="studio-case-extra"><h2>{ko ? "핵심 포인트" : "Highlights"}</h2><ul>{details.highlights!.map((item) => <li key={item}>{item}</li>)}</ul></section>}
      {details.researchContext && <section className="studio-case-extra"><h2>{ko ? "연구 맥락" : "Research Context"}</h2><p>{details.researchContext}</p></section>}
      {(project.resources?.length ?? 0) > 0 && <section className="studio-case-resources"><p className="studio-eyebrow">EXPLORE FURTHER</p><div className="studio-actions">{project.resources!.map((resource) => resource.href.startsWith("/") && !/\.[a-z0-9]+(?:[?#].*)?$/i.test(resource.href) ? <Link key={resource.href} className="studio-button studio-button-outline" to={resource.href}>{resource.label[language]}<ArrowUpRight size={16} aria-hidden="true" /></Link> : <a key={resource.href} className="studio-button studio-button-outline" href={resource.href} target="_blank" rel="noopener noreferrer">{resource.label[language]}<ArrowUpRight size={16} aria-hidden="true" /></a>)}</div></section>}
      <Link className="studio-next-project" to={`/work/${nextProject.id}`}><div><span className="studio-eyebrow">{ko ? "다음 프로젝트" : "NEXT PROJECT"}</span><h2>{nextProject.title}</h2></div><ArrowUpRight size={36} aria-hidden="true" /></Link>
    </article>
  );
}
