import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../context/LanguageContext";
import { credentialsContent, type CredentialEntry } from "../data/siteContent";

function CredentialCard({
  entry,
  language,
}: {
  entry: CredentialEntry;
  language: "ko" | "en";
}) {
  const proofLabel = credentialsContent.proofLabel[language];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border overflow-hidden"
      id={entry.anchor}
      style={{
        borderColor: "var(--bg-border)",
        backgroundColor: "var(--bg-card)",
        scrollMarginTop: "140px",
      }}
    >
      {entry.proof && (
        <a href={entry.proof} target="_blank" rel="noopener noreferrer" className="block">
          <div
            className="border-b p-4"
            style={{ borderColor: "var(--bg-border)", backgroundColor: "#0B0B0B" }}
          >
            <div className="h-[320px] flex items-center justify-center overflow-hidden">
              <ImageWithFallback
                src={entry.proof}
                alt={entry.title[language]}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </a>
      )}

      <div className="p-6">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span
            className="text-xs uppercase tracking-[0.15em]"
            style={{ fontFamily: "var(--font-mono)", color: "#C8FF00" }}
          >
            {entry.date}
          </span>
          <span style={{ color: "#2A2A2A" }}>·</span>
          <span
            className="text-xs uppercase tracking-[0.12em]"
            style={{ fontFamily: "var(--font-mono)", color: "#888888" }}
          >
            {entry.issuer[language]}
          </span>
        </div>

        <h3
          className="mb-4"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.4rem, 3vw, 2rem)",
            fontWeight: 700,
            letterSpacing: "0.03em",
            color: "#FFFFFF",
            lineHeight: 1.2,
          }}
        >
          {entry.title[language]}
        </h3>

        <p
          className="mb-6"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.98rem",
            lineHeight: 1.8,
            color: "#888888",
          }}
        >
          {entry.detail[language]}
        </p>

        {entry.proof && (
          <a
            href={entry.proof}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border rounded transition-colors hover:border-[#C8FF00] hover:text-[#C8FF00]"
            style={{ borderColor: "#2A2A2A", color: "#FFFFFF" }}
          >
            <ExternalLink className="w-4 h-4" />
            <span className="text-sm uppercase tracking-[0.1em]">{proofLabel}</span>
          </a>
        )}
      </div>
    </motion.article>
  );
}

export function Credentials() {
  const { language } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const anchor = decodeURIComponent(location.hash.replace(/^#/, ""));
    if (!anchor) return;

    const target = document.getElementById(anchor);
    if (!target) return;

    target.scrollIntoView({ block: "start" });
  }, [location.hash]);
  return (
    <div className="min-h-screen pt-32 pb-24 px-8" style={{ backgroundColor: "var(--bg-dark)" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24 max-w-4xl"
        >
          <span
            className="text-xs uppercase tracking-[0.18em] inline-block mb-6"
            style={{ fontFamily: "var(--font-mono)", color: "#C8FF00" }}
          >
            {credentialsContent.label[language]}
          </span>
          <h1
            className="mb-6"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.75rem, 7vw, 5.5rem)",
              fontWeight: 700,
              letterSpacing: "0.05em",
              color: "#FFFFFF",
              lineHeight: 1.05,
            }}
          >
            {credentialsContent.title[language]}
          </h1>
          <p
            className="max-w-3xl"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "#888888",
            }}
          >
            {credentialsContent.intro[language]}
          </p>
        </motion.div>

        <section className="mb-24">
          <h2
            className="mb-12"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "0.05em",
              color: "#FFFFFF",
            }}
          >
            {credentialsContent.timelineTitle[language]}
          </h2>

          <div className="space-y-10 max-w-5xl">
            {credentialsContent.timeline.map((item, index) => (
              <motion.div
                key={`${item.period}-${item.title.en}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="flex flex-col md:flex-row gap-6 md:gap-10 pb-10 border-b"
                style={{ borderColor: "var(--bg-border)" }}
              >
                <div
                  className="flex-shrink-0"
                  style={{
                    width: "170px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8rem",
                    letterSpacing: "0.12em",
                    color: "#C8FF00",
                  }}
                >
                  {item.period}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "1.2rem",
                        fontWeight: 600,
                        color: "#FFFFFF",
                      }}
                    >
                      {item.title[language]}
                    </h3>
                    {item.subtitle && (
                      <>
                        <span style={{ color: "#2A2A2A" }}>·</span>
                        <span
                          className="text-xs uppercase tracking-[0.12em]"
                          style={{ fontFamily: "var(--font-mono)", color: "#888888" }}
                        >
                          {item.subtitle[language]}
                        </span>
                      </>
                    )}
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.98rem",
                      lineHeight: 1.8,
                      color: "#888888",
                    }}
                  >
                    {item.desc[language]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <h2
            className="mb-12"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "0.05em",
              color: "#FFFFFF",
            }}
          >
            {credentialsContent.awardsTitle[language]}
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {credentialsContent.awards.map((entry) => (
              <CredentialCard key={`${entry.date}-${entry.title.en}`} entry={entry} language={language} />
            ))}
          </div>
        </section>

        <section className="mb-24">
          <h2
            className="mb-12"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "0.05em",
              color: "#FFFFFF",
            }}
          >
            {credentialsContent.programsTitle[language]}
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {credentialsContent.programs.map((entry) => (
              <CredentialCard key={`${entry.date}-${entry.title.en}`} entry={entry} language={language} />
            ))}
          </div>
        </section>

        <section>
          <h2
            className="mb-12"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "0.05em",
              color: "#FFFFFF",
            }}
          >
            {credentialsContent.certificationsTitle[language]}
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 mb-10">
            {credentialsContent.certifications.map((entry) => (
              <CredentialCard key={`${entry.date}-${entry.title.en}`} entry={entry} language={language} />
            ))}
          </div>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.95rem",
              lineHeight: 1.7,
              color: "#666666",
            }}
          >
            {credentialsContent.proofNote[language]}
          </p>
        </section>
      </div>
    </div>
  );
}
