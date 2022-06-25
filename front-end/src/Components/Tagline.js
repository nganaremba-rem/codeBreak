import React from "react";
import { Link } from "react-router-dom";
import RandomImage from "../Components/RandomImage";

export default function Tagline() {
  return (
    <section className="front">
      <h1 className="tagline">Tagline describing your e-shop</h1>
      <RandomImage />
      <Link to={"/shop"}>
        <div className="shopNow">
          <button>Shop Now</button>
        </div>
      </Link>
    </section>
  );
}
