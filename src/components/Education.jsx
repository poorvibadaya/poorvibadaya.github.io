import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiBookOpen } from 'react-icons/fi';

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-24 px-6 bg-cream-dark">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-warm font-medium text-sm tracking-widest uppercase mb-3">Education</p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal mb-12">
            Academic background.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card rounded-2xl p-8 border border-border shadow-sm max-w-2xl"
        >
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-warm/10 flex items-center justify-center shrink-0">
              <FiBookOpen className="text-warm" size={22} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-charcoal">
                National Institute of Technology, Kurukshetra
              </h3>
              <p className="text-warm font-medium">B.Tech | Electrical Engineering</p>
              <div className="flex flex-wrap gap-x-6 gap-y-1 mt-2 text-sm text-muted">
                <span>Dec 2020 - May 2024</span>
                <span>Kurukshetra, Haryana</span>
              </div>
              <div className="mt-4 inline-flex items-center gap-2 bg-cream-dark px-4 py-2 rounded-full">
                <span className="text-sm font-medium text-charcoal">CGPA:</span>
                <span className="text-lg font-bold text-gradient">8.63 / 10</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
