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
                                <div className="hero__block-top">
                                <p className="hero__title">Господи, храни Пэпса.</p>
                                <span className="hero__author">© Дима</span>
                                </div>
                                <p className="hero__description">
                                    <strong>10 ноября 2025 года </strong>
                                    появился на свет удивительный серый кот с висячими ушами.<br/>Никто не знает его породу.<br/>
                                    Зато все знают: <strong>без Пэпса этот мир был бы скучнее.</strong><br/>
                                    Сейчас он живёт в Москве и ждёт, чтобы вы узнали его лучше.
                                </p>
                                <div className="hero__counter">
                                    <span className="hero__counter-label">Сегодня Пэпсу уже</span>
                                    <span className="hero__counter-number hero__counter-number-1">5</span>
                                    <span className="hero__counter-unit">месяцев</span>
                                    <span className="hero__counter-number hero__counter-number-2">25</span>
                                    <span className="hero__counter-unit">дней</span>
                                </div>
                            </div>
                            <div className="hero__block hero__block--media">
                                <div className="hero__row">
                                    <Button
                                        iconName="next-big"
                                        mode="white"
                                        iconSize="3.5rem"
                                        className="hero__button--prev"
                                        location="hero-slider"
                                    />
                                    <img src="/media-temp/img/pepsik.jpg" alt="Пэпс" className="hero__image"/>
                                    <Button
                                        iconName="next-big"
                                        mode="white"
                                        iconSize="3.5rem"
                                        className="hero__button--next"
                                        location="hero-slider"
                                    />
                                </div>
                                <Button
                                    mode="primary"
                                    className="hero__button--view-all"
                                    label="Смотреть всех пепсиков"
                                    location="show-more"
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default HomePage;