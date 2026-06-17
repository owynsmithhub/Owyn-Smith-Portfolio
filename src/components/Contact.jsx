const links = [
  { label: 'Email', href: 'mailto:your.email@example.com' },
  { label: 'GitHub', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Resume', href: '#' },
];

export default function Contact() {
  return (
    <section className="section-shell contact-section content-section" id="contact">
      <div className="section-heading">
        <p className="eyebrow">Start a Thread</p>
        <h2>Contact</h2>
      </div>
      <div className="contact-panel">
        <p>Let&apos;s connect.</p>
        <div className="contact-links">
          {links.map((link) => (
            <a key={link.label} className="button button-secondary" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
