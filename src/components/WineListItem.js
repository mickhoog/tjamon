import React from "react"
import { graphql, Link } from "gatsby"

export default function WineListItem({ node }) {
    return (
      <div style={{border:"1px solid red"}} xs="12"
      sm="12"
      md="6"
      lg="6"
      xl="4">
        <h3>
            <Link to={node.slug} className="mx-5 nav-link"> <b>{node.name}</b></Link>
        </h3>
      </div>
    )
  }
