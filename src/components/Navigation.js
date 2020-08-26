import React, {Component} from 'react'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
import {Link} from 'react-router-dom'

class Navigation extends Component {
  constructor () {
    super()
  }

    render() {
      return (
          <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="p-2">
              <Nav className="d-flex align-items-center justify-content-center">
                <Link to="/" className="navbar-link">About</Link>
                <NavDropdown title="Programs" className="navbar-link" id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <Link to="/subject-tutoring" className="navbar-link">Subject Tutoring</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/test-prep" className="navbar-link">Test Prep</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/summer-beyond" className="navbar-link">Summer Beyond</Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <Link to="/contact" className="navbar-link">Contact Us</Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
  }
}

export default Navigation
