import React from "react";
import "./Header.css";

import image2 from "./3.png";
import Typical from "react-typical";
function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <h1>Hi ! I'm</h1>
        <h2 className="fullname">Shaswat Gautam</h2>
        <h2 className="typical">
          I'm a {""}
          <Typical
            steps={["Frontend Developer ✅", 3000, "React Developer ⚛️",2000    ]}
            loop={Infinity}
            wrapper="b"
            
          />
        </h2>
            
        <p className="description">
         Frontend Web Developer | React.js
          Enthusiast | Freelancer  a passionate web
          developer with a strong focus on frontend development and user
          experience. Developed 35+ projects using HTML, CSS, JavaScript Built a
          personal React.js portfolio with Dark Mode & responsive UI Experienced
          in creating interactive web apps like the 2048 Game
        </p>
        <button className="btnHire">Hire Me</button>
        <h2 className="typical">
         Learning {""}
          <Typical
            steps={["Back-End 💻", 3000, "Node.js", 3000,"Next.js",3000, "Express.js", 3000   ]}
            loop={Infinity}
            wrapper="b"
                
            
          />
        </h2>
      </div>
      <div className="image">
        <img src={image2} alt="Logo" width={800} height={830} />
      </div>
    </div>
  );
}

export default Header;
