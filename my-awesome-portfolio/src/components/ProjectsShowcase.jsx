import React from 'react';
import { projects } from '../data/projects';
import './projects.css';

const ProjectsShowcase = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p className="section-subtitle">
            Innovative solutions combining AI/ML with full-stack development
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-card__header">
                <span className="project-card__number">0{index + 1}</span>
                <span className="project-card__period">{project.period}</span>
              </div>
              
              <h3 className="project-card__title">{project.title}</h3>
              
              <p className="project-card__description">{project.description}</p>
              
              <div className="project-card__tags">
                {extractTechnologies(project.description).map((tech, idx) => (
                  <span key={idx} className="project-card__tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-card__footer">
                <span className="project-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper function to extract technologies from description
const extractTechnologies = (description) => {
  const techKeywords = [
    'BERT', 'ViT', 'BLIP', 'LLaVA', 'PyTorch', 'HuggingFace', 'React.js',
    'CLIP', 'OCR', 'AWS', 'REST API', 'TensorFlow', 'NLP', 'Computer Vision'
  ];
  
  return techKeywords.filter(tech => 
    description.toLowerCase().includes(tech.toLowerCase())
  ).slice(0, 4);
};

export default ProjectsShowcase;
