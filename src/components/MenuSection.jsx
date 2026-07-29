import { useMemo, useState } from 'react'
import FoodCard from './FoodCard.jsx'
import './MenuSection.css'

function formatCategoryLabel(category) {
  return category
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

function MenuSection({ items }) {
  const [vegOnly, setVegOnly] = useState(false)

  const filteredItems = useMemo(
    () => (vegOnly ? items.filter((item) => item.isVeg) : items),
    [items, vegOnly]
  )

  const grouped = useMemo(() => {
    const map = {}
    filteredItems.forEach((item) => {
      if (!map[item.category]) map[item.category] = []
      map[item.category].push(item)
    })
    return map
  }, [filteredItems])

  const categoryKeys = Object.keys(grouped)

  return (
    <div className="menu-section">
      <div className="menu-section-header">
        <h2>Menu ({items.length} items)</h2>
        <label className="veg-toggle">
          <input type="checkbox" checked={vegOnly} onChange={(e) => setVegOnly(e.target.checked)} />
          <span className="veg-toggle-track">
            <span className="veg-toggle-thumb" />
          </span>
          Veg only
        </label>
      </div>

      {categoryKeys.length === 0 && (
        <div className="empty-state">
          <h3>No dishes match this filter</h3>
          <p>Try turning off the veg-only filter.</p>
        </div>
      )}

      {categoryKeys.map((category) => (
        <div key={category} className="menu-category">
          <h3>{formatCategoryLabel(category)} ({grouped[category].length})</h3>
          <div className="menu-grid">
            {grouped[category].map((item) => (
              <FoodCard key={item.id} food={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default MenuSection
