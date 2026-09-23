import React from "react";

function Footer({ setPage }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="logo" style={{ fontSize: 18 }}>
            <span className="logo-icon">🍴</span>
            <span>Food <span className="accent">Corner</span></span>
          </div>
          <div className="footer-links">
            <a onClick={() => setPage("home")}>Home</a>
            <a onClick={() => setPage("menu")}>Menu</a>
            <a onClick={() => setPage("about")}>About</a>
            <a onClick={() => setPage("contact")}>Contact</a>
            <a onClick={() => setPage("order")}>Order</a>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <span className="social-icon">📘</span>
            <span className="social-icon">📷</span>
            <span className="social-icon">▶️</span>
          </div>
        </div>
        <div className="footer-bottom">© 2026 Food Corner. All rights reserved. — Good Food. Good Mood. ❤️</div>
      </div>
    </footer>
  );
}

export default Footer;
