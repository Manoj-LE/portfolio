import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { learning } from '../data/portfolioData';
import { GitBranch, Trophy, BrainCircuit, BarChart3, Lightbulb } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

const learningIconMap = {
  GitBranch,
  Trophy,
  BrainCircuit,
  BarChart3,
  Github: FaGithub,
  Lightbulb,
};

export function Learning() {
  return (
    <section className="section" id="learning">
      <div className="container">
        <SectionTitle
          number="04"
          title="Currently"
          accentText="Learning"
          description="My active focus areas, learning roadmap, and topics I am currently deepening my knowledge in."
        />

        <div className="learning__grid">
          {learning.map((item, index) => {
            const IconComponent = learningIconMap[item.icon] || Lightbulb;
            const statusClass = `status-${item.status.toLowerCase()}`;

            return (
              <motion.div
                key={item.id}
                className="learning-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <div className="learning-card__header">
                  <div className="learning-card__icon">
                    <IconComponent size={20} />
                  </div>
                  <span className={`learning-card__status ${statusClass}`}>
                    {item.status}
                  </span>
                </div>

                <h3 className="learning-card__title">{item.title}</h3>
                <div className="learning-card__subtitle">{item.subtitle}</div>
                <p className="learning-card__desc">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
