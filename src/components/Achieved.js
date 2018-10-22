import React, { Component } from 'react'
import { Card } from 'antd'

const { Meta } = Card

class Achieved extends Component {
  render () {
    return (
      <div>
        <h1>Connect With Agriculture</h1>

        <div className='Target_Div'>
          <div>
            <div>
              {' '}<Card
                hoverable
                style={{ width: 270 }}
                cover={
                  <img src={require('../Img/shop.png')} alt='download me' className='Target_Img' />
                                }
                            >
                <Meta title='Shop' style={{ width: 240 }} />
              </Card>

            </div>

          </div>
          <div>
            <div>
              {' '}<Card
                hoverable
                style={{ width: 270 }}
                cover={
                  <img src={require('../Img/Think.png')} alt='download me' className='Target_Img' />
                                }
                            >
                <Meta title='Think' style={{ width: 240 }} />
              </Card>

            </div>

          </div>
          <div>
            <div>
              {' '}<Card
                hoverable
                style={{ width: 270 }}
                cover={
                  <img src={require('../Img/grow.png')} alt='download me' className='Target_Img' />
                                }
                            >
                <Meta title='Grow' style={{ width: 240 }} />
              </Card>

            </div>

          </div>
        </div>

      </div>
    )
  }
}

export default Achieved
