import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import styles from '../assets/styles/About.module.css';
import { FaUserTie, FaGraduationCap, FaMapMarkerAlt, FaAward } from 'react-icons/fa';

const About = () => {
  const stats = [
    { value: '20+', label: 'Projects Completed', icon: <FaAward /> },
    { value: '2', label: 'Years Experience', icon: <FaUserTie /> },
    { value: '100%', label: 'Client Satisfaction', icon: <FaGraduationCap /> },
    { value: '10K+', label: 'Lines of Code', icon: <FaMapMarkerAlt /> }
  ];

  const skills = [
    { name: 'React/Next.js', level: 95 },
    { name: 'Node.js/Express', level: 90 },
    { name: 'MongoDB', level: 85 },
    { name: 'JavaScript/TypeScript', level: 95 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'Git/GitHub', level: 85 }
  ];

  return (
    <section id="about" className={`py-6 ${styles.aboutSection}`}>
      <Container>
        <div className={`text-center mb-6 ${styles.sectionHeader}`}>
          <span className={styles.sectionSubtitle}>Get To Know More</span>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <div className={styles.sectionDivider}></div>
        </div>
        
        <Row className="align-items-center g-5">
          <Col lg={5} className={styles.aboutImageCol}>
            <div className={styles.aboutImageWrapper}>
              <div className={styles.aboutImage}></div>
              <div className={styles.experienceBadge}>
                <span className={styles.years}>2+</span>
                <span className={styles.text}>Years Experience</span>
              </div>
            </div>
          </Col>
          
          <Col lg={7}>
            <div className={styles.aboutContent}>
              <div className={`mb-5 ${styles.aboutTabs}`}>
                {['Skills', 'Education'].map((tab, index) => (
                  <button 
                    key={index}
                    className={`${styles.tabBtn} ${index === 0 ? styles.active : ''}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              
              <h3 className={`mb-4 ${styles.aboutHeading}`}>
                Full Stack Developer specializing in MERN Stack applications
              </h3>
              
              <p className={`mb-4 ${styles.aboutText}`}>
                I am an experienced web developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js) and proficient in MySQL and Java. I am currently working as a freelancer, delivering custom websites that meet client needs. My focus is on building scalable, high-performance web applications and ensuring client satisfaction through quality solutions.
              </p>
              
              <div className={`mb-5 ${styles.skillsProgress}`}>
                {skills.map((skill, index) => (
                  <div className={`mb-3 ${styles.skillItem}`} key={index}>
                    <div className={`mb-2 ${styles.skillHeader}`}>
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <ProgressBar 
                      now={skill.level} 
                      className={styles.skillProgress}
                    />
                  </div>
                ))}
              </div>
              
              <div className={styles.statsGrid}>
                <Row>
                  {stats.map((stat, index) => (
                    <Col sm={6} key={index}>
                      <div className={styles.statCard}>
                        <div className={styles.statIcon}>
                          {stat.icon}
                        </div>
                        <div className={styles.statContent}>
                          <h3 className={styles.statValue}>{stat.value}</h3>
                          <p className={styles.statLabel}>{stat.label}</p>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;