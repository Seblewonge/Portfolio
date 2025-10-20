import React from 'react'
import heroimg from "../../assets/heroimg.png";
import themeicon from '../../assets/themeIcon.svg'
const Hero = () => {
  return (
    <section id='hero' className='container'>
      <div className='colorModeContainer'>
      <img className ='hero' src={heroimg} alt="Pottfolio" />
<img src={themeicon} alt="" />
     </div>
    </section>
  )
}

export default Hero
