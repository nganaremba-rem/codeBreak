import React from "react";
import Navbar from "../Components/Navbar";
import BillingAddress from "../Components/BillingAddress";
import "../CSS/confirmation.css";

export default function confirmationPage() {
  window.scrollTo(0, 0);
  return (
    <>
      <Navbar></Navbar>
      <div className="mainWrapper mt-4 d-flex justify-content-center">
        <div
          className=" w-50 shadow mb-5"
          style={{ borderRadius: "5rem", overflow: "hidden" }}>
          <h1
            id="orderConfirm"
            className="text-center text-white p-3 bg-success font-italic">
            Order Confirmed
          </h1>
          <div
            className="order-summary p-4 m-4"
            style={{ borderRadius: "3rem", background: "#F3F6FA" }}>
            <h3 className="product-name">Shoes</h3>
            <div className="orderSubtotal row" style={{ marginLeft: "2rem" }}>
              <div className="subtotal col-2 text-muted">Subtotal</div>
              <div className="col-10 fw-bold">Rs 8000</div>
            </div>
            <div className="ml-5 row" style={{ marginLeft: "2rem" }}>
              <div className="text-muted col-2">Total</div>
              <div className="h5 fw-bold col-10">Rs. 8000</div>
            </div>
          </div>
          <div className="address-payment d-flex justify-content-between p-5 m-4">
            <BillingAddress />
            <div className="payment">
              <div className="payment-method fw-bold">Payment Method</div>
              <div className="method text-muted">Cash on Delivery</div>
            </div>
          </div>
          <button
            className="btn btn-danger ml-5 mb-5 p-3"
            style={{
              marginLeft: "50%",
              transform: "translateX(-50%)",
              borderRadius: "1000vmax",
            }}>
            Download Receipt
          </button>
        </div>
      </div>
    </>
  );
}
