import Button from "./Button.tsx";

const themeButtons = [
  {
    className: 'theme-color',
    mode: 'yellow',
    ariaLabel: 'Желтая тема',
  },
  {
    className: 'theme-color',
    mode: 'green',
    ariaLabel: 'Зеленая тема',
  },
  {
    className: 'theme-color',
    mode: 'red',
    ariaLabel: 'Красная тема',
  },
  {
    className: 'theme-color',
    mode: 'purple',
    ariaLabel: 'Фиолетовая тема',
  },
  {
    className: 'theme-color',
    mode: 'orange',
    ariaLabel: 'Оранжевая тема',
  }
]

const ThemeSwitcher = () => {
  return (
    <>
      <ul className="theme-pill">
        {themeButtons.map(({className, mode, ariaLabel}, index) => (
          <li key={index}>
            <Button
              className={className}
              mode={mode}
              ariaLabel={ariaLabel}
            />
          </li>
        ))}
      </ul>
    </>
  )
}

export default ThemeSwitcher;