import React, { useState, useEffect } from 'react';
import Sidebar from './Components/Sidebar';
import LoadingSpinner from './Components/LoadingSpinner'; // Adjust paths if necessary
import './App.css'; // Your main CSS file
import Home from './Pages/Home';

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
          <Sidebar />
        </div>
        <div >
          <main>
            {/* Home Section */}
            <section id="home" className="section">
            <Home/>
            </section>

            {/* About Section */}
            <section id="about" className="section">
              <h1>About</h1>
              <p>This is the About section where you can learn more about me.</p>
            </section>

            {/* Projects Section */}
            <section id="projects" className="section">
              <h1>Projects</h1>
              <p>Here are some of my featured projects.</p>
            </section>

            {/* Skills Section */}
            <section id="skills" className="section">
              <h1>Skills</h1>
              <p>These are the skills I have acquired over the years.</p>
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
