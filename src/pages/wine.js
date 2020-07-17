import React, {Component} from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import Menu from "../components/Menu"

// export const asd = graphql`
//   query($category: String!) {
//     allWineJson(filter: {category: {eq: $category}}) {
//       totalCount
//       edges {
//         node {
//           slug
//           name
//           image {
//             childImageSharp {
//               fluid {
//                 srcSet
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `

export const asd = graphql`
  query {
    allWineJson {
      totalCount
      edges {
        node {
          slug
          name
          category
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


export default ({ data }) => (
  <Layout>
    <div style={{ border: "1px solid black" }}>
      <Menu products={data.allWineJson}/>
    </div>
  </Layout>
)
