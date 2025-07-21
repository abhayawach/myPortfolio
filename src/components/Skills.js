import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../assets/styles/Skills.module.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skills = () => {
  const technicalSkills = [
    { name: 'JavaScript', level: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#F0DB4F' },
    { name: 'TypeScript', level: 88, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#3178C6' },
    { name: 'React', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB' },
    { name: 'Node.js', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#68A063' },
    { name: 'MongoDB', level: 82, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: '#4DB33D' },
    { name: 'Git/GitHub', level: 87, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', color: '#181717' },
  ];

  return (
    <section id="skills" className={`py-5 ${styles.skillsSection}`}>
      <Container>
        <h2 className={`text-center mb-5 ${styles.sectionTitle}`}>My <span className={styles.highlight}>Technical</span> Skills</h2>
        
        <div className={styles.skillsIntro}>
          <p>Here are the technologies I specialize in. These skills power my projects and enable me to deliver high-quality solutions.</p>
        </div>

        <Row className="g-4 justify-content-center">
          {technicalSkills.map((skill, index) => (
            <Col lg={4} md={6} key={index}>
              <div className={styles.skillCard}>
                <div className={styles.skillHeader}>
                  <div className={styles.iconWrapper} style={{ backgroundColor: skill.color }}>
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className={styles.skillIcon}
                      onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src = 'https://via.placeholder.com/50';
                      }}
                    />
                  </div>
                  <h3 className={styles.skillName}>{skill.name}</h3>
                </div>
                
                <div className={styles.progressContainer}>
                  <CircularProgressbar
                    value={skill.level}
                    text={`${skill.level}%`}
                    styles={buildStyles({
                      pathColor: skill.color,
                      textColor: '#333',
                      trailColor: '#f0f0f0',
                      textSize: '16px',
                      pathTransitionDuration: 1.5,
                    })}
                  />
                </div>

                <div className={styles.skillImpact}>
                  {getSkillImpact(skill.name)}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

// Helper function to describe skill impact
const getSkillImpact = (skillName) => {
  const impacts = {
    'JavaScript': 'Core foundation for all my web development projects',
    'TypeScript': 'Ensures type safety and better code maintainability',
    'React': 'Powering dynamic and responsive user interfaces',
    'Node.js': 'Backend development and server-side applications',
    'MongoDB': 'NoSQL database solutions for scalable applications',
    'Git/GitHub': 'Version control and collaborative development'
  };
  return <p className={styles.impactText}>{impacts[skillName]}</p>;
};

export default Skills;