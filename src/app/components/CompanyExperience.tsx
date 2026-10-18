import { useEffect, useRef } from "react";
import { useLocation } from "react-router";

interface CompanyExperienceProps {
  id: string;
  company: string;
  period: string;
  context: string;
  eyebrow?: string;
  facts: { label: string; text: string }[];
}

export function CompanyExperience({ id, company, period, context, eyebrow = "COMPANY WORK", facts }: CompanyExperienceProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === `#${id}`) sectionRef.current?.scrollIntoView({ block: "start" });
  }, [hash, id]);

  return (
    <section ref={sectionRef} className="studio-section studio-company" id={id} aria-labelledby={`${id}-heading`}>
      <header>
        <p className="studio-eyebrow">{eyebrow}</p>
        <h2 id={`${id}-heading`}>{company}</h2>
        <p className="studio-company-context">{period}</p>
        <p className="studio-company-context">{context}</p>
      </header>
      <dl className="studio-company-facts">
        {facts.map((fact) => (
          <div key={fact.label}>
            <dt>{fact.label}</dt>
            <dd>{fact.text}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
