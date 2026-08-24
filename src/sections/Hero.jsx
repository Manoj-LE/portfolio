import React from 'react';
import { motion } from 'framer-motion';
import { personal } from '../data/portfolioData';
import { Button } from '../components/Button';
import { ArrowRight, Mail, Terminal, ChevronRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

export function Hero() {
  return (
    <section className="hero dot-grid" id="hero">
      <div className="hero-glow hero-glow--purple" />
      <div className="hero-glow hero-glow--teal" />

      <div className="container relative-z">
        <div className="hero__content">
          {/* Left Hero Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="hero__badge">
              {personal.availability}
            </div>

            <h1 className="hero__name">{personal.name}</h1>

            <p className="hero__headline">
              <strong>B.Tech Student</strong> — Artificial Intelligence & Data Science
            </p>

            <p className="hero__description">
              I’m a B.Tech student specializing in Artificial Intelligence & Data Science, building practical projects with Python and C while developing strong skills in Data Structures, Algorithms, Machine Learning, and Data Analysis.
            </p>

            <div className="hero__cta">
              <Button href="#projects" variant="primary" icon={ArrowRight} iconPosition="right">
                View Projects
              </Button>

              <Button href={personal.github} variant="secondary" icon={FaGithub}>
                GitHub
              </Button>

              <Button href={personal.linkedin} variant="secondary" icon={FaLinkedin}>
                LinkedIn
              </Button>

              <Button href="#contact" variant="ghost" icon={Mail}>
                Contact Me
              </Button>
            </div>

            <div className="hero__scroll-indicator">
              <span className="hero__scroll-line" />
              <span>Scroll to explore</span>
            </div>
          </motion.div>

          {/* Right Hero Terminal / Code Snippet Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="terminal-card">
              <div className="terminal-card__header">
                <div className="terminal-card__dots">
                  <span className="terminal-card__dot terminal-card__dot--red" />
                  <span className="terminal-card__dot terminal-card__dot--yellow" />
                  <span className="terminal-card__dot terminal-card__dot--green" />
                </div>
                <div className="terminal-card__title">
                  <Terminal size={13} style={{ display: 'inline', marginRight: '4px' }} />
                  manoj_profile.py
                </div>
              </div>

              <div className="terminal-card__body">
                <div className="terminal-card__line">
                  <span className="terminal-card__comment"># Developer Profile</span>
                </div>
                <div className="terminal-card__line">
                  <span className="terminal-card__cmd">class</span>
                  <span className="terminal-card__value">Developer</span>:
                </div>
                <div className="terminal-card__line">
                  <span className="terminal-card__output">def __init__(self):</span>
                </div>
                <div className="terminal-card__line">
                  <span className="terminal-card__output" style={{ paddingLeft: '2rem' }}>
                    self.name = <span className="terminal-card__string">"{personal.name}"</span>
                  </span>
                </div>
                <div className="terminal-card__line">
                  <span className="terminal-card__output" style={{ paddingLeft: '2rem' }}>
                    self.degree = <span className="terminal-card__string">"AI & Data Science"</span>
                  </span>
                </div>
                <div className="terminal-card__line">
                  <span className="terminal-card__output" style={{ paddingLeft: '2rem' }}>
                    self.university = <span className="terminal-card__string">"Reva University"</span>
                  </span>
                </div>
                <div className="terminal-card__line">
                  <span className="terminal-card__output" style={{ paddingLeft: '2rem' }}>
                    self.languages = [<span className="terminal-card__string">"Python"</span>, <span className="terminal-card__string">"C"</span>]
                  </span>
                </div>
                <div className="terminal-card__line">
                  <span className="terminal-card__output" style={{ paddingLeft: '2rem' }}>
                    self.focus = [<span className="terminal-card__string">"DSA"</span>, <span className="terminal-card__string">"Machine Learning"</span>]
                  </span>
                </div>
                <div className="terminal-card__line" style={{ marginTop: '0.5rem' }}>
                  <span className="terminal-card__prompt">&gt;</span>
                  <span className="terminal-card__cmd">python</span>
                  <span>run_learning.py</span>
                </div>
                <div className="terminal-card__line">
                  <span className="terminal-card__comment"># Building skills daily...</span>
                  <span className="terminal-card__cursor" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
