import React from "react"
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import background from "../images/background.jpg"
export default ({children}) =>
<div>
    {/* <SEO>TJAMON</SEO> */}
    <Header></Header>
    <Navbar></Navbar>
    <div style={{ backgroundImage: `url(${background})` }}>

    {children}
    </div>

    <Footer></Footer>
{/* 
    <div className="fixed-bottom">footer here</div> */}
</div>