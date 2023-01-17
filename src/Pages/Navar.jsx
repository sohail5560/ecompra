import { Link } from "react-router-dom"

function Navbar() {
    return (
      <nav>
        <div className="logo">LOGO</div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="btn-sign">
        <a href="/login" className="login-btn">Login</a>
        <a href="https://www.example.com/signup" className="signup-btn">Signup</a>
        </div>
      </nav>
    )
  }
  
  export default Navbar
  