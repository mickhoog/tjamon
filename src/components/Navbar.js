import React from "react"
import {
  Navbar,
  Nav,
} from "react-bootstrap"

import Link from 'gatsby-link'

export default () => (
  <div className="sticky-top" style={{paddingBottom:"57px"}}>
  <Navbar bg="white" expand="sm"> 
      {/* kies of je sm of md voor wanneer het menu inklapt wil gebruiken. sm is groter */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="m-auto" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          <Link to="/" className="mx-5 nav-link text-capitalize"> <span className="navLinkText">Home</span></Link>
          <Link to="/wine" className="mx-5 nav-link text-capitalize"> <span className="navLinkText">Wine list</span></Link>
          <Link to="/contact" className="mx-5 nav-link text-capitalize"> <span className="navLinkText">Contact</span></Link>
        </Nav>
      </Navbar.Collapse>
 
  </Navbar>
  </div>
)
