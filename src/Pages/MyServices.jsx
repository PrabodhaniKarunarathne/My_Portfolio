import React, { useEffect, useRef, useState } from 'react';
import './MyServices.css';
import { FaMobileAlt, FaLaptopCode, FaPalette, FaDatabase } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyServices = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
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
    colors = ['#1B3A4B', '#212F45', '#144552', '#272640', '#312244'];
  const mouse = { x: 0, y: 0 };

  // Resize listener for responsiveness
  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [arc, colors, speed]);

  const servicesData = [
    {
      icon: <FaLaptopCode size={70} color="#4E4AA1" />,
      title: 'Web Development',
      description: 'Responsive and interactive websites using React, JavaScript, and CSS frameworks.',
    },
    {
      icon: <FaMobileAlt size={70} color="#4E4AA1" />,
      title: 'Mobile Development',
      description: 'Building cross-platform mobile apps with Kotlin and other mobile tech.',
    },
    {
      icon: <FaDatabase size={70} color="#4E4AA1" />,
      title: 'Backend Development',
      description: 'Secure and efficient server-side development with Node.js, Spring Boot, and databases.',
    },
    {
      icon: <FaPalette size={70} color="#4E4AA1" />,
      title: 'Graphic Design',
      description: 'Creating logos, illustrations, and visual assets with Adobe Photoshop and Illustrator.',
    },
  ];

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

  return (
    <div style={containerStyle}>
      <canvas ref={canvasRef} id="background-canvas" />

      <div style={contentWrapperStyle}>
        <div className="container mt-5 text-white">
          <h1 className="services-title" style={{fontWeight:'bold'}}>What <span style={{color:'#4E4AA1'}}>I</span> <span style={{color:'#3C3898'}}>Do</span></h1>
          <div className="row justify-content-center">
            {servicesData.map((service, index) => (
              <div className="col-lg-3 col-md-6 col-sm-12 mb-3 mt-5" key={index}>
                <div className="card animated-border-card text-center h-100" style={{ zIndex: 2 }}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <div className="card-body border">
                    <div className="service-icon-container">
                      <div className="service-icon">
                        {service.icon}
                      </div>
                    </div>
                    <h5 className="card-title" style={{ color: '#2F2B7D', fontWeight: 'bold' }}>{service.title}</h5>
                    <p className="card-text" style={{ color: '#4E4AA1' }}>{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyServices;
