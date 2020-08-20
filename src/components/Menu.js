import React, { Component } from "react"
import Image from "gatsby-image"
import Link from "gatsby-link"

const getCategories = products => {
  let tempProducts = products.map(products => {
    return products.node.category
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
      products: props.products.edges,
      wineProducts: props.products.edges,
      categories: getCategories(props.products.edges),
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
        ({ node }) => node.category === category
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
        <section className="menu">
          <div className="container">
            {/* categories */}
            <div className="row mb-5">
              <div className="col-10 mx-auto text-center">
                {this.state.categories.map((category, index) => {
                  return (
                    <span
                      key={index}
                      className={"btn text-capitalize m-3 categoryButton " + (this.state.selectedCategory == category ? 'selectedCategory' : '')}
                      onClick={() => {
                        this.handleProducts(category)
                      }}
                    >
                      {category}
                    </span>
                  )
                })}
              </div>
            </div>
            <div className="row">
              {/* products */}
              {this.state.wineProducts.map(({ node }) => {
                return (
                  <div
                    key={node.id}
                    className="col-12 col-lg-4 col-md-6 col-sm-12 my-3 mx-auto text-center"
                  >
                    <Link to={node.slug}>
                      <div
                        style={{ backgroundColor: "white", paddingBottom:"15px", paddingTop:"15px" }}
                        className="text-center"
                      >
                        <Image
                          className="img-fluid"
                          fixed={node.image.childImageSharp.fixed}
                        />
                        <div>
                          {node.taste.map((value, index) => {
                            return (
                              <span className="tasteSpan text-capitalize" key={index}>
                                {value}
                              </span>
                            )
                          })}
                        </div>
                        <div>
                          <p className="wineTitle">
                            {node.name}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )
    } else {
      return (
        <section className="menu py-5">
          <div className="container">
            <div className="row">
              <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
                <h1>We are all out of wine :o..</h1>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }
}
