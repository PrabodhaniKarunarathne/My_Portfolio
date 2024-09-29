import React, { useState, useEffect } from 'react';
import Sidebar from './Components/Sidebar';
import LoadingSpinner from './Components/LoadingSpinner'; // Adjust paths if necessary
import './App.css'; // Your main CSS file
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Navbar from './Components/NavBar';




const App = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading for 2 seconds before showing the content
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
        <div className="divSection">
        <div>
          <Sidebar/>
        </div>
        <div >
          <main>
            {/* Home Section */}
            <section id="home" className="section">
            <Home/>
            </section>

            {/* About Section */}
            <section id="about" className="section">
             <About/>
            </section>

            {/* Projects Section */}
            <section id="projects" className="section">
              <Projects/>
            </section>

            {/* Skills Section */}
            <section id="skills" className="section">
            
            </section>

            {/* Resume Section */}
            <section id="resume" className="section">
              <h1>Resume</h1>
              <p>Check out my resume to learn more about my experience.</p>
            </section>

            {/* Contact Section */}
            <section id="contact" className="section">
              <h1>Contact</h1>
              <p>Get in touch with me here!</p>
            </section>
          </main>
          </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
