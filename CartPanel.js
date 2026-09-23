import React from "react";

function CartPanel({ cart, setPage }) {
  const items = Object.values(cart);
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const count = items.reduce((sum, i) => sum + i.qty, 0);

  return (
    <div className="cart-panel">
      <h3>
        🛒 Your Order {count > 0 && <span className="cart-count-badge">{count}</span>}
      </h3>

      {items.length === 0 ? (
        <div className="empty-cart-msg">
          <span className="emoji">🛍️</span>
          Your order is empty.
          <br />
          Add some delicious items to get started!
        </div>
      ) : (
        <React.Fragment>
          {items.map((item) => (
            <div className="cart-line" key={item.id}>
              <img src={item.img} alt={item.name} />
              <div className="cart-line-info">
                <div className="cart-line-name">{item.name}</div>
                <div className="cart-line-price">₹ {item.price} × {item.qty}</div>
              </div>
            </div>
          ))}
          <div className="cart-total-row">
            <span>Total</span>
            <span>₹ {total}</span>
          </div>
        </React.Fragment>
      )}

      <button
        className="btn-checkout"
        disabled={items.length === 0}
        onClick={() => setPage("order")}
      >
        Proceed to Order →
      </button>
    </div>
  );
}

export default CartPanel;
