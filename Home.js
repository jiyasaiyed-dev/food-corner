import React from "react";
import FoodCard from "./FoodCard";
import { FOOD_ITEMS, POPULAR_IDS } from "../data/foodItems";

function Home({ setPage, cart, addToCart }) {
  const popularItems = FOOD_ITEMS.filter((f) => POPULAR_IDS.includes(f.id));

  return (
    <div className="page-fade">
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <div className="eyebrow">WELCOME TO FOOD CORNER</div>
            <h1>
              Good Food Brings People <span className="accent">Together</span>
            </h1>
            <p>
              Fresh ingredients, great taste and a cozy atmosphere. Enjoy your
              favorite food, always!
            </p>
            <button className="btn-primary" onClick={() => setPage("menu")}>
              Explore Menu →
            </button>
          </div>
          <div className="hero-img">
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=900&q=80"
              alt="Delicious pizza"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">POPULAR DISHES</div>
            <h2>Our Special Menu</h2>
            <p>Discover our most loved dishes, made with fresh ingredients and a lot of love.</p>
          </div>
          <div className="food-grid">
            {popularItems.map((item) => (
              <FoodCard
                key={item.id}
                item={item}
                onAdd={addToCart}
                inCart={cart[item.id] ? cart[item.id].qty : 0}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container features-grid">
          <div>
            <div className="feature-icon">🌿</div>
            <div className="feature-title">Fresh Ingredients</div>
            <div className="feature-sub">Always fresh & high quality</div>
          </div>
          <div>
            <div className="feature-icon">👨‍🍳</div>
            <div className="feature-title">Expert Chefs</div>
            <div className="feature-sub">Prepared with love</div>
          </div>
          <div>
            <div className="feature-icon">🚚</div>
            <div className="feature-title">Fast Service</div>
            <div className="feature-sub">Fresh food, on time</div>
          </div>
          <div>
            <div className="feature-icon">❤️</div>
            <div className="feature-title">Happy Customers</div>
            <div className="feature-sub">Your satisfaction matters</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
