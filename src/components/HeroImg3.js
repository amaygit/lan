import React, { Component } from 'react'
import "./HeroImg3Styles.css"
import { Link } from 'react-router-dom'
class HeroImg3 extends Component {
  render(){
  return (
    <div className='hero-img'>
      <div className='heading'>
        <h1>{this.props.heading}</h1>
        <div className="paragraph-container">
      <p>{this.props.text}</p>
      <p className='mobile-paragraph'>Byte Craft Labs is a dynamic and innovative company at the forefront of cutting-edge technology. Our expertise spans a wide spectrum, from Cloud Computing with GCP and AWS to crafting Web 3 and Blockchain applications. We're the architects behind top-notch Android Apps, pioneers in AI/ML solutions, and masters of Python programming. Additionally, our Web Development team excels in creating Web 2 experiences that redefine the digital landscape. At Byte Craft Labs, we transform ideas into reality,</p>
    </div>
    {/* <div className="button-container">
          <Link to={""}>
            <button className="custom-button">Fill Here</button>
          </Link>
        </div> */}
      </div>
    </div>
  )}
}

export default HeroImg3