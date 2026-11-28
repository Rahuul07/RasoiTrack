
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import '../styles/Login.css'

function Login() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="login-page">
      <motion.div
        className="login-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="login-brand">
          <span className="login-chef">♨</span>
          <h2>RASOI KATTA</h2>
          <p>Ghar Se Door, Ghar Jaisa ♥</p>
        </div>

        <div className="login-heading">
          <span>WELCOME BACK</span>
          <h1>Login to Your Account</h1>
          <p>Your homely food experience awaits.</p>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="login-email">Email Address</label>
          <input
            id="login-email"
            type="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="login-password">Password</label>
          <div className="login-password-wrapper">
            <input
              id="login-password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              className="login-show-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>

          <div className="login-options">
            <label className="login-remember">
              <input type="checkbox" />
              Remember me
            </label>

            <Link to="/forgot-password">Forgot Password?</Link>
          </div>

          <button type="submit" className="login-submit">
            Login to Account <span>→</span>
          </button>
        </form>

        <div className="login-register">
          Don't have an account?
          <Link to="/register"> Create Account</Link>
        </div>

        <div className="login-footer">
          Made with love at Rasoi Katta ♥
        </div>
      </motion.div>
    </div>
  )
}

export default Login
