import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="blue darken-3 nav-wrapper">
          <a href="#" className="brand-logo" id="logo">Sell Engine</a>
          <a href="#" data-activates="mobile-demo" className="button-collapse">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li><a href="#">Pricing</a></li>
            <li><a href="#">About</a></li>
          </ul>
          <ul className="side-nav" id="mobile-demo">
            <li><a href="#">Pricing</a></li>
            <li><a href='#'>About</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
