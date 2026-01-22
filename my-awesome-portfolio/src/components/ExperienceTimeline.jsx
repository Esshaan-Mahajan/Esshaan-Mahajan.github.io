import React from 'react';
import { experiences } from '../data/experience';
import './timeline.css';

const ExperienceTimeline = () => {
  // Sort experiences by start date (most recent first)
  const sortedExperiences = [...experiences].sort((a, b) => {
    return new Date(b.startDate) - new Date(a.startDate);
  });

  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="section-header">
          <h2>Professional Experience</h2>
          <p className="section-subtitle">
            Building impactful solutions across AI, ML, and software engineering
          </p>
        </div>

        <div className="timeline">
          {sortedExperiences.map((exp, index) => (
            <div key={index} className="timeline__item">
              <div className="timeline__marker">
                <span className="timeline__dot"></span>
                {index < sortedExperiences.length - 1 && (
                  <span className="timeline__line"></span>
                )}
              </div>
              
              <div className="timeline__content">
                <div className="timeline__header">
                  <span className="timeline__period">{exp.period}</span>
                  {exp.period.includes('Present') && (
                    <span className="timeline__current">Current</span>
                  )}
                </div>
                
                <h3 className="timeline__title">{exp.title}</h3>
                <p className="timeline__company">{exp.company}</p>
                
                <ul className="timeline__details">
                  {exp.details.map((detail, idx) => (
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

export default ExperienceTimeline;
