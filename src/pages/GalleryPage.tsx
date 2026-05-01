import Card from "../components/ui/Card.tsx";
import CardStack from "../components/ui/CardStack.tsx";
import Button from "../components/ui/Button.tsx";

const GalleryPage = () => {
  return (
    <>
      <div className="page container home-page">
        <div className="home-page__wrapper">
          <h1 className="visually-hidden">Галерея</h1>
          <div className="gallery__buttons">
            <Button
              mode="primary"
              label="Все фото"
              location="gallery-top"
            />
            <Button
              mode="white"
              label="Все фото"
              location="gallery-top"
            />
            <Button
              mode="white"
              label="Все фото"
              location="gallery-top"
            />
          </div>
          <div className="gallery__container">
            <Card
              title="Пэпсик на стуле"
              dataTime="26.04.2026"
              imgSrc="src/assets/img/pepsik.jpg"
              isLiked={true}
            />
            <Card
              title="Пэпсик на стуле"
              dataTime="26.04.2026"
              imgSrc="src/assets/img/pepsik.jpg"
              isLiked={true}
            />
            <Card
              title="Пэпсик на стуле"
              dataTime="26.04.2026"
              imgSrc="src/assets/img/pepsik.jpg"
              isLiked={true}
            />
            <Card
              title="Пэпсик на стуле"
              dataTime="26.04.2026"
              imgSrc="src/assets/img/pepsik.jpg"
              isLiked={true}
            />
            <Card
              title="Пэпсик на стуле"
              dataTime="26.04.2026"
              imgSrc="src/assets/img/pepsik.jpg"
              isLiked={true}
            />
            <Card
              title="Пэпсик на стуле"
              dataTime="26.04.2026"
              imgSrc="src/assets/img/pepsik.jpg"
              isLiked={true}
            />
            <Card
              title="Пэпсик на стуле"
              dataTime="26.04.2026"
              imgSrc="src/assets/img/pepsik.jpg"
              isLiked={true}
            />
            <Card
              title="Пэпсик на стуле"
              dataTime="26.04.2026"
              imgSrc="src/assets/img/pepsik.jpg"
              isLiked={true}
            />
          </div>
          <CardStack />
        </div>
      </div>
    </>
  )
}

export default GalleryPage;