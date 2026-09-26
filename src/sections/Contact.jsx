import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { personal } from '../data/portfolioData';
import { Button } from '../components/Button';
import { Mail, FileText, Send, CheckCircle2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const [formError, setFormError] = useState('');
  const [resumeAvailable, setResumeAvailable] = useState(false);

  useEffect(() => {
    let cancelled = false;

    fetch(personal.resumeUrl, { method: 'HEAD' })
      .then((response) => {
        const contentType = response.headers.get('content-type') || '';
        if (!cancelled) setResumeAvailable(response.ok && contentType.includes('application/pdf'));
      })
      .catch(() => {
        if (!cancelled) setResumeAvailable(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      setFormError('Please complete all fields before continuing.');
      setStatus(null);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormError('Please enter a valid email address.');
      setStatus(null);
      return;
    }

    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
    const mailtoUrl = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;

    setFormError('');
    setStatus('opening');
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

              {resumeAvailable ? (
                <Button
                  href={personal.resumeUrl}
                  variant="secondary"
                  icon={FileText}
                  download
                >
                  Download Resume
                </Button>
              ) : (
                <span className="btn btn-secondary btn-disabled" aria-disabled="true">
                  Resume unavailable
                </span>
              )}
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
                  autoComplete="name"
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
                  autoComplete="email"
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
                  autoComplete="off"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <Button type="submit" variant="primary" icon={Send} iconPosition="right">
                Send Message
              </Button>

              {formError && (
                <div className="contact-form__status contact-form__status--error" role="alert">
                  {formError}
                </div>
              )}

              {status === 'opening' && (
                <div className="contact-form__status" role="status" aria-live="polite">
                  <CheckCircle2 size={16} /> Your email client is opening...
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
