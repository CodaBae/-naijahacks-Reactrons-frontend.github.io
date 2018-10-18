import React, { Component } from 'react'
import { Carousel } from 'antd'

class CarouselC extends Component {
  render () {
    return (
      <Carousel autoplay>
        <div className='Carousel_Img1'>
          <div className='Carousel_Img3'>
            <img src={require('../Img/h.jpg')} alt='download me' className='Carousel_Img' />
            <h3 className='Carousel_HeaderS'> Our Mothers Work </h3>

          </div>
        </div>
        <div className='Carousel_Img2'>
          <img src={require('../Img/c.jpg')} alt='download me' className='Carousel_Img' />
          <h3 className='Carousel_HeaderS'> Start A Poultry Bussiness </h3>
        </div>
        <div className='Carousel_Im4'>
          <img src={require('../Img/g.jpg')} alt='download me' className='Carousel_Img' />
          <h3 className='Carousel_HeaderS'> Get Your Agricultural Tools  </h3>
        </div>
        <div className='Carousel_Im5'>
          <img src={require('../Img/d.jpg')} alt='download me' className='Carousel_Img' />
       
            
        </div>
        <div className='Carousel_Im5'>
          <img src={require('../Img/e.jpg')} alt='download me' className='Carousel_Img' />
          <h3 className='Carousel_Header'> Order Your Pets Today </h3>
        </div>
      </Carousel>
    )
  }
}

export default CarouselC
