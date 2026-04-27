import Button from "../ui/Button.tsx";
import ThemeSwitcher from "../ui/ThemeSwitcher.tsx";

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
    iconName: 'palette',
    ariaLabel: 'Смена темы',
  }
]

const Header = () => {
  return (
    <header className="header">
      <div className="container header__inner">
        <nav className="header__navigation">
          <ul className="header__navigation-list">
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
              <ThemeSwitcher />
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