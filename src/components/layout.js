import React from "react"
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import background from "../images/background.jpg"
export default ({children}) =>
<div>
    <Header></Header>
    <Navbar></Navbar>
    <div style={{ backgroundImage: `url(${background})`, paddingBottom: "35px"}}>
        {children}
    </div>
    <Footer></Footer>
</div>