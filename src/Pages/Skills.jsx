import React from "react";
import { FaReact, FaNodeJs, FaJs, FaGitAlt } from "react-icons/fa";  // Importing icons
import { SiBootstrap, SiVite, SiHtml5, SiCss3 } from "react-icons/si";

import './Skills.css';  // Custom styles

const Skills = () => {
    return (
        <div className="leaves_animation">
            {/* First set of leaves */}
            <div className="leaf">
            <div><FaReact size={75} color="#61DBFB" /></div>
                <div><FaNodeJs size={75} color="#339933" /></div>
                <div><FaJs size={75} color="#F7DF1E" /></div>
                <div><SiBootstrap size={75} color="#7952B3" /></div>
                <div><SiVite size={75} color="#646CFF" /></div>
                <div><FaGitAlt size={75} color="#F1502F" /></div>
                <div><SiHtml5 size={75} color="#E34F26" /></div>
            </div>

            {/* Rotated set of leaves */}
            <div className="leaf leaf1">
                <div><img src="http://www.pngmart.com/files/1/Fall-Autumn-Leaves-Transparent-PNG.png" height="75px" width="75px" alt="Autumn Leaf 1" /></div>
                <div><img src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Pictures-Collage-PNG.png" height="75px" width="75px" alt="Autumn Leaf 2" /></div>
                <div><img src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Clip-Art-PNG.png" height="75px" width="75px" alt="Autumn Leaf 3" /></div>
                <div><img src="http://www.pngmart.com/files/1/Green-Leaves-PNG-File.png" height="75px" width="75px" alt="Green Leaf" /></div>
                <div><img src="http://www.pngmart.com/files/1/Transparent-Autumn-Leaves-Falling-PNG.png" height="75px" width="75px" alt="Falling Leaf" /></div>
                <div><img src="http://www.pngmart.com/files/1/Realistic-Autumn-Fall-Leaves-PNG.png" height="75px" width="75px" alt="Realistic Leaf" /></div>
                <div><img src="http://cdn.clipart-db.ru/rastr/autumn_leaves_025.png" height="75px" width="75px" alt="Autumn Leaf" /></div>
            </div>

            
        </div>
    );
};

export default Skills;
