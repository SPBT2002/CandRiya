import React from 'react';
import './ProductShowcase.css';

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      title: 'Release Date & Price',
      subtitle: "Today's Super offer",
      image: 'https://images.unsplash.com/photo-1592286927505-ed0ae84e3f0f?w=400&q=80',
      badge: 'New Product'
    },
    {
      id: 2,
      title: 'Release Date & Price',
      subtitle: "Today's Super offer",
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&q=80',
      badge: 'New Product'
    },
    {
      id: 3,
      title: 'Release Date & Price',
      subtitle: "Today's Super offer",
      image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80',
      badge: 'New Product'
    },
    {
      id: 4,
      title: 'Release Date & Price',
      subtitle: "Today's Super offer",
      image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&q=80',
      badge: 'New Product'
    }
  ];

  return (
    <section className="product-showcase">
      {/* Banner Section */}
      <div className="showcase-banner">
        <div className="banner-content">
          <span className="banner-badge">EXCLUSIVE HEADPHONE</span>
          <h2 className="banner-title">Release Date & Price</h2>
          <p className="banner-subtitle">Today's Super offer</p>
        </div>
        <div className="banner-image">
          <img 
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80" 
            alt="Headphones Collection" 
          />
        </div>
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <span className="product-badge">{product.badge}</span>
            <div className="product-info">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-subtitle">{product.subtitle}</p>
            </div>
            <div className="product-image">
              <img src={product.image} alt={product.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductShowcase;
