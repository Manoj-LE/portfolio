import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { personal } from '../data/portfolioData';
import { Button } from '../components/Button';
import { Mail, FileText, Send, CheckCircle2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'success'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Mailto fallback or client simulation notification
    const mailtoUrl = `mailto:${personal.email}?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.email)}`;
    window.location.href = mailtoUrl;

    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="section section-alt" id="contact">
      <div className="container">
        <SectionTitle
          number="08"
          title="Let's Build"
          accentText="Something Useful"
          description="I'm open to internships, collaborative projects, mentorship opportunities, and meaningful technical conversations."
        />

        <div className="contact__inner">
          {/* Left Column: Direct Info & Social Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="contact__info-list">
              <a href={personal.emailHref} className="contact__info-item">
                <div className="contact__info-icon">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="contact__info-label">Email</div>
                  <div className="contact__info-value">{personal.email}</div>
                </div>
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__info-item"
              >
                <div className="contact__info-icon">
                  <FaGithub size={18} />
                </div>
                <div>
                  <div className="contact__info-label">GitHub</div>
                  <div className="contact__info-value">github.com/Manoj-LE</div>
                </div>
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__info-item"
              >
                <div className="contact__info-icon">
                  <FaLinkedin size={18} />
                </div>
                <div>
                  <div className="contact__info-label">LinkedIn</div>
                  <div className="contact__info-value">linkedin.com/in/manoj-l-e-8798a1428</div>
                </div>
              </a>
            </div>

            <div className="contact__actions">
              <Button href={personal.emailHref} variant="primary" icon={Mail}>
                Send Email
              </Button>

              <Button
                href={personal.resumeUrl}
                variant="secondary"
                icon={FileText}
                download
              >
                Download Resume
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form className="contact-form glass-card" style={{ padding: '1.75rem' }} onSubmit={handleSubmit}>
              <div className="contact-form__group">
                <label className="contact-form__label" htmlFor="contact-name">Your Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Rahul Sharma"
                  className="contact-form__input"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="contact-form__group">
                <label className="contact-form__label" htmlFor="contact-email">Your Email</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  placeholder="e.g. rahul@example.com"
                  className="contact-form__input"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="contact-form__group">
                <label className="contact-form__label" htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  placeholder="Hi Manoj, I'd like to talk about an internship opportunity..."
                  className="contact-form__textarea"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <Button type="submit" variant="primary" icon={Send} iconPosition="right">
                Send Message
              </Button>

              {status === 'success' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--emerald)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                  <CheckCircle2 size={16} /> Opening your default email client...
                </div>
              )}

              <p className="contact-form__note">
                * Note: Submitting will prepare a direct email to {personal.email}.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
