import "../hero.css";

function Hero({ children }) {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-title">
          <span className="identity">Identity</span>
          <span className="mark">Mark</span>
        </div>
        <h2>Design a custom, professional logo for your brand</h2>
        <p>
          Launch your brand with custom business card designs, social media
          visuals, app icons, letterheads, and more.
        </p>
        <div className="hero-btn">
          <a href="#">
            <button>Design my logo</button>
          </a>
        </div>
      </div>
      {children}
    </div>
  );
}

export default Hero;
