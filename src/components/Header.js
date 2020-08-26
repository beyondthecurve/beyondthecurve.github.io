import React from 'react';
import logo from '../imgs/logo.png'

const Header = () => {
  return (
    <header className="d-flex align-items-center site-header">
      <img src={logo} className="img site-logo mx-3"/>
      <h2 className="header">Beyond The Curve </h2>
    </header>
  )
}

export default Header
