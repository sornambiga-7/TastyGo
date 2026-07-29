import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-col footer-brand">
          <h3>Tasty<em>Go</em></h3>
          <p>Delicious food, delivered fast from restaurants you love.</p>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About us</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li><Link to="/restaurants">Restaurants near you</Link></li>
            <li><Link to="/search">Search food</Link></li>
            <li><Link to="/cart">Your cart</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Reach out</h4>
          <ul>
            <li><a href="#help">Help &amp; support</a></li>
            <li><a href="#partner">Partner with us</a></li>
            <li><a href="#privacy">Privacy policy</a></li>
            <li><a href="#terms">Terms of service</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} TastyGo. Built as a demo project. All food images for illustration only.</p>
      </div>
    </footer>
  )
}

export default Footer
