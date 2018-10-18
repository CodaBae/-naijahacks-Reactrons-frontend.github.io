import React, { Component } from 'react'
import './styles/app.css'
import Nav from '../src/components/Nav'
import CarouselC from './components/Carousel'
import AboutUs from '../src/components/AboutUs'
import Targets from '../src/components/Targets'
import FooterC from '../src/components/Footer'

class App extends Component {
  render () {
    return (
      <div className='App'>

        <div className='Background_img'>
          <Nav />
          <CarouselC />
          <AboutUs />
          <Targets />
          <FooterC />

        </div>
      </div>
    )
  }
}

export default App
