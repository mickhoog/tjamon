import React from "react"
import Layout from "../components/layout"
import "../style/custom.css"
import { Container, Row, Col, Carousel } from "react-bootstrap"
import waangaard from "../images/wijngaard.jpg"
//https://www.youtube.com/watch?v=mHFAM0CXviE kijk dit verder

//maybe ook deze https://www.youtube.com/watch?v=l6nmysZKHFU

//voor de data import https://www.youtube.com/watch?v=bBjUNCOeze4
export default () => (
  <Layout>
    <div>
      <Container fluid className="px-0">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400.png"
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
            alt="Third slide"
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
    </Container>

      <Container fluid style={{ marginTop: "100px", height: "760px"}}>
      {/* <Row className=" mx-auto" style={{width:"1140px"}}> */}
      <Row className="w-75 mx-auto">
        <Col
          xs="12"
          sm="12"
          md="6"
          lg="6"
          xl="4"
          style={{ height: "380px", backgroundColor:"white" }}
          className="px-0" >
          <div className="w-100 h-100 mx-auto">
            <div className="aboutUsShort">
              <h6>About us</h6>
              <h1>Storename</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </Col>
        <Col
          md="6"
          lg="6"
          xl="4"
          style={{ border: "1px solid red", height: "380px" }}
          className="px-0 d-none d-md-block"
        >
          <img className="w-100 h-100 mx-auto" src={waangaard}></img>
        </Col>
        <Col
          xs="12"
          sm="12"
          md={{span: 6}}
          lg="6"
          xl="4"
          style={{ border: "1px solid green", height: "380px" }}
          className="px-0"
        ><div className="w-100 h-100 mx-auto">
        <div className="aboutUsShort">
          <h6>About us</h6>
          <h1>Storename</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
        </Col>
        <Col
          xs="12"
          sm="12"
          md={{span: 6}}
          lg="6"
          xl="4"
          style={{ border: "1px solid blue", height: "380px" }}
          className="px-0 d-none d-md-block "
        >
          <img className="w-100 h-100 mx-auto" src={waangaard}></img>
        </Col>
        <Col
          xs="12"
          sm="12"
          md="6"
          lg="6"
          xl="4"
          style={{ border: "1px solid red", height: "380px" }}
          className="px-0"
        ><div className="w-100 h-100 mx-auto">
        <div className="aboutUsShort">
          <h6>About us</h6>
          <h1>Storename</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
        </Col>
        <Col
          xs="12"
          sm="12"
          md="6"
          lg="6"
          xl="4"
          style={{ border: "1px solid red", height: "380px" }}
          className="px-0 d-none d-md-block"
        >
          <img className="w-100 h-100 mx-auto" src={waangaard}></img>
        </Col>
      </Row>
    </Container>
    </div>
  </Layout>
)
