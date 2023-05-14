import './index.css'

const SlideTab = props => {
  const {eachSlide, changeCurrentSlide, slidesList, activeSlideNo} = props
  const {id, heading, description} = eachSlide

  const slideNo = slidesList.findIndex(each => each.id === id)
  const slideNumber = slideNo + 1

  const slideClassName =
    activeSlideNo === slideNo ? 'color-slide' : 'transparent-slide'

  const onClickSlide = () => {
    changeCurrentSlide(slideNo)
  }

  return (
    <li
      className={`slide-item ${slideClassName}`}
      testid={`slideTab${slideNumber}`}
      onClick={onClickSlide}
    >
      <p className="slide-number">{slideNumber}</p>
      <div className="slide">
        <h1 className="heading">{heading}</h1>
        <p className="description">{description}</p>
      </div>
    </li>
  )
}

export default SlideTab
