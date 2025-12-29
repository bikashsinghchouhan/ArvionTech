import React from 'react';
import aboutImage from '../assets/about-us-team.png'; // Import the new image
import '../csssection/AboutUs.css'; // Make sure to create this CSS file
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="about-title">About Arvion Technologies</h1>
          <p className="about-subtitle">
            Driving Innovation, Empowering Businesses.
          </p>
          <p className="about-description">
            Founded on the principle of simplifying complex business processes, Arvion Technologies is a leader in providing bespoke ERP and Outsourcing solutions. Our mission is to empower organizations by leveraging cutting-edge technology to enhance efficiency, foster growth, and ensure compliance.
          </p>
          <p className="about-description">
            Our team of dedicated experts brings together years of industry experience and a passion for problem-solving. We believe in building strong partnerships with our clients, understanding their unique challenges, and delivering solutions that not only meet but exceed their expectations.
          </p>
        </motion.div>
        <motion.div 
          className="about-image-wrapper"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src={aboutImage} alt="The Arvion Technologies Team" className="about-image" />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
