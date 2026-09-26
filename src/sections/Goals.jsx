import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { goals } from '../data/portfolioData';
import { Briefcase, BrainCircuit, Code2, Trophy, Users } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

const goalIcons = { Code2, Trophy, BrainCircuit, Github: FaGithub, Briefcase, Users };

export function Goals() {
  return (
    <section className="section section-alt" id="goals">
      <div className="container">
        <SectionTitle
          number="07"
          title="Career"
          accentText="Goals"
          description="Key milestones and technical ambitions guiding my continuous development."
        />

        <div className="goals__grid">
          {goals.map((goal, index) => (
            <motion.div
              key={goal.id}
              className="goal-card"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
            >
              <div className="goal-card__num">0{goal.id}</div>
              <div className="goal-card__content">
                {(() => {
                  const Icon = goalIcons[goal.icon];
                  return Icon ? <Icon size={18} aria-hidden="true" /> : null;
                })()}
                <h3 className="goal-card__title">{goal.title}</h3>
                <p className="goal-card__desc">{goal.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
