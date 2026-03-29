import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiExternalLink, FiGithub, FiPlay } from 'react-icons/fi';

const projects = [
  {
    title: 'MandiMitra',
    subtitle: 'AI Market Intelligence Copilot',
    description:
      'Multi-agent AI system using Amazon Bedrock (Claude Sonnet 4) with SUPERVISOR orchestration, routing queries across 5 specialist agents via 13 tool functions for real-time agricultural market intelligence serving 150M+ farmers.',
    highlights: [
      '100% serverless — 3 AWS Lambdas, DynamoDB (16,500+ records, 3 GSIs)',
      'Automated EventBridge pipeline ingesting prices from 1,451 mandis across 24 states',
      'Next.js 14 PWA with Hindi voice interface and GPS-based mandi discovery',
      'RAG pipeline using Bedrock Knowledge Base with Titan Embeddings v2 + OpenSearch',
    ],
    tech: ['AWS Bedrock', 'Next.js', 'Python', 'DynamoDB', 'Lambda', 'OpenSearch', 'CloudFront'],
    live: 'https://d2mtfau3fvs243.cloudfront.net/',
    demo: 'https://youtu.be/ApF44U5FgzY',
    github: 'https://github.com/poorvibadaya/AI-For-Bharat---AWS',
    featured: true,
    badge: 'Live & Processing Data',
  },
  {
    title: 'Accountability Reward Tracker',
    subtitle: 'AI-Powered Goal Management',
    description:
      'Upload your goals, let AI break them into actionable daily tasks, track progress with streaks & points, and reward yourself. Built for people who want to turn plans into daily wins.',
    highlights: [
      'AI-powered task breakdown using Gemini',
      'Streak tracking & reward point system',
      'Real-time progress visualization with Framer Motion',
    ],
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Framer Motion', 'Gemini AI'],
    live: 'https://accgoals.vercel.app',
    github: 'https://github.com/poorvibadaya/Accountability-Reward-Tracker',
    featured: true,
  },
  {
    title: 'PDF Image Merger',
    subtitle: 'Serverless Document Tool',
    description:
      'A serverless PDF merge tool supporting drag-and-drop reordering of PDFs and images. Built with Next.js Route Handlers and pdf-lib for client-side processing.',
    tech: ['Next.js', 'TypeScript', 'pdf-lib', 'Vercel'],
    live: 'https://pdf-image-merger-hgqb.vercel.app/',
    github: 'https://github.com/poorvibadaya/PDF-Image-Merger',
  },
  {
    title: 'FastAPI Local RAG Search',
    subtitle: 'Semantic Search Engine',
    description:
      'Self-contained FastAPI project for semantic context retrieval using a local embedding model and FAISS. No external API keys required — fully local and private.',
    tech: ['Python', 'FastAPI', 'FAISS', 'Embeddings'],
    github: 'https://github.com/poorvibadaya/FastAPI-Local-RAG-Search',
  },
  {
    title: 'YouTube Summarizer',
    subtitle: 'Local LLM-Powered',
    description:
      'Summarize YouTube videos and Shorts using captions (or Whisper fallback) and a local LLM via Ollama. Completely private — no API keys needed.',
    tech: ['Python', 'Ollama', 'Whisper', 'LLM'],
    github: 'https://github.com/poorvibadaya/Youtube-Summarizer',
  },
  {
    title: 'Movie Review App',
    subtitle: 'Full Stack Application',
    description:
      'Full stack movie review application for browsing, reviewing, and rating movies. Complete CRUD operations with a clean UI.',
    tech: ['JavaScript', 'Node.js', 'React', 'MongoDB'],
    github: 'https://github.com/poorvibadaya/movieReview',
  },
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  if (project.featured) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        className="md:col-span-2 bg-card rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
      >
        <div className="p-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              {project.badge && (
                <span className="inline-block text-xs font-semibold px-3 py-1 bg-green-50 text-green-700 rounded-full mb-3">
                  {project.badge}
                </span>
              )}
              <h3 className="text-2xl font-semibold text-charcoal">{project.title}</h3>
              <p className="text-warm font-medium text-sm">{project.subtitle}</p>
            </div>
            <div className="flex gap-3">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:text-warm hover:border-warm transition-colors"
                  aria-label="Watch demo"
                >
                  <FiPlay size={16} />
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:text-warm hover:border-warm transition-colors"
                  aria-label="Live site"
                >
                  <FiExternalLink size={16} />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:text-warm hover:border-warm transition-colors"
                  aria-label="GitHub repo"
                >
                  <FiGithub size={16} />
                </a>
              )}
            </div>
          </div>

          <p className="text-muted text-sm leading-relaxed mb-5">{project.description}</p>

          {project.highlights && (
            <ul className="space-y-2 mb-5">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex gap-3 text-muted text-sm leading-relaxed">
                  <span className="text-warm mt-1.5 shrink-0">
                    <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                      <circle cx="3" cy="3" r="3" />
                    </svg>
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs font-medium px-3 py-1 bg-cream-dark text-warm-dark rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md hover:border-warm/30 transition-all duration-300 flex flex-col"
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-lg font-semibold text-charcoal">{project.title}</h3>
          <p className="text-warm text-sm font-medium">{project.subtitle}</p>
        </div>
        <div className="flex gap-2">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-warm transition-colors"
              aria-label="Live site"
            >
              <FiExternalLink size={16} />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-warm transition-colors"
              aria-label="GitHub repo"
            >
              <FiGithub size={16} />
            </a>
          )}
        </div>
      </div>

      <p className="text-muted text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs font-medium px-3 py-1 bg-cream-dark text-warm-dark rounded-full"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 px-6 bg-cream-dark">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-warm font-medium text-sm tracking-widest uppercase mb-3">Projects</p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal mb-12">
            Things I've built.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
