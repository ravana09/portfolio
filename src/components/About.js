import React from 'react'
import aboutImage1 from '../assets/aboutImage1.png'
import '../css/About.css'


function About() {
  
  return (
      <section id='about' className='aboutSection'>
        <h2>About</h2>
        <div className='aboutContainer'>
          <img src = {aboutImage1} alt = 'aboutImage' />
        </div>
        <div>
          <h3>About Me</h3>
          <h3>Hi !, I'm Subaguru Prabakaran</h3>
          <p>A passionate MERN Stack Developer with 2 years of experience in building dynamic and responsive web applications using MongoDB, Express.js, React, and Node.js.</p>

        
        </div>
      </section> 
  )
}

export default About
