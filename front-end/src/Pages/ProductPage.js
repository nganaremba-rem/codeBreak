import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

export default function ProductPage() {
  window.scrollTo(0, 0);
  return (
    <>
      <Navbar />
      <div className="main-wrapper mt-3 d-flex p-3 mb-4 justify-content-center gap-5">
        <div className="productNormalImage">
          <img src="https://api.lorem.space/image/shoes?w=500&h=500" alt="" />
        </div>
        <div
          className=" product-details shadow p-lg-5 mb-5 bg-white"
          style={{
            width: "max-content",
            borderRadius: "2rem",
          }}>
          <h1 className="product-name m-lg-0">Nike Shoes</h1>
          <h4 className="product-price text-danger">Rs. 10,000</h4>
          <div className="quantity d-flex align-items-center gap-3">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              className="form-control"
              style={{ width: "5rem" }}
              min={1}
              max={5}
              defaultValue={1}
            />
          </div>
          <div className="d-flex flex-column gap-2 m-3">
            <Link to={"/cart"}>
              <button
                className="addToCart form-control btn btn-dark text-white p-3 fw-bold rounded-pill"
                style={{ verticalAlign: "middle" }}>
                Add to Cart
              </button>
            </Link>
            <Link to={"./buyNow"}>
              <button className="buy-now btn form-control btn-danger text-white fw-bold p-3 rounded-pill">
                Buy Now
              </button>
            </Link>
          </div>
          <div className="product-info">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat,
            nihil?
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
