import { Fragment } from 'react';

const heroWords = ['Owyn', 'Smith'];

export default function Hero() {
  let letterIndex = 0;

  return (
    <section className="hero section-shell" id="top" aria-labelledby="hero-title">
      <div className="ripple-field" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="hero-content">
        <div className="hero-meta" aria-label="Portfolio metadata">
          <span>OVJS / Portfolio / 2026</span>
          <span>Informatics / HCI / Indiana University</span>
        </div>
        <h1 id="hero-title" className="hero-title" aria-label="Owyn Smith">
          {heroWords.map((word, wordIndex) => (
            <Fragment key={word}>
              <span className="hero-word">
                {word.split('').map((letter) => {
                  const delay = letterIndex * 42;
                  letterIndex += 1;

                  return (
                    <span
                      className="hero-letter"
                      key={`${word}-${letter}-${letterIndex}`}
                      style={{ '--letter-delay': `${delay}ms` }}
                    >
                      {letter}
                    </span>
                  );
                })}
              </span>
              {wordIndex < heroWords.length - 1 ? ' ' : null}
            </Fragment>
          ))}
        </h1>
        <div className="hero-statement">
          <p>Informatics major</p>
          <p>Human-Computer Interaction minor</p>
        </div>
        <p className="hero-subtitle">
          I design usable interfaces, prototype interactions, and build the
          front-end systems behind them.
        </p>
        <div className="hero-buttons" aria-label="Hero links">
          <a className="button button-primary" href="#projects">
            View Projects
          </a>
          <a className="button button-secondary" href="#about">
            About Me
          </a>
        </div>
      </div>
    </section>
  );
}
