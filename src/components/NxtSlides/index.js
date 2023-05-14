import {Component} from 'react'
import {v4} from 'uuid'
import './index.css'
import SlideTab from '../SlideTab'

const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

class NxtSlides extends Component {
  state = {
    slidesList: initialSlidesList,
    activeSlideNo: 0,
    showHeading: true,
    showDescription: true,
  }

  changeCurrentSlide = slideNo => {
    this.setState({
      activeSlideNo: slideNo,
      showHeading: true,
      showDescription: true,
    })
  }

  addSlides = () => {
    const newSlide = {
      id: v4(),
      heading: 'Heading',
      description: 'Description',
    }
    this.setState(prevState => ({
      slidesList: [
        ...prevState.slidesList.slice(0, prevState.activeSlideNo + 1),
        newSlide,
        ...prevState.slidesList.slice(
          prevState.activeSlideNo + 1,
          prevState.slidesList.length,
        ),
      ],
      activeSlideNo: prevState.activeSlideNo + 1,
    }))
  }

  changeHeadingText = event => {
    this.setState(prevState => ({
      slidesList: prevState.slidesList.map(eachItem => {
        if (prevState.slidesList[prevState.activeSlideNo].id === eachItem.id) {
          return {...eachItem, heading: event.target.value}
        }
        return eachItem
      }),
    }))
  }

  changeDescriptionText = event => {
    this.setState(prevState => ({
      slidesList: prevState.slidesList.map(eachItem => {
        if (prevState.slidesList[prevState.activeSlideNo].id === eachItem.id) {
          return {...eachItem, description: event.target.value}
        }
        return eachItem
      }),
    }))
  }

  showHeadingInput = () => {
    this.setState({showHeading: false})
  }

  showDescriptionInput = () => {
    this.setState({showDescription: false})
  }

  showHeadingElement = () => {
    this.setState({showHeading: true})
  }

  showDescriptionElement = () => {
    this.setState({showDescription: true})
  }

  renderHeader = () => (
    <nav className="nav-bar">
      <img
        className="nxt-slides-logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-logo.png"
        alt="nxt slides logo"
      />
      <h1 className="nxt-slides-heading">Nxt Slides</h1>
    </nav>
  )

  renderNewButton = () => (
    <button type="button" onClick={this.addSlides} className="new-btn">
      <img
        className="new-plus-icon"
        src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png "
        alt="new plus icon"
      />
      <p>New</p>
    </button>
  )

  renderSlideSideBar = () => {
    const {slidesList, activeSlideNo} = this.state
    return (
      <ol className="side-slides-list">
        {slidesList.map(eachSlide => (
          <SlideTab
            eachSlide={eachSlide}
            key={eachSlide.id}
            changeCurrentSlide={this.changeCurrentSlide}
            slidesList={slidesList}
            activeSlideNo={activeSlideNo}
          />
        ))}
      </ol>
    )
  }

  renderHeadingPart = () => {
    const {slidesList, activeSlideNo, showHeading} = this.state
    const {heading} = slidesList[activeSlideNo]
    return (
      <div className="heading-element">
        {showHeading ? (
          <h1 onClick={this.showHeadingInput}>{heading}</h1>
        ) : (
          <input
            type="text"
            value={heading}
            onChange={this.changeHeadingText}
            onBlur={this.showHeadingElement}
            className="input-heading"
          />
        )}
      </div>
    )
  }

  renderDescriptionPart = () => {
    const {slidesList, activeSlideNo, showDescription} = this.state
    const {description} = slidesList[activeSlideNo]
    return (
      <div className="description-element">
        {showDescription ? (
          <p onClick={this.showDescriptionInput}>{description}</p>
        ) : (
          <input
            type="text"
            value={description}
            onChange={this.changeDescriptionText}
            onBlur={this.showDescriptionElement}
            className="input-description"
          />
        )}
      </div>
    )
  }

  renderCurrentSlide = () => (
    <div className="current-slide-container">
      {this.renderHeadingPart()}
      {this.renderDescriptionPart()}
    </div>
  )

  render() {
    const {slidesList} = this.state
    console.log(slidesList)
    return (
      <div className="container">
        {this.renderHeader()}
        <div>
          {this.renderNewButton()}
          <div className="slides-container">
            {this.renderSlideSideBar()}
            {this.renderCurrentSlide()}
          </div>
        </div>
      </div>
    )
  }
}

export default NxtSlides
