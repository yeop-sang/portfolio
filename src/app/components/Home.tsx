import { Link } from "react-router";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

export function Home() {
  const tickerRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  useEffect(() => {
    const ticker = tickerRef.current;
    if (!ticker) return;

    let animationId: number;
    let position = 0;

    const animate = () => {
      position -= 0.5;
      if (ticker.firstElementChild) {
        const width = ticker.firstElementChild.clientWidth;
        if (Math.abs(position) >= width) {
          position = 0;
        }
      }
      ticker.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const tickerText = "LLM · AUDIO PROCESSING · COMPUTER VISION · FULL-STACK · STARTUP · OPEN TO COLLABORATE · ";

  const content = {
    ko: {
      available: "협업 가능 — 2026",
      title: "AI · ML · DEV",
      description: "서울에서 활동하는 개발자입니다. 오디오 모델부터 에이전트 워크플로우까지, 생각하는 시스템을 만듭니다.",
      cta: "프로젝트 보기 →"
    },
    en: {
      available: "AVAILABLE FOR WORK — 2026",
      title: "AI · ML · DEV",
      description: "Seoul-based developer building intelligent systems. From audio models to agent workflows, I create systems that think.",
      cta: "VIEW PROJECTS →"
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="flex-1 flex items-center justify-center px-8 pt-20">
        <div className="max-w-7xl w-full">
          {/* Available for work label */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <span 
              className="text-xs uppercase tracking-[0.15em]"
              style={{ 
                fontFamily: 'var(--font-mono)',
                color: '#888888'
              }}
            >
              {content[language].available}
            </span>
          </motion.div>

          {/* Main content */}
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3rem, 8vw, 6rem)',
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: '#FFFFFF',
                lineHeight: 1.1,
              }}
            >
              {content[language].title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12 max-w-2xl"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                lineHeight: 1.7,
                color: '#888888',
              }}
            >
              {content[language].description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link
                to="/work"
                className="inline-block px-8 py-4 border-2 border-white text-white uppercase tracking-[0.15em] text-sm font-medium relative overflow-hidden group"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                  {content[language].cta}
                </span>
                <span 
                  className="absolute inset-0 bg-[#C8FF00] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Marquee Ticker */}
      <div className="border-t" style={{ borderColor: '#2A2A2A' }}>
        <div className="overflow-hidden py-6">
          <div ref={tickerRef} className="flex whitespace-nowrap">
            <span 
              className="text-xs uppercase tracking-[0.2em] inline-block"
              style={{ 
                fontFamily: 'var(--font-mono)',
                color: '#888888'
              }}
            >
              {tickerText.repeat(10)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}