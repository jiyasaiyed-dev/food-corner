import React, { useState } from "react";

function OrderPage({ setPage, cart, updateQty, removeItem }) {
  const items = Object.values(cart);
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const [editingId, setEditingId] = useState(null);
  const [editQty, setEditQty] = useState(1);

  const [form, setForm] = useState({ name: "", phone: "", email: "", address: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showGeneralError, setShowGeneralError] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setSubmitted(false);
    setShowGeneralError(false);
  }

  function validate() {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[0-9]{10}$/.test(form.phone.trim())) {
      newErrors.phone = "Enter a valid 10-digit phone number.";
    }
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!form.address.trim()) newErrors.address = "Address is required.";
    return newErrors;
  }

  function handlePlaceOrder(e) {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (items.length === 0 || Object.keys(newErrors).length > 0) {
      setShowGeneralError(true);
      setSubmitted(false);
      return;
    }

    setShowGeneralError(false);
    setSubmitted(true);
  }

  function startEdit(item) {
    setEditingId(item.id);
    setEditQty(item.qty);
  }

  function saveEdit(id) {
    updateQty(id, Math.max(1, Number(editQty) || 1));
    setEditingId(null);
  }

  return (
    <div className="page-fade">
      <section className="menu-hero">
        <div className="container menu-hero-inner">
          <div>
            <div className="eyebrow">YOUR ORDER</div>
            <h1>
              Food <span className="accent">Corner</span>
            </h1>
            <p>Good food, good mood! Check your selected items and make your order special.</p>
          </div>
          <div className="menu-hero-img">
            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80"
              alt="Order hero"
            />
          </div>
        </div>
      </section>

      <div className="container order-page-layout">
        <div>
          <div className="order-list-card">
            <h3 style={{ marginBottom: 16 }}>🛒 Your Order ({items.length} items)</h3>

            {items.length === 0 ? (
              <div className="empty-cart-msg">
                <span className="emoji">🛍️</span>
                Your order is empty. Add some delicious items from our menu to get started.
              </div>
            ) : (
              items.map((item) => (
                <div className="order-row" key={item.id}>
                  <img src={item.img} alt={item.name} />
                  <div>
                    <div className="order-row-name">{item.name}</div>
                    <div className="order-row-cat">{item.category}</div>
                    <div className="order-row-price">₹ {item.price}</div>
                  </div>

                  {editingId === item.id ? (
                    <div className="edit-qty-inline">
                      <button className="qty-btn" onClick={() => setEditQty((q) => Math.max(1, q - 1))}>−</button>
                      <span>{editQty}</span>
                      <button className="qty-btn plus" onClick={() => setEditQty((q) => q + 1)}>+</button>
                    </div>
                  ) : (
                    <div className="qty-control">
                      <button className="qty-btn" onClick={() => updateQty(item.id, Math.max(1, item.qty - 1))}>−</button>
                      <span>{item.qty}</span>
                      <button className="qty-btn plus" onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                    </div>
                  )}

                  <div className="order-row-total">₹ {item.price * item.qty}</div>

                  <div style={{ display: "flex", gap: 8 }}>
                    {editingId === item.id ? (
                      <button className="btn-edit" onClick={() => saveEdit(item.id)}>Save</button>
                    ) : (
                      <button className="btn-edit" onClick={() => startEdit(item)}>✏️ Edit</button>
                    )}
                    <button className="btn-delete" onClick={() => removeItem(item.id)}>🗑️ Delete</button>
                  </div>
                </div>
              ))
            )}

            <button className="continue-shopping" onClick={() => setPage("menu")}>
              ← Continue Shopping
            </button>
          </div>

          {/* CUSTOMER DETAILS / CHECKOUT FORM */}
          <div className="form-card" style={{ marginTop: 24 }}>
            <h3 style={{ marginBottom: 16 }}>👤 Customer Details</h3>
            <form onSubmit={handlePlaceOrder} noValidate>
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  className={errors.name ? "invalid" : ""}
                />
                {errors.name && <div className="field-error">{errors.name}</div>}
              </div>

              <div className="form-group">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={form.phone}
                  onChange={handleChange}
                  className={errors.phone ? "invalid" : ""}
                />
                {errors.phone && <div className="field-error">{errors.phone}</div>}
              </div>

              <div className="form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  className={errors.email ? "invalid" : ""}
                />
                {errors.email && <div className="field-error">{errors.email}</div>}
              </div>

              <div className="form-group">
                <label>Address *</label>
                <textarea
                  name="address"
                  rows="3"
                  placeholder="Enter your address"
                  value={form.address}
                  onChange={handleChange}
                  className={errors.address ? "invalid" : ""}
                ></textarea>
                {errors.address && <div className="field-error">{errors.address}</div>}
              </div>

              <button type="submit" className="btn-checkout" style={{ background: "var(--primary)", color: "#1a1a1a" }}>
                💳 Place Order
              </button>

              {/* Conditional messages */}
              {submitted && (
                <div className="alert alert-success">
                  ✅ Order placed successfully! Thank you for ordering from Food Corner.
                </div>
              )}
              {showGeneralError && (
                <div className="alert alert-error">
                  ⚠️ Please fill all required fields correctly{items.length === 0 ? " and add at least one item to your order." : "."}
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="order-summary-card">
          <h3 style={{ marginBottom: 14 }}>📋 Order Summary</h3>
          {items.length === 0 ? (
            <p style={{ color: "var(--muted)", fontSize: 14 }}>No items yet.</p>
          ) : (
            items.map((item) => (
              <div className="summary-row" key={item.id}>
                <span>{item.name} ({item.qty})</span>
                <span>₹ {item.price * item.qty}</span>
              </div>
            ))
          )}
          <div className="cart-total-row">
            <span>Total Amount</span>
            <span>₹ {total}</span>
          </div>

          <div className="help-box">
            <strong>Need Help?</strong>
            <p style={{ marginTop: 6 }}>
              If you have any special requests or food allergies, feel free to contact us.
            </p>
            <p style={{ marginTop: 6 }}>📞 <a href="tel:+919876543210">+91 98765 43210</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
