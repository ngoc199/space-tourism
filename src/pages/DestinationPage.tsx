import React from 'react'

// Get the data from the data file
import data from '../data.json'
import TopSection from '../components/TopSection'
import Container from '../components/Container'
import Grid from '../components/Grid'
import Title from '../components/Title'
import TabsBar from '../components/TabsBar'
const destinations = data.destinations

const DestinationPage: React.FC<{}> = () => {

  const [destinationIndex, setDestinationIndex] = React.useState(0)

  const handleSelect = (value: number) => {
    setDestinationIndex(value)
  }

  return (
    <TopSection id='destination'>
      <Container>
        <Grid className='justify-content-between'>
          <div className="col-12 col-desktop-6">
            <Title titleNumber={1}>Pick your destination</Title>
            <img className='img-fluid mt-8 destination__image' src={destinations[destinationIndex].images.png} alt={destinations[destinationIndex].name} />
          </div>
          <div className="col-12 col-desktop-5 flex flex-column justify-content-end">
            <TabsBar items={destinations.map((destination, index) => ({ text: destination.name, value: index }))} onSelect={handleSelect}></TabsBar>
            <h2 className='text-heading-2 text--light text--uppercase text--center text-desktop--left mt-8'>{destinations[destinationIndex].name}</h2>
            <p className="text-body text--accent text--center text-desktop--left">{destinations[destinationIndex].description}</p>
            <hr className='mt-10 destination__line' />
            <Grid>
              <div className="col-12 col-tablet-6 mt-8">
                <div className="flex flex-column align-items-center align-items-desktop-start">
                  <h5 className="text-subheading-2 text--accent text--uppercase">avg. distance</h5>
                  <p className="text-subheading-1 text-center text--light text--uppercase mt-3">{destinations[destinationIndex].distance}</p>
                </div>
              </div>
              <div className="col-12 col-tablet-6 mt-8">
                <div className="flex flex-column align-items-center align-items-desktop-start">
                  <h5 className="text-subheading-2 text--accent text--uppercase">est. travel time</h5>
                  <p className="text-subheading-1 text-center text--light text--uppercase mt-3">{destinations[destinationIndex].travel}</p>
                </div>
              </div>
            </Grid>
          </div>
        </Grid>
      </Container>
    </TopSection>
  )
}

export default DestinationPage