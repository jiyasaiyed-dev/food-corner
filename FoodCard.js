import React from "react";

// Reusable component driven entirely by props
function FoodCard({ item, onAdd, inCart }) {
  return (
    <div className="food-card">
      <img src={item.img} alt={item.name} loading="lazy" />
      <div className="food-card-body">
        <span className="food-cat-tag">{item.category}</span>
        <div className="food-name">{item.name}</div>
        <div className="food-price">₹ {item.price}</div>
        <button className="btn-order" onClick={() => onAdd(item)}>
          {inCart ? `Add More (${inCart})` : "Add to Order"}
        </button>
      </div>
    </div>
  );
}

export default FoodCard;
