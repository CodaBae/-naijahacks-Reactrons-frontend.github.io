import React, { Component } from 'react'
import './styles/app.css'
import Nav from '../src/components/Nav'
import CarouselC from './components/Carousel'
import AboutUs from '../src/components/AboutUs'
import Targets from '../src/components/Targets'
import FooterC from '../src/components/Footer'
import GetIn from './components/GetIn'
import Achieved from './components/Achieved'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Nav />
        <CarouselC />
        <div className='Background_img'>

          <AboutUs />
          <Targets />
          <GetIn />
          <Achieved />

        </div>
        <FooterC />
      </div>
    )
  }
}

export default App
