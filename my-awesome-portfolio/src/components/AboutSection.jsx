import React from 'react';
import { about } from '../data/about';
import './about.css';

const AboutSection = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__content">
          <div className="about__text">
            <span className="about__label">About Me</span>
            <h2 className="about__heading">
              Passionate about building
              <span className="text-accent"> intelligent systems</span>
            </h2>
            <div className="about__divider"></div>
            <p className="about__description">{about.summary}</p>
            
            <div className="about__highlights">
              <div className="about__highlight">
                <span className="about__highlight-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                </span>
                <div>
                  <h4>M.S. Computer Science</h4>
                  <p>University of Virginia</p>
                </div>
              </div>
              <div className="about__highlight">
                <span className="about__highlight-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                </span>
                <div>
                  <h4>6+ Years Experience</h4>
                  <p>Building AI Solutions</p>
                </div>
              </div>
              <div className="about__highlight">
                <span className="about__highlight-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </span>
                <div>
                  <h4>Full Stack + ML</h4>
                  <p>End-to-End Development</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about__visual">
            <div className="about__card about__card--1">
              <span className="about__card-number">3.9</span>
              <span className="about__card-label">GPA (Graduate)</span>
            </div>
            <div className="about__card about__card--2">
              <span className="about__card-number">2</span>
              <span className="about__card-label">Publications</span>
            </div>
            <div className="about__card about__card--3">
              <span className="about__card-number">7+</span>
              <span className="about__card-label">Projects Led</span>
            </div>
            <div className="about__decorative-circle"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
