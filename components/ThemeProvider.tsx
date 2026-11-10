"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
export type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
  isTransitioning: boolean;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [transitionDirection, setTransitionDirection] = useState<Theme | null>(null);
  const transitionTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isTransitioning = transitionDirection !== null;

  useEffect(() => {
    const root = document.documentElement;
    const getTheme = () => (root.dataset.theme === "dark" ? "dark" : "light");
    const storedTheme = localStorage.getItem("sparelab-theme");
    setTheme(getTheme());

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const syncSystemTheme = (event: MediaQueryListEvent) => {
      if (localStorage.getItem("sparelab-theme")) return;
      const nextTheme = event.matches ? "dark" : "light";
      root.dataset.theme = nextTheme;
      setTheme(nextTheme);
    };

    if (!storedTheme) mediaQuery.addEventListener("change", syncSystemTheme);
    return () => {
      mediaQuery.removeEventListener("change", syncSystemTheme);
      if (transitionTimer.current) clearTimeout(transitionTimer.current);
    };
  }, []);

  const toggleTheme = useCallback(() => {
    if (transitionTimer.current) return;
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (!reducedMotion) {
        setTransitionDirection(nextTheme);
        transitionTimer.current = setTimeout(() => {
          setTransitionDirection(null);
          transitionTimer.current = null;
        }, 1900);
      }
      document.documentElement.dataset.theme = nextTheme;
      localStorage.setItem("sparelab-theme", nextTheme);
      return nextTheme;
    });
  }, []);

  const value = useMemo(
    () => ({ theme, toggleTheme, isTransitioning }),
    [theme, toggleTheme, isTransitioning],
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
      {transitionDirection && (
        <div
          className={`theme-drive theme-drive--${transitionDirection}`}
          role="presentation"
          aria-hidden="true"
        >
          <div className="theme-drive-scene">
            <svg className="theme-drive-car" viewBox="0 0 240 116" fill="none">
              <path
                className="theme-car-shadow"
                d="M25 79.5h190v9.2c0 3-2.4 5.3-5.3 5.3H31c-3.3 0-6-2.7-6-6v-8.5Z"
              />
              <path
                className="theme-car-body"
                d="m27 76 8.4-21.1c2.4-6.1 7.8-10.5 14.2-11.7l23-4.3 27-26.1A24 24 0 0 1 116.3 6h51.5c8.2 0 15.7 4.4 19.7 11.6l18.2 32.6 14 8.8c4.5 2.8 7.3 7.7 7.3 13v13.5c0 4.4-3.6 8-8 8H22.8a9.8 9.8 0 0 1-9.8-9.8v-1.6c0-3.6 2.6-6.7 6.1-7.4L27 76Z"
              />
              <path
                className="theme-car-window"
                d="m83.2 39.9 21.4-20.6a17 17 0 0 1 11.8-4.8h47.4c5.8 0 11.2 3.1 14.1 8.2l15.3 27.4H67.1l6.2-4.7a47 47 0 0 1 9.9-5.5Z"
              />
              <path className="theme-car-detail" d="M108 16v34.1m77.9 0H63.3M33 62.5h14m153.7 0h10" />
              <path className="theme-car-highlight" d="m24 75 13.5-2.8m186.8 2.8-10.4-4.6" />
              <circle className="theme-car-wheel" cx="65" cy="83" r="17" />
              <circle className="theme-car-wheel-inner" cx="65" cy="83" r="7" />
              <circle className="theme-car-wheel" cx="185" cy="83" r="17" />
              <circle className="theme-car-wheel-inner" cx="185" cy="83" r="7" />
            </svg>
            <span className="theme-drive-panel">
              <span className="theme-drive-indicator" />
              <span>
                <strong>{transitionDirection === "dark" ? "Night mode engaged" : "Day mode engaged"}</strong>
                <small>SpareLab · {transitionDirection === "dark" ? "After-hours drive" : "Morning drive"}</small>
              </span>
            </span>
          </div>
        </div>
      )}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}
