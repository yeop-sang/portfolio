import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { aboutContent } from "../data/siteContent";

export function About() {
  const { language } = useLanguage();
  const ko = language === "ko";
  return (
    <div className="studio-container studio-page">
      <header className="studio-page-heading"><p className="studio-eyebrow">ABOUT / SANGYEOP KIM</p><h1>{ko ? "안녕하세요,\n김상엽입니다." : "Hi, I’m\nSangyeop Kim."}</h1></header>
      <section className="studio-about-grid" aria-labelledby="bio-heading">
        <figure><img src="/photo_yeop.jpg" alt="Yeop Sang" width="600" height="800" /><figcaption>김상엽 / SANGYEOP KIM</figcaption></figure>
        <div><p className="studio-eyebrow">DEVELOPER</p><h2 id="bio-heading">{aboutContent.bioTitle[language]}</h2><p className="studio-about-bio">{aboutContent.bio[language]}</p></div>
      </section>
      <section className="studio-section" aria-labelledby="experience-heading"><div className="studio-section-heading"><div><p className="studio-eyebrow">EXPERIENCE</p><h2 id="experience-heading">{ko ? "경력" : "Experience"}</h2></div><Link to="/credentials" className="studio-text-link">{ko ? "경력과 자격" : "Credentials"}<ArrowUpRight size={18} aria-hidden="true" /></Link></div><div className="studio-timeline">{aboutContent.timeline[language].map((item) => <article key={`${item.year}-${item.title}`}><span className="studio-eyebrow">{item.year}</span><h3>{item.title}</h3><p>{item.desc}</p></article>)}</div></section>
      <section className="studio-section" aria-labelledby="stack-heading"><div className="studio-section-heading"><div><p className="studio-eyebrow">TOOLBOX</p><h2 id="stack-heading">{aboutContent.stackTitle[language]}</h2></div></div><div className="studio-toolbox">{aboutContent.stack[language].map((group) => <div key={group.category}><h3>{group.category}</h3><p>{group.items.join(" · ")}</p></div>)}</div></section>
    </div>
  );
}
