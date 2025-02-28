import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
return (
    
<nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <img src={logo} alt="Logo" width="30" height="30" />
        MyApp
      </a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/Home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/StudentView">Student View</Link>
          </li>
        </ul>
      </div>
    </nav>
   
);

}

export default NavBar
