import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            THE NEW<br />
            STANDARD
          </h1>
          <p className="hero-subtitle">UNDER FAVORABLE SMARTWATCHES</p>
          <div className="hero-price">
            <span className="price-label">FROM</span>
            <span className="price-amount">
              <sup>$</sup>750<sup>99</sup>
            </span>
          </div>
          <button className="cta-button">Start Buying</button>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=80" 
            alt="Smartwatches" 
            className="watch-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
