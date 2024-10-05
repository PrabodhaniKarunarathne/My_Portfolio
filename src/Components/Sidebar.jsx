// src/Navbar.jsx
import React from "react";
// import logo from './path-to-your-logo.png'; // Add your logo path
// import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap icons

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{
          background: "linear-gradient(90deg, #31543F, #011E19)", // Gradient background
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: "1000",
        }}
      >
        <div className="container-fluid">
          {/* Logo */}
          {/* <a className="navbar-brand" href="#home">
            <img src={logo} alt="Logo" width="40" height="40" className="d-inline-block align-text-top" />
            MyPortfolio
          </a> */}

          {/* Toggle Button for Offcanvas */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasSidebar"
            aria-controls="offcanvasSidebar"
            aria-expanded="false"
            aria-label="Toggle sidebar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Centered Nav Items */}
          <div className="collapse navbar-collapse justify-content-center " id="navbarTogglerDemo01">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item mx-3 ">
                <a href="#home" className="nav-link text-#558767 fw-bold">
                  <i className="bi bi-house-door-fill me-2"></i>Home
                </a>
              </li>
              <li className="nav-item mx-3">
                <a href="#about" className="nav-link text-#558767 fw-bold">
                  <i className="bi bi-person-fill me-2"></i>About
                </a>
              </li>
              <li className="nav-item mx-3">
                <a href="#projects" className="nav-link text-#558767 fw-bold">
                  <i className="bi bi-briefcase-fill me-2"></i>Projects
                </a>
              </li>
              <li className="nav-item mx-3">
                <a href="#skills" className="nav-link text-#558767 fw-bold">
                  <i className="bi bi-gear-fill me-2"></i>Skills
                </a>
              </li>
              <li className="nav-item mx-3">
                <a href="#resume" className="nav-link text-#558767 fw-bold">
                  <i className="bi bi-file-earmark-text-fill me-2"></i>Resume
                </a>
              </li>
              <li className="nav-item mx-3">
                <a href="#contact" className="nav-link text-#558767 fw-bold">
                  <i className="bi bi-envelope-fill me-2"></i>Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Offcanvas Sidebar */}
      
      <div className="offcanvas offcanvas-start-50 top-0" id="offcanvasSidebar" style={{background: "linear-gradient(90deg, #84A98C, #214131)"}}>
        <div className="offcanvas-header">
          <h6 className="offcanvas-title text-white">Menu</h6>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav mb-1 mb-lg-0">
            <li className="nav-item mx-3">
              <a href="#home" className="nav-link text-white fw-bold">
                <i className="bi bi-house-door-fill me-2"></i>Home
              </a>
            </li>
            <li className="nav-item mx-3">
              <a href="#about" className="nav-link text-white fw-bold">
                <i className="bi bi-person-fill me-2"></i>About
              </a>
            </li>
            <li className="nav-item mx-3">
              <a href="#projects" className="nav-link text-white fw-bold">
                <i className="bi bi-briefcase-fill me-2"></i>Projects
              </a>
            </li>
            <li className="nav-item mx-3">
              <a href="#skills" className="nav-link text-white fw-bold">
                <i className="bi bi-gear-fill me-2"></i>Skills
              </a>
            </li>
            <li className="nav-item mx-3">
              <a href="#resume" className="nav-link text-white fw-bold">
                <i className="bi bi-file-earmark-text-fill me-2"></i>Resume
              </a>
            </li>
            <li className="nav-item mx-3">
              <a href="#contact" className="nav-link text-white fw-bold">
                <i className="bi bi-envelope-fill me-2"></i>Contact
              </a>
            </li>
          </ul>

          </div>
      </div>
    </div>
  );
};

export default Navbar;
