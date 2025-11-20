import React from 'react';
import './BestSellers.css';

const BestSellers = () => {
  const products = [
    {
      id: 1,
      name: 'Tablet Air 3 WiFi 64GB Gold',
      price: 629.00,
      image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&q=80',
      badge: 'Tablets'
    },
    {
      id: 2,
      name: 'Gear Virtual Reality',
      price: 799.00,
      image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=400&q=80',
      badge: 'SmartWatch'
    },
    {
      id: 3,
      name: 'Tablet White EliteBook Revolve 810 G2',
      price: 1999.00,
      originalPrice: 2299.00,
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&q=80',
      badge: 'Laptop'
    },
    {
      id: 4,
      name: 'Pendrive USB 3.0 Flash 64 GB',
      price: 110.00,
      image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&q=80',
      badge: 'Accessories'
    },
    {
      id: 5,
      name: 'Wireless Audio System Multiroom 360',
      price: 685.00,
      image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&q=80',
      badge: 'Phone'
    },
    {
      id: 6,
      name: 'Purple Solo 2 Wireless',
      price: 685.00,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80',
      badge: 'Headphones'
    }
  ];

  return (
    <section className="best-sellers">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Best Seller</span>
          <h2 className="section-title">Our Best Salles</h2>
        </div>

        <div className="best-sellers-grid">
          {products.map((product) => (
            <div key={product.id} className="best-seller-card">
              <span className="best-seller-badge">{product.badge}</span>
              <div className="best-seller-image">
                <img src={product.image} alt={product.name} />
              </div>
              <h3 className="best-seller-name">{product.name}</h3>
              <div className="best-seller-price">
                {product.originalPrice && (
                  <span className="price-original">${product.originalPrice.toFixed(2)}</span>
                )}
                <span className="price-current">${product.price.toFixed(2)}</span>
              </div>
              <button className="best-seller-cart-btn">
                <i className="bi bi-cart-plus"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
