import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiAward, FiStar, FiZap, FiTarget } from 'react-icons/fi';

const achievements = [
  {
    icon: FiAward,
    title: 'AWS Certified Cloud Practitioner',
    subtitle: 'CLF-C02',
    description: 'Demonstrated foundational knowledge of AWS Cloud services, architecture, and best practices.',
    link: 'https://www.credly.com/badges/your-badge',
  },
  {
    icon: FiStar,
    title: 'Spot Award × 2 @ NAB',
    description: 'Awarded twice for outstanding contributions to critical platform initiatives and consistent delivery beyond expectations.',
  },
  {
    icon: FiTarget,
    title: 'Black Belt in DSA @ NAB',
    description: 'Achieved the highest grade in internal coding evaluations across the company.',
  },
  {
    icon: FiZap,
    title: 'TRI-NIT Hackathon 2022',
    description: 'Ranked Top 10 in internal rounds among 200+ participants.',
  },
];

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-warm font-medium text-sm tracking-widest uppercase mb-3">Achievements</p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal mb-12">
            Recognition & certifications.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-all duration-300 flex gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-warm/10 flex items-center justify-center shrink-0">
                  <Icon className="text-warm" size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal">{item.title}</h3>
                  {item.subtitle && (
                    <p className="text-warm text-sm font-medium">{item.subtitle}</p>
                  )}
                  <p className="text-muted text-sm mt-1 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
