import React from 'react'
import {FaHome,FaPhone,FaMailBulk,FaFacebook,FaLinkedin,FaTwitter} from "react-icons/fa"
import "./FooterStyles.css"
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            <div>
              <p>Outer Ring Road, Marathalli</p>
              <p>Bengaluru.</p>
            </div>
          
          </div>
          <div className='phone'>
              <h4>
          <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
          {/* <a href="tel:++919740282157"> */}
          +91 9740282157
          {/* </a> */}
                </h4>            
          </div>
          <div className='email'>
              <h4>
                
          <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
          {/* <a href="mailto:mailamaynayak@gmail.com"> */}
          mailamaynayak@gmail.com
          {/* </a> */}
                </h4>            
          </div>
        </div>
        <div className='right'>
        <h4>About the company</h4>
            <p>This is me Amay, CEO & Founder of ByteCode. For any queries feel free contact us</p>
        <div className='social'>
        <FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}}/>
        <FaTwitter size={30} style={{color:"#fff",marginRight:"1rem"}}/>
        <FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}}/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer