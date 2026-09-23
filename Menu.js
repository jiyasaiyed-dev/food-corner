import React, { useState, useMemo } from "react";
import FoodCard from "./FoodCard";
import CartPanel from "./CartPanel";
import { FOOD_ITEMS, CATEGORIES } from "../data/foodItems";

function Menu({ setPage, cart, addToCart }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // Filtered list using array methods (filter + includes)
  const filteredItems = useMemo(() => {
    return FOOD_ITEMS.filter((item) => {
      const matchesCategory = category === "All" || item.category === category;
      const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <div className="page-fade">
      <section className="menu-hero">
        <div className="container menu-hero-inner">
          <div>
            <div className="eyebrow">WELCOME TO</div>
            <h1>
              Food <span className="accent">Corner</span>
            </h1>
            <p>
              Delicious food, fresh ingredients, and great vibes. Explore our
              menu and enjoy the best flavors in town!
            </p>
            <button className="btn-primary" onClick={() => setPage("order")}>
              Order Now →
            </button>
          </div>
          <div className="menu-hero-img">
            <img
              src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=800&q=80"
              alt="Menu hero"
            />
          </div>
        </div>
      </section>

      <div className="container menu-layout">
        <div>
          <div className="menu-toolbar">
            <div className="search-box">
              <span>🔍</span>
              <input
                type="text"
                placeholder="Search for a dish..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="filter-chips">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className={"chip" + (category === cat ? " active" : "")}
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Conditional rendering: no-results message */}
          {filteredItems.length === 0 ? (
            <div className="no-results">
              <div className="emoji">🍽️</div>
              <h3>No dishes found</h3>
              <p>Try a different search term or category.</p>
            </div>
          ) : (
            <div className="food-grid">
              {filteredItems.map((item) => (
                <FoodCard
                  key={item.id}
                  item={item}
                  onAdd={addToCart}
                  inCart={cart[item.id] ? cart[item.id].qty : 0}
                />
              ))}
            </div>
          )}
        </div>

        <CartPanel cart={cart} setPage={setPage} />
      </div>
    </div>
  );
}

export default Menu;
