import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const NotFound = () => {
  return (
    <Layout>
        <div className="container text-center my-5">
        <h1>Page not found. <br></br> 
        Click <Link to="/">Here</Link> to return to the home page
        </h1>
        

        </div>
      
    </Layout>
  )
}

export default NotFound