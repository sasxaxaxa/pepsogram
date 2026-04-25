import {Link} from "react-router-dom";

const headerLinks = [
  {
    href: '/home',
    iconName: 'home',
    ariaLabel: 'Главная'
  },
  {
    href: '/gallery',
    iconName: 'gallery',
    ariaLabel: 'Галерея'
  },
  {
    href: '/favourites',
    iconName: 'like',
    ariaLabel: 'Понравившееся'
  },
  {
    href: '/community',
    iconName: 'community',
    ariaLabel: 'Сообщество'
  },
  {
    href: '/user',
    iconName: 'palette',
    ariaLabel: 'Смена темы'
  }
]

const Header = () => {
  return (
    <header className="header">
      <div className="container header__inner">
        <nav className="nav-pill">
          <ul className="nav-list">
            {headerLinks.map(({ href, iconName, ariaLabel }, index) => (
              <li key={index}>
                <Link to={href}>
                  <svg width="36" height="36" className="header__icon" role="img" aria-label={`${ariaLabel}`}>
                    <use href={`/src/assets/icons/sprite.svg#icon-${iconName}`}></use>
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;