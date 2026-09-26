import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { personal } from '../data/portfolioData';
import { User, GraduationCap, MapPin, Building2, Code, Target } from 'lucide-react';

export function About() {
  const [imgError, setImgError] = useState(false);

  const highlights = [
    { label: 'Education', value: 'B.Tech — AI & DS', icon: GraduationCap },
    { label: 'University', value: 'Reva University', icon: Building2 },
    { label: 'Location', value: personal.location, icon: MapPin },
    { label: 'Focus', value: 'DSA • ML • Data Science', icon: Target },
    { label: 'Languages', value: 'Python • C', icon: Code },
    { label: 'Hometown', value: personal.from, icon: MapPin },
  ];

  return (
    <section className="section section-alt" id="about">
      <div className="container">
        <SectionTitle
          number="01"
          title="About"
          accentText="Me"
          description="A glimpse into my academic background, technical focus, and passion for problem solving."
        />

        <div className="about__grid">
          {/* Left Bio Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="about__text">
              {personal.about}
            </p>
          </motion.div>

          {/* Right Highlights & Profile Photo Column */}
          <motion.div
            className="about__profile-area"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="about__photo-wrapper">
              {!imgError ? (
                <img
                  src={personal.profileImage}
                  alt={`${personal.name} profile portrait`}
                  loading="lazy"
                  decoding="async"
                  onError={() => setImgError(true)}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <div className="about__photo-placeholder">
                  <User size={48} />
                  <span>Profile Photo Placeholder</span>
                  <span style={{ fontSize: '0.7rem', opacity: 0.7 }}>/public/profile.jpg</span>
                </div>
              )}
            </div>

            <div className="about__highlights">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="about__highlight">
                    <div className="about__highlight-label">
                      <Icon size={15} aria-hidden="true" />
                      {item.label}
                    </div>
                    <div className="about__highlight-value">{item.value}</div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
