
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import '../../styles/Register.css'

function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  })

  const [error, setError] = useState('')

  function handleChange(event) {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match. Please try again.')
      return
    }

    setError('Registration UI is ready. Account creation will be connected later.')
  }

  return (
    <div className="register-page">
      <motion.div
        className="register-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="register-brand">
          <span className="register-chef">♨</span>
          <h2>RASOI KATTA</h2>
          <p>Ghar Se Door, Ghar Jaisa ♥</p>
        </div>

        <div className="register-heading">
          <span>JOIN OUR FAMILY</span>
          <h1>Create Your Account</h1>
          <p>Get started with your Rasoi Katta experience.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <label htmlFor="register-name">Full Name</label>
          <input
            id="register-name"
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <label htmlFor="register-email">Email Address</label>
          <input
            id="register-email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="register-phone">Phone Number</label>
          <input
            id="register-phone"
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            pattern="[0-9+\-\s()]{7,18}"
            required
          />

          <label htmlFor="register-password">Password</label>
          <div className="register-password-wrapper">
            <input
              id="register-password"
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              minLength={8}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>

          <label htmlFor="register-confirm-password">Confirm Password</label>
          <div className="register-password-wrapper">
            <input
              id="register-confirm-password"
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              minLength={8}
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? 'Hide' : 'Show'}
            </button>
          </div>

          {error && (
            <p className="register-message" role="status">
              {error}
            </p>
          )}

          <button type="submit" className="register-submit">
            Create Account <span>→</span>
          </button>
        </form>

        <div className="register-login">
          Already have an account?
          <Link to="/login"> Login</Link>
        </div>

        <div className="register-footer">
          Made with love at Rasoi Katta ♥
        </div>
      </motion.div>
    </div>
  )
}

export default Register
