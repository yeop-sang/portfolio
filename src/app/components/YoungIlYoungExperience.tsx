import { useLanguage } from "../context/LanguageContext";
import { youngIlYoungExperience } from "../data/studioContent";
import { CompanyExperience } from "./CompanyExperience";

export function YoungIlYoungExperience() {
  const { language } = useLanguage();
  const ko = language === "ko";
  const facts = [
    { label: ko ? "역할" : "Role", text: youngIlYoungExperience.role[language] },
    { label: ko ? "업무와 구현" : "Work and implementation", text: youngIlYoungExperience.context[language] },
    { label: ko ? "관리자 업로드" : "Admin uploads", text: youngIlYoungExperience.uploads[language] },
    { label: ko ? "외부 API 연동" : "External API integration", text: youngIlYoungExperience.collection[language] },
    { label: ko ? "재고 화면" : "Stock pages", text: youngIlYoungExperience.caching[language] },
    { label: ko ? "상담과 운영" : "Consultation and operations", text: youngIlYoungExperience.consultation[language] },
  ];

  return (
    <CompanyExperience
      id="young-il-young"
      company={youngIlYoungExperience.company[language]}
      period={youngIlYoungExperience.period}
      context={ko ? "온라인 휴대폰 판매와 상담 서비스" : "Online phone sales and consultation service"}
      facts={facts}
    />
  );
}
