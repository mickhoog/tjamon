import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import Layout from "../components/layout"
import { Row, Col } from 'react-bootstrap'
import grapes from '../images/grapes.jpg'

export const data = graphql`
    query($slug: String!){
        productsJson(slug: {eq: $slug}) {
            name
            slug
            subcategory
            subtitle
            id
            categoryId
            description
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


const WinePage = ({data}) => {
    return (
        <Layout>
            <section className="py-sm-5">
                <div className="container" style={{border:"1px solid #23262c", backgroundColor: "white"}}>
                    <Row>
                        <Col
                            xs="12"
                            sm="12"
                            md="12"
                            lg="6"
                            xl="6"
                            style={{height:"400px"}}
                            className="px-0 text-center"
                        >                            
                            <div className="w-100 h-100">
                                <img className="h-100 py-3 mx-auto" src={data.productsJson.image.childImageSharp.fluid.src} alt="Alt"></img>
                            </div>
                        </Col>
                        <Col
                            xs="12"
                            sm="12"
                            md="12"
                            lg="6"
                            xl="6"
                            
                            style={{minHeight: "400px"}}  >
                            <div className="p-3 h-100" style={{position: "relative" }}>
                                <div style={{marginBottom: "15px"}}>
                                <h2 style={{color: "#d03e3b"}} >{data.productsJson.name}</h2>
                                    <h3>
                                    {data.productsJson.subtitle.map((value, index) => {
                                        return (
                                        <span className="subTitleSpan text-capitalize" key={index}>
                                            {value}
                                        </span>
                                        )
                                    })}
                                    </h3>
                                    <hr></hr>
                                    <p>
                                    {data.productsJson.description}
                                    </p>
                                </div>
                                <div style={{height:"35px", background: "transparent"}}>

                                </div>
                                    <div style={{position: "absolute", bottom:"0"}}>
                                    <hr></hr>
                                    <p className="my-3">Interested? Click here to send us an email or call us at: 0612345678</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </Layout>
    )
}

export default WinePage