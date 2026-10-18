import { useLanguage } from "../context/LanguageContext";
import { lineOspoExperience } from "../data/studioContent";
import { CompanyExperience } from "./CompanyExperience";

export function LineOspoExperience({ eyebrow = "COMPANY WORK" }: { eyebrow?: string }) {
  const { language } = useLanguage();
  const ko = language === "ko";
  const facts = [
    { label: ko ? "역할" : "Role", text: lineOspoExperience.role[language] },
    { label: ko ? "업무와 구현" : "Work and implementation", text: lineOspoExperience.summary[language] },
    { label: ko ? "입력과 오류" : "Inputs and errors", text: lineOspoExperience.design[language] },
    { label: ko ? "클라우드 연동" : "Cloud integration", text: lineOspoExperience.cloud[language] },
    { label: ko ? "수집 방식" : "Collection approach", text: lineOspoExperience.collection[language] },
    { label: ko ? "데이터 정제" : "Data preparation", text: lineOspoExperience.data[language] },
    { label: ko ? "동작 확인" : "Verified behavior", text: lineOspoExperience.validation[language] },
  ];

  return (
    <CompanyExperience
      id="line-ospo"
      company={lineOspoExperience.company}
      period={lineOspoExperience.period[language]}
      context={ko ? "현재 업무, 내부 제품 개발" : "Current work, Internal product development"}
      eyebrow={eyebrow}
      facts={facts}
    />
  );
}
