import React, { Component } from 'react'
import { Carousel } from 'antd'
import { Input, Button, Icon } from 'antd'
import { Link } from 'react-router-dom'
import SignUp from './SignUp'

export default class Login extends Component {
  render () {
    return (
      <div className='LoginD'>
        <div className='LoginD1'>
          <div className='LoginC1'>
            <Carousel autoplay className='Login_Carousel'>

              <div className='Login_img_Div'>
                {' '}
                <img src={require('../Img/h.jpg')} alt='download me' className='Login_img' />
              </div>

            </Carousel>

          </div>

          <div className='LoginC2'>
            <h6 className='LoginH'>LogIn User!</h6>

            <div className='InputD'>
              <form>
                <h5 className='ContactHL'>Username</h5>
                <Input placeholder='Nickname' className='InputL' required />
                <br />
                <h5 className='ContactHL'>Password</h5>
                <Input placeholder='Password' className='InputL' required label='Password' />
                <br />

                <div className=''>
                  <Link to='DashBoard'>
                    <Button type='dashed' block>Ride On</Button>
                  </Link>
                </div>

                <div className='IconDF'>
                  <Icon type='skype' theme='outlined' />
                  <Icon type='twitter' theme='outlined' />
                  <Icon type='linkedin' theme='outlined' />
                  <Icon type='google' theme='outlined' />
                  <Icon type='instagram' theme='outlined' />
                  <Icon type='github' theme='outlined' />
                </div>

              </form>

             <SignUp />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
