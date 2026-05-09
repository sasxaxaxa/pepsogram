import Button from "../components/ui/Button.tsx";
import Logo from "../components/ui/Logo.tsx";

const RegistrationPage = () => {
    return (
        <>
            <div className="page container home-page">
                <div className="home-page__wrapper">
                    <h1 className="visually-hidden">Регистрация</h1>
                    <section className="registration-form">
                        <div className="registration-form__showcase">
                            <div className="registration-form__showcase-content">
                                <Logo/>
                            </div>
                            <h2 className="registration-form__showcase-title">Добро пожаловать<br/>в Пэпсограм</h2>
                            <h3 className="registration-form__showcase-subtitle">Создайте аккаунт, чтобы добавлять
                                фотографии и сохранять лучшие</h3>
                        </div>
                        <div className="registration-form__panel">
                            <div className="registration-form__panel-switcher">
                                <Button
                                    mode="white"
                                    className="registration-form__button-login"
                                    label="Вход"
                                />
                                <Button
                                    mode="primary"
                                    className="registration-form__button-registration"
                                    label="Регистрация"
                                />
                            </div>
                            <h3 className="registration-form__panel-title">Создайте аккаунт</h3>
                            <form className="registration-form__panel-form">
                                <label className="registration-form__field">
                                    <svg className="registration-form__icon">
                                        <use href="/media-temp/icons/sprite.svg#icon-smile"/>
                                    </svg>
                                    <input
                                        name="name"
                                        className="registration-form__input"
                                        type="text"
                                        placeholder="Имя"
                                    />
                                </label>
                                <label className="registration-form__field">
                                    <svg className="registration-form__icon">
                                        <use href="/media-temp/icons/sprite.svg#icon-email"/>
                                    </svg>
                                    <input
                                        name="email"
                                        className="registration-form__input"
                                        type="email"
                                        placeholder="Почта"
                                    />
                                </label>
                                <div className="registration-form__field">
                                    <svg className="registration-form__icon">
                                        <use href="/media-temp/icons/sprite.svg#icon-padlock"/>
                                    </svg>
                                    <input
                                        name="password"
                                        className="registration-form__input"
                                        type="password"
                                        placeholder="Пароль"
                                    />
                                    <Button
                                        iconName="hide"
                                        iconSize="2.4rem"
                                        iconPosition="after"
                                        mode="transparent"
                                        className="registration-form__visibility-toggle-button"
                                    />
                                </div>
                                <div className="registration-form__field">
                                    <svg className="registration-form__icon">
                                        <use href="/media-temp/icons/sprite.svg#icon-padlock"/>
                                    </svg>
                                    <input
                                        name="repeatPassword"
                                        className="registration-form__input"
                                        type="password"
                                        placeholder="Повторите пароль"
                                    />
                                    <Button
                                        iconName="hide"
                                        iconSize="2.4rem"
                                        iconPosition="after"
                                        mode="transparent"
                                        className="registration-form__visibility-toggle-button"
                                    />
                                </div>
                            </form>
                            <div className="registration-form__checkbox">
                                <label className="registration-form__checkbox-label">
                                    <input type="checkbox"
                                        className="registration-form__checkbox-input"
                                    />
                                    <span className="registration-form__checkbox-box">
                                    <svg width="1.8rem" height="1.8rem" fill="currentColor">
                                        <use href="/media-temp/icons/sprite.svg#icon-check"></use>
                                    </svg>
                                    </span>
                                    <span className="registration-form__checkbox-text">
                                        Я согласен с <strong>условиями использования</strong> и <strong>политикой конфиденциальности</strong>
                                    </span>
                                </label>
                            </div>
                            <Button
                                mode="primary"
                                className="registration-form__submit-button"
                                label="Зарегистрироваться"
                            />
                            <div className="registration-form__divider">
                                <span className="registration-form__divider-line"></span>
                                <span className="registration-form__divider-text">или продолжить с</span>
                                <span className="registration-form__divider-line"></span>
                            </div>
                            <div className="registration-form__social-buttons">
                                <Button
                                    iconName="google"
                                    iconSize="2.4rem"
                                    iconPosition="before"
                                    mode="white"
                                    className="registration-form__social-button"
                                    label="Google"
                                />
                                <Button
                                    iconName="telegram"
                                    iconSize="2.4rem"
                                    iconPosition="before"
                                    mode="white"
                                    className="registration-form__social-button"
                                    label="Telegram"
                                />
                            </div>
                            <div className="registration-form__redirect">
                                <span>Уже есть аккаунт?</span>
                                <Button
                                    mode="transparent"
                                    className="registration-form__redirect-button"
                                    label="Войти"
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default RegistrationPage;