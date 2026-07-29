import { useCart } from '../context/CartContext.jsx'
import { formatPrice } from '../utils/helpers.js'
import './FoodCard.css'

function VegBadge({ isVeg }) {
  return (
    <span className={`veg-badge ${isVeg ? 'veg' : 'non-veg'}`} aria-label={isVeg ? 'Veg' : 'Non-veg'}>
      <span className="veg-dot" />
    </span>
  )
}

function FoodCard({ food, showRestaurant = false }) {
  const { items, addToCart, increaseQuantity, decreaseQuantity } = useCart()
  const cartItem = items.find((item) => item.id === food.id)

  return (
    <div className={`food-card ${!food.isAvailable ? 'unavailable' : ''}`}>
      <div className="food-card-image">
        <img src={food.image} alt={food.name} loading="lazy" />
        {!food.isAvailable && <span className="unavailable-badge">Out of stock</span>}
      </div>
      <div className="food-card-body">
        <VegBadge isVeg={food.isVeg} />
        <h4>{food.name}</h4>
        {showRestaurant && <p className="food-restaurant">{food.restaurantName}</p>}
        <p className="food-price">{formatPrice(food.price)}</p>
        <p className="food-description">{food.description}</p>

        <div className="food-card-footer">
          <span className="food-rating">★ {food.rating.toFixed(1)}</span>
          {food.isAvailable ? (
            cartItem ? (
              <div className="qty-control">
                <button onClick={() => decreaseQuantity(food.id)} aria-label={`Remove one ${food.name}`}>−</button>
                <span>{cartItem.quantity}</span>
                <button onClick={() => increaseQuantity(food.id)} aria-label={`Add one more ${food.name}`}>+</button>
              </div>
            ) : (
              <button className="add-btn" onClick={() => addToCart(food, 1)}>
                Add +
              </button>
            )
          ) : (
            <button className="add-btn" disabled>
              Add +
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default FoodCard
