import React from 'react';
import './Sidebar.css'; // Ensure you have this CSS file

const Sidebar = () => {
  return (
    <nav id="sidebarMenu" className="sidebar bg-dark text-light">
      <div className="position-sticky">
        <div className="text-center my-4">
          <img src="path/to/your/logo.png" alt="Logo" className="logo" />
          <h6>Prabodhani Karunarathne</h6>
          <a href="mailto:karunarathneprabodhani@gmail.com" className="text-light">
          <img 
              src="https://img.icons8.com/color/48/gmail-new.png" 
              alt="Gmail" 
              className="img-fluid me-2"  
              style={{ width: '24px' }}    
            />
          </a>
        </div>
        <div className="list-group list-group-flush mx-3 mt-4">
          <a href="#home" className="list-group-item list-group-item-action py-3 ripple home-btn" >
            <i className="fas fa-home fa-fw me-3"></i><span>Home</span>
          </a>
          <a href="#about" className="list-group-item list-group-item-action py-3 ripple">
            <i className="fas fa-user fa-fw me-3"></i><span>About</span>
          </a>
          <a href="#projects" className="list-group-item list-group-item-action py-3 ripple">
            <i className="fas fa-briefcase fa-fw me-3"></i><span>Projects</span>
          </a>
          <a href="#skills" className="list-group-item list-group-item-action py-3 ripple">
            <i className="fas fa-cogs fa-fw me-3"></i><span>Skills</span>
          </a>
          <a href="#resume" className="list-group-item list-group-item-action py-3 ripple">
            <i className="fas fa-file-alt fa-fw me-3"></i><span>Resume</span>
          </a>
          <a href="#contact" className="list-group-item list-group-item-action py-3 ripple">
            <i className="fas fa-envelope fa-fw me-3"></i><span>Contact</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
