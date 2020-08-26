import React, { Component } from "react"
import Image from "gatsby-image"
import Link from "gatsby-link"
import { Button } from "react-bootstrap"

const getCategories = products => {
  let tempProducts = products.map(product => {
    return product.node.subcategory
  })
  let tempCategories = new Set(tempProducts)
  let categories = Array.from(tempCategories)
  categories = ["all", ...categories]
  return categories
}

export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: props.products,
      wineProducts: props.products,
      categories: getCategories(props.products),
      selectedCategory: ""
    }
  }

  handleProducts = category => {
    let tempProducts = [...this.state.products]
    this.setState({
      selectedCategory: category
    });
    if (category === "all") {
      this.setState(() => {
        return { wineProducts: tempProducts }
      })
    } else {
      let products = tempProducts.filter(
         node => node.node.subcategory === category
      )
      this.setState(() => {
        return { wineProducts: products }
      })
    }
  }

  render() {
    if (this.state.products.length > 0) {
      //
      return (
        <section className="">
          <div className="container">
            {/* categories */}
            <div className="row my-3">
              <div className="col-10 mx-auto text-center">
                {this.state.categories.map((category, index) => {
                  return (
                    <span
                      key={index}
                      className={"btn text-capitalize m-3 categoryButton " + (this.state.selectedCategory === category ? 'selectedCategory' : '')}
                      onClick={() => {
                        this.handleProducts(category)
                      }}
                      onKeyDown={() => {
                        this.handleProducts(category)
                      }}
                      // role="link"
                      role="button" 
                      aria-pressed="false"
                      tabIndex={index}
                    >
                      {category}
                    </span>
                  )
                })}
                
              </div>
            </div>
            <hr></hr>
            <div className="row">
              {/* products */}
              {this.state.wineProducts.map( node  => {
                return (
                  <div
                    key={node.node.id}
                    className="my-3 mx-auto text-center"
                    xs="12"
                    sm="12"
                    md="12"
                    lg="6"
                    xl="4"
                  >
                    {/* <Link to={node.slug}> */}
                      <div
                        style={{ backgroundColor: "white", paddingBottom:"15px", paddingTop:"15px", width:"265px" }}
                        className="text-center"
                      >
                        <Image
                          className="img-fluid"
                          fixed={node.node.image.childImageSharp.fixed}
                        />
                        <div>
                          {node.node.subtitle.map((value, index) => {
                            return (
                              <span className="subTitleSpanMenu text-capitalize" key={index}>
                                {value}
                              </span>
                            )
                          })}
                        </div>
                        <div>
                          <p className="wineTitle">
                            {node.node.name}
                          </p>
                        </div>
                        <div>
                        <Link to={node.node.slug}>
                          <Button variant="outline-dark">Details</Button>
                          </Link>
                          </div>
                      </div>
                    {/* </Link> */}
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )
    } else {
      return (
        <section className="menu py-5" style={{minHeight:"375px"}}>
          <div className="container">
            <div className="row">
              <div className="col-10 col-sm-6 mx-auto text-center">
                <h1>No products found.</h1>
                <h2>Click <Link to="/">Here</Link> to return to the home page</h2>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }
}
