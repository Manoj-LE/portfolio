import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

export function ProjectCard({ project, index }) {
  return (
    <motion.div
      className="project-card"
      style={{ '--card-accent-glow': `${project.accentColor}15` }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
    >
      <div className="project-card__header">
        <span className="project-card__number">PROJECT // {project.number}</span>
        <span className="project-card__status">{project.status}</span>
      </div>

      <div>
        <h3 className="project-card__title">{project.title}</h3>
        <div className="project-card__tagline">{project.tagline}</div>
      </div>

      <p className="project-card__desc">{project.description}</p>

      <div className="project-card__features">
        {project.features.map((feature, i) => (
          <div key={i} className="project-card__feature">
            {feature}
          </div>
        ))}
      </div>

      <div className="project-card__tech">
        {project.techStack.map((tech) => (
          <span key={tech} className="tech-badge">
            {tech}
          </span>
        ))}
      </div>

      <div className="project-card__actions">
        <Button
          href={project.githubUrl}
          variant="secondary"
          size="sm"
          icon={FaGithub}
        >
          GitHub
        </Button>

        {project.liveUrl && (
          <Button
            href={project.liveUrl}
            variant="ghost"
            size="sm"
            icon={ExternalLink}
          >
            View Demo
          </Button>
        )}
      </div>
    </motion.div>
  );
}
