const CardStack = () => {
  return (
    <>
      <div className="card-stack">
        <div className="stacked-card stacked-card--left">
          <div className="stacked-card__inner">
            <img src="../../../public/media-temp/img/pepsik.jpg" alt="Пэпсик на стуле" className="stacked-card__image"/>
          </div>
        </div>
        <div className="stacked-card stacked-card--center">
          <div className="stacked-card__inner">
            <img src="../../../public/media-temp/img/pepsik.jpg" alt="Пэпсик на стуле" className="stacked-card__image"/>
          </div>
        </div>
        <div className="stacked-card stacked-card--right">
          <div className="stacked-card__inner">
            <img src="../../../public/media-temp/img/pepsik.jpg" alt="Пэпсик на стуле" className="stacked-card__image"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardStack;