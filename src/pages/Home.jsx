import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import HeroBanner from '../components/HeroBanner.jsx'
import CategorySection from '../components/CategorySection.jsx'
import OfferBanner from '../components/OfferBanner.jsx'
import RestaurantCard from '../components/RestaurantCard.jsx'
import { restaurants } from '../data/restaurants.js'
import './Home.css'

function Home() {
  const popular = useMemo(
    () => [...restaurants].sort((a, b) => b.rating - a.rating).slice(0, 4),
    []
  )
  const recommended = useMemo(
    () => [...restaurants].sort((a, b) => a.deliveryTime - b.deliveryTime).slice(0, 4),
    []
  )
  const topRated = useMemo(
    () => [...restaurants].filter((r) => r.rating >= 4.3).slice(0, 4),
    []
  )

  return (
    <div>
      <HeroBanner />
      <CategorySection />

      <section className="home-section">
        <div className="container">
          <div className="home-section-heading">
            <div>
              <h2 className="section-title">Popular Restaurants</h2>
              <p className="section-subtitle">Highest rated picks near you</p>
            </div>
            <Link to="/restaurants" className="see-all-link">See all →</Link>
          </div>
          <div className="restaurant-grid">
            {popular.map((r) => (
              <RestaurantCard key={r.id} restaurant={r} />
            ))}
          </div>
        </div>
      </section>

      <OfferBanner />

      <section className="home-section">
        <div className="container">
          <div className="home-section-heading">
            <div>
              <h2 className="section-title">Recommended for You</h2>
              <p className="section-subtitle">Fast delivery, great taste</p>
            </div>
            <Link to="/restaurants" className="see-all-link">See all →</Link>
          </div>
          <div className="restaurant-grid">
            {recommended.map((r) => (
              <RestaurantCard key={r.id} restaurant={r} />
            ))}
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="container">
          <div className="home-section-heading">
            <div>
              <h2 className="section-title">Top Rated Near You</h2>
              <p className="section-subtitle">Loved by thousands of foodies</p>
            </div>
            <Link to="/restaurants" className="see-all-link">See all →</Link>
          </div>
          <div className="restaurant-grid">
            {topRated.map((r) => (
              <RestaurantCard key={r.id} restaurant={r} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
