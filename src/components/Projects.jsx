import React from 'react';

const Projects = () => {
  const projectList = [
    {
      title: 'AI Smart Glasses for the Visually Impaired',
      description: 'An assistive technology wearable utilizing computer vision to provide hands-free access to information, text, and object recognition. Built with Python to process real-time data and increase independence for blind and partially sighted users.',
      tags: ['Python', 'Computer Vision', 'AI'],
    },
    {
      title: 'Smart IoT-Based Food Spoilage Detector',
      description: 'A hardware monitoring system that uses a microcontroller to interpret inputs from environmental sensors. By detecting changes in conditions affecting food quality, these electronic components trigger alerts to prevent the consumption of spoiled food.',
      tags: ['IoT', 'Electronic Components', 'Microcontrollers'],
    },
    {
      title: 'AI-Based Smart Logistic Transport (North-Eastern Region)',
      description: 'An intelligent routing and logistics solution optimized for the specific geographical and infrastructural challenges of North-Eastern India. Leverages Python and predictive modeling to improve supply chain efficiency and track transport metrics.',
      tags: ['Python', 'Machine Learning', 'Logistics', 'Data Science'],
    },
  ];

  return (
    <section className="projects" aria-labelledby="featured-projects-heading">
      <h2 id="featured-projects-heading">Featured Projects</h2>

      <div className="projects__list">
        {projectList.map((project) => (
          <article className="projects__item" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="projects__tags" aria-label={`${project.title} technologies`}>
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
