import React, { Component } from 'react'

class AboutUs extends Component {
  render () {
    return (
      <div className='About_Div'>
        <h2 className='About_Header'>About Us</h2>
        <h3 className='About_Text' />
        <h3 className='About_Text'>
                    iFarm is a proposed agricultural ecommerce site for buying and selling of any agricultural products and equipments .We Connect Buyers to sellers.
                    {' '}
        </h3>
        <h3 className='About_Text' />

        <h3 className='About_Text'>
                    Do you want to start a business that has to do with the agricultual sector? You are at the right place, lets connect you with the right farmer or stockman to help  manage your startup
                </h3>

        <h3 className='About_Text'>
                    Are you a business man or woman based on Agricultural products? iFarm gives you the opportunity to sell your products on our platform.
                    {' '}
          {' '}
        </h3>
      </div>
    )
  }
}

export default AboutUs
