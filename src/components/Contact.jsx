import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiMail, FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-warm font-medium text-sm tracking-widest uppercase mb-3">Contact</p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal mb-4">
            Let's work together.
          </h2>
          <p className="text-muted leading-relaxed mb-10">
            I'm always open to discussing new opportunities, interesting projects, or just having a conversation
            about tech. Feel free to reach out!
          </p>

          <motion.a
            href="mailto:poorvi16094@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-warm text-white rounded-full font-medium text-lg hover:bg-warm-dark transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <FiMail size={20} />
            poorvi16094@gmail.com
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-8 mt-10"
          >
            <a
              href="https://github.com/poorvibadaya"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted hover:text-warm transition-colors duration-200"
            >
              <FiGithub size={20} />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/poorvi-badaya-810b6b1aa/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted hover:text-warm transition-colors duration-200"
            >
              <FiLinkedin size={20} />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <span className="flex items-center gap-2 text-muted">
              <FiMapPin size={20} />
              <span className="text-sm font-medium">Gurugram, India</span>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
