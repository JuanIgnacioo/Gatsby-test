import React from 'react'

// import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="/" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        <strong>Nicolas Caruso Lombardi </strong>
        <br />        
        Experiencia en asesoramiento legal
        <br />
        {/* crafted by <a href="http://html5up.net">HTML5 UP</a>. */}
      </h1>
    </div>
    {/* <Footer /> */}
  </header>
)

export default Header
