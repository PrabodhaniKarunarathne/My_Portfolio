import React, { useState, useEffect } from 'react';
import Sidebar from './Components/Sidebar';
import LoadingSpinner from './Components/LoadingSpinner'; // Adjust paths if necessary
import './App.css'; // Your main CSS file
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Resume from './Pages/Resume';




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

            
            {/* Skills Section */}
            <section id="skills" className="section">
            <Skills/>
            </section>

            {/* Projects Section */}
            <section id="projects" className="section">
              <Projects/> 
            </section>

            {/* Resume Section */}
            <section id="resume" className="section">
              <Resume/>
            </section>

            {/* Contact Section */}
            <section id="contact" className="section">
              <Contact/>
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
