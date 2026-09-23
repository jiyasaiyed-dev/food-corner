import React, { useState } from "react";

function Navbar({ page, setPage, cartCount }) {
  const [open, setOpen] = useState(false);
  const links = [
    { key: "home", label: "Home" },
    { key: "menu", label: "Menu" },
    { key: "about", label: "About" },
    { key: "contact", label: "Contact" },
    { key: "order", label: "Order" },
  ];

  function go(key) {
    setPage(key);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <div className="logo" onClick={() => go("home")} style={{ cursor: "pointer" }}>
          <span className="logo-icon">🍴</span>
          <span>
            Food <span className="accent">Corner</span>
            <span className="logo-sub">Your Cravings, Our Passion</span>
          </span>
        </div>

        <nav className={"nav-links" + (open ? " open" : "")}>
          {links.map((l) => (
            <a
              key={l.key}
              className={page === l.key ? "active" : ""}
              onClick={() => go(l.key)}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <button className="cart-btn" onClick={() => go("order")} aria-label="Cart">
            🛒
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
          <button className="nav-toggle" onClick={() => setOpen(!open)}>
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
