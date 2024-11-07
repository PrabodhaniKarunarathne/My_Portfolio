import React, { useState, useEffect } from 'react';
import {
  FaReact, FaNodeJs, FaJs, FaGitAlt, FaJava, FaPython, FaPhp, FaDocker, FaGithub
} from "react-icons/fa";
import {
  SiCsharp, SiKotlin, SiSpring, SiDotnet, SiOracle, SiMysql, SiMongodb,
  SiHtml5, SiCss3, SiTailwindcss, SiAdobephotoshop, SiAdobeillustrator,
  SiCoreldraw, SiAdobexd, SiFigma, SiBootstrap, SiVite
} from "react-icons/si";
import './ProjectPage.css';

const ProjectsPage = () => {
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
      title: 'To-Do  App',
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
      setCardsPerPage(window.innerWidth < 370 ? 1 : window.innerWidth < 1000 ? 2 : 3);
    }

    // Set initial cards per page
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Pagination logic
  const indexOfLastProject = currentPage * cardsPerPage;
  const indexOfFirstProject = indexOfLastProject - cardsPerPage;
  const currentProjects = cardData.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(cardData.length / cardsPerPage);

  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

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

  // Inline background style (PBackgroundStyle)
  const PBackgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
    backgroundImage: `url('./Images/network.png')`,
    backgroundRepeat: 'repeat-x',
    backgroundPosition: '0 20%, 0 100%, 0 50%, 0 100%, 0 0',
    backgroundSize: '1000px',
    opacity: 0.5,
    zIndex: 1,
    animation: 'PBackgroundAnimation 20s infinite linear',
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Background */}
      <div style={PBackgroundStyle}></div>

      <div className="projects-background">
        <div className="projects-container">
        <h1 className=" text-white" style={{fontWeight:'bold'}}>Highlighted <span style={{color:'#4E4AA1'}}>Projects</span>   </h1>
          <div className={`card-container ${animationDirection}`}>
            {currentProjects.map((card, index) => (
              <div className="flip-card" key={index}>
                <div className="flip-card-inner">
                  {/* Front of the Card */}
                  <div className="flip-card-front border">
                    <img src={card.imgSrc} alt={card.title} className="card-img" />
                    <h5 className="card-title mt-3" style={{color:'#807DBC',fontWeight:'bold'}}>{card.title}</h5>
                  </div>

                  {/* Back of the Card */}
                  <div className="flip-card-back">
                    <h5 className="card-title "style={{color:'#807DBC',fontWeight:'bold'}}>{card.title}</h5>
                    <p className="card-text "style={{color:'#7470B6'}}>{card.text}</p>
                    <div className="card-technologies">
                      <h6 style={{color:'#807DBC',fontWeight:'bold'}}>Technologies Used:</h6>
                      <div className="tech-icons">
                        {card.technologies.map((tech, idx) => (
                          <span key={idx} className="tech-icon me-2" >
                            {techIcons[tech] || tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a href={card.githubLink} className="btn btn-custom mt-5" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="pagination ">
            <button onClick={handlePrevPage} disabled={currentPage === 1}>&laquo; Previous</button>
            <span style={{color:'#807DBC'}}>Page {currentPage} of {totalPages}</span>
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next &raquo;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
