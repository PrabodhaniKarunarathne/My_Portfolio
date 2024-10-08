import React from 'react';

const About = () => {
  const containerStyle = {
    height: '100vh',
    backgroundColor: '#02201A',
    position: 'relative',  // Ensure the container is relatively positioned
    overflow: 'hidden'      // Hide overflow from the pseudo-element
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 2,  // Ensure the content stays above the background
    height: '100vh'
  };

  const parallaxBackgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `
      url('./src/images/—Pngtree—green technology circuit_5926764.png')
    `,
    backgroundRepeat: 'repeat-x',
    backgroundPosition: `
      0 20%,
      0 100%,
      0 50%,
      0 100%,
      0 0
    `,
    backgroundSize: `
      2500px,
      800px,
      500px 200px,
      1000px,
      400px 260px
    `,
    opacity: 0.5,  // Reduce opacity of the background image
    animation: 'parallaxAnimation 50s infinite linear',
    zIndex: 1  // Keep background behind the content
  };

  return (
    <div style={containerStyle}>
      {/* Background with reduced opacity */}
      <div style={parallaxBackgroundStyle}></div>
      
      {/* Content of the section */}
      <div className="container d-flex flex-column justify-content-center align-items-center text-white" style={contentStyle}>
        <h1>Welcome to the About Page</h1>
        <p>This section has a parallax background animation.</p>
      </div>
    </div>
  );
};

export default About;
