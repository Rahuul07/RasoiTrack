
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import GuestLayout from './layouts/guestLayout/GuestLayout'

import Home from './pages/guest/Home'
import About from './pages/guest/About'
import Contact from './pages/guest/Contact'
import Login from './pages/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GuestLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
