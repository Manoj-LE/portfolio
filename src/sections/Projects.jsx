import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/portfolioData';

export function Projects() {
  return (
    <section className="section section-alt" id="projects">
      <div className="container">
        <SectionTitle
          number="05"
          title="Featured"
          accentText="Projects"
          description="Practical projects demonstrating core programming, algorithm implementations, and machine learning workflows."
        />

        <div className="projects__grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
