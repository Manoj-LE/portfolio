import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { personal, navLinks } from '../data/portfolioData';
import { Sun, Moon, Code2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

export function Navbar({ activeSection }) {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a href="#" className="navbar__logo" aria-label="Manoj Le Home">
          <Code2 size={20} className="text-accent" />
          <span>{personal.name}</span>
        </a>

        {/* Desktop Links */}
        <nav className="navbar__links" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`navbar__link ${isActive ? 'navbar__link--active' : ''}`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Actions (Socials + Theme toggle + Hamburger) */}
        <div className="navbar__actions">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__icon-btn"
            aria-label="GitHub Profile"
          >
            <FaGithub size={18} />
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__icon-btn"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={18} />
          </a>

          <button
            onClick={toggleTheme}
            className="navbar__icon-btn"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            className={`navbar__hamburger ${mobileMenuOpen ? 'open' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {mobileMenuOpen && (
        <div className="navbar__mobile open">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`}
                onClick={closeMobileMenu}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
