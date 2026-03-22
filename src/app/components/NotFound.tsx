import { Link } from "react-router";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export function NotFound() {
  const { language } = useLanguage();

  const content = {
    ko: {
      title: "404",
      subtitle: "페이지를 찾을 수 없습니다",
      description: "요청하신 페이지가 존재하지 않거나 이동되었습니다.",
      backHome: "홈으로 돌아가기",
    },
    en: {
      title: "404",
      subtitle: "Page Not Found",
      description: "The page you're looking for doesn't exist or has been moved.",
      backHome: "Back to Home",
    },
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-8"
      style={{ backgroundColor: "#0F0F0F" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl"
      >
        <h1
          className="mb-4"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(4rem, 12vw, 10rem)",
            fontWeight: 700,
            color: "#C8FF00",
            lineHeight: 1,
          }}
        >
          {content[language].title}
        </h1>

        <h2
          className="mb-6"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
            fontWeight: 700,
            color: "#FFFFFF",
          }}
        >
          {content[language].subtitle}
        </h2>

        <p
          className="mb-12"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1.125rem",
            color: "#888888",
            lineHeight: 1.6,
          }}
        >
          {content[language].description}
        </p>

        <Link
          to="/"
          className="inline-block px-8 py-4 border transition-all duration-300"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.875rem",
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            borderColor: "#2A2A2A",
            color: "#FFFFFF",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#C8FF00";
            e.currentTarget.style.color = "#C8FF00";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "#2A2A2A";
            e.currentTarget.style.color = "#FFFFFF";
          }}
        >
          {content[language].backHome}
        </Link>
      </motion.div>
    </div>
  );
}
