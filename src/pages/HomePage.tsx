import Button from "../components/ui/Button.tsx";

const HomePage = () => {
  return (
    <>
      <div className="page container home-page">
        <div className="home-page__wrapper">
          <h1 className="visually-hidden">Главная</h1>
          <section className="hero">
            <div className="hero__wrapper">
              <div className="hero__block hero__block--info">
                <p className="h1">Господи, храни Пэпса.</p>
                <span>© Дима</span>
                <p>
                  <strong>10 ноября 2025 года</strong>
                  появился на свет удивительный серый кот с висячими ушами.<br/>Никто не знает его породу.<br/>
                  Зато все знают: <strong>без Пэпса этот мир был бы скучнее.</strong><br/>
                  Сейчас он живёт в Москве и ждёт, чтобы вы узнали его лучше.
                  </p>
              </div>
              <div className="hero__block hero__block--info">

              </div>

            </div>
          </section>

        </div>
      </div>
    </>
  )
}

export default HomePage;