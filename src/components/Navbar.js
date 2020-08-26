import React from "react"
import {
  Navbar,
  Nav,
} from "react-bootstrap"

import Link from 'gatsby-link'
import { useStaticQuery, graphql } from "gatsby"

const NavBar = (pageContext) => {
  const data = useStaticQuery(graphql`
    query {
      allCategoriesJson {
    nodes {
      categoryName
      categoryId
    }
  }
    }
  `)

  return(
    <div className="sticky-top" style={{paddingBottom:"57px"}}>
    <Navbar bg="white" expand="sm"> 
        {/* kies of je sm of md voor wanneer het menu inklapt wil gebruiken. sm is groter */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="m-auto" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Link to="/" className="mx-5 nav-link text-capitalize navLinkText" activeClassName="active"> Home</Link>
            {
              data.allCategoriesJson.nodes.map( node  => (
                <Link 
                to={`/${node.categoryName}`} key={node.categoryId}           
                className="mx-5 nav-link text-capitalize navLinkText" activeClassName="active">{node.categoryName}</Link>
              ))
            }
  
            <Link to="/about-us" className="mx-5 nav-link text-capitalize navLinkText" activeClassName="active">About us</Link>
          </Nav>
        </Navbar.Collapse>
   
    </Navbar>
    </div>
  )
}

export default NavBar
