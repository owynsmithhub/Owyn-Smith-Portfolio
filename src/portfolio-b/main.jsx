import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import h2goImage from '../assets/projects/h2go/exports/h2go-home-final.png';
import h2goProcess from '../assets/projects/h2go/exports/h2go-reward-meter.png';
import transitImage from '../assets/projects/campus-transit/exports/transit-screen-1.png';
import transitProcess from '../assets/projects/campus-transit/exports/transit-screen-2.png';
import resumeUrl from '../assets/Owyn_Smith_Resume.pdf';
import './portfolio-b.css';

const projects = [
  {
    number: '01',
    title: 'H2Go',
    type: 'Behavior / Mobile product',
    year: '2025',
    lead: 'Making an invisible daily habit feel visible, social, and worth returning to.',
    detail:
      'A hydration system shaped through peer research, usability testing, and repeated interface studies. The final loop connects reminders, check-ins, progress, and reward.',
    tags: ['Research', 'Interaction design', 'Figma prototype'],
    image: h2goImage,
    process: h2goProcess,
    alt: 'H2Go final interface and mobile hydration dashboard.',
    processAlt: 'Earlier H2Go interface exploration.',
    href: '/index.html#/projects/h2go',
    color: '#92ff56',
  },
  {
    number: '02',
    title: 'Campus / Transit',
    type: 'Information / Mobility',
    year: '2025',
    lead: 'Turning bus uncertainty into a few fast, confident rider decisions.',
    detail:
      'A campus navigation concept that reorganizes live route information around what a rider needs now: arrival, delay, capacity, and next stop.',
    tags: ['Usability testing', 'Systems thinking', 'Mobile UI'],
    image: transitImage,
    process: transitProcess,
    alt: 'Campus Transit route navigation and mobile interface.',
    processAlt: 'Campus Transit usability testing findings.',
    href: '/index.html#/projects/campus-transit',
    color: '#b9a6ff',
  },
];

const labModes = {
  stretch: ['MAKE', 'THE', 'INTERFACE', 'ANSWER'],
  slice: ['QUESTION', 'BUILD', 'OBSERVE', 'REVISE'],
  echo: ['INPUT', 'OUTPUT', 'INPUT', 'BETTER OUTPUT'],
};

