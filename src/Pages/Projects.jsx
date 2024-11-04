import React, { useState, useEffect } from 'react';
import {
  FaReact, FaNodeJs, FaJs, FaGitAlt, FaJava, FaPython, FaPhp, FaDocker, FaGithub
} from "react-icons/fa";
import {
  SiCsharp, SiKotlin, SiSpring, SiDotnet, SiOracle, SiMysql, SiMongodb,
  SiHtml5, SiCss3, SiTailwindcss, SiAdobephotoshop, SiAdobeillustrator,
  SiCoreldraw, SiAdobexd, SiFigma, SiBootstrap, SiVite
} from "react-icons/si";
import './Projects.css';

const Projects = () => {
  // Define tech icons with associated colors
  const techIcons = {
    React: <FaReact color="#61DAFB" />,
    NodeJs: <FaNodeJs color="#339933" />,
    JavaScript: <FaJs color="#F7DF1E" />,
    Git: <FaGitAlt color="#F05032" />,
    Java: <FaJava color="#007396" />,
    Python: <FaPython color="#3776AB" />,
    PHP: <FaPhp color="#777BB4" />,
    Docker: <FaDocker color="#2496ED" />,
    CSharp: <SiCsharp color="#239120" />,
    Kotlin: <SiKotlin color="#0095D5" />,
    Spring: <SiSpring color="#6DB33F" />,
    DotNet: <SiDotnet color="#512BD4" />,
    Oracle: <SiOracle color="#F80000" />,
    MySQL: <SiMysql color="#4479A1" />,
    MongoDB: <SiMongodb color="#47A248" />,
    HTML5: <SiHtml5 color="#E34F26" />,
    CSS3: <SiCss3 color="#1572B6" />,
    TailwindCSS: <SiTailwindcss color="#38B2AC" />,
    Photoshop: <SiAdobephotoshop color="#31A8FF" />,
    Illustrator: <SiAdobeillustrator color="#FF9A00" />,
    CorelDraw: <SiCoreldraw color="#0BDB43" />,
    XD: <SiAdobexd color="#FF26BE" />,
    Figma: <SiFigma color="#F24E1E" />,
    Bootstrap: <SiBootstrap color="#7952B3" />,
    Vite: <SiVite color="#646CFF" />,
  };

  const PBackgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
    backgroundImage: `url('./Images/—Pngtree—network data globe blue _4945702.png')`,
    backgroundRepeat: 'repeat-x',
    backgroundPosition: '0 20%, 0 100%, 0 50%, 0 100%, 0 0',
    backgroundSize: '700px, 800px, 500px 200px, 1000px, 400px 260px',
    opacity: 0.2,
    zIndex: 1,
    animation: 'PBackgroundAnimation 20s infinite linear',
  };

  const cardData = [
    {
      imgSrc: './Images/Naviguide.png',
      title: 'Naviguide Project',
      text: 'A web-based platform that allows the community to connect Resource persons for Awareness Programs.',
      technologies: ['React', 'Spring', 'Java', 'MongoDB'],
      githubLink: 'https://github.com/PrabodhaniKarunarathne/Project_NaviGuide.git',
    },
    {
      imgSrc: './Images/Maths.png',
      title: 'Mathematics Society Web',
      text: 'A web platform for the Mathematics Society to share resources and events.',
      technologies: ['HTML5', 'CSS3', 'PHP', 'JavaScript'],
      githubLink: 'https://github.com/PrabodhaniKarunarathne/Mathematics_Student_Association_Website.git',
    },
    {
      imgSrc: './Images/foodMS.png',
      title: 'Food Management System',
      text: 'A platform that gets food from the donors and donates it to the corresponding people',
      technologies: ['DotNet', 'CSharp', 'MySQL'],
      githubLink: 'https://github.com/PrabodhaniKarunarathne/Waste-Food-Management-System.git',
    },
    {
      imgSrc: './Images/hotelMS.png',
      title: 'Hotel Management System',
      text: 'A system to manage hotel bookings and operations efficiently.',
      technologies: ['Java'],
      githubLink: 'https://github.com/PrabodhaniKarunarathne/Hotel-Management-System.git',
    },
    {
      imgSrc: './Images/todo.png',
      title: 'To-Do List App',
      text: 'A simple app to manage tasks efficiently.',
      technologies: ['Kotlin'],
      githubLink: 'https://github.com/PrabodhaniKarunarathne/Project_To-Do.git',
    },
    
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [animationDirection, setAnimationDirection] = useState('');

  // Effect to update cards per page based on screen size
  useEffect(() => {
    const handleResize = () => {
      setCardsPerPage(window.innerWidth < 768 ? 2 : 3);
    };

    // Set initial cards per page
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardData.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(cardData.length / cardsPerPage);

  const changePage = (newPage) => {
    setAnimationDirection(newPage > currentPage ? 'slide-left' : 'slide-right');
    setCurrentPage(newPage);
    setTimeout(() => setAnimationDirection(''), 500);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) changePage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) changePage(currentPage - 1);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <div style={PBackgroundStyle}></div>
      <div className="container mt-5" style={{ position: 'relative', zIndex: 2 }}>
        <h1 className="mt-3 text-white"><p >Highlighted Projects   </p></h1>
        {/* Card Container */}
        <div className={`row row-cols-1 row-cols-md-3 g-4 card-container ${animationDirection}`}>
          {currentCards.map((card, index) => (
            <div className="col" key={index}>
              <div className="flip-card">
                <div className="flip-card-inner">
                  {/* Front of the card */}
                  <div className="flip-card-front">
                    <div className="card h-100  animated-border" 
                    style={{ backgroundColor: 'rgba(2, 1, 30,0.5)', 
                      borderRadius: '0.5rem',
                      color:'#02011E',
                      fontWeight:'bold',  
                      height: '500px' }}>
                      <div style={{ height: '250px', overflow: 'hidden' }}>
                        <img src={card.imgSrc} className="card-img-top " alt={card.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title " style={{}}>{card.title}</h5>
                      </div>
                    </div>
                  </div>
                  {/* Back of the card */}
                  <div className="flip-card-back">
                    <div className="card h-100  animated-border" style={{ backgroundColor: '#4E4AA1', borderRadius: '0.5rem',  height: '500px' }}>
                      <div className="card-body">
                        <h5 className="card-title " style={{color:'#02011E',fontWeight:'bold'}}>{card.title}</h5>
                        <p className="card-text" style={{color:'#02011E'}}>{card.text}</p>
                        <div className="card-technologies mt-1 text-center">
                          <h6 className="" style={{color:'#02011E',fontWeight:'bold'}}>Technologies Used:</h6>
                          <div className="d-flex justify-content-center flex-wrap">
                            {card.technologies.map((tech, idx) => (
                              <span key={idx} className="tech-icon me-2" style={{  margin: '0.2rem' }}>
                                {techIcons[tech] || tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="card-footer">
                        <a href={card.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-custom">
                          View on GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <nav aria-label="Card Pagination">
          <ul className="pagination justify-content-center mt-4">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button className="page-link btn-custom" style={{ backgroundColor: currentPage ===  1 ? '#4E4AA1' : '#02011E', color: currentPage === 1? '#02011E' : '#211E61'}}  onClick={handlePrevPage}  >
                Previous
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, idx) => (
              <li key={idx + 1} className={`page-item ${currentPage === idx + 1 ? 'active' : ''}`}>
                <button className="page-link btn-custom" style={{ backgroundColor: currentPage === idx + 1 ? '#4E4AA1' : '#02011E', color: currentPage === idx + 1 ? '#02011E' : '#211E61' }} onClick={() => changePage(idx + 1)}>
                  {idx + 1}
                </button>
              </li>
            ))}
            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
              <button className="page-link btn-custom"  style={{ backgroundColor: currentPage ===  totalPages ? '#4E4AA1' : '#02011E', color: currentPage === totalPages ? '#02011E' : '#211E61'}} onClick={handleNextPage}>
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Projects;
