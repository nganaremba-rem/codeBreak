import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import "../CSS/shop.css";
import productCard from "../Components/shop/productCard";
import Footer from "../Components/Footer";

export default function Shop() {
  const [myData, setMyData] = useState();
  async function getData() {
    try {
      const data = await productCard();
      return setMyData(data.map((item) => item));
    } catch (e) {
      console.log(e);
    }
  }
  getData();
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
                className="form-select mb-3"
                aria-label="form-select-lg example">
                <option selected>Sort By</option>
                <option value="popularity">Popularity</option>
                <option value="priceH2L">Price: High to Low</option>
                <option value="priceL2H">Price: Low to High</option>
              </select>
            </div>
          </div>
          <main className="products">{myData}</main>
        </section>
      </div>
      <Footer />
    </>
  );
}
