import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const highlights = [
  { number: '1M+', label: 'Records Processed Daily' },
  { number: '25%', label: 'API Uptime Improvement' },
  { number: '40%', label: 'Faster Incident Resolution' },
  { number: '15%', label: 'Latency Reduction' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-warm font-medium text-sm tracking-widest uppercase mb-3">About Me</p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal mb-8">
            Detail-oriented engineer who<br className="hidden md:block" /> ships reliable systems at scale.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3"
          >
            <p className="text-muted leading-relaxed mb-4">
              I'm a Software Engineer at <span className="text-charcoal font-medium">National Australia Bank</span> where
              I design and maintain large-scale batch and document processing systems. My work spans building secure
              file transfer pipelines with PGP encryption, optimizing microservice performance through Java 17 migration,
              and implementing resilience patterns that keep enterprise systems running at 99%+ uptime.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Beyond my day job, I'm passionate about AI/ML — from building multi-agent systems with
              Amazon Bedrock to implementing RAG pipelines and LLM orchestration. I love the challenge of
              making complex systems simple and reliable.
            </p>
            <p className="text-muted leading-relaxed">
              I'm a fast learner who pays attention to the small details that matter — whether it's catching
              edge cases before they hit production or designing APIs that other developers actually enjoy using.
              I graduated from <span className="text-charcoal font-medium">NIT Kurukshetra</span> with a B.Tech
              in Electrical Engineering (8.63/10 CGPA).
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-2 grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <div
                key={i}
                className="bg-card rounded-2xl p-5 border border-border text-center shadow-sm"
              >
                <p className="text-2xl font-bold text-gradient mb-1">{item.number}</p>
                <p className="text-xs text-muted leading-snug">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
