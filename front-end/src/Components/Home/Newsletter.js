import React from "react";

export default function Newsletter() {
  return (
    <section className="third">
      <div>
        <h1 className="newsletter">
          Get updates and special offer from codeBreak
        </h1>
      </div>
      <div className="subscribe">
        <input type="email" name="email" id="email" />
        <button>Subscribe</button>
      </div>
    </section>
  );
}
