import Button from "./Button.tsx";

type CardProps = {
  title?: string;
  dataTime?: string;
  imgSrc?: string;
  isLiked?: boolean;
}


const Card = (props: CardProps) => {
  const {
    title,
    dataTime,
    imgSrc,
    isLiked,
  } = props


  return (
    <>
      <div className="card">
        <div className="card__inner">
          <div className="card__is-liked">
            <Button
              iconName="like"
              iconSize="2.8rem"
              ariaLabel="В избранное"
              mode="white"
              location="card__top"
              className={isLiked ? 'yellow' : ''}
            />
          </div>
          <img src={imgSrc} alt="Пэпс" className="card__image"/>
          <div className="card__content">
            <h3 className="card__title">{title}</h3>
            <div className="card__bottom">
              <span className="card__date">{dataTime}</span>
              <Button
                iconName="import"
                ariaLabel="Скачать"
                mode="transparent"
                iconSize="2.8rem"
                className="button--card"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card;