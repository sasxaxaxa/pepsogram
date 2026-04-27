import Button from "../components/ui/Button";
const HomePage = () => {
  return (
    <>
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
    </>
  )
}

export default HomePage;