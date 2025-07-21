import React from 'react';
import { Container } from 'react-bootstrap';

const Experience = () => {
  const experiences = [
    {
      role: 'Web Developer',
      company: 'Freelance',
      duration: 'January 2022 - May 2023',
      responsibilities: [
        'Built responsive websites for small businesses and startups',
        'Worked with clients to understand requirements and deliver solutions',
        'Optimized websites for performance and SEO',
        'Provided maintenance and support for existing projects'
      ]
    }
  ];

  return (
    <section id="experience" className="py-5 bg-light">
      <Container>
        <h2 className="section-title text-center mb-5">Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <span className="duration">{exp.duration}</span>
                <ul className="responsibilities">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experience;