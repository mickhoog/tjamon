import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import Layout from "../components/layout"

export const query = graphql`
    query($slug: String!){
        wineJson(slug: {eq: $slug}) {
            name
            image {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }
`


const WinePage = ({ data }) => {

    const wine = data.wineJson

    return (
        <Layout>
            <h1>{wine.name}</h1>
            <Image 
                fluid={wine.image.childImageSharp.fluid}
                alt={wine.name}
            />
        </Layout>
    )
}

export default WinePage