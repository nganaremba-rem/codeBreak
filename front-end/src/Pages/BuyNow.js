import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

export default function BuyNow() {
  useEffect(() => {
    const debit = document.querySelector("#debit");
    const upi = document.querySelector("#upi");
    const cod = document.querySelector("#cod");
    const payNow = document.querySelector("#payNow");

    payNow.addEventListener("click", (e) => {
      if (debit.checked || upi.checked || cod.checked) {
        return;
      }
      alert("Please select at least one payment method");
      e.preventDefault();
    });
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <div className="main-wrapper mt-3 mb-4 d-flex justify-content-center ">
        <div className="orders shadow rounded-3 p-4 w-75">
          <h4
            className="bg-info p-4 text-white"
            style={{ borderRadius: "3rem" }}>
            Summary
          </h4>
          <table className="table mt-4 ">
            <thead>
              <th>Product</th>
              <th>Order ID</th>
              <th>Amount</th>
            </thead>
            <tbody>
              <tr>
                <td>Shoes</td>
                <td>2893748932</td>
                <td>Rs. 8000</td>
              </tr>
            </tbody>
          </table>
          <div className="delivery-address mt-5">
            <h4
              className="bg-secondary p-4 text-white"
              style={{ borderRadius: "3rem" }}>
              Delivery Address
            </h4>
            <div className="delivery-body-wrapper m-lg-5">
              <div className="name fw-bold">Jenitkumar</div>
              <div className="phone-no">1234567890</div>
              <div className="address text-muted">
                <div className="street">Kwakeithel</div>
                <div className="pin-code">795001</div>
              </div>
              <button className="btn btn-secondary">
                Change Delivery Address
              </button>
            </div>
          </div>
          <h4
            className="mt-5 bg-success p-4 text-white"
            style={{ borderRadius: "3rem" }}>
            Payment
          </h4>
          <div className="payments m-lg-3 d-flex flex-column gap-3">
            <div className="payment-method  d-flex gap-3 align-items-center">
              <input type="radio" name="payment" id="debit" value={"debit"} />
              <label htmlFor="debit">Add Debit/Credit/ATM Card</label>
            </div>
            <div className="payment-method  d-flex gap-3 align-items-center">
              <input type="radio" name="payment" id="upi" value={"upi"} />
              <label htmlFor="upi">UPI</label>
              <input
                className="form-control w-25"
                type="text"
                name="upi"
                id="upi"
                placeholder="Enter UPI ID"
              />
            </div>
            <div className="payment-method d-flex gap-3 align-items-center">
              <input type="radio" name="payment" id="cod" value={"cod"} />
              <label htmlFor="cod">Cash on Delivery</label>
            </div>
          </div>
          <Link to={"./confirmationPage"}>
            <button className="btn btn-danger w-25 p-3 mt-4" id="payNow">
              Pay Now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
