import React from 'react';
// import StarBackground from '../Components/StarBackground'; // Import the starry background

const Home = () => {
  return (
    <div>
      {/* Starry Background */}
      {/* <StarBackground /> */}

      {/* Main Content */}
      <div className="container mt-5">
        <div className="row justify-content-center align-items-center text-center">
          <div className="col-12 col-md-8 col-lg-6">
            <h1 className="display-4 text-white mb-4 animate__animated animate__fadeInDown">
              Welcome to the Home Page
            </h1>
            <p className="lead text-muted animate__animated animate__fadeInUp">
              This page is built with responsiveness in mind using Bootstrap's grid system and utility classes. Resize your browser window to see the layout adjust.
            </p>
            <button className="btn btn-primary btn-lg mt-3 animate__animated animate__bounceIn">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
