import React from "react";

function About({ setPage }) {
  const values = [
    { icon: "🌿", title: "Fresh Ingredients", desc: "We use only the freshest and finest ingredients." },
    { icon: "👨‍🍳", title: "Expert Chefs", desc: "Our chefs bring passion and creativity to every dish." },
    { icon: "🤝", title: "Friendly Atmosphere", desc: "A cozy place for family, friends and food lovers." },
    { icon: "❤️", title: "Customer Satisfaction", desc: "Your happiness is our top priority." },
  ];

  return (
    <div className="page-fade">
      <section className="about-hero">
        <div className="container">
          <div className="crumb">Home &gt; <span className="accent">About</span></div>
          <h1>
            About <span className="accent">Us</span>
          </h1>
          <p>Good Food • Good Vibes • Together</p>
        </div>
      </section>

      <div className="container">
        <div className="about-grid">
          <div>
            <div className="about-tag">OUR STORY</div>
            <h2>Welcome to Food Corner</h2>
            <p>
              At Food Corner, we believe that great food brings people together.
              Our journey started with a simple idea — to serve delicious, fresh
              and high-quality food in a warm and friendly atmosphere.
            </p>
            <p>
              From classic favorites to new flavors, we prepare every dish with
              care and the finest ingredients. Whether you're here for a quick
              bite, a family dinner, or a special celebration, we're happy to be
              a part of your moments.
            </p>
            <button className="btn-primary" onClick={() => setPage("menu")}>
              Explore Our Menu →
            </button>
          </div>
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80"
            alt="Restaurant table with burger"
          />
        </div>
      </div>

      <section className="about-values">
        <div className="container values-grid">
          {values.map((v, idx) => (
            <div className="value-item" key={idx}>
              <div className="value-icon">{v.icon}</div>
              <div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="container">
        <div className="team-section">
          <div className="team-photo">
            <img
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=500&q=80"
              alt="Chef"
            />
            <div>
              <div className="about-tag">OUR TEAM</div>
              <h3 style={{ fontSize: 24, marginBottom: 8 }}>Passionate People, Great Food</h3>
              <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>
                Our team is made up of skilled chefs, friendly service staff and
                food lovers who work together to give you the best dining
                experience.
              </p>
            </div>
          </div>
          <div className="quote-box">
            "Food is not just what we serve, it's what we share."
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
