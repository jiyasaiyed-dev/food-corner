import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // null | "success" | "error"

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setStatus(null);
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
    if (!form.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("success");
    setForm({ name: "", phone: "", email: "", message: "" });
  }

  const infoList = [
    { icon: "📍", title: "Our Address", lines: ["123 Food Corner Street,", "Ahmedabad, Gujarat - 380001"] },
    { icon: "📞", title: "Phone", lines: ["+91 98765 43210", "(Mon - Sun: 10:00 AM - 11:00 PM)"] },
    { icon: "✉️", title: "Email", lines: ["hello@foodcorner.com", "(We reply within 24 hours)"] },
    { icon: "🕒", title: "Opening Hours", lines: ["Monday - Sunday", "10:00 AM - 11:00 PM"] },
  ];

  return (
    <div className="page-fade">
      <section className="contact-hero">
        <div className="container">
          <div className="eyebrow">GET IN TOUCH</div>
          <h1>
            Contact <span className="accent">Us</span>
          </h1>
          <p>
            We'd love to hear from you! Whether you have a question, feedback,
            or just want to say hello, we're here for you.
          </p>
        </div>
      </section>

      <div className="container contact-layout">
        <div>
          <h2 style={{ marginBottom: 6 }}>Our Contact Information</h2>
          <p style={{ color: "var(--muted)", marginBottom: 24 }}>
            Find us, give us a call, or drop us an email. We're always happy to help!
          </p>

          {infoList.map((info, idx) => (
            <div className="contact-info-item" key={idx}>
              <div className="contact-icon">{info.icon}</div>
              <div>
                <h4>{info.title}</h4>
                {info.lines.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          ))}

          <div className="map-box">
            <div className="map-pin">📍 Food Corner — Ahmedabad, Gujarat</div>
            <p style={{ fontSize: 13, marginTop: 6 }}>Juhapura • Sarkhej Rd • Juhapura Rd</p>
          </div>

          <div className="social-row">
            <span className="social-icon">📘</span>
            <span className="social-icon">📷</span>
            <span className="social-icon">▶️</span>
          </div>
        </div>

        <div className="form-card">
          <h3 style={{ marginBottom: 4 }}>Send Us a Message</h3>
          <p style={{ color: "var(--muted)", fontSize: 14, marginBottom: 18 }}>
            Fill out the form below and we'll get back to you soon.
          </p>
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label>Your Name *</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className={errors.name ? "invalid" : ""}
              />
              {errors.name && <div className="field-error">{errors.name}</div>}
            </div>
            <div className="form-group">
              <label>Your Phone Number *</label>
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={form.phone}
                onChange={handleChange}
                className={errors.phone ? "invalid" : ""}
              />
              {errors.phone && <div className="field-error">{errors.phone}</div>}
            </div>
            <div className="form-group">
              <label>Your Email *</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className={errors.email ? "invalid" : ""}
              />
              {errors.email && <div className="field-error">{errors.email}</div>}
            </div>
            <div className="form-group">
              <label>Your Message *</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                className={errors.message ? "invalid" : ""}
              ></textarea>
              {errors.message && <div className="field-error">{errors.message}</div>}
            </div>

            <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
              📨 Send Message
            </button>

            {status === "success" && (
              <div className="alert alert-success">
                ✅ Thank you! Your message has been sent successfully. We'll get back to you as soon as possible.
              </div>
            )}
            {status === "error" && (
              <div className="alert alert-error">
                ⚠️ Please fill in all required fields correctly.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
