import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { skills } from '../data/portfolioData';
import { Code2, Cpu, BrainCircuit, Wrench } from 'lucide-react';

const categoryIconMap = {
  Code2,
  Cpu,
  BrainCircuit,
  Wrench,
};

export function Skills() {
  return (
    <section className="section section-alt" id="skills">
      <div className="container">
        <SectionTitle
          number="03"
          title="Technical"
          accentText="Skills"
          description="Categorized tools and technologies I build with, with an emphasis on continuous learning."
        />

        <div className="skills__categories">
          {skills.map((cat, catIdx) => {
            const IconComponent = categoryIconMap[cat.icon] || Code2;
            return (
              <motion.div
                key={cat.category}
                className="skill-category"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: catIdx * 0.1 }}
              >
                <div className="skill-category__header">
                  <div className="skill-category__icon">
                    <IconComponent size={20} />
                  </div>
                  <h3 className="skill-category__name">{cat.category}</h3>
                </div>

                <div className="skill-items">
                  {cat.items.map((skill) => (
                    <span
                      key={skill.name}
                      className={`skill-item ${skill.level === 'learning' ? 'skill-item--learning' : ''}`}
                    >
                      {skill.name}
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
