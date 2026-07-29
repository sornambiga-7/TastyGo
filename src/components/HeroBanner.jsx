import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './HeroBanner.css'

function HeroBanner() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(query.trim() ? `/search?q=${encodeURIComponent(query.trim())}` : '/search')
  }

  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <span className="hero-eyebrow">Hungry? We've got you.</span>
          <h1>Order food from your favorite local restaurants</h1>
          <p>Fresh meals, fast delivery, and hundreds of restaurants — right to your door.</p>

          <form className="hero-search" onSubmit={handleSubmit}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="#686B78" strokeWidth="2" />
              <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="#686B78" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder="Search restaurants, cuisines, or dishes"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="btn-primary">Search</button>
          </form>

          <div className="hero-stats">
            <div>
              <strong>24+</strong>
              <span>Restaurants</span>
            </div>
            <div>
              <strong>140+</strong>
              <span>Dishes</span>
            </div>
            <div>
              <strong>30 min</strong>
              <span>Avg. delivery</span>
            </div>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=600&fit=crop"
            alt=""
          />
        </div>
      </div>
    </section>
  )
}

export default HeroBanner
