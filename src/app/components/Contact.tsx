import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { contactContent } from "../data/siteContent";

export function Contact() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 py-24" style={{ backgroundColor: '#0F0F0F' }}>
      <div className="max-w-2xl w-full text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[0.15em] mb-8"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            color: '#888888',
          }}
        >
          {contactContent.label[language]}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 700,
            letterSpacing: '0.05em',
            color: '#FFFFFF',
            lineHeight: 1.2,
          }}
        >
          {contactContent.title[language]}
        </motion.h1>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          href={`mailto:${contactContent.email}`}
          className="inline-flex items-center gap-3 mb-12 group"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.25rem',
            color: '#888888',
          }}
        >
          <Mail className="w-5 h-5 group-hover:text-[#C8FF00] transition-colors" />
          <span className="group-hover:text-[#C8FF00] transition-colors">
            {contactContent.email}
          </span>
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-6 mb-24"
        >
          <a
            href={contactContent.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border rounded-full transition-all duration-300 hover:border-[#C8FF00] hover:bg-[#C8FF00] group"
            style={{ borderColor: '#2A2A2A' }}
          >
            <Github className="w-5 h-5 text-white group-hover:text-black transition-colors" />
          </a>
          <a
            href={contactContent.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border rounded-full transition-all duration-300 hover:border-[#C8FF00] hover:bg-[#C8FF00] group"
            style={{ borderColor: '#2A2A2A' }}
          >
            <Linkedin className="w-5 h-5 text-white group-hover:text-black transition-colors" />
          </a>
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            color: '#888888',
          }}
        >
          {contactContent.footer[language]}
        </motion.footer>
      </div>
    </div>
  );
}