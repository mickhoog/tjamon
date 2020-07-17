import React from "react"
import { graphql, Link } from "gatsby"

export default function WineListItem({ node }) {
    return (
      <div>
        <h3>
            <Link to={node.slug} className="mx-5 nav-link"> <b>{node.name}</b></Link>
        </h3>
      </div>
    )
  }
