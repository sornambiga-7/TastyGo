import { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext(null)

const STORAGE_KEY = 'tastygo_cart'
const DELIVERY_FEE = 40
const PLATFORM_FEE = 6
const TAX_RATE = 0.05 // 5%

function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadCart)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const addToCart = (food, quantity = 1) => {
    setItems((prev) => {
      // Enforce single-restaurant cart, like real food delivery apps
      if (prev.length > 0 && prev[0].restaurantId !== food.restaurantId) {
        const confirmed = window.confirm(
          `Your cart has items from ${prev[0].restaurantName}. Start a new cart with items from ${food.restaurantName}?`
        )
        if (!confirmed) return prev
        return [{ ...food, quantity }]
      }
      const existing = prev.find((item) => item.id === food.id)
      if (existing) {
        return prev.map((item) =>
          item.id === food.id ? { ...item, quantity: item.quantity + quantity } : item
        )
      }
      return [...prev, { ...food, quantity }]
    })
  }

  const increaseQuantity = (foodId) => {
    setItems((prev) =>
      prev.map((item) => (item.id === foodId ? { ...item, quantity: item.quantity + 1 } : item))
    )
  }

  const decreaseQuantity = (foodId) => {
    setItems((prev) =>
      prev
        .map((item) => (item.id === foodId ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0)
    )
  }

  const removeFromCart = (foodId) => {
    setItems((prev) => prev.filter((item) => item.id !== foodId))
  }

  const clearCart = () => setItems([])

  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0)
  const itemTotal = Number(
    items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)
  )
  const deliveryFee = items.length > 0 ? DELIVERY_FEE : 0
  const platformFee = items.length > 0 ? PLATFORM_FEE : 0
  const taxes = Number((itemTotal * TAX_RATE).toFixed(2))
  const grandTotal = Number((itemTotal + deliveryFee + platformFee + taxes).toFixed(2))

  const value = {
    items,
    cartCount,
    itemTotal,
    deliveryFee,
    platformFee,
    taxes,
    grandTotal,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within a CartProvider')
  return context
}
