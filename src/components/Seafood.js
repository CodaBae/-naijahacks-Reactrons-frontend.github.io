import React, { Component } from 'react'
import { Row, Col } from 'antd'

class Seafood extends Component {
  render () {
    return (
      <div className='gutter-Div'>

        <div className='gutter-example'>
          <Row gutter={16}>
            <Col className='gutter-row' span={6}>
              <div className='gutter-box'>
                {' '}
                <img src={require('../Img/TILAPIA.png')} alt='download me' className='DashBoard_img' />
                <p> Caryfish </p>
              </div>
            </Col>
            <Col className='gutter-row' span={6}>
              <div className='gutter-box'>
              <img src={require('../Img/TILAPIA.png')} alt='download me' className='DashBoard_img' />
                <p> Cat Fish</p>
              </div>
            </Col>
            <Col className='gutter-row' span={6}>
              <div className='gutter-box'>
              <img src={require('../Img/TILAPIA.png')} alt='download me' className='DashBoard_img' />

                <p> Isam</p>
              </div>
            </Col>
            <Col className='gutter-row' span={6}>
              <div className='gutter-box'>
              <img src={require('../Img/TILAPIA.png')} alt='download me' className='DashBoard_img' />
                <p> Tilapia Fish </p>
              </div>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col className='gutter-row' span={6}>
              <div className='gutter-box'>
                {' '}
                <img src={require('../Img/TILAPIA.png')} alt='download me' className='DashBoard_img' />
                <p> Shell food</p>
              </div>
            </Col>
            <Col className='gutter-row' span={6}>
              <div className='gutter-box'>
              <img src={require('../Img/TILAPIA.png')} alt='download me' className='DashBoard_img' />
                <p> Tuna Fish </p>
              </div>
            </Col>
            <Col className='gutter-row' span={6}>
              <div className='gutter-box'>
              <img src={require('../Img/TILAPIA.png')} alt='download me' className='DashBoard_img' />

                <p> Isam</p>
              </div>
            </Col>
            <Col className='gutter-row' span={6}>
              <div className='gutter-box'>
              <img src={require('../Img/TILAPIA.png')} alt='download me' className='DashBoard_img' />
                <p> Shrimp</p>
              </div>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col className='gutter-row' span={6}>
              <div className='gutter-box'>
                {' '}
                <img src={require('../Img/TILAPIA.png')} alt='download me' className='DashBoard_img' />
                <p> Carb</p>
              </div>
            </Col>
            <Col className='gutter-row' span={6}>
              <div className='gutter-box'>
              <img src={require('../Img/TILAPIA.png')} alt='download me' className='DashBoard_img' />
                <p> Tilapia Fish</p>
              </div>
            </Col>
            <Col className='gutter-row' span={6}>
              <div className='gutter-box'>
              <img src={require('../Img/TILAPIA.png')} alt='download me' className='DashBoard_img' />

                <p> Crayfish</p>
              </div>
            </Col>
            <Col className='gutter-row' span={6}>
              <div className='gutter-box'>
              <img src={require('../Img/TILAPIA.png')} alt='download me' className='DashBoard_img' />
                <p> Cat Fish</p>
              </div>
            </Col>
          </Row>

        </div>
      </div>
    )
  }
}

export default Seafood
