import React, { Component } from 'react'
import { Modal, Button, Icon } from 'antd'
import { Card } from 'antd'

const { Meta } = Card

class Team extends Component {
  state = {
    loading: false,
    visible: false
  }

  showModal = () => {
    this.setState({
      visible: true
    })
  }

  handleOk = () => {
    this.setState({ loading: true })
    setTimeout(() => {
      this.setState({ loading: false, visible: false })
    }, 3000)
  }

  handleCancel = () => {
    this.setState({ visible: false })
  }

  render () {
    return (
      <div className='Team_Div'>
        <span type='primary' onClick={this.showModal}>
                    Team
                </span>
        <Modal
          visible={this.state.visible}
          title='Meet Us'
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width='70rem'
          footer={[
            <Button key='back' onClick={this.handleCancel}>Return</Button>,
            <Button key='submit' type='primary' onClick={this.handleOk}>
                            ok
                        </Button>
          ]}
                >
          <div>

            <h2>Team</h2>
            <div className='Team_MDiv'>

              <div className='Team_Div'>

                <img src={require('../Img/shalom.jpg')} alt='download me' className='Team_Img' />

                <Meta title='Shalom Mathew' style={{ width: 240 }} />
                <div className='Team_IconD'>
                  <Icon type='twitter' theme='outlined' />
                  <Icon type='linkedin' theme='outlined' />
                  <Icon type='google' theme='outlined' />
                  <Icon type='instagram' theme='outlined' />
                  <Icon type='github' theme='outlined' />
                </div>

              </div>

              <div className='Team_Div'>

                <img src={require('../Img/Mal.jpeg')} alt='download me' className='Team_Img' />

                <Meta title='Malvan Harry' style={{ width: 240 }} />
                <div className='Team_IconD'>
                  <Icon type='twitter' theme='outlined' />
                  <Icon type='linkedin' theme='outlined' />
                  <Icon type='google' theme='outlined' />
                  <Icon type='instagram' theme='outlined' />
                  <Icon type='github' theme='outlined' />
                </div>

              </div>

              <div className='Team_Div'>

                <img src={require('../Img/sap.jpg')} alt='download me' className='Team_Img' />
                <Meta title='Saphire ' style={{ width: 240 }} />
                <div className='Team_IconD'>
                  <Icon type='twitter' theme='outlined' />
                  <Icon type='linkedin' theme='outlined' />
                  <Icon type='google' theme='outlined' />
                  <Icon type='instagram' theme='outlined' />
                  <Icon type='github' theme='outlined' />
                </div>

              </div>

            </div>

          </div>
        </Modal>
      </div>
    )
  }
}

export default Team
