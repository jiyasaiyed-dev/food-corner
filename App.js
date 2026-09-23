import React, { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Menu from "./components/Menu";
import OrderPage from "./components/OrderPage";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const [page, setPage] = useState("home");
  // cart shape: { [id]: { ...item, qty } }
  const [cart, setCart] = useState({});

  function addToCart(item) {
    setCart((prev) => {
      const existing = prev[item.id];
      return {
        ...prev,
        [item.id]: existing ? { ...existing, qty: existing.qty + 1 } : { ...item, qty: 1 },
      };
    });
  }

  function updateQty(id, qty) {
    setCart((prev) => {
      if (!prev[id]) return prev;
      return { ...prev, [id]: { ...prev[id], qty } };
    });
  }

  function removeItem(id) {
    setCart((prev) => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  }

  const cartCount = Object.values(cart).reduce((sum, i) => sum + i.qty, 0);

  let pageContent;
  if (page === "home") {
    pageContent = <Home setPage={setPage} cart={cart} addToCart={addToCart} />;
  } else if (page === "menu") {
    pageContent = <Menu setPage={setPage} cart={cart} addToCart={addToCart} />;
  } else if (page === "order") {
    pageContent = (
      <OrderPage
        setPage={setPage}
        cart={cart}
        updateQty={updateQty}
        removeItem={removeItem}
      />
    );
  } else if (page === "about") {
    pageContent = <About setPage={setPage} />;
  } else if (page === "contact") {
    pageContent = <Contact />;
  }

  return (
    <React.Fragment>
      <Navbar page={page} setPage={setPage} cartCount={cartCount} />
      {pageContent}
      <Footer setPage={setPage} />
    </React.Fragment>
  );
}

export default App;
