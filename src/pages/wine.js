import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Menu from "../components/Menu"

export const asd = graphql`
  query {
    allWineJson {
      totalCount
      edges {
        node {
          slug
          name
          category
          taste
          image {
            childImageSharp {
              fixed(height: 400) {
                ...GatsbyImageSharpFixed
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
      <section className="menu py-5">
        <div className="container">
          <div className="row">
            <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
              <h1>Our wines</h1>
            </div>
          </div>
        </div>
      </section>
      <Menu products={data.allWineJson} />
  </Layout>
)
