
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import '../../styles/About.css'

function About() {
  return (
    <div className="about-page">

      {/* ABOUT HERO */}
      <section className="about-hero">
        <motion.div
          className="about-hero-content"
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="about-eyebrow">
            ✦ GET TO KNOW US ✦
          </span>

          <h1>
            Our Story,
            <span> Our Feeling.</span>
          </h1>

          <p>
            Every place has a story. Ours is about creating
            a welcoming place where being away from home
            feels a little less far from home.
          </p>

          <div className="about-hero-tagline">
            ♥ Ghar Se Door, Ghar Jaisa
          </div>
        </motion.div>

        <motion.div
          className="about-hero-art"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
        >
         
<div className="about-art-circle">
 
<div className="chef-hat-logo">
  <svg
    viewBox="0 0 120 100"
    className="chef-hat-svg"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Chef hat"
    role="img"
  >
    <path
      d="M25 58
         C10 55 7 39 17 29
         C23 23 32 22 40 27
         C35 12 47 3 60 5
         C74 5 82 16 79 29
         C91 20 107 27 110 40
         C114 52 105 60 95 62
         L95 76
         Q95 83 87 83
         L32 83
         Q25 83 25 76 Z"
      fill="#e4a64c"
    />
    <path
      d="M25 62 Q60 70 95 62"
      fill="none"
      stroke="#263d1c"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
</div>


  <span className="about-art-name">
    RASOI KATTA
  </span>

  <span className="about-art-heart">♥</span>
</div>


          <span className="about-art-star star-one">✳</span>
          <span className="about-art-star star-two">✦</span>
          <span className="about-art-star star-three">✧</span>
        </motion.div>
      </section>

      {/* OUR STORY */}
      <section className="about-story">
        <motion.div
          className="about-story-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="about-section-label">WHO WE ARE</span>

          <h2>
            A Little Place
            <span> With a Big Heart.</span>
          </h2>
        </motion.div>

        <motion.div
          className="about-story-content"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <p>
            Rasoi Katta is a mess built around a simple idea:
            everyone deserves a place where they feel welcome
            and comfortable, even when they are away from home.
          </p>

          <p>
            We believe that the feeling of home comes from
            warmth, care, familiarity and the people around us.
            These values are at the heart of Rasoi Katta.
          </p>

          <div className="about-story-signature">
            <span>With warmth,</span>
            <strong>Team Rasoi Katta ♥</strong>
          </div>
        </motion.div>
      </section>

      {/* OUR PURPOSE */}
      <section className="about-purpose">
        <div className="about-purpose-heading">
          <span className="about-section-label">WHAT GUIDES US</span>
          <h2>Our Purpose & Values</h2>
          <p>
            The little things that make Rasoi Katta feel special.
          </p>
        </div>

        <div className="about-purpose-grid">
          <motion.article
            className="about-purpose-card"
            whileHover={{ y: -8 }}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="purpose-icon">⌂</span>
            <h3>Our Vision</h3>
            <p>
              To create a welcoming mess environment
              where people feel comfortable and connected.
            </p>
          </motion.article>

          <motion.article
            className="about-purpose-card purpose-card-highlight"
            whileHover={{ y: -8 }}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <span className="purpose-icon">♡</span>
            <h3>Our Mission</h3>
            <p>
              To make everyday experiences more welcoming
              through thoughtful service and genuine care.
            </p>
          </motion.article>

          <motion.article
            className="about-purpose-card"
            whileHover={{ y: -8 }}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="purpose-icon">✳</span>
            <h3>Our Values</h3>
            <p>
              Warmth, respect, consistency and a sense
              of belonging in everything we do.
            </p>
          </motion.article>
        </div>
      </section>

      {/* BRAND MESSAGE */}
      <section className="about-quote">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="about-quote-mark">“</span>

          <h2>
            Good Food. Better Mood.
            <span> Best Life.</span>
          </h2>

          <p>That's the Rasoi Katta feeling.</p>

          <Link to="/contact" className="about-contact-button">
            Connect With Us <span>↗</span>
          </Link>
        </motion.div>
      </section>

    </div>
  )
}

export default About
