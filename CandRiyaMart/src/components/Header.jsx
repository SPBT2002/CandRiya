import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="logo">
            <span className="logo-tron">Tron</span>
            <span className="logo-mart">Mart</span>
          </div>

          <div className="search-bar">
            <select className="category-dropdown">
              <option>All Categories</option>
              <option>Electronics</option>
              <option>Fashion</option>
              <option>Home & Garden</option>
            </select>
            <input 
              type="text" 
              placeholder="Search for products" 
              className="search-input"
            />
            <button className="search-btn">SEARCH</button>
          </div>

          <div className="header-actions">
            <div className="contact-info">
              <i className="bi bi-telephone"></i>
              <div>
                <span className="need-help">Need Help?</span>
                <br />
                <span className="phone-number">+68 9229 8238</span>
              </div>
            </div>
            <div className="wishlist-cart">
              <div className="icon-item">
                <i className="bi bi-heart"></i>
                <span>My<br />Wishlist</span>
              </div>
              <div className="icon-item">
                <i className="bi bi-cart"></i>
                <span>My<br />Cart</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="nav-bar">
        <div className="container">
          <button className="shop-categories-btn">
            <i className="bi bi-list"></i> Shop Categories
          </button>
          <nav className="main-nav">
            <a href="#home" className="nav-link active">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#shop" className="nav-link">Shop</a>
            <a href="#blog" className="nav-link">Blog</a>
            <a href="#faqs" className="nav-link">Faq's</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          <div className="todays-deal">
            <i className="bi bi-heart"></i> Today's Deal <span className="hot-badge">HOT</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
