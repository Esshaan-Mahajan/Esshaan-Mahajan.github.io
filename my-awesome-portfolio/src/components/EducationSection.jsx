import React from 'react';
import { education } from '../data/education';
import './education.css';

const EducationSection = () => {
  return (
    <section className="education" id="education">
      <div className="container">
        <div className="section-header">
          <h2>Education</h2>
          <p className="section-subtitle">
            Academic foundation in Computer Science and AI
          </p>
        </div>

        <div className="education__grid">
          {education.map((edu, index) => (
            <div key={index} className="education__card">
              <div className="education__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
              <div className="education__content">
                <span className="education__period">{edu.period}</span>
                <h3 className="education__degree">{edu.degree}</h3>
                <p className="education__place">{edu.place}</p>
                <ul className="education__details">
                  {edu.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
