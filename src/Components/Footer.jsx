import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div id="footer" className="footer">
      <div className="footer__links">
        <a href="https://www.linkedin.com/in/mohammed-mushamil-145b9a1a0">
          <i class="fab fa-linkedin "></i>
        </a>
        <a href="https://github.com/Muziscythe">
          <i class="fab fa-github "></i>
        </a>
        <a href="https://www.instagram.com/muzamil_md48/">
          <i class="fab fa-instagram"></i>
        </a>
      </div>
      <p className="copyRights">Copyright © Muzamil</p>
    </div>
  );
}

export default Footer;
