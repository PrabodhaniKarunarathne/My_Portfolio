import React, { useEffect, useRef } from 'react';
import './Resume.css'; // Assuming the CSS is in Resume.css
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS

const Resume = () => {
  const canvasRef = useRef(null);
  let w = window.innerWidth,
    h = window.innerHeight,
    rate = 60,
    arc = 100,
    time,
    count,
    size = 7,
    speed = 5,
    parts = new Array(),
    colors = ['#84A98C', '#558767', '#266441', '#31543F', '#CAD2C5'];
  const mouse = { x: 0, y: 0 };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = w;
    canvas.height = h;

    const createParticles = () => {
      time = 0;
      count = 0;

      for (let i = 0; i < arc; i++) {
        parts[i] = {
          x: Math.ceil(Math.random() * w),
          y: Math.ceil(Math.random() * h),
          toX: Math.random() * 5 - 1,
          toY: Math.random() * 2 - 1,
          c: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * size,
        };
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < arc; i++) {
        const li = parts[i];
        let distanceFactor = distanceBetween(mouse, parts[i]);
        distanceFactor = Math.max(Math.min(15 - distanceFactor / 10, 10), 1);

        ctx.beginPath();
        ctx.arc(li.x, li.y, li.size * distanceFactor, 0, Math.PI * 2, false);
        ctx.fillStyle = li.c;
        ctx.strokeStyle = li.c;
        if (i % 2 === 0) ctx.stroke();
        else ctx.fill();

        li.x += li.toX * (time * 0.05);
        li.y += li.toY * (time * 0.05);

        if (li.x > w) li.x = 0;
        if (li.y > h) li.y = 0;
        if (li.x < 0) li.x = w;
        if (li.y < 0) li.y = h;
      }

      if (time < speed) time++;
      setTimeout(drawParticles, 1000 / rate);
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const distanceBetween = (p1, p2) => {
      const dx = p2.x - p1.x;
      const dy = p2.y - p1.y;
      return Math.sqrt(dx * dx + dy * dy);
    };

    const handleResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };

    createParticles();
    drawParticles();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Cleanup to avoid side effects
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [arc, colors, speed]);

  return (
    <div className="resume-container">
      {/* Canvas for background animation */}
      <canvas ref={canvasRef} id="resume-background-canvas" />

      <div className="container mt-5">
        <div className="row justify-content-center">
          {/* First Card */}
          <div className="col-lg-3 col-md-6 col-sm-12 mb-3 mt-5">
            <div className="card text-center resume-card  bg-success bg-opacity-10 text-white" style={{height:'100%'}} >
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional content.
                </p>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="col-lg-3 col-md-6 col-sm-12 mb-3 mt-5">
            <div className="card text-center resume-card  bg-success bg-opacity-10 text-white" style={{height:'90%'}}>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional content.
                </p>
              </div>
            </div>
          </div>

          {/* Third Card */}
          <div className="col-lg-3 col-md-6 col-sm-12 mb-3 mt-5">
          <div className="card text-center resume-card animated-border-card">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">
      With supporting text below as a natural lead-in to additional content.
    </p>
  </div>
</div>

          </div>

          {/* Fourth Card */}
          <div className="col-lg-3 col-md-6 col-sm-12 mb-3 mt-5">
            <div className="card text-center resume-card  bg-success bg-opacity-10 text-white" style={{height:'70%'}}>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional content.
                </p>
                <a
                  href="/my_resume.pdf"
                  download="My_Resume.pdf"
                  className="btn "
                  style={{ backgroundColor: '#558767', color: 'white' }} // Apply custom background color
                onMouseOver={(e) => e.target.style.backgroundColor = '#31543F'} // Hover color change
                onMouseOut={(e) => e.target.style.backgroundColor = '#558767'}  // Reset on hover out
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
