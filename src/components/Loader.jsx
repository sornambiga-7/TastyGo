import './Loader.css'

function Loader({ label = 'Loading...' }) {
  return (
    <div className="loader-wrap" role="status" aria-live="polite">
      <span className="loader-spinner" />
      <p>{label}</p>
    </div>
  )
}

export default Loader
