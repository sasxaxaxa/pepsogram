import { type FC, type ReactNode, useEffect, useState } from "react";
import type { Theme } from "./types";
import { ThemeContext } from "./themeContext";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const localTheme = localStorage.getItem('theme') as Theme;
    return localTheme || 'red';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.style.setProperty('--color-main', `var(--color-${theme})`);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};