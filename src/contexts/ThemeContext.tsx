import {createContext, type FC, type ReactNode, useContext, useEffect, useState} from "react";

type Theme = 'yellow' | 'green' | 'red' | 'purple' | 'orange';

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  return useContext(ThemeContext);
}

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
    document.documentElement.style.setProperty('--color-main', `var(--color-${theme}`);
  }, [theme]);

  return (
    <ThemeContext.Provider value = {{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
};