import './SearchBar.css'

function SearchBar({ value, onChange, placeholder = 'Search...', autoFocus = false }) {
  return (
    <div className="search-bar">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="7" stroke="#686B78" strokeWidth="2" />
        <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="#686B78" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoFocus={autoFocus}
      />
      {value && (
        <button className="search-clear" onClick={() => onChange('')} aria-label="Clear search">
          ✕
        </button>
      )}
    </div>
  )
}

export default SearchBar
