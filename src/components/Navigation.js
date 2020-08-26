import React, {Component} from 'react'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'

class Navigation extends Component {
  constructor () {
    super()
  }

    render() {
      return (
          <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="p-2">
              <Nav className="d-flex align-items-end">
                <Nav.Link href="/" className="navbar-link">About</Nav.Link>
                <NavDropdown title="Programs" className="navbar-link" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/subject-tutoring" className="navbar-link">Subject Tutoring</NavDropdown.Item>
                  <NavDropdown.Item href="/test-prep" className="navbar-link">Test Prep</NavDropdown.Item>
                  <NavDropdown.Item href="/summer-beyond" className="navbar-link">Summer Beyond</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/contact" className="navbar-link">Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
  }
}

export default Navigation
