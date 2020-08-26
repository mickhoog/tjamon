import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import cheers from '../images/cheers.jpg'

  
export default class ImageColumn extends React.Component {
    render() {
      return(
    <Col xs="12"
        sm="12"
        md="12"
        lg="6"
        xl="4"
        style={{ height: "380px" }}
        className="px-0 d-none d-md-block"
        >
        <img className="w-100 h-100 mx-auto" src={cheers} alt="Alt"></img>
    </Col>
      )
    }
  }