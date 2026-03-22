import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const content = {
    ko: {
      quote: "\"기술은 구현에서 끝나지 않습니다. 실제 서비스로 작동하고 운영되는 구조까지 설계할 때 비로소 완성됩니다.\"",
      bioTitle: "소개",
      bio: "안녕하세요, 엽입니다. 백엔드, 풀스택, AI 프로토타이핑을 넘나들며 제품이 실제로 작동하는 구조를 만드는 개발자입니다. Pickle.plus에서는 서비스 운영과 배포 관점을 익혔고, Youngil Young Inc.에서는 풀스택으로 제품 개발을 경험했으며, SKT FLY AI에서 대상을 수상한 Music Sense와 해커톤 프로젝트를 통해 AI를 사용자 문제와 경험으로 연결하는 방식을 탐구했습니다.",
      stackTitle: "기술 스택",
      stack: [
        { category: "AI / Applied", items: ["PyTorch", "WhisperX", "GPT-4o", "Computer Vision", "Rapid Prototyping"] },
        { category: "Backend", items: ["Python", "FastAPI", "PostgreSQL", "API Design", "Service Operations"] },
        { category: "Product / Web", items: ["React", "TypeScript", "Full-Stack Development", "Web Application", "API Integration"] },
        { category: "DevOps / Ops", items: ["DevOps", "Docker", "Deployment", "Service Operations", "Vercel"] }
      ],
      timelineTitle: "여정",
      timeline: [
        { year: "2026", title: "Binary Hackathon Project", desc: "조코딩 x OpenAI x Primer AI 해커톤 장려상 및 빠른 프로토타이핑 리드" },
        { year: "2025", title: "Music Sense", desc: "SKT FLY AI 대상 수상 및 음원 분석 기반 멀티모달 음악 경험 프로젝트 설계" },
        { year: "2023", title: "Youngil Young Inc.", desc: "풀스택 개발자로 제품 기능 구현 및 사용자 흐름 개선" },
        { year: "2020", title: "Pickle.plus", desc: "백엔드 개발과 서비스 운영 구조를 함께 경험" }
      ]
    },
    en: {
      quote: "\"Technology is not finished at implementation. It becomes complete when the service and operations around it are designed to work in the real world.\"",
      bioTitle: "About Me",
      bio: "Hi, I'm Yeop. I build products that work end-to-end across backend systems, full-stack product development, and AI prototyping. At Pickle.plus I learned service operations and deployment thinking, at Youngil Young Inc. I shipped product features as a full-stack developer, and through Music Sense, a grand-prize-winning project at SKT FLY AI, along with other hackathon projects, I explored how AI can be translated into real user problems and experiences.",
      stackTitle: "Tech Stack",
      stack: [
        { category: "AI / Applied", items: ["PyTorch", "WhisperX", "GPT-4o", "Computer Vision", "Rapid Prototyping"] },
        { category: "Backend", items: ["Python", "FastAPI", "PostgreSQL", "API Design", "Service Operations"] },
        { category: "Product / Web", items: ["React", "TypeScript", "Full-Stack Development", "Web Application", "API Integration"] },
        { category: "DevOps / Ops", items: ["DevOps", "Docker", "Deployment", "Service Operations", "Vercel"] }
      ],
      timelineTitle: "Journey",
      timeline: [
        { year: "2026", title: "Binary Hackathon Project", desc: "Received an encouragement award at the Jocoding x OpenAI x Primer AI hackathon while leading rapid prototyping" },
        { year: "2025", title: "Music Sense", desc: "Won the grand prize at SKT FLY AI with a multimodal music experience project based on audio analysis" },
        { year: "2023", title: "Youngil Young Inc.", desc: "Built product features and improved user flows as a full-stack developer" },
        { year: "2020", title: "Pickle.plus", desc: "Gained hands-on experience across backend development and service operations" }
      ]
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-8" style={{ backgroundColor: 'var(--bg-dark)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-32 max-w-4xl mx-auto text-center"
        >
          <blockquote
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              lineHeight: 1.4,
              color: '#FFFFFF',
              fontStyle: 'italic',
            }}
          >
            {content[language].quote}
          </blockquote>
        </motion.div>

        {/* Bio Section with Photo */}
        <div ref={sectionRef} className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-16 items-start"
          >
            {/* Photo */}
            <div className="relative">
              <div 
                className="relative overflow-hidden"
                style={{
                  aspectRatio: '3/4',
                  border: '1px solid var(--bg-border)',
                }}
              >
                <ImageWithFallback
                  src="/photo_yeop.jpg"
                  alt="Yeop Sang"
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(100%)' }}
                />
                {/* Accent overlay on hover */}
                <div 
                  className="absolute inset-0 bg-[#C8FF00] opacity-0 hover:opacity-10 transition-opacity duration-500"
                />
              </div>
            </div>

            {/* Bio Text */}
            <div>
              <h2
                className="mb-8"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  color: '#FFFFFF',
                }}
              >
                {content[language].bioTitle}
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.125rem',
                  lineHeight: 1.8,
                  color: '#888888',
                }}
              >
                {content[language].bio}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <h2
            className="mb-12"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 700,
              letterSpacing: '0.05em',
              color: '#FFFFFF',
            }}
          >
            {content[language].stackTitle}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content[language].stack.map((category, idx) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="border p-6"
                style={{ 
                  borderColor: 'var(--bg-border)',
                  backgroundColor: 'var(--bg-card)',
                }}
              >
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.15em',
                    color: '#C8FF00',
                    textTransform: 'uppercase',
                  }}
                >
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.95rem',
                        color: '#888888',
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="mb-12"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 700,
              letterSpacing: '0.05em',
              color: '#FFFFFF',
            }}
          >
            {content[language].timelineTitle}
          </h2>

          <div className="space-y-12 max-w-3xl">
            {content[language].timeline.map((item, idx) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex gap-8 pb-12 border-b"
                style={{ borderColor: 'var(--bg-border)' }}
              >
                <div
                  className="flex-shrink-0"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.875rem',
                    letterSpacing: '0.1em',
                    color: '#C8FF00',
                    width: '100px',
                  }}
                >
                  {item.year}
                </div>
                <div className="flex-1">
                  <h3
                    className="mb-2"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '1.25rem',
                      fontWeight: 500,
                      color: '#FFFFFF',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      color: '#888888',
                      lineHeight: 1.6,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
