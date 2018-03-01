import React, { Component } from 'react';
import './App.css';
import SearchBar from './containers/SearchBar'
import Navbar from './components/Navbar'
import ListItem from './components/ListItem'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SearchBar />
        <div className="container">
          <div className="row">
            <div className="col s12 l6 m6">
              <h4 className="title left-align">Item Name:</h4>
            </div>
            <div className="col s12 l6 m6">
              <h4 className="title center-align">Recommended Sell Price:</h4>
            </div>
          </div>
        </div>
        <ListItem />
        <Footer />
      </div>
    );
  }
}

export default App;
