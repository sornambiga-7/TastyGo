import { Link } from 'react-router-dom'
import { formatPrice } from '../utils/helpers.js'
import './RestaurantCard.css'

function RestaurantCard({ restaurant }) {
  const { id, name, image, rating, deliveryTime, cuisine, priceForTwo, location, isOpen } = restaurant

  return (
    <Link to={`/restaurant/${id}`} className={`restaurant-card ${!isOpen ? 'is-closed' : ''}`}>
      <div className="restaurant-card-image">
        <img src={image} alt={name} loading="lazy" />
        {!isOpen && <span className="closed-badge">Closed now</span>}
        <span className="rating-badge">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
          </svg>
          {rating.toFixed(1)}
        </span>
      </div>
      <div className="restaurant-card-body">
        <h3>{name}</h3>
        <p className="restaurant-cuisine">{cuisine.join(', ')}</p>
        <div className="restaurant-meta">
          <span>{deliveryTime} mins</span>
          <span className="dot">•</span>
          <span>{formatPrice(priceForTwo)} for two</span>
        </div>
        <p className="restaurant-location">{location}</p>
      </div>
    </Link>
  )
}

export default RestaurantCard
