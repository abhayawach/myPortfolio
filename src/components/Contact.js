import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../assets/styles/Contact.module.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className={`py-5 ${styles.contactSection}`}>
      <Container>
        <div className="text-center mb-5">
          <h2 className={styles.sectionTitle}>Contact Me</h2>
          <p className={styles.sectionSubtitle}>
            Get in touch—let's build smarter solutions together!
          </p>
        </div>
        
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className={styles.contactInfoContainer}>
              {/* Address */}
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3 className={styles.contactLabel}>ADDRESS</h3>
                  <p className={styles.contactText}>Pune<br />41048</p>
                </div>
              </div>
              
              {/* Phone */}
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <FaPhone />
                </div>
                <div>
                  <h3 className={styles.contactLabel}>CONTACT NUMBER</h3>
                  <p className={styles.contactText}>+91 9022647996</p>
                </div>
              </div>
              
              {/* Email */}
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <FaEnvelope />
                </div>
                <div>
                  <h3 className={styles.contactLabel}>EMAIL ADDRESS</h3>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=abhayawachar180@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactText}
                  >
                    abhayawachar180@gmail.com
                  </a>
                </div>

              </div>
            </div>
          </Col>
        </Row>
        
        <div className={`text-center mt-5 ${styles.footer}`}>
          <p>© Copyright All Rights Reserved</p>
          <p>Designed by Abhay</p>
        </div>
      </Container>
    </section>
  );
};

export default Contact;