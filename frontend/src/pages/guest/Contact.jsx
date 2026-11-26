
import { useState } from 'react'
import { motion } from 'motion/react'
import '../../styles/Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  })

  const [formMessage, setFormMessage] = useState('')

  function handleChange(event) {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setFormMessage(
      'The enquiry form design is ready. Online submission will be connected in a later step.'
    )
  }

  return (
    <div className="contact-page">

      {/* CONTACT HERO */}
      <section className="contact-hero">
        <motion.div
          className="contact-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="contact-eyebrow">
            ✦ WE WOULD LOVE TO HEAR FROM YOU ✦
          </span>

          <h1>
            Let's Get
            <span> In Touch.</span>
          </h1>

          <p>
            Have a question about our monthly mess packages
            or want to know more about Rasoi Katta?
            We're happy to help.
          </p>

         <div className="contact-hero-tagline">
  Ghar Se Door, Ghar Jaisa ♥
</div>

<a href="#contact-form" className="contact-hero-button">
  Send an Enquiry <span>↓</span>
</a>
        </motion.div>

        <motion.div
          className="contact-hero-art"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="contact-art-circle">
            <span className="contact-art-symbol">✉</span>
            <span className="contact-art-title">SAY HELLO</span>
            <span className="contact-art-subtitle">
              We're listening
            </span>
            <span className="contact-art-heart">♥</span>
          </div>

          <span className="contact-art-star contact-star-one">✳</span>
          <span className="contact-art-star contact-star-two">✦</span>
          <span className="contact-art-star contact-star-three">✧</span>
        </motion.div>
      </section>

      {/* CONTACT INFORMATION */}
      <section className="contact-information">
        <motion.div
          className="contact-section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="contact-section-label">REACH OUT TO US</span>
          <h2>We're Just a Message Away</h2>
          <p>
            Whether you have a question or simply want to know
            more, here's how you can reach us.
          </p>
        </motion.div>

        <div className="contact-info-grid">

          <motion.article
            className="contact-info-card"
            whileHover={{ y: -7 }}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="contact-info-icon">☎</span>
            <h3>Call Us</h3>
            <p>
              Speak with Rasoi Katta for enquiries
              about our mess services.
            </p>
            <span className="contact-detail-placeholder">
              Official contact number to be added
            </span>
          </motion.article>

          <motion.article
            className="contact-info-card contact-info-highlight"
            whileHover={{ y: -7 }}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            <span className="contact-info-icon">⌖</span>
            <h3>Visit Us</h3>
            <p>
              Come and find us at our Rasoi Katta location.
            </p>
            <span className="contact-detail">
              Near Krishna Medical College,
              Sankeshwar
            </span>
          </motion.article>

          <motion.article
            className="contact-info-card"
            whileHover={{ y: -7 }}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.24 }}
          >
            <span className="contact-info-icon">♡</span>
            <h3>Enquiries</h3>
            <p>
              Ask us about monthly mess packages,
              services and general information.
            </p>
            <span className="contact-detail">
              We're happy to help
            </span>
          </motion.article>

        </div>
      </section>

      {/* ENQUIRY FORM */}
     <section className="contact-enquiry" id="contact-form">
        <motion.div
          className="contact-enquiry-intro"
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="contact-section-label">SEND US A MESSAGE</span>

          <h2>
            How Can We
            <span> Help You?</span>
          </h2>

          <p>
            Fill in the details and tell us what you'd
            like to know. We look forward to hearing from you.
          </p>

          <div className="contact-note">
            <span>✦</span>
            Your questions are always welcome at Rasoi Katta.
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-form-heading">
            <h3>Write to Us</h3>
            <p>We'd love to hear from you.</p>
          </div>

          <label htmlFor="contact-name">Your Name</label>
          <input
            id="contact-name"
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="contact-phone">Phone Number</label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            pattern="[0-9+\-\s()]{7,18}"
            required
          />

          <label htmlFor="contact-message">Your Message</label>
          <textarea
            id="contact-message"
            name="message"
            placeholder="How can we help you?"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="contact-submit-button">
            Send Enquiry <span>↗</span>
          </button>

          {formMessage && (
            <p className="contact-form-message" role="status">
              {formMessage}
            </p>
          )}
        </motion.form>
      </section>

      {/* LOCATION SECTION */}
      <section className="contact-location">
        <div className="contact-location-content">
          <span className="contact-section-label">FIND OUR PLACE</span>
          <h2>Come Say Hello</h2>
          <p>
            Rasoi Katta
            <br />
            Near Krishna Medical College, Sankeshwar
          </p>
        </div>

        <div className="contact-location-decoration" aria-hidden="true">
          <span>⌖</span>
          <strong>RASOI KATTA</strong>
          <small>Ghar Se Door Ghar Jaisa</small>
        </div>
      </section>

    </div>
  )
}

export default Contact
