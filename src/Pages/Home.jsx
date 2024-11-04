import React from 'react';
import profileImage from '../images/my.jpg'; // Adjust the path based on your project structure
import backgroundImg from '../images/—Pngtree—technology network digital diagram geometric_9000623.png';
import './Home.css'; 


const Home = () => {
  return (
    <div className=" background-image-opacity">
      {/* Main Content */}
      <div className="container mt-5">
        
        <div className="row justify-content-center align-items-center text-center ">
        <div className="col-12 col-md-4 col-lg-3 text-center mb-4 mb-md-5 justify-content-start">
            <img 
              src={profileImage}
              alt="Profile" 
              className="rounded-circle img-fluid "
              style={{ width: '300px', height: '300px', objectFit: 'cover' }}
            />
             <p className="mt-3">
              <h6>
            <span className="mt-5" style={{ color: '#4E4AA1' }}>{"<"}SOFTWARE DEVELOPER{" />"}</span> <br></br>
              <span className="mt-5" style={{ color: '#3C3898' }}>{"<"}WEB DEVELOPER{" />"}</span> <br></br>
              <span className="mt-5" style={{ color: '#4E4AA1' }}>{"<"}UI/UX DESIGNER{" />"}</span><br></br>
              <span className="mt-5" style={{ color: '#3C3898' }}>{"<"}GRAPHIC DESIGNER{" />"}</span> 
              </h6>
            </p>    
                           
          </div>
          
          <div className="col-12 col-md-8 col-lg-6 " >


          
            <h4 className="display-5 text-white mb-4 animate__animated animate__fadeInDown" >
              
              <p >
                He<span style={{ color: '#4E4AA1' }}>llo</span> <span style={{ color: '#2F2B7D' }}>I’m</span> <span style={{ color: '#4E4AA1' }}>Pra</span>
                <span style={{ color: '#3C3898' }}>bod</span> 
                <span style={{ color: '#2F2B7D' }}>hani</span> <span style={{ color: '#4E4AA1' }}>Kar</span>
                <span style={{ color: '#2F2B7D' }}>una</span>
                <span style={{ color: '#3C3898' }}>rat</span>
                <span style={{ color: '#4E4AA1' }}>hne</span>

                </p>
            </h4>
            
            <p className="lead text-muted animate__animated animate__fadeInUp justify-content-end" style={{textAlign:'justify',margin:'20px'}}>
            <span style={{ color: '#4E4AA1' }}>“I’m a passionate software engineer with expertise in full-stack web and mobile development, graphic design, and problem-solving. I create impactful software solutions using modern technologies and frameworks, and I’m always eager to explore new challenges and innovate in the field.”</span>
            </p>
          </div>
          </div>
        </div>
      </div>
   
  );
};

export default Home;
