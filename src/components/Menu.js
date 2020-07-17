import React, { Component } from "react"
import WineListItem from "../components/WineListItem"
import { Button } from "react-bootstrap"

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
    }
  }

  handleProducts = category => {
    let tempProducts = [...this.state.products];
    if(category === "all"){
        this.setState(()=>{
            return {wineProducts:tempProducts}
        })
    } else {
        let products = tempProducts.filter(({node}) => node.category === category)
        this.setState(()=>{
            return {wineProducts:products}
        })
    }
  }

  render() {
    if (this.state.products.length > 0) {
      //
      return (
        <section className="menu py-5">
          <div className="container">
            {/* categories */}
            <div className="row mb-5">
              <div className="col-10 mx-auto text-center">
                {this.state.categories.map((category, index) => {
                  return (
                    <button
                      type="button"
                      key={index}
                      className="btn text-capitalize m-3"
                      onClick={() => {
                        this.handleProducts(category)
                      }}
                    >
                      {category}
                    </button>
                  )
                })}
              </div>
            </div>
            <div className="row mb-5">
              {/* products */}
              {this.state.wineProducts.map(({ node }) => (
                <WineListItem node={node} />
              ))}
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
