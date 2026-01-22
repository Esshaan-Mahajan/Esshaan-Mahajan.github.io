import React from 'react';
import './stats.css';

const StatsHighlights = () => {
  const stats = [
    { 
      value: '6+', 
      label: 'Years of Experience',
      description: 'Building software solutions'
    },
    { 
      value: '2', 
      label: 'Research Publications',
      description: 'In top-tier journals'
    },
    { 
      value: '7+', 
      label: 'Projects Delivered',
      description: 'From concept to deployment'
    },
    { 
      value: '3.9', 
      label: 'Graduate GPA',
      description: 'University of Virginia'
    },
  ];

  return (
    <section className="stats">
      <div className="container">
        <div className="stats__grid">
          {stats.map((stat, index) => (
            <div key={index} className="stats__item">
              <span className="stats__value">{stat.value}</span>
              <span className="stats__label">{stat.label}</span>
              <span className="stats__description">{stat.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsHighlights;
