import React  from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {

  return (
    <div className="navbar">
      <ul className="nav-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About </Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
    
      </ul>
      <div className="nav-connect">Contact with me</div>
    </div>
  );
}
export default Navbar