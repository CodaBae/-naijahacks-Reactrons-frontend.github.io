import React, { Component } from 'react'
import { Affix } from 'antd'
import BottonC from './BottonC'

class Nav extends Component {
  state = {
    top: 0,
    bottom: 0
  }
  render () {
    return (
      <div>
        <Affix offsetTop={this.state.top}>
          <div className='Nav_Div'>
            <div>
              <img src={require('../Img/logo.png')} alt='download me' className='Nav_Img' />
              <span className='Nav_Logo'> iFarm </span>

            </div>

            <span className='Nav_Span'>
              <BottonC />
            </span>
          </div>
        </Affix>

      </div>
    )
  }
}

export default Nav
