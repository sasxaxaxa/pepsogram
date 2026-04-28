import Button from "../components/ui/Button.tsx";

const GalleryPage = () => {
  return (
    <>
      <div className="page container home-page">
        <div className="home-page__wrapper">
          <h1 className="visually-hidden">Галерея</h1>
          <div className="card">
            <div className="card__inner">
              <img src="src/assets/img/pepsik.jpg" alt="Пэпс" className="card__image" />

              <div className="card__content">
                <h3 className="card__title">Пэпсик на стуле</h3>
                <div className="card__bottom">
                  <span className="card__date">26.04.2026</span>
                  <Button
                    iconName="import"
                    ariaLabel="Скачать"
                    mode="transparent"
                    iconSize={28}
                    className="button--card"
                  />
                </div>
              </div>
            </div>
          </div>
            <div className="card-stack">
                <div className="stacked-card stacked-card--left">
                    <div className="stacked-card__inner">
                        <img src="src/assets/img/pepsik.jpg" alt="Пэпсик на стуле" className="stacked-card__image" />
                    </div>
                </div>
                <div className="stacked-card stacked-card--center">
                    <div className="stacked-card__inner">
                        <img src="src/assets/img/pepsik.jpg" alt="Пэпсик на стуле" className="stacked-card__image" />
                    </div>
                </div>
                <div className="stacked-card stacked-card--right">
                    <div className="stacked-card__inner">
                        <img src="src/assets/img/pepsik.jpg" alt="Пэпсик на стуле" className="stacked-card__image" />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default GalleryPage;