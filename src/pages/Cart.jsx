import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { useAuth } from '../context/AuthContext.jsx'
import { formatPrice, formatPriceDecimal } from '../utils/helpers.js'
import './Cart.css'

function Cart() {
  const {
    items,
    cartCount,
    itemTotal,
    deliveryFee,
    platformFee,
    taxes,
    grandTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart()
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()

  const handleCheckout = () => {
    if (!isAuthenticated) {
      navigate('/login')
      return
    }
    alert('Order placed successfully! (This is a frontend demo — no real order was created.)')
    clearCart()
    navigate('/')
  }

  if (items.length === 0) {
    return (
      <div className="page-wrap">
        <div className="container empty-state">
          <h3>Your cart is empty</h3>
          <p>Looks like you haven't added anything yet.</p>
          <Link to="/restaurants" className="btn-primary" style={{ display: 'inline-block', marginTop: 16 }}>
            Browse restaurants
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="page-wrap">
      <div className="container cart-layout">
        <div className="cart-items">
          <div className="cart-items-header">
            <h1 className="section-title">Your Cart</h1>
            <button className="clear-cart-btn" onClick={clearCart}>Clear cart</button>
          </div>
          <p className="section-subtitle">{items[0].restaurantName} · {cartCount} item{cartCount > 1 ? 's' : ''}</p>

          <div className="cart-list">
            {items.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <p className="cart-item-restaurant">{item.restaurantName}</p>
                  <p className="cart-item-price">{formatPrice(item.price)}</p>
                </div>
                <div className="cart-item-actions">
                  <div className="qty-control">
                    <button onClick={() => decreaseQuantity(item.id)} aria-label={`Remove one ${item.name}`}>−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)} aria-label={`Add one more ${item.name}`}>+</button>
                  </div>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
                <div className="cart-item-subtotal">{formatPrice(item.price * item.quantity)}</div>
              </div>
            ))}
          </div>
        </div>

        <aside className="cart-summary">
          <h2>Bill Summary</h2>
          <div className="summary-row">
            <span>Item Total ({cartCount} item{cartCount > 1 ? 's' : ''})</span>
            <span>{formatPriceDecimal(itemTotal)}</span>
          </div>
          <div className="summary-row">
            <span>Delivery Fee</span>
            <span>{formatPriceDecimal(deliveryFee)}</span>
          </div>
          <div className="summary-row">
            <span>Platform Fee</span>
            <span>{formatPriceDecimal(platformFee)}</span>
          </div>
          <div className="summary-row">
            <span>Taxes &amp; Charges</span>
            <span>{formatPriceDecimal(taxes)}</span>
          </div>
          <div className="summary-row summary-total">
            <span>Grand Total</span>
            <span>{formatPriceDecimal(grandTotal)}</span>
          </div>

          <button className="btn-primary checkout-btn" onClick={handleCheckout}>
            {isAuthenticated ? 'Proceed to Checkout' : 'Login to Checkout'}
          </button>
        </aside>
      </div>
    </div>
  )
}

export default Cart
