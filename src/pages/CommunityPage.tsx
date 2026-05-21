import Card from "../components/ui/Card.tsx";
import CardStack from "../components/ui/CardStack.tsx";
import Button from "../components/ui/Button.tsx";

const CommunityPage = () => {
    return (
        <>
            <div className="page container home-page">
                <div className="home-page__wrapper">
                    <h1 className="visually-hidden">Главная</h1>
                    <div className="users-grid">
                        <div className="profile-card">
                            <div className="profile-card__avatar-container">
                                <img className="profile-card__avatar" src="\media-temp\img\kot_koldun.jpg"
                                     alt="avatar"/>
                            </div>
                            <div className="profile-card__nickname">KuRLA_daun</div>
                            <div className="profile-card__stats">
                                <div className="user-stat user-stat--size-sm">
                                    <span className="user-stat__number">1</span>
                                    <span className="user-stat__label">Фото</span>
                                </div>
                                <div className="user-stat user-stat--size-sm">
                                    <span className="user-stat__number">16</span>
                                    <span className="user-stat__label">Подборки</span>
                                </div>
                                <div className="user-stat user-stat--size-sm">
                                    <span className="user-stat__number">2</span>
                                    <span className="user-stat__label">Питомцы</span>
                                </div>
                            </div>
                        </div>
                        <div className="profile-card">
                            <div className="profile-card__avatar-container">
                                <img className="profile-card__avatar" src="\media-temp\img\zabyl.jpg" alt="avatar"/>
                            </div>
                            <div className="profile-card__nickname">sasxaxaxa</div>
                            <div className="profile-card__stats">
                                <div className="user-stat user-stat--size-sm">
                                    <span className="user-stat__number">16432</span>
                                    <span className="user-stat__label">Фото</span>
                                </div>
                                <div className="user-stat user-stat--size-sm">
                                    <span className="user-stat__number">16</span>
                                    <span className="user-stat__label">Подборки</span>
                                </div>
                                <div className="user-stat user-stat--size-sm">
                                    <span className="user-stat__number">2</span>
                                    <span className="user-stat__label">Питомцы</span>
                                </div>
                            </div>
                        </div>
                        <div className="profile-card">
                            <div className="profile-card__avatar-container">
                                <img className="profile-card__avatar" src="\media-temp\img\pepsik.jpg" alt="avatar"/>
                            </div>
                            <div className="profile-card__nickname">Pepsik</div>
                            <div className="profile-card__stats">
                                <div className="user-stat user-stat--size-sm">
                                    <span className="user-stat__number">892</span>
                                    <span className="user-stat__label">Фото</span>
                                </div>
                                <div className="user-stat user-stat--size-sm">
                                    <span className="user-stat__number">24</span>
                                    <span className="user-stat__label">Подборки</span>
                                </div>
                                <div className="user-stat user-stat--size-sm">
                                    <span className="user-stat__number">3</span>
                                    <span className="user-stat__label">Питомцы</span>
                                </div>
                            </div>
                        </div>
                        <div className="profile-card">
                            <div className="profile-card__avatar-container">
                                <img className="profile-card__avatar" src="\media-temp\img\pepsik.jpg" alt="avatar"/>
                            </div>
                            <div className="profile-card__nickname">Pepsik</div>
                            <div className="profile-card__stats">
                                <div className="user-stat user-stat--size-sm">
                                    <span className="user-stat__number">892</span>
                                    <span className="user-stat__label">Фото</span>
                                </div>
                                <div className="user-stat user-stat--size-sm">
                                    <span className="user-stat__number">24</span>
                                    <span className="user-stat__label">Подборки</span>
                                </div>
                                <div className="user-stat user-stat--size-sm">
                                    <span className="user-stat__number">3</span>
                                    <span className="user-stat__label">Питомцы</span>
                                </div>
                            </div>
                        </div>
                        <div className="profile-card">
                            <div className="profile-card__avatar-container">
                                <img className="profile-card__avatar" src="\media-temp\img\pepsik.jpg" alt="avatar"/>
                            </div>
                            <div className="profile-card__nickname">Pepsik</div>
                            <div className="profile-card__stats">
                                <div className="user-stat user-stat--size-sm">
                                    <span className="user-stat__number">892</span>
                                    <span className="user-stat__label">Фото</span>
                                </div>
                                <div className="user-stat user-stat--size-sm">
                                    <span className="user-stat__number">24</span>
                                    <span className="user-stat__label">Подборки</span>
                                </div>
                                <div className="user-stat user-stat--size-sm">
                                    <span className="user-stat__number">3</span>
                                    <span className="user-stat__label">Питомцы</span>
                                </div>
                            </div>
                        </div>
                        <div className="profile-card">
                            <div className="profile-card__avatar-container">
                                <img className="profile-card__avatar" src="\media-temp\img\pepsik.jpg" alt="avatar"/>
                            </div>
                            <div className="profile-card__nickname">Pepsik</div>
                            <div className="profile-card__stats">
                                <div className="user-stat user-stat--size-sm">
                                    <span className="user-stat__number">892</span>
                                    <span className="user-stat__label">Фото</span>
                                </div>
                                <div className="user-stat user-stat--size-sm">
                                    <span className="user-stat__number">24</span>
                                    <span className="user-stat__label">Подборки</span>
                                </div>
                                <div className="user-stat user-stat--size-sm">
                                    <span className="user-stat__number">3</span>
                                    <span className="user-stat__label">Питомцы</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommunityPage;