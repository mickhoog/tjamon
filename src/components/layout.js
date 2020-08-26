import React from "react"
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import background from "../images/background.jpg"
export default ({children}) =>
<div>
    <Header></Header>
    <Navbar></Navbar>
    <div style={{ backgroundImage: `url(${background})`, minHeight: "450px"}}>
        <header style={{minHeight: "15px", backgroundColor:"#23262c"}}></header>
        {children}
    </div>
    <Footer></Footer>
</div>