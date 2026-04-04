import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../context/LanguageContext";
import { aboutContent } from "../data/siteContent";

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

  const stack = aboutContent.stack[language];
  const timeline = aboutContent.timeline[language];
  const profileImageSrc = "/photo_yeop.jpg";

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
            {aboutContent.quote[language]}
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
                  src={profileImageSrc}
                  alt="Yeop Sang"
                  className="w-full h-full object-cover"
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
                {aboutContent.bioTitle[language]}
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.125rem',
                  lineHeight: 1.8,
                  color: '#888888',
                }}
              >
                {aboutContent.bio[language]}
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
            {aboutContent.stackTitle[language]}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stack.map((category, idx) => (
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
            {aboutContent.timelineTitle[language]}
          </h2>

          <div className="space-y-12 max-w-3xl">
            {timeline.map((item, idx) => (
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