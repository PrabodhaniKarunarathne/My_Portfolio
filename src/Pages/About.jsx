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
    ...(isSmallScreen && {
      maxHeight: '100vh', 
      overflowY: 'auto',
    }),
  };

  const AboutBackgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url('/Images/—Pngtree—network technology intelligence information data_4893164.png')`,
    backgroundRepeat: 'repeat-x',
    backgroundPosition: '0 20%',
    backgroundSize: isSmallScreen ? '800px' : '700px',
    opacity: 0.5,
    zIndex: 1,
    animationName: 'AboutBackgroundAnimation',
    animationDuration: '10s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
  };

  return (
    <div style={containerStyle}>
      <div style={AboutBackgroundStyle}></div>
      <div style={contentWrapperStyle}>
        <div className="container text-white" style={{fontWeight:'bold'}}>
          <h1 className="mt-5">Who <span style={{color:'#4E4AA1',fontWeight:'bold'}}>I</span> <span style={{color:'#3C3898',fontWeight:'bold'}}>Am</span></h1>
          <div className="row justify-content-center">
            
            {/* Column 1 - Card 1 */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mt-5">
              <div className="card text-center" style={{
                 backgroundColor: 'rgba(2, 1, 30,0.6)',
                 color:'#4E4AA1',
                 width: '100%',
                 padding: '0.5rem',
                 position: 'relative',
              }}>
                <div className="card-overlay">
                  <p><b>Explore My Education</b></p>
                </div>
                <div className="card-body">
                  <h5 style={{ textAlign: 'left' }}>
                    “With a B.Sc. from the University of Kelaniya, I’ve built a solid foundation in software engineering, developing various web and mobile applications, and engaging in group projects. I am particularly interested in full-stack development and creating user-centric solutions.”
                  </h5>
                </div>
              </div>
            </div>

            {/* Column 2 - Card 2 and Card 3 */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mt-3">
              <div className="card text-center mb-3" style={{
                backgroundColor: 'rgba(4, 3, 36,0.6)',
                color:'#4E4AA1',
                width: '100%',
                padding: '0.5rem',
                position: 'relative',
              }}>
                <div className="card-overlay">
                  <p><b>Creative Graphic Design</b></p>
                </div>
                <div className="card-body">
                  <h5 style={{ textAlign: 'left' }}>
                  In my free time, I enjoy graphic design. This hobby allows me to blend creativity with technology, and I love creating visually appealing and user-friendly interfaces.                  </h5>
                </div>
              </div>

              <div className="card text-center mb-3" style={{
                backgroundColor: 'rgba(5, 4, 42,0.6)',
                color:'#4E4AA1',
                width: '100%',
                padding: '0.5rem',
                position: 'relative',
              }}>
                <div className="card-overlay">
                  <p><b>Team Collaboration</b></p>
                </div>
                <div className="card-body">
                  <h5 style={{ textAlign: 'left' }}>
                  Collaboration is key to success in any project. I enjoy working with teams and believe that diverse perspectives lead to better solutions. I value open communication and shared ideas                  </h5>
                </div>
              </div>
            </div>

            {/* Column 3 - Card 4 and Card 5 */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mt-4">
              <div className="card text-center mb-3" style={{
                backgroundColor: 'rgba(12, 11, 56,0.6)',
                color:'#4E4AA1',
                width: '100%',
                padding: '0.5rem',
                position: 'relative',
              }}>
                <div className="card-overlay">
                  <p><b>Commitment to Continuous Growth</b></p>
                </div>
                <div className="card-body">
                  <h5 style={{ textAlign: 'left' }}>
                  I believe in continuous growth. I actively seek out new learning opportunities and stay updated with the latest industry trends to improve my technical skills and knowledge.                  </h5>
                </div>
              </div>

              <div className="card text-center" style={{
                backgroundColor: 'rgba(19, 17, 70,0.6)',
                color:'#4E4AA1',
                width: '100%',
                padding: '0.5rem',
                position: 'relative',
              }}>
                <div className="card-overlay">
                  <p><b>Passionate About Development</b></p>
                </div>
                <div className="card-body">
                  <h5 style={{ textAlign: 'left' }}>
                  I am passionate about software development and enjoy tackling challenging problems. I thrive in environments where I can apply my skills to create efficient and innovative solutions                  </h5>
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
