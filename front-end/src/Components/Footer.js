import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="firstFooterItem">
          <img
            src="https://picsum.photos/50"
            alt=""
            style={{ borderRadius: "50%" }}
          />
          <div className="copyright">
            Copyright &copy; 2022 codeBreak. All Rights Reserved
          </div>
        </div>
        <div className="footerCategories">
          <ul className="footerCategoryItem">
            <li>Home</li>
            <li>About</li>
            <li>Help</li>
          </ul>
        </div>
        <div className="footerCategories">
          <ul className="footerCategoryItem">
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>

        <div className="footerCategories d-flex flex-column justify-content-center">
          <ul className="footerCategoryItem d-flex gap-3 align-items-center">
            <li>
              <i className="fa-brands fa-facebook h4"></i>
            </li>
            <li>
              <i className="fa-brands fa-twitter h4"></i>
            </li>
            <li>
              <i className="fa-brands fa-instagram h4"></i>
            </li>
            <li>
              <i className="fa-brands fa-whatsapp h4"></i>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
