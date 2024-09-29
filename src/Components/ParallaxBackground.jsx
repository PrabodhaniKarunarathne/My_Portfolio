// src/components/ParallaxBackground.jsx
import React from 'react';

const ParallaxBackground = () => {
  const parallaxStyle = {
    height: '100vh',
    backgroundColor: 'hsla(200, 40%, 30%, 0.4)',
    backgroundImage: `
      url('https://78.media.tumblr.com/cae86e76225a25b17332dfc9cf8b1121/tumblr_p7n8kqHMuD1uy4lhuo1_540.png'),
      url('https://78.media.tumblr.com/66445d34fe560351d474af69ef3f2fb0/tumblr_p7n908E1Jb1uy4lhuo1_1280.png'),
      url('https://78.media.tumblr.com/8cd0a12b7d9d5ba2c7d26f42c25de99f/tumblr_p7n8kqHMuD1uy4lhuo2_1280.png'),
      url('https://78.media.tumblr.com/5ecb41b654f4e8878f59445b948ede50/tumblr_p7n8on19cV1uy4lhuo1_1280.png'),
      url('https://78.media.tumblr.com/28bd9a2522fbf8981d680317ccbf4282/tumblr_p7n8kqHMuD1uy4lhuo3_1280.png')
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
    animation: 'parallaxAnimation 50s infinite linear'
  };

  return (
    <div style={parallaxStyle}>
      {/* Content of the section */}
      <div className="container d-flex flex-column justify-content-center align-items-center text-white" style={{ height: '100vh' }}>
        <h1>Welcome to the About Page</h1>
        <p>This section has a parallax background animation.</p>
      </div>
    </div>
  );
};

export default ParallaxBackground;
