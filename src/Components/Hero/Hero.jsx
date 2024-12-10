import React from 'react';
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/Cream Minimal Collage Product Instagram Post.png';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2>New Arrivals Only</h2>
        <div>
          <div className="hero-hand-icon">
            <p> Our</p>
            <img src={hand_icon} alt="" />
          </div>
          <p id='product'>New</p>
          <p>Products</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Products</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className='hero-right'>
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
