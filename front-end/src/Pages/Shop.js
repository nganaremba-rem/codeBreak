import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import "../CSS/shop.css";
import ProductCard from "../Components/shop/productCard";
import Footer from "../Components/Footer";

export default function Shop() {
  window.scrollTo(0, 0);
  const renderCards = () => {
    const ids = [];
    for (let i = 0; i < 10; i++) {
      ids.push(i);
    }

    return ids.map((id) => {
      return <ProductCard key={id} />;
    });
  };
  return (
    <>
      <Navbar />
      <div className="shop mb-lg-5">
        <section className="sidebar">
          <h3>Categories</h3>
          <ul>
            <li className="categories-item active-category">All</li>
            <li className="categories-item">Clothings</li>
            <li className="categories-item">Computers</li>
            <li className="categories-item">Mobile Phones</li>
            <li className="categories-item">Accessories</li>
            <li className="categories-item">Groceries</li>
            <li className="categories-item">Medicines</li>
          </ul>
        </section>
        <section className="main-section">
          <div className="operations">
            <div className="sort">
              <select
                class="form-select mb-3"
                aria-label=".form-select-lg example">
                <option selected>Sort By</option>
                <option value="popularity">Popularity</option>
                <option value="priceH2L">Price: High to Low</option>
                <option value="priceL2H">Price: Low to High</option>
              </select>
            </div>
          </div>
          <main className="products">{renderCards()}</main>
        </section>
      </div>
      <Footer />
    </>
  );
}
