import React from "react"
import Layout from "../components/layout"
import "../style/custom.css"
import { Row, Col } from 'react-bootstrap'

//https://www.youtube.com/watch?v=mHFAM0CXviE kijk dit verder

//maybe ook deze https://www.youtube.com/watch?v=l6nmysZKHFU
export default () => (
  <Layout>
      <div className="container text-center py-sm-5" style={{}}>
        <h1>About us</h1>
        <hr></hr>
        <Row>

                        <Col
                            xs="12"
                            sm="12"
                            md="12"
                            lg="6"
                            xl="6">
                            <div className="p-3 h-100" style={{position: "relative" }}>
                                <li style={{listStyleType: "none"}}>
                                  <ul><h3>Email: email@tjamon.nl</h3></ul>
                                  <ul><h3>Phone: 0612345678</h3></ul>
                                  <ul><h3>Fax: 0612345678</h3></ul>
                                </li>
                            </div>
                        </Col>
                        <Col
                            xs="12"
                            sm="12"
                            md="12"
                            lg={{ order: 'first', size: 6 }}
                            xl={{ order: 'first', size: 6  }}
                            style={{height:"400px"}}
                            className="px-0 text-center"
                        >                            
                            <div className="w-100 h-100">
                              <p>Lorem ipsum dolorlit. Lorem ipsum
                                doloet, consectetur adipiscing elit.Lorem ipsum dolorlit. Lorem ipsumLorem ipsum dolorlit. Lorem ipsum
                                    doloet, consectetur adipiscing elit.Lorem ipsum dolorlit. Lorem ipsum  Lorem ipsum dolorlit. Lorem ipsum
                                doloet, consectetur adipiscing elit.Lorem ipsum dolorlit. Lorem ipsumLorem ipsum dolorlit. Lorem ipsum
                                    doloet, consectetur adipiscing elit.Lorem ipsum dolorlit. Lorem ipsum Lorem ipsum dolorlit. Lorem ipsumLorem ipsum dolorlit. Lorem ipsum
                                doloet, consectetur adipiscing elit.Lorem ipsum dolorlit. Lorem ipsumLorem ipsum dolorlit. Lorem ipsum
                                    doloet, consectetur adipiscing elit.Lorem ipsum dolorlit. Lorem ipsum  Lorem ipsum dolorlit. Lorem ipsum
                                doloet, consectetur adipiscing elit.Lorem ipsum dolorlit. Lorem ipsumLorem ipsum dolorlit. Lorem ipsum
                                    doloet, consectetur adipiscing elit.Lorem ipsum dolorlit. Lorem ipsum Lorem ipsum dolorlit. Lorem ipsum</p>
                            </div>
                        </Col>
                    </Row>
      </div>
  </Layout>
)
