
import image from "./ii.png"; // Ensure this file exists in the 'images' folder relative to Navbar.js

import { useScroll, animated } from '@react-spring/web'



function Footer() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={image} alt="Logo"  width={80}/>
      </div>
      <div className="nav-items">
       <h2>Developed By @ Shaswat Gautam</h2>
      </div>
      <div className="logo">
        <img src={image} alt="Logo"  width={80}/>
      </div>
      
    </div>

  );
}

export default Footer;
