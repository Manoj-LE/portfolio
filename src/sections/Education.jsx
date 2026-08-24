import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { education } from '../data/portfolioData';
import { GraduationCap, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <SectionTitle
          number="06"
          title="Education"
          accentText="Timeline"
          description="My academic journey and specialized studies in Artificial Intelligence & Data Science."
        />

        <div className="education__timeline">
          {education.map((item, index) => (
            <motion.div
              key={item.id}
              className="education-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="education-item__degree">{item.degree}</h3>
              <div className="education-item__institution">{item.institution}</div>

              <div className="education-item__meta">
                <span className="education-item__meta-tag">
                  <MapPin size={14} />
                  {item.location}
                </span>

                <span className="education-item__meta-tag">
                  <CheckCircle2 size={14} className="text-emerald" />
                  {item.status}
                </span>

                <span className="education-item__meta-tag">
                  <Calendar size={14} />
                  Expected Graduation: {item.graduationYear}
                </span>
              </div>

              <p className="education-item__desc">{item.description}</p>

              <div className="education-item__tags">
                {item.highlights.map((tag) => (
                  <span key={tag} className="tech-badge">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
