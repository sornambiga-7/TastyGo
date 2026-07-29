import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { useCart } from '../context/CartContext.jsx'
import './Navbar.css'

function Logo() {
  return (
    <Link to="/" className="navbar-logo" aria-label="TastyGo home">
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="16" fill="#FC8019" />
        <path
          d="M10 9v7a3 3 0 003 3v9M10 9v5M13 9v5M16 9v7a1 1 0 001 1M21 9c-2.2 0-4 2.5-4 6s1.8 6 4 6m0-12v18"
          stroke="#fff"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>Tasty<em>Go</em></span>
    </Link>
  )
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [query, setQuery] = useState('')
  const { isAuthenticated, user, logout } = useAuth()
  const { cartCount } = useCart()
  const navigate = useNavigate()

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    navigate(query.trim() ? `/search?q=${encodeURIComponent(query.trim())}` : '/search')
    setMenuOpen(false)
  }

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Logo />

        <form className="navbar-search" onSubmit={handleSearchSubmit} role="search">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="7" stroke="#686B78" strokeWidth="2" />
            <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="#686B78" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            placeholder="Search for restaurants or food"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search for restaurants or food"
          />
        </form>

        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/restaurants" onClick={() => setMenuOpen(false)}>Restaurants</Link>
          <Link to="/restaurants?offers=true" onClick={() => setMenuOpen(false)}>Offers</Link>
          <Link to="/cart" className="navbar-cart" onClick={() => setMenuOpen(false)}>
            Cart
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
          {isAuthenticated ? (
            <div className="navbar-profile">
              <Link to="/profile" onClick={() => setMenuOpen(false)} className="navbar-profile-link">
                <span className="navbar-avatar">{user.fullName.charAt(0).toUpperCase()}</span>
                {user.fullName.split(' ')[0]}
              </Link>
              <button className="btn-outline navbar-logout" onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <Link to="/login" className="btn-primary navbar-login" onClick={() => setMenuOpen(false)}>
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
