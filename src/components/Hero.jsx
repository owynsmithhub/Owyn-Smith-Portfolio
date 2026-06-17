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
        <p className="eyebrow">Web / Design / Creative Coding</p>
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
        <p className="hero-subtitle">
          I build interactive web experiences with a focus on motion, atmosphere,
          and visual storytelling.
        </p>
        <div className="hero-buttons" aria-label="Hero links">
          <a className="button button-primary" href="#projects">
            View Projects
          </a>
          <a className="button button-secondary" href="#lab">
            Explore Lab
          </a>
        </div>
      </div>
    </section>
  );
}
