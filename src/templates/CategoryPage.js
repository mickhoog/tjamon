import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Menu from "../components/Menu"


export const query = graphql`
    query($categoryId: Int!){
      allProductsJson(filter: {categoryId: {eq: $categoryId}}) {
        edges {
          node {
            name
            slug
            id
            categoryId
            subtitle
            subcategory
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

const WinePage = ({ data }) => {
    return (
        <Layout>
        <section className="menu pt-5">
          <div className="container">
            <div className="row">
              <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
                <h1>Our products</h1>
              </div>
            </div>
            <hr></hr>
          </div>
        </section>
        <Menu products={data.allProductsJson.edges} />
    </Layout>
    )
}

export default WinePage