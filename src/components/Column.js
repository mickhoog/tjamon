import React from "react"
import { Container, Row, Col } from "react-bootstrap"

export default () => (
    <Col xs="12"
    sm="12"
    md="12"
    lg="6"
    xl="4"
    // style={{  backgroundColor:"#e0e4ed", color:"#343340", height: "380px" }}
    style={{  backgroundColor:"#d1c0b9", color:"#343340", height: "380px" }}
    // style={{  backgroundColor:"#343340", color:"#d5d4de", height: "380px" }}
    >
        <div className="w-100 h-100 mx-auto">
            <div className="aboutUsShort">
                <h6>About us</h6>
                <h1 style={{color:"#d03e3b"}}>Tjamon</h1>
                <p>
                Lorem ipsum dolorlit. Lorem ipsum
                doloet, consectetur adipiscing elit.
                m dolorlit. Lorem ipsum
                doloet, consectetur
                </p>
            </div>
        </div>
    </Col>
  )
  