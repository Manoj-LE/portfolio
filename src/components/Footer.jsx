import React from 'react';
import { personal, navLinks } from '../data/portfolioData';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div>
            <div className="footer__brand">
              {personal.name} <span>.</span>
            </div>
            <p className="footer__tagline">
              B.Tech Student — Artificial Intelligence & Data Science • Reva University
            </p>
          </div>

          <div className="footer__links">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="footer__link">
                {link.label}
              </a>
            ))}
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              GitHub
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__copy">
            © {currentYear} {personal.name}. All rights reserved.
          </div>

          <div className="footer__made">
            <span>Built with React.js & modern CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
