import { useEffect, useState } from 'react';

const storageKey = 'ovjs-theme';

function getInitialTheme() {
  if (typeof window === 'undefined') {
    return 'light';
  }

  return window.localStorage.getItem(storageKey) || 'light';
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme);
  const isDark = theme === 'dark';

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(storageKey, theme);
  }, [theme]);

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      aria-pressed={isDark}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      <span className="toggle-track" aria-hidden="true">
        <span className="toggle-thumb" />
      </span>
    </button>
  );
}
