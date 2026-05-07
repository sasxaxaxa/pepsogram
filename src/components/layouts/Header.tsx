// components/layout/Header.tsx
import { useState } from 'react';
import Button from "../ui/Button.tsx";
import ThemeSwitcher from "../ui/ThemeSwitcher.tsx";
import Logo from "../ui/Logo.tsx";

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
  }
]

const Header = () => {
  const [isThemeSwitcherVisible, setIsThemeSwitcherVisible] = useState(false);

  const toggleThemeSwitcher = () => {
    setIsThemeSwitcherVisible(!isThemeSwitcherVisible);
  };

  return (
    <header className="header">
      <div className="container header__inner">
        <Logo />


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
            <li>
              <Button
                iconName='palette'
                ariaLabel='Смена темы'
                label=''
                mode="transparent"
                location="header"
                iconSize={36}
                iconPosition="before"
                onClick={toggleThemeSwitcher}
              />
            </li>
            <li className={`theme-switcher-item ${isThemeSwitcherVisible ? 'visible' : ''}`}>
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