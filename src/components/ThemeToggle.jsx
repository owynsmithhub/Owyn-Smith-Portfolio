import { useEffect, useState } from 'react';

const storageKey = 'ovjs-theme';

function getInitialTheme() {
  if (typeof window === 'undefined') {
    return 'light';
  }

  try {
    return window.localStorage.getItem(storageKey) || 'light';
  } catch {
    return 'light';
  }
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme);
  const isDark = theme === 'dark';

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      window.localStorage.setItem(storageKey, theme);
    } catch {
      // The theme still works when storage is unavailable.
    }
    const themeColor = document.querySelector('meta[name="theme-color"]');
    themeColor?.setAttribute('content', isDark ? '#0B1118' : '#F4EFE6');
  }, [isDark, theme]);

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      aria-pressed={isDark}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      <svg
        className="theme-icon theme-icon-moon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
      </svg>
      <svg
        className="theme-icon theme-icon-sun"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.35 17.66l-1.42 1.41M19.07 4.93l-1.41 1.42" />
      </svg>
    </button>
  );
}
