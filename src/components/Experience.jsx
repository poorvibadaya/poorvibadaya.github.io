import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    company: 'National Australia Bank',
    role: 'Software Engineer',
    period: 'Aug 2024 - Present',
    location: 'Gurgaon',
    bullets: [
      'Owned and engineered a secure file transfer pipeline, replacing unencrypted file flows with PGP-encrypted, Amazon S3-based ingestion and SFTP delivery, safeguarding sensitive customer data and aligning with enterprise security and compliance standards.',
      'Designed and maintained large-scale batch and request-based document workflows, processing 1M+ records daily while exceeding SLAs by 15%.',
      'Strengthened system reliability by implementing retry mechanisms, rate limiting, and automated bounceback routing, improving external API uptime by 25% and reducing communication failures across channels.',
      'Led platform modernization including migration of a core microservice to Java 21, reducing average response latency by 15% and improving long-term maintainability.',
      'Improved production stability and observability by introducing end-to-end component tests (JUnit, Mockito), cutting incident resolution time by 40% and catching integration issues pre-release.',
      'Awarded Spot Award twice for outstanding contributions to critical platform initiatives and consistent delivery beyond expectations.',
    ],
    tags: ['Java 21', 'Spring Boot', 'AWS S3', 'Kafka', 'PGP', 'JUnit', 'Splunk'],
  },
  {
    company: 'Cargill Business Services',
    role: 'Software Engineering Intern',
    period: 'Jan 2023 - July 2023',
    location: 'Bangalore',
    bullets: [
      'Delivered a working prototype in 3 months, automating the company\'s internal hiring process and later extending it to project management workflows.',
      'Implemented asset tagging and tracking, enabling monitoring of equipment and resources with unique IDs.',
      'Achieved 100% automation in asset tracking, reducing manual effort and improving resource utilization.',
      'Extended the tool to support multiple business processes, integrating with existing systems without requiring manual intervention.',
    ],
    tags: ['Automation', 'Asset Tracking', 'Process Optimization'],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-24 px-6 bg-cream-dark">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-warm font-medium text-sm tracking-widest uppercase mb-3">Experience</p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal mb-12">
            Where I've worked.
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-charcoal">{exp.company}</h3>
                  <p className="text-warm font-medium">{exp.role}</p>
                </div>
                <div className="text-sm text-muted mt-1 md:mt-0 md:text-right">
                  <p>{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>

              <ul className="space-y-3 mb-5">
                {exp.bullets.map((bullet, j) => (
                  <li key={j} className="flex gap-3 text-muted text-sm leading-relaxed">
                    <span className="text-warm mt-1.5 shrink-0">
                      <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                        <circle cx="3" cy="3" r="3" />
                      </svg>
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 bg-cream-dark text-warm-dark rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
