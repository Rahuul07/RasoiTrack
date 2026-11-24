
import './App.css'

function App() {
  return (
    <div className="website">
      <header className="navbar">
        <a href="#home" className="logo">
          <span>🍃</span> Rasoi Katta
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#login" className="login-button">Login</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="tagline">Ghar Se Door Ghar Jaisa</p>

            <h1>
              Homemade Taste,
              <span> Everyday Happiness.</span>
            </h1>

            <p className="hero-description">
              Enjoy fresh, delicious and homely vegetarian meals
              at Rasoi Katta. Good food, made with love.
            </p>

            <a href="#login" className="primary-button">
              Get Started
            </a>
          </div>
        </section>

        <section className="welcome" id="about">
          <p className="section-label">WELCOME TO RASOI KATTA</p>
          <h2>Your Home Away From Home</h2>
          <p>
            We serve fresh and delicious meals with the warmth
            and taste of homemade food.
          </p>
        </section>

        <section className="contact" id="contact">
          <h2>Visit Rasoi Katta</h2>
          <p>Near Krishna Medical College, Sankeshwar</p>
          <p>Contact: 7338082153</p>
        </section>

        <section className="login-section" id="login">
          <h2>Welcome Back!</h2>
          <p>Login to access your RasoiTrack account.</p>
          <a href="#home" className="primary-button">Login</a>
        </section>
      </main>

      <footer>
        © 2026 Rasoi Katta. All rights reserved.
      </footer>
    </div>
  )
}

export default App
