import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import SearchBar from '../components/SearchBar.jsx'
import RestaurantCard from '../components/RestaurantCard.jsx'
import FoodCard from '../components/FoodCard.jsx'
import { restaurants } from '../data/restaurants.js'
import { foods } from '../data/foods.js'
import './Search.css'

function Search() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') || '')

  useEffect(() => {
    const params = new URLSearchParams(searchParams)
    if (query.trim()) params.set('q', query.trim())
    else params.delete('q')
    setSearchParams(params, { replace: true })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  const matchedRestaurants = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    return restaurants.filter(
      (r) =>
        r.name.toLowerCase().includes(q) ||
        r.cuisine.some((c) => c.toLowerCase().includes(q))
    )
  }, [query])

  const matchedFoods = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    return foods.filter(
      (f) => f.name.toLowerCase().includes(q) || f.restaurantName.toLowerCase().includes(q)
    )
  }, [query])

  const hasQuery = query.trim().length > 0
  const hasResults = matchedRestaurants.length > 0 || matchedFoods.length > 0

  return (
    <div className="page-wrap">
      <div className="container">
        <h1 className="section-title">Search</h1>
        <p className="section-subtitle">Find restaurants and dishes instantly</p>

        <div className="search-page-bar">
          <SearchBar
            value={query}
            onChange={setQuery}
            placeholder="Search for restaurants or dishes"
            autoFocus
          />
        </div>

        {!hasQuery && (
          <div className="empty-state">
            <h3>Start typing to search</h3>
            <p>Try "biryani", "pizza", or a restaurant name.</p>
          </div>
        )}

        {hasQuery && !hasResults && (
          <div className="empty-state">
            <h3>No results for "{query}"</h3>
            <p>Try a different keyword or check the spelling.</p>
          </div>
        )}

        {matchedRestaurants.length > 0 && (
          <section className="search-results-section">
            <h2>Restaurants ({matchedRestaurants.length})</h2>
            <div className="restaurant-grid">
              {matchedRestaurants.map((r) => (
                <RestaurantCard key={r.id} restaurant={r} />
              ))}
            </div>
          </section>
        )}

        {matchedFoods.length > 0 && (
          <section className="search-results-section">
            <h2>Dishes ({matchedFoods.length})</h2>
            <div className="menu-grid">
              {matchedFoods.map((f) => (
                <FoodCard key={f.id} food={f} showRestaurant />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

export default Search
