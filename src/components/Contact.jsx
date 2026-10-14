import resumeUrl from '../assets/Owyn_Smith_Resume.pdf';

function MailIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function FileTextIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  );
}

const links = [
  { label: 'Email', detail: 'Start a conversation', href: 'mailto:owynvsmith@yahoo.com', icon: MailIcon },
  { label: 'LinkedIn', detail: 'Connect professionally', href: 'https://linkedin.com/in/owyn-smith', external: true, icon: LinkedInIcon },
  { label: 'Resume', detail: 'View PDF', href: resumeUrl, external: true, icon: FileTextIcon },
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
            {links.map((link) => {
              const Icon = link.icon;
              return (
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
                  <span className="contact-link-icon" aria-hidden="true">
                    <Icon />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
