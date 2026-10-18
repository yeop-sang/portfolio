import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { contactContent } from "../data/siteContent";

export function Contact() {
  const { language } = useLanguage();
  return (
    <div className="studio-container studio-page studio-contact">
      <p className="studio-eyebrow">CONTACT</p>
      <h1>{contactContent.title[language]}</h1>
      <p className="studio-intro">{language === "ko" ? "채용이나 협업 제안은 이메일로 보내주세요." : "Email me about roles or project collaborations."}</p>
      <a className="studio-contact-email" href={`mailto:${contactContent.email}`}>{contactContent.email}<ArrowUpRight aria-hidden="true" /></a>
      <div className="studio-actions"><a className="studio-text-link" href={contactContent.githubUrl} target="_blank" rel="noopener noreferrer">GitHub ↗</a><a className="studio-text-link" href={contactContent.linkedInUrl} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></div>
    </div>
  );
}
