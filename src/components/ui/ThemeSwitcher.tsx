import Button from "./Button.tsx";
import {useTheme} from "../../contexts/themeContext.ts";

const themeButtons = [
  {
    className: 'theme-color',
    mode: 'yellow' as const,
    ariaLabel: 'Желтая тема',
  },
  {
    className: 'theme-color',
    mode: 'green' as const,
    ariaLabel: 'Зеленая тема',
  },
  {
    className: 'theme-color',
    mode: 'red' as const,
    ariaLabel: 'Красная тема',
  },
  {
    className: 'theme-color',
    mode: 'purple' as const,
    ariaLabel: 'Фиолетовая тема',
  },
  {
    className: 'theme-color',
    mode: 'orange' as const,
    ariaLabel: 'Оранжевая тема',
  }
]

const ThemeSwitcher = () => {
  const context = useTheme();

  if (!context) {
    throw new Error('ThemeSwitcher must be used within ThemeProvider');
  }
  const { theme: currentTheme, setTheme } = context;

  return (
    <ul className="theme-pill">
      {themeButtons.map(({className, mode, ariaLabel}, index) => (
        <li key={index}>
          <Button
            className={`${className} ${currentTheme === mode ? 'active' : ''}`}
            mode={mode}
            iconSize="2.8rem"
            ariaLabel={ariaLabel}
            iconName={currentTheme === mode ? 'check' : undefined}
            onClick={() => setTheme(mode)}
          />
        </li>
      ))}
    </ul>
  )
}

export default ThemeSwitcher;