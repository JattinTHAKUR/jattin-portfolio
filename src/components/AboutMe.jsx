import React from 'react';
import './AboutMe.scss'; // Import the SCSS file for styling

const AboutMe = () => {
  return (
    <section id="about" className="about-me">
      <div className="container">
        <div className="text-container">
          <h2>About Me</h2>
          <p>
            Hi, I'm Jattin Kumar, a <strong style={{ color: '#f75c03' }}>Full-Stack Developer</strong> based in Delhi, India.
            When I'm not coding, you'll find me on the open road, exploring new destinations on my <strong style={{ color: '#f75c03' }}>bike</strong> and embracing new experiences.<br></br>
            Leading a winning team in a <strong style={{ color: "#f75c03", textDecoration: 'uppercase' }}>24-hour hackathon</strong> was a rewarding experience, and In both my professional and adventurous pursuits, I'm always eager to take on the next challenges.
          </p>
          <p>
            Proficient in a range of web technologies, including <strong style={{ color: '#f75c03' }}>HTML/CSS, JavaScript, React.Js, Node.Js , MongoDB.</strong> and responsive design principles. Solid foundation in <strong style={{ color: '#f75c03' }}>backend technologies</strong> and eager to contribute adaptability and problem-solving abilities to <strong style={{ color: '#f75c03' }}>dynamic development projects.</strong>
          </p>
          <a href="../assets/JattinResume.pdf" download className="download-cv-button">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
