import React from 'react';
import Link from 'next/link';
import { urlFor } from 'LIB/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">Beats solo Air</p>
        <h3>Summer Sale</h3>
        <h1>FINE</h1>
        <img src={urlFor(heroBanner.image)} alt ="headphones" 
        className="hero-banner-image" />


        <div>
          <Link href='/product/ID'>
            <button type='button'>BUTTON TEXT</button>
          </Link>
          <div className='desc'>
            <h5>Description</h5>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner