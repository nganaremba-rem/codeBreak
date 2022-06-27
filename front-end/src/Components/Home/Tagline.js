import React from "react";
import { Link } from "react-router-dom";
import RandomImage from "./RandomImage";

export default function Tagline() {
  return (
    <section className="front">
      <h1 className="tagline">Welcome to codeBreak e-SHOP</h1>
      <RandomImage />
      <Link to={"/shop"}>
        <div className="shopNow">
          <button>Shop Now</button>
        </div>
      </Link>
    </section>
  );
}
