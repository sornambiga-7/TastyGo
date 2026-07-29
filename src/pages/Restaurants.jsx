import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import RestaurantCard from '../components/RestaurantCard.jsx'
import SearchBar from '../components/SearchBar.jsx'
import { restaurants } from '../data/restaurants.js'
import { categories } from '../data/categories.js'
import './Restaurants.css'

function Restaurants() {
  const [searchParams, setSearchParams] = useSearchParams()

  const [query, setQuery] = useState('')
  const [category, setCategory] = useState(searchParams.get('category') || 'all')
  const [minRating, setMinRating] = useState('all')
  const [maxDeliveryTime, setMaxDeliveryTime] = useState('all')
  const [sortBy, setSortBy] = useState('relevance')

  const handleCategoryChange = (value) => {
    setCategory(value)
    const params = new URLSearchParams(searchParams)
    if (value === 'all') params.delete('category')
    else params.set('category', value)
    setSearchParams(params)
  }

  const filteredRestaurants = useMemo(() => {
    let result = [...restaurants]

    if (query.trim()) {
      const q = query.trim().toLowerCase()
      result = result.filter(
        (r) =>
          r.name.toLowerCase().includes(q) ||
          r.cuisine.some((c) => c.toLowerCase().includes(q)) ||
          r.location.toLowerCase().includes(q)
      )
    }

    if (category !== 'all') {
      result = result.filter((r) => r.category === category)
    }

    if (minRating !== 'all') {
      result = result.filter((r) => r.rating >= Number(minRating))
    }

    if (maxDeliveryTime !== 'all') {
      result = result.filter((r) => r.deliveryTime <= Number(maxDeliveryTime))
    }

    if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating)
    } else if (sortBy === 'delivery') {
      result.sort((a, b) => a.deliveryTime - b.deliveryTime)
    } else if (sortBy === 'price-low') {
      result.sort((a, b) => a.priceForTwo - b.priceForTwo)
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.priceForTwo - a.priceForTwo)
    }

    return result
  }, [query, category, minRating, maxDeliveryTime, sortBy])

  const resetFilters = () => {
    setQuery('')
    setMinRating('all')
    setMaxDeliveryTime('all')
    setSortBy('relevance')
    handleCategoryChange('all')
  }

  return (
    <div className="page-wrap">
      <div className="container">
        <h1 className="section-title">All Restaurants</h1>
        <p className="section-subtitle">{filteredRestaurants.length} restaurants available</p>

        <div className="restaurants-searchbar">
          <SearchBar value={query} onChange={setQuery} placeholder="Search by restaurant, cuisine, or location" />
        </div>

        <div className="filters-bar">
          <select value={category} onChange={(e) => handleCategoryChange(e.target.value)}>
            <option value="all">All Categories</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>

          <select value={minRating} onChange={(e) => setMinRating(e.target.value)}>
            <option value="all">Any Rating</option>
            <option value="4.5">4.5+ Rating</option>
            <option value="4">4.0+ Rating</option>
            <option value="3.5">3.5+ Rating</option>
          </select>

          <select value={maxDeliveryTime} onChange={(e) => setMaxDeliveryTime(e.target.value)}>
            <option value="all">Any Delivery Time</option>
            <option value="30">Under 30 mins</option>
            <option value="40">Under 40 mins</option>
            <option value="50">Under 50 mins</option>
          </select>

          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="relevance">Sort: Relevance</option>
            <option value="rating">Sort: Rating (High to Low)</option>
            <option value="delivery">Sort: Delivery Time</option>
            <option value="price-low">Sort: Price (Low to High)</option>
            <option value="price-high">Sort: Price (High to Low)</option>
          </select>

          <button className="btn-outline reset-btn" onClick={resetFilters}>Reset</button>
        </div>

        {filteredRestaurants.length === 0 ? (
          <div className="empty-state">
            <h3>No restaurants match your filters</h3>
            <p>Try adjusting your search or filters.</p>
          </div>
        ) : (
          <div className="restaurant-grid">
            {filteredRestaurants.map((r) => (
              <RestaurantCard key={r.id} restaurant={r} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Restaurants
