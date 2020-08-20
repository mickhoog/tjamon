import React from 'react';
import { Container, Row, Col, Carousel } from "react-bootstrap"
const Footer = () => (
    <footer className="sticky-bottom" style={{backgroundColor:"#23262c"}}>
      <Container className="py-5">
      <Row>
        <Col xs="12"
          sm="12"
          md="6"
          lg="6"
          xl="6">
            <div><h1 style={{color:"white"}}>Tjamon imports vof.</h1></div>
          </Col>
          <Col xs="12"
          sm="12"
          md="6"
          lg="6"
          xl="6">
            <div><h2 style={{color:"white"}}>Contact</h2></div>
            <ul style={{color:"white", listStyleType:"none", paddingLeft:"0"}}>
              <li>Email: email@tjamon.nl</li>
              <li>Phone: 0612345678</li>
            </ul>
          </Col>
      </Row>
      </Container>    
    </footer>
)
export default Footer;