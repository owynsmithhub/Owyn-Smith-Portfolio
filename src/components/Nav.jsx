import ThemeToggle from './ThemeToggle.jsx';

const navItems = [
  { label: 'Projects', href: '#projects' },
  { label: 'Lab', href: '#lab' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="brand-mark" href="#top" aria-label="OVJS home">
          OVJS
        </a>
        <div className="nav-actions">
          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
