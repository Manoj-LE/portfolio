import React from 'react';
import { motion } from 'framer-motion';
import { personal } from '../data/portfolioData';
import { Button } from '../components/Button';
import { Code2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

export function GithubSection() {
  return (
    <section className="section github-cta" id="github">
      <div className="container">
        <motion.div
          className="github-cta__inner glass-card"
          style={{ padding: '3.5rem 2rem' }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="accent-line" style={{ margin: '0 auto 1.5rem' }} />
          <h2 className="github-cta__heading">Explore My Work</h2>
          <p className="github-cta__desc">
            "I believe the best way to demonstrate technical growth is through what I build, practice, and share."
          </p>

          <div className="github-cta__btn-group">
            <Button
              href={personal.github}
              variant="primary"
              icon={FaGithub}
              iconPosition="left"
            >
              View My GitHub
            </Button>

            <Button
              href="#projects"
              variant="secondary"
              icon={Code2}
            >
              Browse Featured Projects
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
