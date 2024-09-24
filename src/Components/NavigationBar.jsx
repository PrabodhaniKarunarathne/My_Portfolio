// Components/NavigationBar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for navigation

function NavigationBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">My Website</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" data-bs-toggle="tab" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" data-bs-toggle="tab" to="/menu1">Menu 1</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" data-bs-toggle="tab" to="/menu2">Menu 2</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
