import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const cardData = [
    { imgSrc: './src/images/Naviguide.png', title: 'Card 1 Title', text: 'This is the first card of the carousel.' },
    { imgSrc: './src/images/hotelMS.png', title: 'Card 2 Title', text: 'This is the second card of the carousel.' },
    { imgSrc: './src/images/maths.png', title: 'Card 3 Title', text: 'This is the third card of the carousel.' },
    { imgSrc: './src/images/foodMS.png', title: 'Card 4 Title', text: 'This is the fourth card of the carousel.' },
    { imgSrc: 'your-carousel-image-5', title: 'Card 5 Title', text: 'This is the fifth card of the carousel.' },
    { imgSrc: 'your-carousel-image-6', title: 'Card 6 Title', text: 'This is the sixth card of the carousel.' },
    { imgSrc: 'your-carousel-image-7', title: 'Card 7 Title', text: 'This is the seventh card of the carousel.' },
    { imgSrc: 'your-carousel-image-8', title: 'Card 8 Title', text: 'This is the eighth card of the carousel.' },
    // { imgSrc: 'your-carousel-image-9', title: 'Card 9 Title', text: 'This is the ninth card of the carousel.' },
    // { imgSrc: 'your-carousel-image-10', title: 'Card 10 Title', text: 'This is the tenth card of the carousel.' },
    // { imgSrc: 'your-carousel-image-11', title: 'Card 11 Title', text: 'This is the eleventh card of the carousel.' },
    // { imgSrc: 'your-carousel-image-12', title: 'Card 12 Title', text: 'This is the twelfth card of the carousel.' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3;
  const [animationDirection, setAnimationDirection] = useState('');

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardData.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(cardData.length / cardsPerPage);

  const changePage = (newPage) => {
    if (newPage > currentPage) {
      setAnimationDirection('slide-left'); // Forward animation
    } else {
      setAnimationDirection('slide-right'); // Backward animation
    }

    setCurrentPage(newPage);

    // Clear the animation class after the animation duration (0.5s)
    setTimeout(() => {
      setAnimationDirection('');
    }, 500);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      changePage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      changePage(currentPage - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    changePage(pageNumber);
  };

  return (
    <div className="container mt-5">
      {/* Card Container */}
      <div className={`row row-cols-1 row-cols-md-3 g-4 card-container ${animationDirection}`}>
        {currentCards.map((card, index) => (
          <div className="col" key={index}>
            <div className="flip-card">
              <div className="flip-card-inner">
                {/* Front of the card */}
                <div className="flip-card-front">
                  <div
                    className="card h-100 border-success animated-border"
                    style={{
                      backgroundColor: 'black',
                      borderRadius: '0.5rem',
                      borderWidth: '2px',
                      height: '500px',
                    }}
                  >
                    <img src={card.imgSrc} className="card-img-top" alt={card.title} />
                    <div className="card-body">
                      <h5 className="card-title text-success">{card.title}</h5>
                    </div>
                  </div>
                </div>
                {/* Back of the card */}
                <div className="flip-card-back">
                  <div
                    className="card h-100 border-success animated-border"
                    style={{
                      backgroundColor: 'rgba(40, 167, 69, 0.3)',
                      borderRadius: '0.5rem',
                      borderWidth: '2px',
                      height: '500px',
                    }}
                  >
                    <div className="card-body">
                      <h5 className="card-title text-white">{card.title}</h5>
                      <p className="card-text">{card.text}</p>
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
            <button
              className="page-link"
              style={{ backgroundColor: 'green', color: 'white' }}
              onClick={handlePrevPage}
            >
              Previous
            </button>
          </li>
          {Array.from({ length: totalPages }, (_, idx) => (
            <li key={idx + 1} className={`page-item ${currentPage === idx + 1 ? 'active' : ''}`}>
              <button
                className="page-link"
                style={{
                  backgroundColor: currentPage === idx + 1 ? 'green' : '',
                  color: currentPage === idx + 1 ? 'white' : 'green',
                }}
                onClick={() => handlePageClick(idx + 1)}
              >
                {idx + 1}
              </button>
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button
              className="page-link"
              style={{ backgroundColor: 'green', color: 'white' }}
              onClick={handleNextPage}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Projects;
