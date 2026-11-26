
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import '../../styles/Home.css'

function HomeIllustration() {
  return (
    <div className="home-illustration">
      <div className="illustration-sun" />

      <motion.div
        className="illustration-leaf leaf-left"
        animate={{ rotate: [-5, 5, -5] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        ❧
      </motion.div>

      <motion.div
        className="illustration-leaf leaf-right"
        animate={{ rotate: [5, -5, 5] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        ❧
      </motion.div>

      <svg
        className="home-art-svg"
        viewBox="0 0 520 440"
        role="img"
        aria-label="Illustration of a welcoming home with a cooking pot and leafy plants"
      >
        {/* Home */}
        <path
          d="M85 210 L255 65 L425 210"
          fill="none"
          stroke="#29451E"
          strokeWidth="17"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M120 195 V350 H390 V195"
          fill="#F1DFC0"
          stroke="#29451E"
          strokeWidth="9"
          strokeLinejoin="round"
        />

        {/* Roof decoration */}
        <path
          d="M170 145 L255 75 L340 145"
          fill="none"
          stroke="#D87919"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Window */}
        <rect x="215" y="190" width="80" height="75" rx="7"
          fill="#FFF8E9" stroke="#29451E" strokeWidth="7" />
        <path d="M255 190 V265 M215 228 H295"
          stroke="#29451E" strokeWidth="5" />

        {/* Door */}
        <rect x="165" y="270" width="68" height="80" rx="30"
          fill="#B96B35" stroke="#29451E" strokeWidth="6" />
        <circle cx="218" cy="314" r="4" fill="#FFF3D9" />

        {/* Decorative cooking pot */}
        <path
          d="M315 280 Q315 255 340 255 H390 Q415 255 415 280
             L405 335 Q365 360 325 335 Z"
          fill="#29451E"
          stroke="#203A18"
          strokeWidth="7"
        />

        <path d="M340 250 H390 M350 239 Q365 226 380 239"
          fill="none" stroke="#D87919" strokeWidth="7"
          strokeLinecap="round" />

        <path d="M315 280 H300 M415 280 H430"
          stroke="#29451E" strokeWidth="9" strokeLinecap="round" />

        <path d="M352 278 Q365 295 380 278 Q365 313 352 278"
          fill="#F0A23C" />

        {/* Steam */}
        <path d="M350 225 Q335 205 350 185"
          fill="none" stroke="#D87919" strokeWidth="5"
          strokeLinecap="round" />
        <path d="M375 225 Q390 205 375 185"
          fill="none" stroke="#D87919" strokeWidth="5"
          strokeLinecap="round" />

        {/* Ground */}
        <path d="M75 365 Q255 385 445 365"
          fill="none" stroke="#D87919" strokeWidth="5"
          strokeLinecap="round" />

        {/* Small plants */}
        <path d="M105 350 Q85 310 65 330 Q85 340 105 350
                 Q90 295 115 290 Q120 320 105 350
                 Q135 310 150 330 Q130 350 105 350"
          fill="#617B3D" />

        <path d="M435 350 Q455 310 475 330 Q455 340 435 350
                 Q450 295 425 290 Q420 320 435 350
                 Q405 310 390 330 Q410 350 435 350"
          fill="#617B3D" />

        {/* Heart */}
        <path
          d="M255 125 C230 95 195 130 255 170
             C315 130 280 95 255 125"
          fill="#D87919"
        />
      </svg>

      <motion.div
        className="illustration-stamp"
        animate={{ y: [0, -9, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <span>GOOD FOOD</span>
        <span className="stamp-accent">BETTER MOOD</span>
        <span>BEST LIFE ♥</span>
      </motion.div>

      <div className="illustration-caption">
        GHAR SE DOOR GHAR JAISA
      </div>
    </div>
  )
}

function Home() {
  const values = [
    {
      number: '01',
      symbol: '⌂',
      title: 'Homely Feeling',
      description:
        'A welcoming atmosphere that brings the comfort of home.',
    },
    {
      number: '02',
      symbol: '♡',
      title: 'Made with Care',
      description:
        'Thoughtful service and warmth in the little things we do.',
    },
    {
      number: '03',
      symbol: '✳',
      title: 'Better Together',
      description:
        'A place where people feel welcome, comfortable and connected.',
    },
  ]

  return (
    <div className="home-page">

      {/* HERO */}
      <section className="home-hero">
        <div className="hero-content">
          <motion.div
            className="hero-eyebrow"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span>✦</span> WELCOME TO RASOI KATTA <span>✦</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            A Place That
            <span>Feels Like Home.</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Away from home, find a little more warmth,
            a little more comfort, and a feeling of belonging.
            That's the spirit of Rasoi Katta.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Link to="/about" className="home-primary-btn">
              Discover Our Story <span>↗</span>
            </Link>

            <Link to="/contact" className="home-secondary-btn">
              Get in Touch <span>→</span>
            </Link>
          </motion.div>

          <motion.div
            className="hero-tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <span>♥</span> Ghar Se Door, Ghar Jaisa
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <HomeIllustration />
        </motion.div>

        <span className="hero-decoration hero-decoration-one">✳</span>
        <span className="hero-decoration hero-decoration-two">✦</span>
      </section>

      {/* INTRODUCTION */}
      <section className="home-intro">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="home-section-label">
            THE RASOI KATTA FEELING
          </span>

          <h2>
            More Than a Place.
            <span> A Feeling.</span>
          </h2>

          <p>
            Feeling at home is about more than where you live.
            It is about comfort, care, connection and the
            little things that make every day special.
          </p>

          <div className="intro-decoration">❧ &nbsp; ♥ &nbsp; ❧</div>
        </motion.div>
      </section>

      {/* VALUES */}
      <section className="home-values">
        {values.map((item, index) => (
          <motion.article
            className="home-value-card"
            key={item.number}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ y: -8 }}
          >
            <span className="value-number">{item.number}</span>

            <div className="value-symbol">{item.symbol}</div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <span className="value-decoration">✦</span>
          </motion.article>
        ))}
      </section>

      {/* CLOSING */}
      <section className="home-closing">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="home-section-label">
            A WARM WELCOME AWAITS
          </span>

          <h2>
            Come Feel
            <span> at Home.</span>
          </h2>

          <p>We would love to welcome you to Rasoi Katta.</p>

          <Link to="/contact" className="home-closing-btn">
            Get in Touch <span>↗</span>
          </Link>
        </motion.div>
      </section>

    </div>
  )
}

export default Home
