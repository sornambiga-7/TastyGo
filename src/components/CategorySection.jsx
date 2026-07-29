import { useNavigate } from 'react-router-dom'
import { categories } from '../data/categories.js'
import './CategorySection.css'

function CategorySection() {
  const navigate = useNavigate()

  return (
    <section className="category-section">
      <div className="container">
        <h2 className="section-title">What's on your mind?</h2>
        <p className="section-subtitle">Explore restaurants by category</p>

        <div className="category-grid">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className="category-item"
              onClick={() => navigate(`/restaurants?category=${cat.id}`)}
            >
              <div className="category-image">
                <img src={cat.image} alt={cat.name} loading="lazy" />
              </div>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategorySection
