import { useEffect, useState } from 'react';
import AnimatedBrand from './AnimatedBrand.jsx';

const navItems = [
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    let animationFrame = null;

    const updateActiveSection = () => {
      animationFrame = null;

      if (window.location.hash.startsWith('#/projects/')) {
        setActiveSection('projects');
        return;
      }

      const probe = window.scrollY + window.innerHeight * 0.38;
      const current = [...navItems]
        .reverse()
        .find((item) => {
          const section = document.getElementById(item.id);
          return section && section.offsetTop <= probe;
        });

      setActiveSection(current?.id || '');
    };

    const scheduleUpdate = () => {
      if (animationFrame === null) {
        animationFrame = window.requestAnimationFrame(updateActiveSection);
      }
    };

    updateActiveSection();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('hashchange', scheduleUpdate);
    window.addEventListener('resize', scheduleUpdate);

    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('hashchange', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      if (animationFrame !== null) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <AnimatedBrand />
        <div className="nav-actions">
          <div className="nav-links">
            {navItems.map((item) => (
              <a
                className={activeSection === item.id ? 'is-active' : undefined}
                href={item.href}
                key={item.href}
                aria-current={activeSection === item.id ? 'location' : undefined}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
