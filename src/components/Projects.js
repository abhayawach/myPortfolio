import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../assets/styles/Projects.module.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Full-featured online store with product catalog, shopping cart, and payment processing using Stripe API.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubLink: 'https://github.com/abhayawach/ecommerce_frontend',
      image: require('../assets/images/image.png')
    },
    {
      title: 'MarkEase Website',
      description: 'Developed a marks management platform for college staff to streamline administrative tasks and track academic records.',
      technologies: ['PHP', 'MYSQL', 'Material UI'],
      githubLink: 'https://github.com/abhayawach/MarkEase',
      image: require('../assets/images/project1.jpeg')
    },
    {
      title: 'Realtime Chat App',
      description: 'Developed a realtime chat application using the MERN stack, providing users with secure authentication, instant messaging, and dynamic group chat creation functionalities.',
      technologies: ['React', 'D3.js', 'Express', 'MongoDB'],
      githubLink: 'https://github.com/abhayawach/realtime_chatapp',
      image: require('../assets/images/project2.jpg')
    },
    {
      title: 'Weather Web',
      description: 'WeatherCast is an intuitive and visually appealing weather forecasting website that delivers real-time weather updates and detailed forecasts for locations worldwide.',
      technologies: ['React', 'Bootstrap', 'Framer Motion'],
      githubLink: 'https://github.com/abhayawach/weatherweb',
      image: require('../assets/images/project4.jpg')
    },
  ];


  return (
    <section id="projects" className={`py-6 ${styles.projectsSection}`}>
      <Container>
        <div className={`text-center mb-6 ${styles.sectionHeader}`}>
          <span className={styles.sectionSubtitle}>My Recent Work</span>
          <h2 className={styles.sectionTitle}>Projects</h2>
          <div className={styles.sectionDivider}></div>
        </div>
        
        <Row className="g-4">
          {projects.map((project, index) => (
            <Col lg={6} key={index}>
              <div className={styles.projectCard}>
                <div className={styles.projectImageWrapper}>
                  <img src={project.image} alt={project.title} className={styles.projectImage} />
                  <div className={styles.projectOverlay}>
                    <div className={styles.projectLinks}>
                      <a 
                        href={project.githubLink} 
                        className={styles.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub />
                      </a>
                      {/* <a 
                        href={project.demoLink} 
                        className={styles.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt />
                      </a> */}
                    </div>
                  </div>
                </div>
                <div className={styles.projectContent}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <div className={styles.projectTechnologies}>
                    {project.technologies.map((tech, i) => (
                      <span key={i} className={styles.techBadge}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        
        <div className="text-center mt-5">
          <a
            href="#"
            className={`btn btn-primary btn-lg px-4 py-2 rounded-pill ${styles.viewAllBtn}`}
          >
            View All Projects
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Projects;