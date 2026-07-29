import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  return (
    <div className="page-wrap">
      <div className="container not-found">
        <span className="not-found-code">404</span>
        <h1>Page not found</h1>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="btn-primary">Back to home</Link>
      </div>
    </div>
  )
}

export default NotFound
