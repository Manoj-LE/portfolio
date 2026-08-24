import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { useActiveSection } from './hooks/useActiveSection';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Strengths } from './sections/Strengths';
import { Skills } from './sections/Skills';
import { Learning } from './sections/Learning';
import { Projects } from './sections/Projects';
import { Education } from './sections/Education';
import { Goals } from './sections/Goals';
import { GithubSection } from './sections/Github';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';

const sectionIds = [
  'about',
  'strengths',
  'skills',
  'learning',
  'projects',
  'education',
  'goals',
  'github',
  'contact',
];

function PortfolioApp() {
  const activeSection = useActiveSection(sectionIds);

  return (
    <div className="portfolio-app">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Strengths />
        <Skills />
        <Learning />
        <Projects />
        <Education />
        <Goals />
        <GithubSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}
