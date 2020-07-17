import React from "react"
import Header from './Header'
import Navbar from './Navbar'
import background from "../images/background.jpg"
export default ({children}) =>
<div>
    <Header></Header>
    <Navbar></Navbar>
    <div style={{ backgroundImage: `url(${background})` }}>

    {children}
    </div>
    <div className="fixed-bottom ">footer here</div>
</div>