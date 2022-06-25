import React from "react";
import Navbar from "../Components/Navbar";
import "../CSS/Cart.css";
import { Link } from "react-router-dom";

export default function BuyNow() {
  return (
    <>
      <Navbar></Navbar>
      <div className="main-wrapper mt-3">
        <div className="carts  shadow rounded-3 p-4">
          <table className="table table-hover">
            <thead>
              <th>PRODUCT</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>TOTAL</th>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img
                    src="https://api.lorem.space/image/shoes?w=100&h=100"
                    alt=""
                  />
                  <div className="product-name">Shoes</div>
                </td>
                <td>Rs. 9000</td>
                <td>
                  <input
                    className="form-control"
                    type="number"
                    name="quantity"
                    id="quantity"
                    style={{ maxWidth: "6rem" }}
                  />
                </td>
                <td>Rs. 9000</td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src="https://api.lorem.space/image/shoes?w=100&h=100"
                    alt=""
                  />
                  <div className="product-name">Shoes</div>
                </td>
                <td>Rs. 9000</td>
                <td>
                  <input
                    className="form-control"
                    type="number"
                    name="quantity"
                    id="quantity"
                    style={{ maxWidth: "6rem" }}
                  />
                </td>
                <td>Rs. 9000</td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className=" d-flex flex-column justify-content-between carts-totals shadow shadow rounded-3 p-4 position-relative">
          <div className="detail">
            <h4>CART TOTALS</h4>
            <div className="row">
              <div className="col  fw-bold">Subtotal: </div>
              <div className="col">Rs 8000</div>
            </div>
            <div className="row">
              <div className="col fw-bold">Shipping Address: </div>
              <div className="col">Kwakeithel Akham Leikai</div>
            </div>
            <div className="row">
              <div className="col fw-bold">Total: </div>
              <div className="col">Rs. 8000</div>
            </div>
          </div>
          <Link to={"/shop/1/buyNow"}>
            <button className="btn btn-primary">Proceed to checkout</button>
          </Link>
        </div>
      </div>
    </>
  );
}
