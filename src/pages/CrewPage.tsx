import React from 'react'
import Container from '../components/Container'
import SliderDotsBar from '../components/SliderDotsBar'
import Title from '../components/Title'
import TopSection from '../components/TopSection'

// Import data
import data from '../data.json'

const crews = data.crew

type CrewPageProps = {}

const CrewPage: React.FC<CrewPageProps> = () => {

  const [crew, setCrew] = React.useState(crews[0])

  const handleSelect = (value: number) => {
    setCrew(crews[value])
  }

  return (
    <TopSection id='crew'>
      <Container>
        <div className="crew__display">
          <div className='crew__title'>
            <Title titleNumber={2}>Meet your crew</Title>
          </div>
          <div className="crew__details mt-8 mb-8 flex flex-column justify-content-desktop-end">
            <h4 className="text-heading-4 details__role text--uppercase text--center text-desktop--left">{crew.role}</h4>
            <h1 className="text-heading-3 text--light text--uppercase details__name text--center text-desktop--left mt-2">{crew.name}</h1>
            <p className='text-body text--accent details__bio text--center text-desktop--left mt-4'>{crew.bio}</p>
            <SliderDotsBar className='crew__selector mt-8' items={crews.map((c, index) => ({ value: index }))} onSelect={handleSelect} />
          </div>
          <div className="crew__image mt-8 flex justify-content-center justify-content-desktop-end">
            <img src={crew.images.png} alt={crew.name} />
          </div>
        </div>
      </Container>
    </TopSection>
  )
}

export default CrewPage