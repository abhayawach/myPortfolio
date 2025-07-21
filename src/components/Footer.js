import React from 'react';
import { Container } from 'react-bootstrap';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="py-4 bg-dark text-white">
      <Container>
        <div className="footer-content text-center">
          <div className="social-links mb-3">
            <a href="https://github.com/abhayawach" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="footer-icon" />
            </a>
            <a href="https://www.linkedin.com/in/abhay-awachar-46248929a" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="footer-icon" />
            </a>
          </div>
          <p className="copyright mb-0">
            &copy; {new Date().getFullYear()} Abhay Awachar. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;