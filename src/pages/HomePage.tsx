import React from 'react'
import Button from '../components/Button'
import Container from '../components/Container'
import Grid from '../components/Grid'
import './HomePage.scss'

const HomePage: React.FC<{}> = () => {
  return (
    <div id='home'>
      <Container>
        <Grid>
          <div className="col-12 col-desktop-5 text--center text-desktop--left">
            <div className="text-heading-5 text--accent text--uppercase mt-0 mb-6">So you want to travel to</div>
            <div className="text-heading-1 my-6 text--light text--uppercase">Space</div>
            <p className="text-body text--accent">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
          </div>
          <div className="col-12 col-desktop-7 flex justify-content-center align-items-center justify-content-desktop-end align-items-desktop-end mt-10 mt-desktop-0">
            <Button>Explore</Button>
          </div>
        </Grid>
      </Container>
    </div>
  )
}

export default HomePage