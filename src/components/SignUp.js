import React, { Component } from 'react'
import { Modal, Button, Icon } from 'antd'
import { Link } from 'react-router-dom'

export default class SignUp extends Component {
  state = {
    name: '',
    phone: '',
    email: '',
    password: '',
    acctNo: '',
    bank: '',
    hobbies: '',
    loading: false,
    visible: false,
    nameE: '',
    phoneE: '',
    emailE: '',
    passwordE: '',
    aboutE: ''
  }

    // input
  handleChangeName = event => {
    this.setState({ name: event.target.value })
  }
  handleChangePhone = event => {
    this.setState({ phone: event.target.value })
  }

  handleChangeEmail = event => {
    this.setState({ email: event.target.value })
  }

  handleChangePassword = event => {
    this.setState({ password: event.target.value })
  }
  handleChangeAcctNo = event => {
    this.setState({ acctNo: event.target.value })
  }

    // form
  handleSubmit = event => {
    if (this.state.name && this.state.name.match(/^[a-zA-Z]+$/)) {
      event.target.elements.name.value = ''
      event.preventDefault()
    } else {
      this.setState({ nameE: 'Name should contain only Letters' })
      event.preventDefault()
    }

    if (this.state.phone && !this.state.phone.match(/^[a-zA-Z]+$/)) {
      event.target.elements.phone.value = ''
      event.preventDefault()
    } else {
      this.setState({ phoneE: 'Phone should contain only Numbers' })
      event.preventDefault()
    }

    if (this.state.email && this.state.email.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/gim)) {
      event.target.elements.email.value = ''
      event.preventDefault()
    } else {
      this.setState({ emailE: 'Invalid Email' })
      event.preventDefault()
    }

    if (this.state.password && this.state.password.length > 6) {
      event.target.elements.password.value = ''
      event.preventDefault()
    } else {
      this.setState({ passwordE: 'Password must be greater more than 6' })
      event.preventDefault()
    }

    if (this.state.acctNo) {
      event.target.elements.acctNo.value = ''
      event.preventDefault()
    } else {
      this.setState({ aboutE: 'Cannot be empty' })

      event.preventDefault()
    }
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

      
            <form name='contactform' className='contactform' onSubmit={this.handleSubmit}>
              {' '}<h5 className='ContactH'>Name</h5>

              <input
                type='text'
                name='name'
                value={this.state.name}
                onChange={this.handleChangeName}
                placeholder='Name'
                className='ContactIM'
                required
                            />

              {this.state.nameE ? <p>{this.state.nameE}</p> : ''}
              <br />

              <h5 className='ContactH'>Phone</h5>
              <input
                type='text'
                name='phone'
                value={this.state.phone}
                onChange={this.handleChangePhone}
                placeholder='Phone'
                className='ContactIM'
                required
                            />

              {this.state.phoneE ? <p>{this.state.phoneE}</p> : ''}
              <br />

              <h5 className='ContactH'>Email</h5>

              <input
                type='text'
                name='Email'
                value={this.state.email}
                onChange={this.handleChangeEmail}
                placeholder='Email'
                className='ContactIM'
                required
                            />

              {this.state.emailE ? <p>{this.state.emailE}</p> : ''}
              <br />

              <h5 className='ContactH'>Password</h5>
              <input
                type='text'
                name='password'
                value={this.state.pasword}
                onChange={this.handleChangePassword}
                placeholder='Password'
                className='ContactIM'
                required
                            />
              {this.state.passwordE ? <p>{this.state.passwordE} </p> : ''}
              <br />

              <h5 className='ContactH'>Tell Us About You</h5>
              <input
                type='text'
                name='acctNo'
                value={this.state.acctNo}
                onChange={this.handleChangeAcctNo}
                placeholder='A Student, Business man or woman, Wholesaler, Farmer, Stockman, Others'
                className='SellT'
                required
                            />
              {this.state.aboutE ? <p>{this.state.aboutE} </p> : ''}
              <br />

              <Button value='Submit' type='dashed' block>Ride On</Button>
            </form>

       

        </Modal>

      </div>
    )
  }
}
