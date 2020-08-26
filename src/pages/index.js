import React from "react"
import Layout from "../components/layout"
import "../style/custom.css"
import { Container, Row, Col, Carousel } from "react-bootstrap"
import cheers from '../images/cheers.jpg'
import grapes from '../images/grapes.jpg'
import rose from '../images/rose.png'

export default () => (
  <Layout>
    <div>
      {/* <Container fluid className="px-0">
        <div class="row">
 
    <img class='img-fluid w-100' src={slide1} alt="" />

       </div>
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide1}
            alt="First slide"
          />
          <Carousel.Caption className="text-left">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            // src="https://mdbootstrap.com/img/Photos/Slides/img%20(33).jpg"
            src="https://via.placeholder.com/800x400.png"
            alt="Second slide"
          />
          <Carousel.Caption className="carousel-caption-middle text-middle">
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400.png"
            alt="Third slide"
          />
          <Carousel.Caption className="carousel-caption-top text-right">
            <h3>Third slide label</h3>
            <br></br>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </Container> */}
    
    <Container fluid style={{ minHeight: "760px"}} className="py-sm-4">
      <Row className="w-75 mx-auto" >        
        <Col xs="12"
          sm="12"
          md="12"
          lg="6"
          xl="4"
          style={{  backgroundColor:"#d1c0b9", color:"#343340", height: "380px" }}
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

        <Col xs="12"
            sm="12"
            md="12"
            lg="6"
            xl="4"
            style={{  backgroundColor:"#e0e4ed", color:"#343340", height: "380px" }}
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

            <Col xs="12"
            sm="12"
            md="12"
            lg="6"
            xl="4"
            style={{ height: "380px" }}
            className="px-0 d-none d-md-block"
            >
            <img className="w-100 h-100 mx-auto" src={rose} alt="Alt"></img>
        </Col>
    
        <Col xs="12"
            sm="12"
            md="12"
            lg="6"
            xl="4"
            style={{  backgroundColor:"#343340", color:"#d5d4de", height: "380px" }}
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

        <Col xs="12"
            sm="12"
            md="12"
            lg="6"
            xl="4"
            style={{ height: "380px" }}
            className="px-0 d-none d-md-block"
            >
            <img className="w-100 h-100 mx-auto" src={grapes} alt="Alt"></img>
        </Col>
  </Row>
    </Container>
    </div>
  </Layout>
)
