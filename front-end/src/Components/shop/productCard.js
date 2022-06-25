import React from "react";
import { Link } from "react-router-dom";

export default function productCard() {
  return (
    <>
      <Link to={"/shop/id"} style={{ textDecoration: "none", color: "black" }}>
        <div className="product-card">
          <div className="product-img">
            <img
              src="https://api.lorem.space/image/shoes?w=500&h=500"
              alt="Image"
              loading="lazy"
            />
            <div className="add-to-cart">
              <button>Add to cart</button>
            </div>
          </div>
          <div className="product-body">
            <h5 className="product-title">SHOES</h5>
            <p className="product-price text-danger fw-bold">Rs. 7000</p>
          </div>
        </div>
      </Link>
    </>
  );
}
