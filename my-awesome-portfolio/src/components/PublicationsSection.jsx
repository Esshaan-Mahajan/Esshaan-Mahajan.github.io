import React from 'react';
import { publications } from '../data/publications';
import './publications.css';

const PublicationsSection = () => {
  return (
    <section className="publications" id="publications">
      <div className="container">
        <div className="section-header">
          <h2>Research Publications</h2>
          <p className="section-subtitle">
            Contributing to the advancement of AI and algorithms research
          </p>
        </div>

        <div className="publications__list">
          {publications.map((pub, index) => (
            <div key={index} className="publication-card">
              <div className="publication-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14,2 14,8 20,8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10,9 9,9 8,9"/>
                </svg>
              </div>
              <div className="publication-card__content">
                <h3 className="publication-card__title">{pub.title}</h3>
                <p className="publication-card__journal">{pub.journal}</p>
              </div>
              <span className="publication-card__badge">Published</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
