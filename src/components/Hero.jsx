import slogan from '../assets/images/slogan.webp'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-banner">
        <img src={slogan} alt="Gyyti" />
        <a href="#about" className="btn hero-btn">
          Gyyti App
        </a>
      </div>
    </section>
  );
}

export default Hero;
