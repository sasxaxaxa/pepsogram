import Button from "../ui/Button.tsx";

const headerLinks = [
  {
    href: '/home',
    iconName: 'home',
    ariaLabel: 'Главная',
  },
  {
    href: '/gallery',
    iconName: 'gallery',
    ariaLabel: 'Галерея',
  },
  {
    href: '/favourites',
    iconName: 'like',
    ariaLabel: 'Понравившееся',
  },
  {
    href: '/community',
    iconName: 'community',
    ariaLabel: 'Сообщество',
  },
  {
    href: '/test',
    iconName: 'palette',
    ariaLabel: 'Смена темы',
  }
]

const Header = () => {
  return (
    <header className="header">
      <div className="container header__inner">
        <nav className="nav-pill">
          <ul className="nav-list">
            {headerLinks.map(({href, iconName, ariaLabel}, index) => (
              <li key={index}>
                <Button
                  href={href}
                  iconName={iconName}
                  ariaLabel={ariaLabel}
                  label=''
                  mode="transparent"
                  location="header"
                  iconSize={36}
                  iconPosition="before"
                />
              </li>
            ))}
            <li className="theme">
              <div className="theme-pill">
                <button className="btn-color" data-color="yellow" aria-label="Желтая тема"></button>
                <button className="btn-color" data-color="green" aria-label="Зеленая тема"></button>
                <button className="btn-color" data-color="red" aria-label="Красная тема"></button>
                <button className="btn-color" data-color="purple" aria-label="Фиолетовая тема"></button>
                <button className="btn-color" data-color="orange" aria-label="Оранжевая тема"></button>
              </div>
            </li>
          </ul>
        </nav>
        <Button
          href='profile'
          iconName='user'
          ariaLabel='Профиль'
          label=''
          mode="primary"
          location="header--alt"
          iconSize={31}
          iconPosition="before"
        />
      </div>
    </header>
  )
}

export default Header;