import React from 'react'
import '../css/Home.css'
import clouds from '../assets/clouds.png'
import gif from '../assets/plane.gif'

function Home() {
  return (
    <div className='home'>
        <img src={clouds} alt="clouds" className="home-image" />
        <img src={gif} alt="animation" className="home-gif" />
        <span className='title'>Subaguru Prabakaran</span>
    </div>
  )
}

export default Home
