import { useEffect, useState } from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ThemeToggle from './components/ThemeToggle.jsx';
import CaseStudyPage from './components/CaseStudyPage.jsx';
import { caseStudies } from './data/caseStudies.js';

function getProjectFromHash(hash) {
  const match = hash.match(/^#\/projects\/([^/?]+)/);
  return match ? caseStudies[match[1]] : null;
}

export default function App() {
  const [hash, setHash] = useState(() => window.location.hash);
  const project = getProjectFromHash(hash);

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    document.title = project
      ? `${project.title} Case Study | Owyn Smith`
      : 'Owyn Smith | Informatics + HCI';

    if (project) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    const sectionId = hash.startsWith('#') ? hash.slice(1) : '';
    window.requestAnimationFrame(() => {
      if (sectionId && !sectionId.startsWith('/')) {
        document.getElementById(sectionId)?.scrollIntoView();
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    });
  }, [hash, project]);

  useEffect(() => {
    const targets = [...document.querySelectorAll('[data-reveal]')];
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (motionQuery.matches) {
      targets.forEach((target) => target.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -8%', threshold: 0.12 },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [hash, project]);

  return (
    <>
      <Nav />
      {project ? (
        <CaseStudyPage project={project} />
      ) : (
        <main>
          <Hero />
          <Projects />
          <About />
          <Contact />
        </main>
      )}
      <Footer />
      <ThemeToggle />
    </>
  );
}
