import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="text-warm font-medium text-sm tracking-widest uppercase mb-4">
            Software Engineer
          </p>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold text-charcoal leading-tight mb-6">
            Hi, I'm{' '}
            <span className="text-gradient">Poorvi</span>
            <span className="text-warm">.</span>
          </h1>
          <p className="text-muted text-lg leading-relaxed mb-8 max-w-lg">
            I build secure, scalable systems and AI-powered solutions. Currently engineering enterprise-grade
            pipelines at <span className="text-charcoal font-medium">National Australia Bank</span>,
            processing 1M+ records daily.
          </p>

          <div className="flex items-center gap-4 mb-10">
            <a
              href="#contact"
              className="px-6 py-3 bg-warm text-white rounded-full font-medium hover:bg-warm-dark transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-border text-charcoal rounded-full font-medium hover:border-warm hover:text-warm transition-all duration-200"
            >
              View Work
            </a>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/poorvibadaya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-warm transition-colors duration-200"
              aria-label="GitHub"
            >
              <FiGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/poorvi-badaya-810b6b1aa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-warm transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={22} />
            </a>
            <a
              href="mailto:poorvi16094@gmail.com"
              className="text-muted hover:text-warm transition-colors duration-200"
              aria-label="Email"
            >
              <FiMail size={22} />
            </a>
          </div>
        </motion.div>

        {/* Right - Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-warm/20 via-warm-light/10 to-transparent rounded-3xl blur-2xl" />
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-2 border-border shadow-xl">
              <img
                src="/profile.jpg"
                alt="Poorvi Badaya"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <a href="#about" className="text-muted hover:text-warm transition-colors">
          <FiArrowDown size={24} />
        </a>
      </motion.div>
    </section>
  );
}
