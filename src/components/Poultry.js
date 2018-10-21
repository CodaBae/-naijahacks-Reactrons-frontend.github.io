import React, { Component } from 'react'
import { Row, Col } from 'antd';

class Poultry extends Component {
  render () {
    return (
      <div className='gutter-Div'>

      <div className='gutter-example'>
        <Row gutter={16}>
          <Col className='gutter-row' span={6}>
            <div className='gutter-box'>
              {' '}
              <img src={require('../Img/pigeons.jpg')} alt='download me' className='DashBoard_img' />
              <p> Acorn Seed</p>
            </div>
          </Col>
          <Col className='gutter-row' span={6}>
            <div className='gutter-box'>
            <img src={require('../Img/pigeons.jpg')} alt='download me' className='DashBoard_img' />
              <p> Beech Seed</p>
            </div>
          </Col>
          <Col className='gutter-row' span={6}>
            <div className='gutter-box'>
            <img src={require('../Img/pigeons.jpg')} alt='download me' className='DashBoard_img' />

              <p> brazilnut  Seed</p>
            </div>
          </Col>
          <Col className='gutter-row' span={6}>
            <div className='gutter-box'>
            <img src={require('../Img/pigeons.jpg')} alt='download me' className='DashBoard_img' />
              <p> Cashew Seed</p>
            </div>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col className='gutter-row' span={6}>
            <div className='gutter-box'>
              {' '}
              <img src={require('../Img/pigeons.jpg')} alt='download me' className='DashBoard_img' />
              <p> Cocoa Seed</p>
            </div>
          </Col>
          <Col className='gutter-row' span={6}>
            <div className='gutter-box'>
            <img src={require('../Img/pigeons.jpg')} alt='download me' className='DashBoard_img' />
              <p> Melon Seed</p>
            </div>
          </Col>
          <Col className='gutter-row' span={6}>
            <div className='gutter-box'>
            <img src={require('../Img/pigeons.jpg')} alt='download me' className='DashBoard_img' />

              <p> Sunfower Seed</p>
            </div>
          </Col>
          <Col className='gutter-row' span={6}>
            <div className='gutter-box'>
            <img src={require('../Img/pigeons.jpg')} alt='download me' className='DashBoard_img' />
              <p> Cashew Seed</p>
            </div>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col className='gutter-row' span={6}>
            <div className='gutter-box'>
              {' '}
              <img src={require('../Img/pigeons.jpg')} alt='download me' className='DashBoard_img' />
              <p> Cocoa Seed</p>
            </div>
          </Col>
          <Col className='gutter-row' span={6}>
            <div className='gutter-box'>
            <img src={require('../Img/pigeons.jpg')} alt='download me' className='DashBoard_img' />
              <p> Melon Seed</p>
            </div>
          </Col>
          <Col className='gutter-row' span={6}>
            <div className='gutter-box'>
            <img src={require('../Img/pigeons.jpg')} alt='download me' className='DashBoard_img' />

              <p> Sunfower Seed</p>
            </div>
          </Col>
          <Col className='gutter-row' span={6}>
            <div className='gutter-box'>
            <img src={require('../Img/pigeons.jpg')} alt='download me' className='DashBoard_img' />
              <p> Cashew Seed</p>
            </div>
          </Col>
        </Row>

      </div>
    </div>
    )
  }
}

export default Poultry
