import React from "react"
import {
  Navbar,
  Nav,
} from "react-bootstrap"

import Link from 'gatsby-link'

export default () => (
  <div className="sticky-top">
  <Navbar bg="white" expand="sm"> 
      {/* kies of je sm of md voor wanneer het menu inklapt wil gebruiken. sm is groter */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="m-auto" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          <Link to="/" className="mx-5 nav-link"> <b>Home</b></Link>
          <Link to="/wine" className="mx-5 nav-link"> <b>Wine list</b></Link>
          <Link to="/contact" className="mx-5 nav-link"> <b>Contact</b></Link>
        </Nav>
      </Navbar.Collapse>
 
  </Navbar>
  </div>
)
