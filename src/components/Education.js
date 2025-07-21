import React from 'react';
import { Container } from 'react-bootstrap';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Computer Engineering',
      institution: 'Vishwakarma Institute Of Technology',
      year: '2023 - 2026',
      description: 'Specialized in Software Engineering and Web Technologies. Relevant coursework: Data Structures, Algorithms, Database Systems, Web Development, Computer Networks.'
    },
    {
      degree: 'Diploma in Computer Engineering',
      institution: 'Government Polytechnic Amravati',
      year: '2020 - 2023',
      description: 'Graduated with honors. Focused on Mathematics and Computer Science.'
    }
  ];

  return (
    <section id="education" className="py-5">
      <Container>
        <h2 className="section-title text-center mb-5">Education</h2>
        <div className="education-container">
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-header">
                <h3>{edu.degree}</h3>
                <span className="year">{edu.year}</span>
              </div>
              <h4>{edu.institution}</h4>
              <p>{edu.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Education;