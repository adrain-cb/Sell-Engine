import React, {Component} from 'react'
import {connect} from 'react-redux'

class ItemData extends Component {
  constructor(props){
    super(props)

    this.state = { averagePrice: '', medianPrice: '' }

  }

  render() {
    return (<ul>
      <li className="collection-item">
        <h1 className="center flow-text" id="header">Item Sell Data</h1>
      </li>
      <li className="collection-item">
        <div className="row">
          <div className="col s12 l6 m12">
            <h6 className="title">Average Price:
            </h6>
            <p className="title">Median Price:
            </p>
            <p className="title">Most Common Price:
            </p>
            <p className="title">Median Price:
            </p>
            <p className="title">Price Range:
            </p>
          </div>
          <div className="col s12 l6 m12">
            <p className="title">Average Shipping Cost:
            </p>
            <p className="title">Median Price:
            </p>
            <p className="title">Most Common Price:
            </p>
            <p className="title">Median Price:
            </p>
            <p className="title">Price Range:
            </p>
          </div>
        </div>
      </li>
      <li className="collection-item">
        <h2 className="left-align flow-text">Recommended Price:
        </h2>
      </li>
    </ul>)
  }
}

function mapStateToProps({ebayData}) {
    return {ebayData}
  }

export default connect(mapStateToProps)(ItemData)
