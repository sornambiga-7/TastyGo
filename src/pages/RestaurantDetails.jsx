import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import MenuSection from '../components/MenuSection.jsx'
import Loader from '../components/Loader.jsx'
import { restaurants } from '../data/restaurants.js'
import { foods } from '../data/foods.js'
import { formatPrice } from '../utils/helpers.js'
import './RestaurantDetails.css'

function RestaurantDetails() {
  const { id } = useParams()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => setLoading(false), 300)
    return () => clearTimeout(timer)
  }, [id])

  const restaurant = restaurants.find((r) => r.id === id)

  if (loading) return <Loader label="Loading restaurant..." />

  if (!restaurant) {
    return (
      <div className="page-wrap">
        <div className="container empty-state">
          <h3>Restaurant not found</h3>
          <p>The restaurant you're looking for doesn't exist.</p>
          <Link to="/restaurants" className="btn-primary" style={{ display: 'inline-block', marginTop: 16 }}>
            Browse restaurants
          </Link>
        </div>
      </div>
    )
  }

  const menuItems = foods.filter((f) => f.restaurantId === restaurant.id)

  return (
    <div className="page-wrap">
      <div className="restaurant-banner">
        <img src={restaurant.image} alt={restaurant.name} />
      </div>

      <div className="container">
        <div className="restaurant-header">
          <div>
            <h1>{restaurant.name}</h1>
            <p className="restaurant-header-cuisine">{restaurant.cuisine.join(', ')}</p>
            <p className="restaurant-header-address">{restaurant.location}</p>
            <p className="restaurant-header-desc">{restaurant.description}</p>
          </div>

          <div className="restaurant-header-stats">
            <div className="stat-box">
              <span className="stat-rating">★ {restaurant.rating.toFixed(1)}</span>
              <span>Rating</span>
            </div>
            <div className="stat-box">
              <span>{restaurant.deliveryTime} mins</span>
              <span>Delivery Time</span>
            </div>
            <div className="stat-box">
              <span>{formatPrice(restaurant.priceForTwo)}</span>
              <span>For Two</span>
            </div>
            <div className={`stat-box status-${restaurant.isOpen ? 'open' : 'closed'}`}>
              <span>{restaurant.isOpen ? 'Open' : 'Closed'}</span>
              <span>Status</span>
            </div>
          </div>
        </div>

        <MenuSection items={menuItems} />
      </div>
    </div>
  )
}

export default RestaurantDetails
