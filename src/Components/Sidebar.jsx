import React from "react";

const Navbar = () => {
  const scrollToSection = (event, sectionId) => {
    event.preventDefault(); // Prevent default anchor click behavior
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark border  rounded text-align-center"
        style={{
          background: "linear-gradient(90deg,#2F2B7D, #040324 )", // Gradient background
          position: "fixed",
          opacity:0.9,
          top: 5,
          left:'5%',
          width: "90%",
          zIndex: "1000",
          border:'12px',
          borderColor:'#4E4AA1'
        }}
      >
        <div className="container-fluid">
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
          <div className="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo01">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item mx-3">
                <a href="#home" className="nav-link text-#558767 fw-bold" onClick={(e) => scrollToSection(e, "home")}>
                  <i className="bi bi-house-door-fill me-2"></i>Home
                </a>
              </li>
              <li className="nav-item mx-3">
                <a href="#about" className="nav-link text-#558767 fw-bold" onClick={(e) => scrollToSection(e, "about")}>
                  <i className="bi bi-person-fill me-2"></i>About
                </a>
              </li>
              
              <li className="nav-item mx-3">
                <a href="#skills" className="nav-link text-#558767 fw-bold" onClick={(e) => scrollToSection(e, "skills")}>
                  <i className="bi bi-gear-fill me-2"></i>Skills
                </a>
              </li>
              <li className="nav-item mx-3">
                <a href="#projects" className="nav-link text-#558767 fw-bold" onClick={(e) => scrollToSection(e, "projects")}>
                  <i className="bi bi-briefcase-fill me-2"></i>Projects
                </a>
              </li>
              <li className="nav-item mx-3">
                <a href="#myServices" className="nav-link text-#558767 fw-bold" onClick={(e) => scrollToSection(e, "myServices")}>
                  <i className="bi bi-file-earmark-text-fill me-2"></i>Services
                </a>
              </li>
              <li className="nav-item mx-3">
                <a href="#contact" className="nav-link text-#558767 fw-bold" onClick={(e) => scrollToSection(e, "contact")}>
                  <i className="bi bi-envelope-fill me-2"></i>Contact
                </a>
              </li>
            </ul>
          </div>
          <img
            src="/portfolio.png" // Path to logo file in the public folder
            alt="Logo"
            style={{
              height: "40px", // Adjust size as needed
              marginRight: "20px",
              cursor: "pointer",
              opacity:'0.5'
            }}
            onClick={() => scrollToSection(new Event('click'), "home")} // Optional: Click to scroll to the top
            className="ms-auto" // Pushes the logo to the right side
          />
        </div>
      </nav>

      {/* Offcanvas Sidebar */}
      <div className="offcanvas offcanvas-start-50 top-0" id="offcanvasSidebar" style={{ background: "linear-gradient(90deg, #4E4AA1, #02011E)" }}>
        <div className="offcanvas-header">
          <h6 className="offcanvas-title text-white">Menu</h6>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav mb-1 mb-lg-0">
            <li className="nav-item mx-3">
              <a href="#home" className="nav-link text-white fw-bold" onClick={(e) => scrollToSection(e, "home")}>
                <i className="bi bi-house-door-fill me-2"></i>Home
              </a>
            </li>
            <li className="nav-item mx-3">
              <a href="#about" className="nav-link text-white fw-bold" onClick={(e) => scrollToSection(e, "about")}>
                <i className="bi bi-person-fill me-2"></i>About
              </a>
            </li>
            
            <li className="nav-item mx-3">
              <a href="#skills" className="nav-link text-white fw-bold" onClick={(e) => scrollToSection(e, "skills")}>
                <i className="bi bi-gear-fill me-2"></i>Skills
              </a>
            </li>
            <li className="nav-item mx-3">
              <a href="#projects" className="nav-link text-white fw-bold" onClick={(e) => scrollToSection(e, "projects")}>
                <i className="bi bi-briefcase-fill me-2"></i>Projects
              </a>
            </li>
            <li className="nav-item mx-3">
              <a href="#myServices" className="nav-link text-white fw-bold" onClick={(e) => scrollToSection(e, "myServices")}>
                <i className="bi bi-file-earmark-text-fill me-2"></i>Resume
              </a>
            </li>
            <li className="nav-item mx-3">
              <a href="#contact" className="nav-link text-white fw-bold" onClick={(e) => scrollToSection(e, "contact")}>
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
