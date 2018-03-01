import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchData } from '../actions/index'

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { term: '' }

    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)

  }

  onInputChange(event) {
    this.setState({ term: event.target.value })
  }

  onFormSubmit(event) {
    event.preventDefault()

    this.props.fetchData(this.state.term)
    this.setState({ term: '' })
  }

  render() {
    return (
    <div className="container">
      <div className="row" id="search">
        <form className="col s12" onSubmit={this.onFormSubmit}>
          <div className="row">
            <div className="input-field col s12 center" id="search-input">
              <input type="text" className="validate" value={this.state.term} onChange={this.onInputChange} />
              <label className="" htmlFor="search">Search an item...</label>
            </div>
          </div>
        </form>
      </div>
    </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchData }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)
