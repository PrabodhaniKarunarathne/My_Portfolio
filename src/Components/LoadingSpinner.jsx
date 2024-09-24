import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import './LoadingSpinner.css'; // Correct path and filename


const LoadingSpinners = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading with a timeout or replace with actual loading logic
    setTimeout(() => {
      setLoading(false); // Stop loading after 2 seconds
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading-container">
          <div>
            
            <div class="spinner-grow text-light mx-1"></div>
            <div class="spinner-grow text-secondary mx-1"></div>
            <div class="spinner-grow text-muted mx-1"></div>
            <div class="spinner-grow text-info mx-1"></div>
            <div class="spinner-grow text-primary mx-1"></div>
            <div class="spinner-grow text-success mx-1"></div>
            <div class="spinner-grow text-dark mx-1"></div>
           
          </div>
        </div>
      ) : (
        <div className="container mt-3">
         {/*  page content goes here */}
        </div>
      )}
    </>
  );
};

export default LoadingSpinners;
