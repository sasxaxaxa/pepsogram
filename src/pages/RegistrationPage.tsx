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
                            <p className="registration-form__showcase-subtitle">Создайте аккаунт, чтобы добавлять
                                фотографии и сохранять лучшие</p>
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
                                <label className="registration-form__field">
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
                                        mode="transparent"
                                        className="registration-form__visibility-toggle-button"
                                    />
                                </label>
                                <label className="registration-form__field">
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
                                        mode="transparent"
                                        className="registration-form__visibility-toggle-button"
                                    />
                                </label>
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
                    <section className="registration-form">
                        <div className="registration-form__showcase">
                            <div className="registration-form__showcase-content">
                                <Logo/>
                            </div>
                            <h2 className="registration-form__showcase-title">Добро пожаловать<br/>в Пэпсограм</h2>
                            <h3 className="registration-form__showcase-subtitle">Войдите в аккаунт, чтобы добавлять
                                фотографии и сохранять лучшие</h3>
                        </div>
                        <div className="registration-form__panel">
                            <div className="registration-form__panel-switcher">
                                <Button
                                    mode="primary"
                                    className="registration-form__button-login"
                                    label="Вход"
                                />
                                <Button
                                    mode="white"
                                    className="registration-form__button-registration"
                                    label="Регистрация"
                                />
                            </div>
                            <h3 className="registration-form__panel-title">Войдите</h3>
                            <form className="registration-form__panel-form">
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
                                <label className="registration-form__field">
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
                                </label>
                            </form>
                            <div className="registration-form__redirect">
                                <span>Забыли пароль?</span>
                                <Button
                                    mode="transparent"
                                    className="registration-form__redirect-button"
                                    label="Восстановить"
                                />
                            </div>
                            <Button
                                mode="primary"
                                className="registration-form__submit-button"
                                label="Войти"
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
                                <span>Нет аккаунта?</span>
                                <Button
                                    mode="transparent"
                                    className="registration-form__redirect-button"
                                    label="Зарегистрироваться"
                                />
                            </div>
                        </div>
                    </section>
                    <section className="registration-form">
                        <div className="registration-form__showcase">
                            <div className="registration-form__showcase-content">
                                <Logo/>
                            </div>
                            <h2 className="registration-form__showcase-title">Почти готово</h2>
                            <h3 className="registration-form__showcase-subtitle">Мы отправили письмо для подтверждения
                                вашей электронной почты.</h3>
                        </div>
                        <div className="confirmation-steps">
                            <div className="confirmation-steps__list">
                                <div className="confirmation-steps__item">
                                    <div
                                        className="confirmation-steps__icon-circle confirmation-steps__icon-circle--email">
                                        <svg className="confirmation-steps__icon">
                                            <use href="/media-temp/icons/sprite.svg#icon-email"/>
                                        </svg>
                                    </div>
                                    <p className="confirmation-steps__text">Проверьте вашу электронную почту</p>
                                </div>
                                <div className="confirmation-steps__item">
                                    <div
                                        className="confirmation-steps__icon-circle confirmation-steps__icon-circle--link">
                                        <svg className="confirmation-steps__icon">
                                            <use href="/media-temp/icons/sprite.svg#icon-link"/>
                                        </svg>
                                    </div>
                                    <p className="confirmation-steps__text">Перейдите по ссылке в письме</p>
                                </div>
                                <div className="confirmation-steps__item">
                                    <div
                                        className="confirmation-steps__icon-circle confirmation-steps__icon-circle--smile">
                                        <svg className="confirmation-steps__icon">
                                            <use href="/media-temp/icons/sprite.svg#icon-smile_wink"/>
                                        </svg>
                                    </div>
                                    <p className="confirmation-steps__text">Начните использовать Пэпсограм</p>
                                </div>
                            </div>
                            <div className="confirmation-steps__redirect">
                                <span>Не получили письмо? Проверьте папку “Спам” или </span>
                                <Button
                                    mode="transparent"
                                    className="registration-form__redirect-button"
                                    label="отправьте письмо повторно"
                                />
                            </div>
                            <Button
                                mode="primary"
                                className="confirmation-steps__return-home-button"
                                label="Вернуться на главную"
                            />
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default RegistrationPage;