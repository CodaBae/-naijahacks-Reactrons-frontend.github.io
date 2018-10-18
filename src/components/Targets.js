import React, { Component } from 'react'
import { Popover } from 'antd'
import { Card } from 'antd'

const { Meta } = Card
const contentShop = (
  <div>
    <p>Order Your Veggies </p>
    <p>Order Your SeaFood</p>
    <p>Order LifeStock</p>
    <p>Order Your Farming tools</p>
    <p>Order your Pets</p>

  </div>
)
const contentThink = (
  <div>

    <p>Contect With a Farming, Start A StartUp</p>
    <p>Contect With a StockMan,  Start A StartUp</p>{' '}
  </div>
)
const ContentGrow = (
  <div>
    <p>Grow From Being a Buyer to a Seller</p>

  </div>
)

class Targets extends Component {
  render () {
    return (
      <div>
        <h1>Vision</h1>

        <div className='Target_Div'>
          <Popover content={contentShop} title='Title'>
            <div>
              <div>
                {' '}<Card
                  hoverable
                  style={{ width: 270 }}
                  cover={
                    <img
                        src={require('../Img/shop.png')}
                        alt='download me'
                        className='Target_Img'
                                        />
                                    }
                                >
                  <Meta title='Shop' style={{ width: 240 }} />
                </Card>

              </div>

            </div>
          </Popover>
          <Popover content={contentThink} title='Title'>
            <div>
              <div>
                {' '}<Card
                  hoverable
                  style={{ width: 270 }}
                  cover={
                    <img
                        src={require('../Img/Think.png')}
                        alt='download me'
                        className='Target_Img'
                                        />
                                    }
                                >
                  <Meta title='Think' style={{ width: 240 }} />
                </Card>

              </div>

            </div>
          </Popover>
          <Popover content={ContentGrow} title='Title'>
            <div>
              <div>
                {' '}<Card
                  hoverable
                  style={{ width: 270 }}
                  cover={
                    <img
                        src={require('../Img/grow.png')}
                        alt='download me'
                        className='Target_Img'
                                        />
                                    }
                                >
                  <Meta title='Grow' style={{ width: 240 }} />
                </Card>

              </div>

            </div>
          </Popover>
        </div>

      </div>
    )
  }
}

export default Targets
