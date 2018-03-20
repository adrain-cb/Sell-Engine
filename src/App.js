import React, { Component } from 'react';
import './App.css';
import SearchBar from './containers/SearchBar'
import Navbar from './components/Navbar'
import ItemData from './containers/ItemData'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="item-data">
          <div className="collection z-depth-2">
            <SearchBar />
            <ItemData />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
