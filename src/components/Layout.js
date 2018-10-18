import React, { Component } from 'react'
import { Layout } from 'antd'
import Nav from './Nav'
import AboutUs from './AboutUs'
import BottonC from './BottonC'
import FooterC from './Footer'

class SiteLayout extends Component {
  render () {
    const { Header, Footer, Content } = Layout
    return (
      <div>
        <Layout className='Layout'>
          <Header> <Nav /> </Header>
          <Content>
            {' '}<img src={require('../Img/h.jpg')} alt='download me' className='Carousel_Img' />
            <AboutUs />
            <BottonC />
          </Content>
          <Footer> <FooterC /> </Footer>
        </Layout>
      </div>
    )
  }
}

export default SiteLayout
