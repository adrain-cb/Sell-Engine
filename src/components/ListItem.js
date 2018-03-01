import React from 'react'

const ListItem = (props) => {
  return (
    <div className="item-data">
      <ul className="collection z-depth-2">
        <h1 className="center flow-text" id="header">Item Data</h1>
        <hr />
        <li className="collection-item">
          <div className="row">
            <div className="col s6 l6 m6">
              <p className="title">Average Price: </p>
              <p className="title">Median Price: </p>
              <p className="title">Most Common Price: </p>
              <p className="title">Median Price: </p>
              <p className="title">Price Range: </p>
            </div>
            <div className="col s6 l6 m6">
              <p className="title">Average Shipping Cost: </p>
              <p className="title">Median Price: </p>
              <p className="title">Most Common Price: </p>
              <p className="title">Median Price: </p>
              <p className="title">Price Range: </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default ListItem
