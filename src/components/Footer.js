import React from 'react';
import footerStyles from "./Footer.module.css"
const Footer = () => (
    <footer className="sticky-bottom" style={{backgroundColor:"#23262c"}}>
    
      <div class="container-fluid text-center text-md-left">
    
        <div class="row">
    
          <div class="col-md-6 mt-md-0 mt-3 ">
    
            <h5 className="text-uppercase text-success">Footer Content</h5>
            <p className="text-uppercase text-success">Here you can use rows and columns to organize your footer content.</p>
    
          </div>
    
          <hr class="clearfix w-100 d-md-none pb-3"></hr>
    
          <div class="col-md-3 mb-md-0 mb-3">
    
            <h5 class="text-uppercase">Links</h5>
    
            <ul class="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
    
          </div>
    
          <div class="col-md-3 mb-md-0 mb-3">
    
            <h5 class="text-uppercase">Links</h5>
    
            <ul class="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
    
          </div>
    
        </div>
    
      </div>    
    </footer>
)
export default Footer;