import React from 'react';
import Link from 'next/link';

const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">SMALL TEXT</p>
        <h3>MID TEXT</h3>
        <img src="" alt ="headphones" 
        className='hero-banner-image' />


        <div>
          <link href='/product/ID'>
            <button type='button'>BUTTON TEXT</button>
          </link>
          <div className='desc'>
            <h5>Description</h5>
            <h5>DESCRIPTION</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner