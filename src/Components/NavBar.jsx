import React from "react";
// import logo from './path-to-your-logo.png'; // Add your logo path

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{
        background: "linear-gradient(90deg, #31543F, #214131)", // Gradient background
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: "1000"
      }}    >
      <div className="container-fluid">
        {/* Logo */}
        {/* <a className="navbar-brand" href="#home">
          <img src={logo} alt="Logo" width="40" height="40" className="d-inline-block align-text-top" />
          MyPortfolio
        </a> */}
        
        {/* Toggle Button for Small Screens */}
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Centered Nav Items */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo01">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item mx-3">
              <a href="#home" className="nav-link text-white">
                <i className="fas fa-home fa-fw me-2"></i>Home
              </a>
            </li>
            <li className="nav-item mx-3">
              <a href="#about" className="nav-link text-white">
                <i className="fas fa-user fa-fw me-2"></i>About
              </a>
            </li>
            <li className="nav-item mx-3">
              <a href="#projects" className="nav-link text-white">
                <i className="fas fa-briefcase fa-fw me-2"></i>Projects
              </a>
            </li>
            <li className="nav-item mx-3">
              <a href="#skills" className="nav-link text-white">
                <i className="fas fa-cogs fa-fw me-2"></i>Skills
              </a>
            </li>
            <li className="nav-item mx-3">
              <a href="#resume" className="nav-link text-white">
                <i className="fas fa-file-alt fa-fw me-2"></i>Resume
              </a>
            </li>
            <li className="nav-item mx-3">
              <a href="#contact" className="nav-link text-white">
                <i className="fas fa-envelope fa-fw me-2"></i>Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
