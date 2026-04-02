import "../css/home.css";

const Home = () => {
  return (
    <section className="hero">

      {/* OVERLAY */}
      <div className="hero-overlay"></div>

      {/* CONTENT */}
      <div className="hero-content">
        <h2>Shop Smart. Live Better.</h2>
        <p>Discover quality products at unbeatable prices.</p>

        <a href="/products" className="hero-btn">
          Shop Now
        </a>
      </div>

    </section>
  );
};

export default Home;