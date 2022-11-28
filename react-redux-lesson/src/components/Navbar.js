import { NavLink, Link } from "react-router-dom"

const Home = () => {
    return (
        <nav className="nav-wrapper red darken-3">
        <div className="container">
          <Link className="brand-logo" to="/">Poke' Times</Link>
          <ul className="right">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
          </ul>
        </div>
      </nav> 
    )
  }
  
  export default Home