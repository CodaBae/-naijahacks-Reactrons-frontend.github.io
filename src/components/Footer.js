import React, { Component } from 'react'
import {  Icon } from 'antd'

class FooterC extends Component {
  render () {
    return (
      <div className='Footer_Div'>

        <div className='Footer_IconD'>
          <Icon type='skype' theme='outlined' />
          <Icon type='twitter' theme='outlined' />
          <Icon type='linkedin' theme='outlined' />
          <Icon type='google' theme='outlined' />
          <Icon type='instagram' theme='outlined' />
          <Icon type='github' theme='outlined' />
        </div> <span className='Footer_Span'> Team </span>
      </div>
    )
  }
}

export default FooterC
