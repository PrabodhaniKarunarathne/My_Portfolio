import React from "react";
import {  FaReact, FaNodeJs, FaJs, FaGitAlt, FaJava, FaPython, FaPhp, FaDocker, FaGithub} from "react-icons/fa";
import {  SiCsharp, SiKotlin, SiSpring, SiDotnet, SiOracle, SiMysql, SiMongodb,
  SiHtml5, SiCss3, SiTailwindcss, SiAdobephotoshop, SiAdobeillustrator,
  SiCoreldraw, SiAdobexd, SiFigma,SiBootstrap, SiVite} from "react-icons/si";

import './Skills.css';  // Custom styles

const Skills = () => {
    const parallaxBackgroundStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          url('./Images/—Pngtree—technology network digital diagram geometric_9000623.png')
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
          1400px,
          800px,
          500px 200px,
          1000px,
          400px 260px
        `,
        opacity: 0.1,  // Reduce opacity of the background image
        // animation: 'parallaxAnimation 10s infinite linear',
        zIndex: 1  // Keep background behind the content
      };

      const containerStyle = {
        position: 'relative',
        zIndex: 10, // Higher z-index to ensure it's in front
        padding:'5% 0 1% 0'
    };

    const cardStyle = {
        background: 'rgba(12, 11, 56, 0.5)', // Semi-transparent background
        color: 'white',
        boxShadow: '0 4px 8px rgba(60, 56, 152, 0.9)', // Add shadow to lift the cards
        borderRadius: '10px',
        margin:'0',
        padding:'2%',
        bordercolor:'#7470B6'
       
    };



    return (
        <div className="leaves_animation" >
            {/* First set of leaves */}
            <div style={parallaxBackgroundStyle}></div>
            <div className="leaf">
                <div><FaReact size={75} color="#4E4AA1" /></div>
                <div><FaNodeJs size={75} color="#3C3898" /></div>
                <div><FaJs size={75} color="#2F2B7D" /></div>
                <div><SiBootstrap size={75} color="#211E61" /></div>
                <div><SiVite size={75} color="#4E4AA1" /></div>
                <div><FaGitAlt size={75} color="#3C3898" /></div>
                <div><SiHtml5 size={75} color="#2F2B7D" /></div>
                <div><FaGithub size={75} color="#211E61" /></div>
                <div><FaDocker size={75} color="#4E4AA1" /></div>
                <div><FaPhp size={75} color="#3C3898" /></div>
                <div><FaPython size={75} color="#2F2B7D" /></div>
                <div>< FaJava size={75} color="#211E61" /></div>
                <div><SiCsharp size={75} color="#4E4AA1" /></div>
                <div><SiKotlin size={75} color="#3C3898" /></div>
            </div>

            {/* Rotated set of leaves */}
            <div className="leaf leaf1">
            <div><SiSpring size={75} color="#2F2B7D" /></div>
                <div><SiDotnet size={75} color="#211E61" /></div>
                <div><SiOracle size={75} color="#4E4AA1" /></div>
                <div><SiMysql size={75} color="#3C3898" /></div>
                <div><SiMongodb size={75} color="#2F2B7D" /></div>
                <div><SiCss3 size={75} color="#211E61" /></div>
                <div><SiTailwindcss size={75} color="#4E4AA1" /></div>
                <div><SiAdobephotoshop size={75} color="#3C3898" /></div>
                <div><SiAdobeillustrator size={75} color="#2F2B7D" /></div>
                <div><SiCoreldraw size={75} color="#211E61" /></div>
                <div><SiAdobexd size={75} color="#4E4AA1" /></div>
                <div>< SiFigma size={75} color="#3C3898" /></div>
                
            </div>
            <div className="container " style={containerStyle}>
              <h1 className="text-white" style={{fontWeight:'bold'}}>My <span style={{color:'#4E4AA1'}}>Skills</span> </h1>
              <div className="row mt-3">
                    <div className="col-md-6">
                    <div className="card border mt-3 " style={cardStyle}>
                    <h5 style={{textAlign:'start',fontWeight:'bold',color:'#807DBC'}}>Programming Languages</h5>
                    <p style={{textAlign:'start',color:'#7470B6'}}><b>Core Languages:</b> JavaScript, Python, Java, PHP, C#, Kotlin <br></br> <b>Markup & Styling:</b> HTML, CSS</p>
                    </div>              
                    </div>

                    <div className="col-md-6">
                    <div className="card border mt-3 " style={cardStyle}>
                    <h5 style={{textAlign:'start',color:'#807DBC',fontWeight:'bold'}}>Frontend Frameworks & Libraries</h5>
                    <p style={{textAlign:'start',color:'#7470B6'}}> <b>JavaScript Frameworks:</b> React, Vite <br></br><b>Styling Libraries:</b> Bootstrap, TailwindCSS  </p>
                    </div>
                    </div>
              </div>

              <div className="row mt-3">
                  <div className="col-md-6">
                  <div className="card border mt-3 " style={cardStyle}>
                  <h5 style={{textAlign:'start',color:'#807DBC',fontWeight:'bold'}}>Backend Frameworks & Libraries</h5>
                  <p style={{textAlign:'start',color:'#7470B6'}}><b>Core Backend:</b> Node.js, .NET, Spring (Java)  <br></br><b>Data Handling:</b> MySQL, MongoDB, Oracle</p>
                  </div>
                  </div>

                  <div className="col-md-6">
                  <div className="card border mt-3 " style={cardStyle}>
                  <h5 style={{textAlign:'start',color:'#807DBC',fontWeight:'bold'}}>Design & Prototyping Tools</h5>
                  <p style={{textAlign:'start',color:'#7470B6'}}><b>Design:</b> Adobe Photoshop, Adobe Illustrator, CorelDraw  <br></br><b>UI/UX Prototyping:</b> Adobe XD, Figma</p>
                  </div>
                  </div>
              </div>

              <div className="row mt-3">
                  <div className="col-md-6 offset-md-3">
                  <div className="card border mt-3 " style={cardStyle}>
                  <h5 style={{textAlign:'start',color:'#807DBC',fontWeight:'bold'}}>DevOps & Tools</h5>
                  <p style={{textAlign:'start',color:'#7470B6'}}><b>Version Control:</b> Git, GitHub<br></br><b>Containerization:</b> Docker <br></br><b>Build Tools:</b> Vite</p>
                  </div>                  
                  </div>
                  </div>
              </div>

            
        </div>
    );
};

export default Skills;