function useScrollProgress() {
  useEffect(() => {
    const update = () => {
      const maximum = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maximum > 0 ? window.scrollY / maximum : 0;
      document.documentElement.style.setProperty('--scroll-progress', progress);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);
}

function useReveals() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = [...document.querySelectorAll('[data-b-reveal]')];
    if (reduced) {
      elements.forEach((element) => element.classList.add('b-visible'));
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('b-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -7%' },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function FolioRail() {
  return (
    <aside className="b-folio" aria-label="Portfolio folio">
      <a className="b-folio-mark" href="#top" aria-label="Back to top">OS</a>
      <span className="b-folio-title">Working index · Vol. 02</span>
      <span className="b-progress-track" aria-hidden="true"><i /></span>
      <a className="b-folio-switch" href="/index.html" aria-label="View original portfolio">A↗</a>
    </aside>
  );
}

function Hero() {
  const fieldRef = useRef(null);

  const moveField = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--mx', `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty('--my', `${event.clientY - bounds.top}px`);
  };

  return (
    <header className="b-hero" id="top" onPointerMove={moveField} ref={fieldRef}>
      <nav className="b-nav" aria-label="Concept B navigation">
        <p><span>Owyn Smith</span><span>HCI / design / code</span></p>
        <div>
          <a href="#index">Index</a>
          <a href="#method">Method</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <div className="b-hero-code" aria-hidden="true">OS—B / 39.1653° N<br />86.5264° W / 2026</div>
      <div className="b-hero-title-wrap">
        <p className="b-edition">Portfolio / alternative edition</p>
        <h1>
          <span>OWYN</span>
          <span className="b-title-shift">SMITH<i>.</i></span>
        </h1>
      </div>
      <p className="b-hero-role">Designer <i>&amp;</i> technical builder</p>
      <div className="b-hero-statement">
        <p>I work where an idea becomes an interface—</p>
        <p className="b-serif">researching the friction, shaping the behavior, and building the thing.</p>
      </div>
      <a className="b-scroll-cue" href="#index">
        <span>Enter the index</span><i aria-hidden="true">↓</i>
      </a>
      <div className="b-pointer-field" aria-hidden="true"><span /></div>
    </header>
  );
}

function ProjectChapter({ project, reverse }) {
  const [view, setView] = useState('final');
  const visibleImage = view === 'final' ? project.image : project.process;
  const visibleAlt = view === 'final' ? project.alt : project.processAlt;

  return (
    <article className={`b-project ${reverse ? 'b-project-reverse' : ''}`} style={{ '--project-color': project.color }}>
      <div className="b-project-index" data-b-reveal>
        <span>{project.number}</span>
        <span>{project.type}</span>
        <span>{project.year}</span>
      </div>
      <div className="b-project-copy" data-b-reveal>
        <h3>{project.title.split(' / ').map((part, index) => <span key={part} className={index ? 'b-serif' : ''}>{part}</span>)}</h3>
        <p className="b-project-lead">{project.lead}</p>
        <p className="b-project-detail">{project.detail}</p>
        <ul>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
        <a className="b-text-link" href={project.href}>Read the full case <span>↗</span></a>
      </div>
      <div className="b-project-visual" data-b-reveal>
        <div className="b-view-switch" role="group" aria-label={`Change ${project.title} image`}>
          <button className={view === 'final' ? 'is-active' : ''} onClick={() => setView('final')} type="button">Outcome</button>
          <button className={view === 'process' ? 'is-active' : ''} onClick={() => setView('process')} type="button">Process</button>
        </div>
        <div className="b-image-frame">
          <img src={visibleImage} alt={visibleAlt} loading="lazy" decoding="async" key={visibleImage} />
          <span className="b-image-corner">{project.number} / {view}</span>
        </div>
      </div>
    </article>
  );
}

function Lab() {
  const [mode, setMode] = useState('stretch');
  const words = labModes[mode];

  return (
    <section className={`b-lab b-lab-${mode}`} aria-labelledby="lab-title">
      <div className="b-lab-head" data-b-reveal>
        <span>03 / Active study</span>
        <h2 id="lab-title">The interface<br /><i>is a question.</i></h2>
        <p>A small type instrument about iteration. Change the rule; change the reading.</p>
      </div>
      <div className="b-lab-instrument" data-b-reveal>
        <div className="b-lab-controls" role="group" aria-label="Typography experiment mode">
          {Object.keys(labModes).map((option) => (
            <button
              className={mode === option ? 'is-active' : ''}
              key={option}
              onClick={() => setMode(option)}
              type="button"
              aria-pressed={mode === option}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="b-type-stage" aria-live="polite">
          {words.map((word, index) => <span key={`${mode}-${word}-${index}`} style={{ '--word-index': index }}>{word}</span>)}
        </div>
        <p className="b-instrument-note">A browser-native sketch / React + CSS / responsive type</p>
      </div>
    </section>
  );
}

function Method() {
  const steps = [
    ['01', 'Notice', 'Find the moment where a system stops feeling obvious.'],
    ['02', 'Frame', 'Turn a broad problem into a precise interaction question.'],
    ['03', 'Make', 'Prototype early—in pixels, flows, or working code.'],
    ['04', 'Listen', 'Use evidence to keep the useful parts and revise the rest.'],
  ];

  return (
    <section className="b-method" id="method" aria-labelledby="method-title">
      <div className="b-method-intro" data-b-reveal>
        <p>Position / practice</p>
        <h2 id="method-title">I like the space<br />between <i>why</i> and <i>how.</i></h2>
        <p className="b-method-copy">I’m an Informatics student and HCI minor at Indiana University Bloomington. My practice moves between user research, interaction design, prototyping, and front-end development—with an interest in systems that remain human when they become technical.</p>
      </div>
      <ol className="b-method-list">
        {steps.map(([number, title, copy]) => (
          <li key={number} data-b-reveal>
            <span>{number}</span><h3>{title}</h3><p>{copy}</p>
          </li>
        ))}
      </ol>
      <div className="b-capabilities" data-b-reveal>
        <p>Current toolkit</p>
        <p>Figma · HTML/CSS · JavaScript · React · Python · SQL · Adobe CC</p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer className="b-contact" id="contact">
      <div className="b-contact-kicker" data-b-reveal>
        <span>Available for internships, collaborations, and good questions.</span>
        <span>Bloomington, Indiana / ET</span>
      </div>
      <a className="b-mail" href="mailto:owynvsmith@yahoo.com" data-b-reveal>
        <span>LET’S</span><span className="b-serif">make something</span><span>USEFUL ↗</span>
      </a>
      <div className="b-contact-links">
        <a href="https://linkedin.com/in/owyn-smith" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a href={resumeUrl} target="_blank" rel="noreferrer">Résumé ↗</a>
        <a href="/index.html">View Portfolio A ↗</a>
        <span>Designed + built by Owyn Smith / 2026</span>
      </div>
    </footer>
  );
}

function PortfolioB() {
  useScrollProgress();
  useReveals();

  return (
    <>
      <a className="b-skip" href="#main">Skip to work</a>
      <FolioRail />
      <div className="b-page">
        <Hero />
        <main id="main">
          <section className="b-index" id="index" aria-labelledby="index-title">
            <div className="b-index-heading" data-b-reveal>
              <span>Selected work / 2025—present</span>
              <h2 id="index-title">An index of<br /><i>useful experiments.</i></h2>
              <p>Two shipped case studies, one live browser study, and the thinking in between.</p>
            </div>
            {projects.map((project, index) => <ProjectChapter project={project} reverse={index % 2 === 1} key={project.title} />)}
          </section>
          <Lab />
          <Method />
        </main>
        <Contact />
      </div>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode><PortfolioB /></React.StrictMode>,
);
