import React from "react";

export default function Newsletter() {
  return (
    <section className="third">
      <div>
        <h1 className="newsletter">Newsletter</h1>
        <div className="newsletterDescription">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
          recusandae vero adipisci numquam omnis expedita, a tenetur eum dolorem
          deleniti?
        </div>
      </div>
      <div className="subscribe">
        <input type="email" name="email" id="email" />
        <button>Subscribe</button>
      </div>
    </section>
  );
}
