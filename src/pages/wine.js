import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import WineListItem from '../components/WineListItem'

export const query = graphql`
  query {
    allWineJson {
        totalCount
      edges {
        node {
          slug
          name
          image {
            childImageSharp {
              fluid {
                srcSet
              }
            }
          }
        }
      }
    }
  }
`

// export const query = graphql`
// query {
//     site {
//       host
//     }
//   }
// `

export default ({ data }) => (
  <Layout>
    <p>wine page lol. {data.allWineJson.totalCount}</p>

    <div style={{border:"1px solid black"}}>
        {data.allWineJson.edges.map(({ node }) => (
            <WineListItem node={node}/>
        ))}
    </div>
  </Layout>
)
