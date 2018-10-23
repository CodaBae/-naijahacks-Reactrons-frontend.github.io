import React, { Component } from 'react'
import { Modal, Button } from 'antd'
import {Link} from 'react-router-dom'

export default class SignUp extends Component {
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
      <div className='SignUp_Div'>
        <p type='primary' onClick={this.showModal}>
                    Do you have an Account? SignUp Now!
                </p>
        <Modal
          visible={this.state.visible}
          title='SignUp'
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

          <form className='contactform' onSubmit={this.handleSubmit}>

            {' '}<h5 className='ContactH'>Name</h5>

            <input
              type='text'
              name='name'
              placeholder='Name'
              className='ContactIM'
                        />

            <br />

            <h5 className='ContactH'>Phone</h5>
            <input
              type='text'
              name='phone'
              placeholder='Phone'
              className='ContactIM'
                        />

            <br />

            <h5 className='ContactH'>Email</h5>

            <input
              type='text'
              name='Email'
              placeholder='Email'
              className='ContactIM'
                        />
            <br />

            <h5 className='ContactH'>Password</h5>
            <input
              type='text'
              name='password'
              placeholder='Password'
              className='ContactIM'
                        />
            <br />


            <h5 className='ContactH'>Tell Us About You</h5>
            <input
              type='text'
              name='about'
              placeholder='A Student, Business man or woman, Wholesaler, Farmer, Stockman, Others'
              className='SellT'
                        />
            <br />
            <Link to='Dashboard'>
            <Button value='bnt' type='dashed' block>Ride On</Button>
            </Link>
          </form>

        </Modal>

      </div>
    )
  }
}
