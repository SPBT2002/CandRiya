import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import PopularProducts from './components/PopularProducts';
import BestSellers from './components/BestSellers';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ProductShowcase />
      <PopularProducts />
      <BestSellers />
    </div>
  )
}

export default App
