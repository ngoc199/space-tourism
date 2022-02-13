import React from 'react'
import Container from '../components/Container'
import Grid from '../components/Grid'
import SliderCircleButton from '../components/SliderCircleButton'
import Title from '../components/Title'
import TopSection from '../components/TopSection'

// Import data
import data from '../data.json'

const technologies = data.technology

type TechnologyPageProps = {}

const TechnologyPage: React.FC<TechnologyPageProps> = () => {

  const [technology, setTechnology] = React.useState(technologies[0])

  const handleSelect = (value: number) => {
    setTechnology(technologies[value])
  }

  return (
    <TopSection id='technology'>
      <Container>
        <Title titleNumber={3}>Space launch 101</Title>
      </Container>

      <div className="technology__image hidden-desktop">
        <img src={technology.images.landscape} alt={technology.name} className="img-fluid" />
      </div>

      <Container className='technology__details-wrapper'>
        <div className='flex flex-column flex-desktop-row'>
          <div className="technology__selector flex flex-row justify-content-center flex flex-row flex-desktop-column">
            {technologies.map((tech, index) => (<SliderCircleButton active={tech.name === technology.name} onClick={() => handleSelect(index)}>{index + 1}</SliderCircleButton>))}
          </div>
          <div className="technology__details flex flex-column justify-content-desktop-center">
            <h5 className="text-heading-5 text--accent text--uppercase text--center text-desktop--left">The terminology...</h5>
            <h1 className="text-heading-3 text--light text--uppercase text--center text-desktop--left mt-4">{technology.name}</h1>
            <p className="text-body text--accent text--center text-desktop--left mt-4">{technology.description}</p>
          </div>
          <div className="technology__desktop-image">
            <img src={technology.images.portrait} alt={technology.name} className="img-fluid" />
          </div>
        </div>

      </Container>

    </TopSection>
  )
}

export default TechnologyPage