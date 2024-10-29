import React, { useEffect, useState } from 'react';
import './About.css';


const About = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  // Update the state if the window is resized
  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: '#02011E',
    position: 'relative',
    overflow: 'hidden',
  };

  const contentWrapperStyle = {
    position: 'relative',
    zIndex: 2,
    margin: '2rem 0',
    ...(isSmallScreen && {
      maxHeight: '100vh',  // Restrict height on small screens
      overflowY: 'auto',  // Enable scrolling only for small screens
    }),
  };

  const AboutBackgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url('./src/images/—Pngtree—network technology intelligence information data_4893164.png')`,
    backgroundRepeat: 'repeat-x',
    backgroundPosition: '0 20%',
    backgroundSize: isSmallScreen ? '600px' : '700px',
    opacity: 0.5,
    zIndex: 1,
    
    animationName: 'AboutBackgroundAnimation', // Use the defined animation
    animationDuration: '10s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear', // Smooth animation
  };
  

  return (
    <div style={containerStyle}>
      {/* Background with reduced opacity */}
      <div style={AboutBackgroundStyle}></div>

      {/* Scrollable Content Section on small screens */}
      <div style={contentWrapperStyle}>
        <div className="container text-white">
          <div className="row justify-content-center">
            {/* Column 1 - Card 1 */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mt-5">
              <div className="card text-center  border-info bg-opacity-10 " style={{
                 backgroundColor: 'rgba(60, 56, 152,0.5)',
                 color:'#02011E',
                 width: '100%',
                padding: '1.5rem',
              }}>
                <div className="card-body">
                  <h5 style={{ textAlign: 'left' }}>
                    “With a B.Sc. from the University of Kelaniya, I’ve built a solid foundation in software engineering, developing various web and mobile applications, and engaging in group projects. I am particularly interested in full-stack development and creating user-centric solutions.”
                  </h5>
                </div>
              </div>
            </div>

            {/* Column 2 - Card 2 and Card 3 */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mt-5">
              <div className="card text-center  border-info bg-opacity-10  mb-3" style={{
                backgroundColor: 'rgba(2, 1, 30,0.5)',
                color:'#4E4AA1',
                width: '100%',
                padding: '1.5rem',
              }}>
                <div className="card-body">
                  <h5 style={{ textAlign: 'left' }}>
                    In addition to coding, I enjoy chess and graphic design, which helps me think creatively and strategically.
                  </h5>
                </div>
              </div>

              <div className="card text-center  border-info bg-opacity-10 " style={{
                backgroundColor: 'rgba(4, 3, 36,0.5)',
                color:'#4E4AA1',
                width: '100%',
                padding: '1.5rem',
              }}>
                <div className="card-body">
                  <h5 style={{ textAlign: 'left' }}>
                    I am continuously learning and exploring new technologies, always aiming to enhance my skills and bring innovative solutions.
                  </h5>
                </div>
              </div>
            </div>

            {/* Column 3 - Card 4 and Card 5 (Duplicated for demonstration) */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mt-5">
              <div className="card text-center  border-info bg-opacity-10  mb-3" style={{
                backgroundColor: 'rgba(5, 4, 42,0.5)',
                color:'#4E4AA1',
                width: '100%',
                padding: '1.5rem',
              }}>
                <div className="card-body">
                  <h5 style={{ textAlign: 'left' }}>
                    In addition to coding, I enjoy chess and graphic design, which helps me think creatively and strategically.
                  </h5>
                </div>
              </div>

              <div className="card text-center   " style={{
                backgroundColor: 'rgba(12, 11, 56,0.6)',
                color:'#4E4AA1',
                width: '100%',
                padding: '1.5rem',
              }}>
                <div className="card-body">
                  <h5 style={{ textAlign: 'left' }}>
                    I am continuously learning and exploring new technologies, always aiming to enhance my skills and bring innovative solutions.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
