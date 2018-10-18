import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'

const { Header, Content, Footer, Sider } = Layout
const SubMenu = Menu.SubMenu

class DashBorad extends Component {
  state = {
    collapsed: false
  }

  onCollapse = collapsed => {
    console.log(collapsed)
    this.setState({ collapsed })
  }

  render () {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className='Logo_d'>
          <img src={require('../Img/logo.png')} alt='download me' className='Header_Img' />
          <span className='Header_Logo'> iFarm </span>

            </div>
          <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
            <Menu.Item key='1'>
              <Icon type='pie-chart' />
              <span>Call a Farmer</span>
            </Menu.Item>
            <Menu.Item key='2'>
              <Icon type='desktop' />
              <span>Call A StockMan</span>
            </Menu.Item>
            <SubMenu key='sub1' title={<span><Icon type='user' /><span>Shop</span></span>}>
              <Menu.Item key='3'>Seeds</Menu.Item>
              <Menu.Item key='4'>Lifstock</Menu.Item>
              <Menu.Item key='5'>Seafood</Menu.Item>
              <Menu.Item key='6'>Poultry</Menu.Item>
              <Menu.Item key='7'>Farming Tools</Menu.Item>
            </SubMenu>

            <Menu.Item key='10'>
              <Icon type='file' />
              <span>Sell</span>
            </Menu.Item>


          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#4ebc00', padding: 0 }}>
         <h3 className='Header_h3'> Connect With Agriculture</h3>
          </Header>

          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>ITEMS</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }} />
          </Content>
          <Footer style={{ textAlign: 'center' }}>
          codaBae
                              </Footer>
        </Layout>
      </Layout>
    )
  }
}

export default DashBorad
