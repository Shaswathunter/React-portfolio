import React from "react";
import "./Services.css";
import image from "./11.png"; // Ensure this file exists in the 'images' folder relative to Navbar.js

function Services() {
  return (
    <div className="services" id="services">
      <img
        src={image}  width={600} ></img>
      <div className="services-content">
        

        <h1>My Awesome Services</h1>
        <p className="services-description">
          I’m currently offering freelance web development services — from
          personal portfolios to fully responsive React applications. Let’s
          collaborate to create something awesome! Open to freelance
          opportunities & collaborations What I offer: Personal/Business
          Portfolio Websites React.js Single Page Applications (SPA) Bug Fixing
          & UI Improvements Website Redesigns Responsive and Dark Mode-enabled
          sites Let’s bring your idea to life! Available for remote work and
          flexible with hourly or project-based pricing What is your career
          goal? My career goals are: Become a Senior Full-Stack Developer,
          specializing in React.js, Node.js, and cloud technologies. Contribute
          to open-source projects like React or Next.js and support the
          community. Take on a Tech Lead role in the future, leading teams to
          build scalable and innovative solutions.
        </p>
              <div className="services-container">
        <h1>Services</h1>
        <div className="service-card">
          <h2>Web Development</h2>
          <p>
            Building responsive and user-friendly websites using HTML, CSS, and
            JavaScript.
          </p>
        </div>
        <div className="service-card">
          <h2>React Development</h2>
          <p>
            Creating dynamic web applications using React.js and its ecosystem.
          </p>
        </div>
        <div className="service-card">
          <h2>UI/UX Design</h2>
          <p>
            Designing intuitive user interfaces and enhancing user experience.
          </p>
        </div>
      </div>
      </div>

    </div>
  );
}
export default Services;
