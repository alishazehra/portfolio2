import React from "react"
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./about/page";

import ContactPage from "./contact/page";


const Nav = () => {
  return (
    <div className='navbar'>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <Hero/>
      
      <Services/>
      <hr />
      <About/>
      <ContactPage/>
    </div>
   
   
  )
}

export default Nav