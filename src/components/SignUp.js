import React, { Component } from 'react'

export default class SignUp extends Component {
  state = {
    name: '',
    phone: '',
    email: '',
    password: '',
    acctNo: '',
    bank: '',
    hobbies: ''
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

  handleChangeBank = event => {
    this.setState({ bank: event.target.value })
  }

  handleChangeHobbies = event => {
    this.setState({ hobbies: event.target.value })
  }

    // form
  handleSubmit = event => {
    if (this.state.name && this.state.name.match(/^[a-zA-Z]+$/)) {
      alert('A name was submitted: ' + this.state.name)
      event.target.elements.name.value = ''
      event.preventDefault()
    } else {
      alert('incorrect nickName ! no numbers.')
      event.preventDefault()
    }

    if (this.state.phone && !this.state.phone.match(/^[a-zA-Z]+$/)) {
      alert('A name was submitted: ' + this.state.phone)
      event.target.elements.phone.value = ''
      event.preventDefault()
    } else {
      alert('incorrect PhoneNumber! no letters')
      event.preventDefault()
    }

    if (this.state.email && this.state.email.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/gim)) {
      alert('A name was submitted: ' + this.state.email)
      event.target.elements.email.value = ''
      event.preventDefault()
    } else {
      alert('incorrect email')
      event.preventDefault()
    }

    if (this.state.password && this.state.password.length > 6) {
      alert('A name was submitted: ' + this.state.password)
      event.target.elements.password.value = ''
      event.preventDefault()
    } else {
      alert('Password must be more than 6')
      event.preventDefault()
    }

    if (this.state.acctNo) {
      alert('A name was submitted: ' + this.state.acctNo)
      event.target.elements.acctNo.value = ''
      event.preventDefault()
    } else {
      alert('Cannot be empty')
      event.preventDefault()
    }

    if (this.state.bank) {
      alert('A name was submitted: ' + this.state.bank)
      event.target.elements.bank.value = ''
      event.preventDefault()
    } else {
      alert('Cannot be empty')
      event.preventDefault()
    }

    if (this.state.hobbies) {
      alert('A name was submitted: ' + this.state.hobbies)
      event.target.elements.hobbies.value = ''
      event.preventDefault()
    } else {
      alert('Cannot be empty')
      event.preventDefault()
    }
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render () {
    return (
      <div>
        <form>

          <input
            type='text'
            name='name'
            value={this.state.name}
            onChange={this.handleChangeName}
            placeholder='Nickname'
            className='ContactIM'
            required
                    />

          <br />
          <h5 className='ContactH'>phone</h5>
          <input
            type='text'
            name='phone'
            value={this.state.phone}
            onChange={this.handleChangePhone}
            placeholder='Phone'
            className='ContactIM'
            required
                    />

          <br />
          <h5 className='ContactH'>email</h5>

          <input
            type='text'
            name='email'
            value={this.state.email}
            onChange={this.handleChangeEmail}
            placeholder='Email'
            className='ContactIM'
            required
                    />

          <br />
          <h5 className='ContactH'>Hobbies</h5>

          <input
            type='text'
            name='hobbies'
            value={this.state.hobbies}
            onChange={this.handleChangeHobbies}
            placeholder='hobbies'
            className='ContactIM'
            required
                    />

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
          <br />
          <h1 className='SignupT'>Account Details</h1>
          <h5 className='ContactH'>Account Number</h5>
          <input
            type='text'
            name='acctNo'
            value={this.state.acctNo}
            onChange={this.handleChangeAcctNo}
            placeholder='Account Number'
            className='ContactIM'
            required
                    />
          <br />
          <h5 className='ContactH'>Bank Details</h5>
          <input
            type='text'
            name='bank'
            value={this.state.bank}
            onChange={this.handleChangeBank}
            placeholder='Bank Details'
            className='ContactIM'
            required
                    />

          <button color='black' inverted value='Submit'>
            {/* <Icon name='checkmark' /> Submit! */}
                    </button>
        </form>

      </div>
    )
  }
}
