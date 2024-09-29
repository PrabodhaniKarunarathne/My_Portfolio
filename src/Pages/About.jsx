// // src/pages/About.jsx
// import React from 'react';
// import ParallaxBackground from '../Components/ParallaxBackground'; // Import the parallax component

// const About = () => {
//   return (
//     <>
//       <ParallaxBackground /> {/* Insert the parallax background */}
      
//         </>
//   );
// };

// export default About;


import React from 'react';
import ParallaxBackground from '../Components/ParallaxBackground'; // Import the parallax component


const About = () => {
  return (
    <div className="overflow-hidden">
      <ParallaxBackground />

      {/* Main Content */}
      <div className="container mt-5">
        <div className="row justify-content-center align-items-center text-center">
          <div className="col-12 col-md-8 col-lg-6">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
