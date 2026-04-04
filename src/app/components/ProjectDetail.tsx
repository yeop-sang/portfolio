import { motion } from "motion/react";
import { useParams, Link, useNavigate } from "react-router";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { NotFound } from "./NotFound";
import { projects } from "../data/projects";

export function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const projectId = parseInt(id || "1");
  const project = projects.find((p) => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return <NotFound />;
  }

  const details = project.details[language];
  const currentProjectIndex = projects.findIndex((p) => p.id === projectId);
  const nextProject = projects[(currentProjectIndex + 1) % projects.length];
  const highlights = details.highlights ?? [];
  const gallery = project.gallery ?? [];
  const resourceLinks = project.resources ?? [];

  return (
    <div className="min-h-screen pt-24 pb-16" style={{ backgroundColor: "#0F0F0F" }}>
      <div className="px-8 mb-12">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onClick={() => navigate("/work")}
          className="flex items-center gap-2 text-[#888888] hover:text-[#C8FF00] transition-colors"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm uppercase tracking-[0.1em]">
            {language === "ko" ? "프로젝트로 돌아가기" : "Back to Projects"}
          </span>
        </motion.button>
      </div>

      <div className="px-8 mb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span
                className="text-xs uppercase tracking-[0.15em]"
                style={{ fontFamily: "var(--font-mono)", color: "#888888" }}
              >
                {project.year}
              </span>
              {project.period && (
                <>
                  <span style={{ color: "#2A2A2A" }}>·</span>
                  <span
                    className="text-xs uppercase tracking-[0.12em]"
                    style={{ fontFamily: "var(--font-mono)", color: "#888888" }}
                  >
                    {project.period}
                  </span>
                </>
              )}
              <span style={{ color: "#2A2A2A" }}>·</span>
              <span
                className="text-xs uppercase tracking-[0.1em]"
                style={{ fontFamily: "var(--font-mono)", color: "#888888" }}
              >
                {project.tags}
              </span>
            </div>

            <h1
              className="mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                fontWeight: 700,
                letterSpacing: "0.05em",
                color: "#FFFFFF",
                lineHeight: 1.1,
              }}
            >
              {project.title}
            </h1>

            <p
              className="max-w-4xl"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.25rem",
                color: "#888888",
                lineHeight: 1.7,
              }}
            >
              {project.description[language]}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full aspect-video rounded-lg mb-20 overflow-hidden border"
            style={{ backgroundColor: project.color, borderColor: "#2A2A2A" }}
          >
            {project.heroImage ? (
              <ImageWithFallback
                src={project.heroImage.src}
                alt={project.heroImage.alt[language]}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full" style={{ backgroundColor: project.color }} />
            )}
          </motion.div>

          {resourceLinks.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-20"
            >
              {resourceLinks.map((link) => {
                const linkContent = (
                  <>
                    {link.icon === "github" ? <Github className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
                    <span className="text-sm uppercase tracking-[0.1em]">{link.label[language]}</span>
                  </>
                );

                return link.href.startsWith("/") ? (
                  <Link
                    key={`${project.id}-${link.href}`}
                    to={link.href}
                    className="flex items-center gap-2 px-6 py-3 border border-[#2A2A2A] text-white hover:border-[#C8FF00] hover:text-[#C8FF00] transition-all rounded"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {linkContent}
                  </Link>
                ) : (
                  <a
                    key={`${project.id}-${link.href}`}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 border border-[#2A2A2A] text-white hover:border-[#C8FF00] hover:text-[#C8FF00] transition-all rounded"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {linkContent}
                  </a>
                );
              })}
            </motion.div>
          )}

          {gallery.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mb-20"
            >
              <h2
                className="mb-6 uppercase tracking-[0.1em]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1rem",
                  color: "#C8FF00",
                }}
              >
                {language === "ko" ? "발표 자료" : "Supporting Visuals"}
              </h2>
              <div className="grid lg:grid-cols-2 gap-6">
                {gallery.map((image) => (
                  <a
                    key={image.src}
                    href={image.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border rounded-lg overflow-hidden hover:border-[#C8FF00] transition-colors"
                    style={{ borderColor: "#2A2A2A", backgroundColor: "#111111" }}
                  >
                    <div className="aspect-video bg-[#0B0B0B]">
                      <ImageWithFallback
                        src={image.src}
                        alt={image.alt[language]}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 border-t" style={{ borderColor: "#2A2A2A" }}>
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.95rem",
                          lineHeight: 1.7,
                          color: "#CCCCCC",
                        }}
                      >
                        {image.alt[language]}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          )}

          <div className="grid md:grid-cols-3 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="md:col-span-2"
            >
              <h2
                className="mb-4 uppercase tracking-[0.1em]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1rem",
                  color: "#C8FF00",
                }}
              >
                {language === "ko" ? "개요" : "Overview"}
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1.125rem",
                  lineHeight: 1.9,
                  color: "#CCCCCC",
                }}
              >
                {details.overview}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-8"
            >
              {details.role && (
                <div>
                  <h2
                    className="mb-4 uppercase tracking-[0.1em]"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1rem",
                      color: "#C8FF00",
                    }}
                  >
                    {language === "ko" ? "역할" : "Role"}
                  </h2>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.95rem",
                      lineHeight: 1.8,
                      color: "#CCCCCC",
                    }}
                  >
                    {details.role}
                  </p>
                </div>
              )}

              <div>
                <h2
                  className="mb-4 uppercase tracking-[0.1em]"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1rem",
                    color: "#C8FF00",
                  }}
                >
                  {language === "ko" ? "기술 스택" : "Tech Stack"}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {details.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 border border-[#2A2A2A] rounded text-xs uppercase tracking-[0.1em]"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "#888888",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2
                className="mb-4 uppercase tracking-[0.1em]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1rem",
                  color: "#C8FF00",
                }}
              >
                {language === "ko" ? "문제" : "Challenge"}
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: "#CCCCCC",
                }}
              >
                {details.challenge}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <h2
                className="mb-4 uppercase tracking-[0.1em]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1rem",
                  color: "#C8FF00",
                }}
              >
                {language === "ko" ? "해결" : "Solution"}
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: "#CCCCCC",
                }}
              >
                {details.solution}
              </p>
            </motion.div>
          </div>

          {details.impact && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="mb-20"
            >
              <h2
                className="mb-4 uppercase tracking-[0.1em]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1rem",
                  color: "#C8FF00",
                }}
              >
                {language === "ko" ? "의미" : "Why It Matters"}
              </h2>
              <p
                className="max-w-4xl"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: "#CCCCCC",
                }}
              >
                {details.impact}
              </p>
            </motion.div>
          )}

          {highlights.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-20"
            >
              <h2
                className="mb-6 uppercase tracking-[0.1em]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1rem",
                  color: "#C8FF00",
                }}
              >
                {language === "ko" ? "핵심 포인트" : "Highlights"}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="p-6 border border-[#2A2A2A] rounded"
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.95rem",
                        lineHeight: 1.7,
                        color: "#CCCCCC",
                      }}
                    >
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="mb-20"
          >
            <h2
              className="mb-6 uppercase tracking-[0.1em]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1rem",
                color: "#C8FF00",
              }}
            >
              {language === "ko" ? "결과" : "Results"}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {details.results.map((result, index) => (
                <div
                  key={index}
                  className="p-6 border border-[#2A2A2A] rounded"
                >
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.95rem",
                      lineHeight: 1.7,
                      color: "#CCCCCC",
                    }}
                  >
                    {result}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="border-t" style={{ borderColor: "#2A2A2A" }}>
        <div className="px-8 py-12">
          <div className="max-w-6xl mx-auto">
            <p
              className="mb-4 uppercase tracking-[0.15em]"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "#888888",
              }}
            >
              {language === "ko" ? "다음 프로젝트" : "Next Project"}
            </p>
            <Link to={`/work/${nextProject.id}`} className="group flex items-center justify-between">
              <h3
                className="group-hover:text-[#C8FF00] transition-colors"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.5rem, 4vw, 3rem)",
                  fontWeight: 700,
                  color: "#FFFFFF",
                }}
              >
                {nextProject.title}
              </h3>
              <ArrowRight className="w-8 h-8 text-white group-hover:text-[#C8FF00] group-hover:translate-x-2 transition-all" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}