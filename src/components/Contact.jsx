import resumeUrl from '../assets/Owyn_Smith_Resume.pdf';

const links = [
  { label: 'Email', detail: 'Start a conversation', href: 'mailto:owynvsmith@yahoo.com' },
  { label: 'LinkedIn', detail: 'Connect professionally', href: 'https://linkedin.com/in/owyn-smith', external: true },
  { label: 'Resume', detail: 'View PDF', href: resumeUrl, external: true },
];

export default function Contact() {
  return (
    <section className="contact-band" id="contact">
      <div className="section-shell contact-section content-section">
        <div className="section-heading" data-reveal>
          <div className="section-label">
            <span>03 / Contact</span>
            <span>Open to projects and opportunities</span>
          </div>
          <h2>Contact</h2>
        </div>
        <div className="contact-panel" data-reveal>
          <p>Let&apos;s connect.</p>
          <div className="contact-links">
            {links.map((link) => (
              <a
                key={link.label}
                className="button button-secondary"
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer' : undefined}
              >
                <span>
                  <strong>{link.label}</strong>
                  <small>{link.detail}</small>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
