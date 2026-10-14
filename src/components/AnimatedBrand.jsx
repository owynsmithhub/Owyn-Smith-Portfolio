import { useEffect, useState } from 'react';

const nameParts = [
  { initial: 'O', suffix: 'wyn' },
  { initial: 'V', suffix: 'ernius' },
  { initial: 'J', suffix: 'ohnson' },
  { initial: 'S', suffix: 'mith' },
];

const suffixLength = nameParts.reduce((total, part) => total + part.suffix.length, 0);

function getInitialTopState() {
  return typeof window === 'undefined' || window.scrollY <= 1;
}

function getInitialMotionPreference() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

export default function AnimatedBrand() {
  const [isAtTop, setIsAtTop] = useState(getInitialTopState);
  const [reduceMotion, setReduceMotion] = useState(getInitialMotionPreference);
  const [visibleSuffixes, setVisibleSuffixes] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (event) => setReduceMotion(event.matches);

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    let animationFrame = null;

    const syncScrollState = () => {
      animationFrame = null;
      const scrollPosition = window.scrollY;

      setIsAtTop((current) => {
        if (scrollPosition <= 1) return true;
        if (scrollPosition > 16) return false;
        return current;
      });
    };

    const handleScroll = () => {
      if (animationFrame === null) {
        animationFrame = window.requestAnimationFrame(syncScrollState);
      }
    };

    syncScrollState();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrame !== null) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  useEffect(() => {
    const target = isAtTop ? suffixLength : 0;

    if (reduceMotion) {
      setVisibleSuffixes(target);
      return undefined;
    }

    let intervalId;
    let delayId;
    const stepDuration = isAtTop ? 42 : 18;

    const startAnimation = () => {
      intervalId = window.setInterval(() => {
        setVisibleSuffixes((current) => {
          if (current === target) {
            window.clearInterval(intervalId);
            return current;
          }

          const next = current + (target > current ? 1 : -1);
          if (next === target) window.clearInterval(intervalId);
          return next;
        });
      }, stepDuration);
    };

    if (isAtTop) {
      delayId = window.setTimeout(startAnimation, 180);
    } else {
      startAnimation();
    }

    return () => {
      window.clearTimeout(delayId);
      window.clearInterval(intervalId);
    };
  }, [isAtTop, reduceMotion]);

  let remainingCharacters = visibleSuffixes;

  return (
    <a
      className="brand-mark nav-brand"
      href="#top"
      aria-label="Owyn Vernius Johnson Smith home"
    >
      <span
        className={`nav-brand-name ${visibleSuffixes > 0 ? 'is-expanding' : ''}`}
        aria-hidden="true"
      >
        {nameParts.map((part) => {
          const visibleCharacters = Math.max(
            0,
            Math.min(part.suffix.length, remainingCharacters),
          );
          remainingCharacters -= part.suffix.length;

          return (
            <span className="nav-brand-word" key={part.initial}>
              <span>{part.initial}</span>
              <span>{part.suffix.slice(0, visibleCharacters)}</span>
            </span>
          );
        })}
      </span>
    </a>
  );
}
