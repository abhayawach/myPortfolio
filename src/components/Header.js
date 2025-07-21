import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import styles from '../assets/styles/Header.module.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaCode, FaLaptopCode } from 'react-icons/fa';

const Header = () => {
  return (
    <header id="home" className={styles.heroSection}>
      <Navbar expand="lg" fixed="top" className={`${styles.navbarGlass} py-3`}>
        <Container>
          <Navbar.Brand href="#home" className={`text-white fw-bold d-flex align-items-center ${styles.brand}`}>
            <span className={styles.brandIcon}><FaCode /></span>
            <span className={styles.brandText}>MY PORTFOLIO</span>
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0">
            <span className={styles.navbarTogglerIcon}></span>
          </Navbar.Toggle>
          
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <div className={`navbar-nav ${styles.navLinks}`}>
              {['about', 'skills', 'projects', 'experience', 'education', 'contact'].map((item) => (
                <a key={item} className={`nav-link mx-2 ${styles.navLink}`} href={`#${item}`}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className={styles.heroContent}>
        <Container className="text-center">
          <div className={`${styles.heroAvatar} mb-4`}>
            <div className={styles.avatarImage}></div>
            <div className={`${styles.techBubble} ${styles.react}`}><i className="fab fa-react"></i></div>
            <div className={`${styles.techBubble} ${styles.node}`}><i className="fab fa-node-js"></i></div>
            <div className={`${styles.techBubble} ${styles.js}`}><i className="fab fa-js-square"></i></div>
          </div>
          
          <h1 className={`display-4 fw-bold mb-3 ${styles.heroTitle}`}>
            Hi, I'm <span className={styles.primaryText}>Abhay Awachar</span>
          </h1>
          
          <h2 className={`fs-3 mb-4 ${styles.heroSubtitle}`}>
            <FaLaptopCode className="me-2" />
            Full Stack MERN Developer
          </h2>
          
          <p className={`lead mb-5 ${styles.heroDescription}`}>
            Building scalable web applications with modern technologies and clean code architecture.
          </p>
          
          <div className="d-flex justify-content-center gap-3">
            <Button 
              variant="primary" 
              size="lg" 
              className={`px-4 py-2 rounded-pill shadow ${styles.primaryBtn}`}
              href="#projects"
            >
              View My Work
            </Button>
            <Button 
              variant="outline-light" 
              size="lg" 
              className={`px-4 py-2 rounded-pill shadow ${styles.outlineBtn}`}
              href="#contact"
            >
              Contact Me
            </Button>
          </div>
          
          <div className={`mt-5 ${styles.socialIcons}`}>
            <a href="https://github.com/abhayawach" target="_blank" className={styles.socialIcon}><FaGithub /></a>
            <a href="https://www.linkedin.com/in/abhay-awachar-46248929a" target="_blank" className={styles.socialIcon}><FaLinkedin /></a>
            {/* <a href="https://twitter.com" className={styles.socialIcon}><FaTwitter /></a> */}
          </div>
        </Container>
      </div>
      
      <div className={styles.scrollDown}>
        <div className={styles.scrollWheel}></div>
      </div>
    </header>
  );
};

export default Header;