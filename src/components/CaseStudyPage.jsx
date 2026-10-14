export default function CaseStudyPage({ project }) {
  return (
    <main
      className={`case-study case-study-${project.slug}`}
      style={{
        '--project-accent': project.accent,
        '--project-accent-soft': project.accentSoft,
      }}
    >
      <section className="case-hero">
        <div className="section-shell case-hero-grid">
          <div className="case-hero-copy">
            <a className="case-back-link" href="#projects">
              Back to selected work
            </a>
            <p className="case-kicker">UX/UI case study</p>
            <h1>{project.title}</h1>
            <p className="case-subtitle">{project.subtitle}</p>
          </div>
          <dl className="case-meta">
            <div>
              <dt>Year</dt>
              <dd>{project.year}</dd>
            </div>
            <div>
              <dt>Context</dt>
              <dd>{project.context}</dd>
            </div>
            <div>
              <dt>Role</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>{project.discipline}</dd>
            </div>
            <div>
              <dt>Team</dt>
              <dd>{project.team}</dd>
            </div>
          </dl>
          <figure className="case-hero-media">
            <div className="case-hero-screen-crop">
              <img src={project.heroImage} alt={project.heroAlt} decoding="async" fetchPriority="high" />
            </div>
          </figure>
        </div>
      </section>

      <section className="case-intro section-shell" aria-labelledby="case-intro-heading" data-reveal>
        <div>
          <p className="case-section-label">Overview</p>
          <h2 id="case-intro-heading">{project.challenge.title}</h2>
        </div>
        <div className="case-intro-copy">
          <p className="case-lede">{project.introduction}</p>
          <p>{project.challenge.copy}</p>
        </div>
      </section>

      <section className="case-signals" aria-label={`${project.title} project priorities`} data-reveal>
        <div className="section-shell signal-grid">
          {project.signals.map((signal) => (
            <div key={signal.label}>
              <p>{signal.label}</p>
              <strong>{signal.value}</strong>
            </div>
          ))}
        </div>
      </section>

      <nav className="case-toc section-shell" aria-label={`${project.title} case study chapters`} data-reveal>
        <p>Jump to</p>
        <div>
          {project.chapters.map((chapter) => (
            <button
              type="button"
              key={chapter.number}
              onClick={() => {
                const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches
                  ? 'auto'
                  : 'smooth';
                document
                  .getElementById(`${project.slug}-chapter-${chapter.number}`)
                  ?.scrollIntoView({ behavior });
              }}
            >
              <span>{chapter.number}</span>
              {chapter.eyebrow}
            </button>
          ))}
        </div>
      </nav>

      <div className="case-chapters">
        {project.chapters.map((chapter, index) => (
          <section
            className={`case-chapter ${index % 2 === 1 ? 'case-chapter-reverse' : ''}`}
            id={`${project.slug}-chapter-${chapter.number}`}
            key={chapter.number}
            data-reveal
          >
            <div className="section-shell case-chapter-grid">
              <figure className="case-chapter-media">
                <img src={chapter.image} alt={chapter.imageAlt} loading="lazy" decoding="async" />
                <figcaption>{chapter.number} / {chapter.eyebrow}</figcaption>
              </figure>
              <div className="case-chapter-copy">
                <p className="case-section-label">{chapter.number} / {chapter.eyebrow}</p>
                <h2>{chapter.title}</h2>
                <p>{chapter.copy}</p>
                <ul>
                  {chapter.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>

      {project.prototype && (
        <section className="case-prototype">
          <div className="section-shell">
            <div className="case-prototype-heading">
              <div>
                <p className="case-section-label">Interactive prototype</p>
                <h2>Try the {project.title} flow.</h2>
              </div>
              <a
                className="case-text-link"
                href={project.prototype.url}
                target="_blank"
                rel="noreferrer"
              >
                View full prototype
              </a>
            </div>
            <div className="prototype-frame">
              <iframe
                src={project.prototype.embedUrl}
                title={project.prototype.title}
                loading="lazy"
                allow="fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      )}

      <section className="case-close">
        <div className="section-shell case-close-grid">
          <div>
            <p className="case-section-label">Outcome</p>
            <h2>What the project resolved.</h2>
            <p>{project.outcome}</p>
          </div>
          <div>
            <p className="case-section-label">Reflection</p>
            <h2>What I carried forward.</h2>
            <p>{project.reflection}</p>
          </div>
        </div>
      </section>

      <nav className="case-next section-shell" aria-label="Project navigation">
        <a href="#projects">All projects</a>
        <a href={`#/projects/${project.next.slug}`}>
          Next: {project.next.title}
        </a>
      </nav>
    </main>
  );
}
