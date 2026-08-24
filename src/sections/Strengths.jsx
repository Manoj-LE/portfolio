import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { strengths } from '../data/portfolioData';
import { Zap, CheckCircle2, Puzzle, MessageSquare, TrendingUp, Sprout } from 'lucide-react';

const iconMap = {
  Zap,
  CheckCircle2,
  Puzzle,
  MessageSquare,
  TrendingUp,
  Sprout,
};

export function Strengths() {
  return (
    <section className="section" id="strengths">
      <div className="container">
        <SectionTitle
          number="02"
          title="Key"
          accentText="Strengths"
          description="Core personal and technical qualities that drive my growth and daily work."
        />

        <div className="strengths__grid">
          {strengths.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Zap;
            return (
              <motion.div
                key={item.id}
                className="strength-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <div className="strength-card__icon">
                  <IconComponent size={22} />
                </div>
                <h3 className="strength-card__title">{item.title}</h3>
                <p className="strength-card__desc">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
