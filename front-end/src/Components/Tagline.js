import React from "react";
import RandomImage from "../Components/RandomImage";

export default function Tagline() {
  return (
    <section className="front">
      <h1 className="tagline">Tagline describing your e-shop</h1>
      <RandomImage />
      <div className="shopNow">
        <button>Shop Now</button>
      </div>
    </section>
  );
}
