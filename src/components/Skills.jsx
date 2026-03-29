import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiCpu, FiLayers, FiDatabase, FiCloud, FiTool } from 'react-icons/fi';

const skillCategories = [
  {
    title: 'Languages',
    icon: FiCode,
    skills: ['Python', 'Java', 'C++', 'JavaScript'],
  },
  {
    title: 'AI / ML',
    icon: FiCpu,
    skills: ['Amazon Bedrock', 'Multi-Agent Systems', 'RAG Pipelines', 'LLM Orchestration', 'Prompt Engineering'],
  },
  {
    title: 'Frameworks',
    icon: FiLayers,
    skills: ['Spring Boot', 'Node.js', 'React.js', 'Next.js', 'Kafka', 'Wiremock'],
  },
  {
    title: 'Databases',
    icon: FiDatabase,
    skills: ['PostgreSQL', 'SQL', 'DynamoDB'],
  },
  {
    title: 'Cloud & DevOps',
    icon: FiCloud,
    skills: ['AWS (S3, Lambda, EventBridge, CloudFront)', 'Jenkins', 'Harness', 'Splunk'],
  },
  {
    title: 'Tools & Testing',
    icon: FiTool,
    skills: ['Git', 'GitHub', 'Postman', 'JUnit', 'Mockito', 'Playwright'],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-warm font-medium text-sm tracking-widest uppercase mb-3">Skills</p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal mb-12">
            My technical toolkit.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md hover:border-warm/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-warm/10 flex items-center justify-center mb-4">
                  <Icon className="text-warm" size={20} />
                </div>
                <h3 className="font-semibold text-charcoal mb-3">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium px-3 py-1.5 bg-cream-dark text-muted rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
