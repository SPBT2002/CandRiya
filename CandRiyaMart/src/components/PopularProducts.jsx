import React from 'react';
import './PopularProducts.css';

const PopularProducts = () => {
  const featuredProduct = {
    title: 'Game Console Controller + USB 3.0 Cable',
    price: 79.00,
    originalPrice: 99.00,
    available: 6,
    sold: 27,
    badge: 'Special Offer',
    dealBadge: 'Hot',
    endTime: 'Hurry Up! Offer Ends In:',
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&q=80'
  };

  const products = [
    {
      id: 1,
      name: 'Wireless Audio System Multiroom 360 degre F...',
      price: 685.00,
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80',
      badge: 'Speakers'
    },
    {
      id: 2,
      name: 'Tablet White EliteBook Revolve 810 G2',
      price: 1999.00,
      originalPrice: 2299.00,
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&q=80',
      badge: 'Laptop'
    },
    {
      id: 3,
      name: 'Purple Solo 2 Wireless',
      price: 685.00,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80',
      badge: 'Headphone'
    },
    {
      id: 4,
      name: 'Smartphone 6S 32GB LTE',
      price: 685.00,
      image: 'https://images.unsplash.com/photo-1592286927505-ed0ae84e3f0f?w=400&q=80',
      badge: 'Phones'
    },
    {
      id: 5,
      name: 'Widescreen NX Mini F1 SMART NX',
      price: 685.00,
      image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&q=80',
      badge: 'Camera'
    },
    {
      id: 6,
      name: 'Full Color LaserJet Pro M452dn',
      price: 685.00,
      image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400&q=80',
      badge: 'Printer'
    },
    {
      id: 7,
      name: 'Game Console Controller + USB 3.0 Cable',
      price: 79.00,
      originalPrice: 99.00,
      image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&q=80',
      badge: 'Gaming'
    },
    {
      id: 8,
      name: 'Tablet Air 3 WiFi 64GB Gold',
      price: 629.00,
      image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&q=80',
      badge: 'Tablet'
    }
  ];

  return (
    <section className="popular-products">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Our Products</span>
          <h2 className="section-title">Popular Products</h2>
        </div>

        <div className="products-layout">
          {/* Featured Product */}
          <div className="featured-product">
            <span className="product-deal-badge">{featuredProduct.dealBadge}</span>
            <span className="product-label-special">{featuredProduct.badge}</span>
            <div className="featured-image">
              <img src={featuredProduct.image} alt={featuredProduct.title} />
            </div>
            <h3 className="featured-title">{featuredProduct.title}</h3>
            <div className="featured-price">
              <span className="price-original">${featuredProduct.originalPrice.toFixed(2)}</span>
              <span className="price-current">${featuredProduct.price.toFixed(2)}</span>
            </div>
            <div className="featured-stats">
              <span>Available: {featuredProduct.available}</span>
              <span>Already Sold: {featuredProduct.sold}</span>
            </div>
            <div className="featured-countdown">
              <p>{featuredProduct.endTime}</p>
            </div>
          </div>

          {/* Product Grid */}
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card-item">
                <span className="product-badge">{product.badge}</span>
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <h3 className="product-name">{product.name}</h3>
                <div className="product-price">
                  {product.originalPrice && (
                    <span className="price-old">${product.originalPrice.toFixed(2)}</span>
                  )}
                  <span className="price-new">${product.price.toFixed(2)}</span>
                </div>
                <button className="add-to-cart-btn">
                  <i className="bi bi-cart-plus"></i>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
