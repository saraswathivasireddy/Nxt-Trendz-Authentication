// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
        alt="website logo"
        className="website-logo-image"
      />
      <div className="navbar-links-container">
      <ul>
        <Link to="/">
          <li className="navbar-links-styles">Home</li>
        </Link>
        <Link>
          <li className="navbar-links-styles">Products</li>
        </Link>
        <Link>
          <li className="navbar-links-styles">Cart</li>
        </Link>
      </ul>
        <button className="navbar-links-styles logout-button-style">
          Logout
        </button>
      </div>
    </nav>
  )
}

export default Header
