import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import {
  ExternalLink,
  GitCommitHorizontal,
  Github,
  GitPullRequest,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../context/LanguageContext";
import { Contribution, Project, contributions, projects } from "../data/projects";
import { contactContent, workPageContent } from "../data/siteContent";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Link to={`/work/${project.id}`}>
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: index * 0.08 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative overflow-hidden cursor-pointer group"
      >
        <div
          className="relative w-full overflow-hidden"
          style={{
            aspectRatio: "16/9",
            backgroundColor: project.color,
          }}
        >
          {project.heroImage && (
            <>
              <ImageWithFallback
                src={project.heroImage.src}
                alt={project.heroImage.alt[language]}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(180deg, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.45) 100%)",
                  opacity: isHovered ? 0.7 : 0.45,
                }}
              />
            </>
          )}
          <div
            className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
            style={{ opacity: isHovered ? 0.75 : 1 }}
          >
            <span
              className="text-xs uppercase tracking-[0.15em] px-4 py-2 rounded-full"
              style={{
                fontFamily: "var(--font-mono)",
                color: "#FFFFFF",
                backgroundColor: project.heroImage ? "rgba(15, 15, 15, 0.55)" : "transparent",
                border: project.heroImage ? "1px solid rgba(255, 255, 255, 0.08)" : "none",
                backdropFilter: project.heroImage ? "blur(6px)" : "none",
              }}
            >
              {project.title}
            </span>
          </div>

          <div
            className="absolute inset-0 flex flex-col items-center justify-center p-8 transition-opacity duration-300"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.82)",
              opacity: isHovered ? 1 : 0,
            }}
          >
            <h3
              className="text-white uppercase tracking-[0.08em] mb-4"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.5rem",
                fontWeight: 700,
              }}
            >
              {project.title}
            </h3>
            <p
              className="text-center max-w-md"
              style={{
                fontFamily: "var(--font-body)",
                color: "#888888",
                fontSize: "0.9rem",
                lineHeight: 1.7,
              }}
            >
              {project.description[language]}
            </p>
          </div>
        </div>

        <div className="p-6" style={{ backgroundColor: "#0F0F0F" }}>
          <h3
            className="uppercase tracking-[0.15em] mb-2"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              color: "#FFFFFF",
            }}
          >
            {project.title}
          </h3>
          <p
            className="mb-2"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              color: "#888888",
            }}
          >
            {project.year}
          </p>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              color: "#888888",
            }}
          >
            {project.tags}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}

function ContributionCard({ contribution }: { contribution: Contribution }) {
  const { language } = useLanguage();
  const localizedResults = contribution.results[language];
  const linkLabel = {
    repo: language === "ko" ? "Repository" : "Repository",
    pr: language === "ko" ? "Pull Request" : "Pull Request",
    commit: language === "ko" ? "Commit" : "Commit",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border p-8"
      style={{
        borderColor: "#2A2A2A",
        backgroundColor: "#111111",
      }}
    >
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span
          className="text-xs uppercase tracking-[0.15em]"
          style={{ fontFamily: "var(--font-mono)", color: "#888888" }}
        >
          {contribution.year}
        </span>
        <span style={{ color: "#2A2A2A" }}>·</span>
        <span
          className="text-xs uppercase tracking-[0.12em]"
          style={{ fontFamily: "var(--font-mono)", color: "#888888" }}
        >
          {contribution.scope}
        </span>
      </div>

      <h3
        className="mb-4"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
          fontWeight: 700,
          letterSpacing: "0.04em",
          color: "#FFFFFF",
        }}
      >
        {contribution.title}
      </h3>

      <p
        className="mb-4 max-w-3xl"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "1rem",
          lineHeight: 1.8,
          color: "#CCCCCC",
        }}
      >
        {contribution.summary[language]}
      </p>

      <p
        className="mb-6 max-w-4xl"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.95rem",
          lineHeight: 1.8,
          color: "#888888",
        }}
      >
        {contribution.details[language]}
      </p>

      <div className="grid lg:grid-cols-[2fr_1fr] gap-8">
        <div>
          <h4
            className="mb-4 uppercase tracking-[0.1em]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.95rem",
              color: "#C8FF00",
            }}
          >
            {language === "ko" ? "핵심 포인트" : "Highlights"}
          </h4>
          <div className="grid md:grid-cols-3 gap-4">
            {localizedResults.map((result, index) => (
              <div
                key={index}
                className="p-4 border rounded"
                style={{ borderColor: "#2A2A2A" }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                    color: "#CCCCCC",
                  }}
                >
                  {result}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4
            className="mb-4 uppercase tracking-[0.1em]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.95rem",
              color: "#C8FF00",
            }}
          >
            {language === "ko" ? "기술" : "Tech"}
          </h4>
          <div className="flex flex-wrap gap-2 mb-6">
            {contribution.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 border rounded text-xs uppercase tracking-[0.1em]"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "#888888",
                  borderColor: "#2A2A2A",
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={contribution.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border rounded transition-colors hover:border-[#C8FF00] hover:text-[#C8FF00]"
              style={{ borderColor: "#2A2A2A", color: "#FFFFFF" }}
            >
              <Github className="w-4 h-4" />
              <span className="text-sm">{linkLabel.repo}</span>
            </a>
            {contribution.links.pr && (
              <a
                href={contribution.links.pr}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border rounded transition-colors hover:border-[#C8FF00] hover:text-[#C8FF00]"
                style={{ borderColor: "#2A2A2A", color: "#FFFFFF" }}
              >
                <GitPullRequest className="w-4 h-4" />
                <span className="text-sm">{linkLabel.pr}</span>
              </a>
            )}
            {contribution.links.commit && (
              <a
                href={contribution.links.commit}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border rounded transition-colors hover:border-[#C8FF00] hover:text-[#C8FF00]"
                style={{ borderColor: "#2A2A2A", color: "#FFFFFF" }}
              >
                <GitCommitHorizontal className="w-4 h-4" />
                <span className="text-sm">{linkLabel.commit}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Work() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="px-8 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="uppercase tracking-[0.08em] mb-4"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 700,
            color: "#FFFFFF",
          }}
        >
          {workPageContent.projectsTitle[language]}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-2xl"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.95rem",
            lineHeight: 1.8,
            color: "#888888",
          }}
        >
          {workPageContent.projectsIntro[language]}
        </motion.p>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 w-full"
        style={{ gap: "2px", backgroundColor: "#0F0F0F" }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <section className="px-8 pt-24">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="uppercase tracking-[0.08em] mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 700,
              color: "#FFFFFF",
            }}
          >
            {workPageContent.contributionsTitle[language]}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-3xl mb-10"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.95rem",
              lineHeight: 1.8,
              color: "#888888",
            }}
          >
            {workPageContent.contributionsIntro[language]}
          </motion.p>

          <div className="space-y-6">
            {contributions.map((contribution) => (
              <ContributionCard key={contribution.id} contribution={contribution} />
            ))}
          </div>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            href={contactContent.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 text-sm uppercase tracking-[0.12em] hover:text-[#C8FF00] transition-colors"
            style={{
              fontFamily: "var(--font-mono)",
              color: "#888888",
            }}
          >
            <span>{workPageContent.morePublicWorkLabel[language]}</span>
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </div>
      </section>
    </div>
  );
}